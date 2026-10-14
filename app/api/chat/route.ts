import Anthropic from "@anthropic-ai/sdk";
import { assistant } from "../../content";
import { brief } from "./brief";

// Answers questions from the chat bubble. Nothing is stored: each request
// carries the short conversation so far, and it is forgotten once answered.

const MAX_TURNS = 12;
const MAX_CHARS = 800;

// Simple per visitor limit, kept in memory. Each server instance counts on
// its own, which is enough to stop one visitor from running up the bill.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 20;
const recent = new Map<string, number[]>();

function allow(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_REQUESTS) {
    recent.set(ip, hits);
    return false;
  }
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) {
    for (const [key, times] of recent) {
      if (times.every((t) => now - t >= WINDOW_MS)) recent.delete(key);
    }
  }
  return true;
}

type Turn = { role: "user" | "assistant"; content: string };

function parseTurns(body: unknown): Turn[] | null {
  const messages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(messages) || messages.length === 0) return null;
  const turns = messages.slice(-MAX_TURNS);
  // The conversation must start with the visitor and alternate from there.
  if (turns[0]?.role !== "user") turns.shift();
  for (const [i, turn] of turns.entries()) {
    const role = i % 2 === 0 ? "user" : "assistant";
    if (turn?.role !== role || typeof turn.content !== "string") return null;
    const content = turn.content.trim();
    if (!content || content.length > MAX_CHARS) return null;
  }
  if (turns.length % 2 === 0) return null;
  return turns.map((t) => ({ role: t.role, content: t.content.trim() }));
}

const reply = (text: string, status = 200) => Response.json({ reply: text }, { status });

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) return reply(assistant.error, 503);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allow(ip)) return reply(assistant.busy, 429);

  const turns = parseTurns(await request.json().catch(() => null));
  if (!turns) return reply(assistant.error, 400);

  try {
    const client = new Anthropic();
    const response = await client.beta.messages.create({
      model: process.env.ASSISTANT_MODEL || "claude-opus-5-5",
      max_tokens: 2000,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      cache_control: { type: "ephemeral" },
      system: brief,
      messages: turns,
    });

    const text = response.content
      .flatMap((block) => (block.type === "text" ? [block.text] : []))
      .join("")
      .replace(/\s*\u2014\s*/g, ", ")
      .trim();

    if (response.stop_reason === "refusal" || !text) return reply(assistant.error);
    return reply(text);
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) return reply(assistant.busy, 429);
    console.error("Chat request failed", error instanceof Anthropic.APIError ? error.status : error);
    return reply(assistant.error, 502);
  }
}
