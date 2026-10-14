"use client";

import { Fragment, useEffect, useRef, useState, type FormEvent } from "react";
import { assistant, site } from "./content";

type Turn = { role: "user" | "assistant"; content: string };

// Turns the contact address into a link wherever it appears in an answer.
function withEmailLinks(text: string) {
  return text.split(site.contactEmail).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>}
      {part}
    </Fragment>
  ));
}

// A small round button in the bottom right corner that opens a short
// conversation panel. The conversation lives only in this browser tab.
export function Chat() {
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [draft, setDraft] = useState("");
  const [waiting, setWaiting] = useState(false);
  const log = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight });
  }, [turns, waiting]);

  useEffect(() => {
    if (!open) return;
    input.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function ask(question: string) {
    const text = question.trim();
    if (!text || waiting) return;
    const next: Turn[] = [...turns, { role: "user", content: text }];
    setTurns(next);
    setDraft("");
    setWaiting(true);
    let answer = assistant.error;
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await response.json();
      if (typeof data?.reply === "string") answer = data.reply;
    } catch {
      // Keep the friendly fallback answer.
    }
    setTurns([...next, { role: "assistant", content: answer }]);
    setWaiting(false);
  }

  const submit = (event: FormEvent) => {
    event.preventDefault();
    ask(draft);
  };

  return (
    <div className="chat" data-open={open}>
      {open && (
        <section className="chat-panel" role="dialog" aria-label={assistant.title}>
          <header className="chat-head">
            <p className="chat-title">{assistant.title}</p>
            <button type="button" className="chat-close" onClick={() => setOpen(false)} aria-label={assistant.close}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M6.4 4.3 12 9.9l5.6-5.6 2.1 2.1-5.6 5.6 5.6 5.6-2.1 2.1-5.6-5.6-5.6 5.6-2.1-2.1 5.6-5.6-5.6-5.6z" />
              </svg>
            </button>
          </header>

          <div className="chat-log" ref={log} aria-live="polite">
            <p className="chat-msg chat-msg-assistant">{assistant.greeting}</p>
            {turns.length === 0 && (
              <div className="chat-suggestions">
                {assistant.suggestions.map((s) => (
                  <button key={s} type="button" onClick={() => ask(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
            {turns.map((turn, i) => (
              <p key={i} className={`chat-msg chat-msg-${turn.role}`}>
                {turn.role === "assistant" ? withEmailLinks(turn.content) : turn.content}
              </p>
            ))}
            {waiting && (
              <p className="chat-msg chat-msg-assistant chat-waiting" aria-label={assistant.thinking}>
                <span />
                <span />
                <span />
              </p>
            )}
          </div>

          <form className="chat-form" onSubmit={submit}>
            <textarea
              ref={input}
              rows={1}
              value={draft}
              maxLength={800}
              placeholder={assistant.placeholder}
              aria-label={assistant.placeholder}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  ask(draft);
                }
              }}
            />
            <button type="submit" className="chat-send" disabled={!draft.trim() || waiting} aria-label={assistant.send}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M12 4.5 20 13.2h-5.2V20H9.2v-6.8H4z" />
              </svg>
            </button>
          </form>
          <p className="chat-note">{assistant.note}</p>
        </section>
      )}

      <button
        type="button"
        className="chat-toggle"
        aria-expanded={open}
        aria-label={open ? assistant.close : assistant.open}
        title={open ? assistant.close : assistant.open}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M12 3.5c-5 0-9 3.4-9 7.7 0 2.3 1.2 4.4 3.1 5.8L5.4 20.5l4.3-2.2c.7.2 1.5.3 2.3.3 5 0 9-3.4 9-7.6S17 3.5 12 3.5z" />
        </svg>
      </button>
    </div>
  );
}
