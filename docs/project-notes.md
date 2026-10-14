# Project notes

## What it is

18Forge. For now the repo holds a placeholder landing page while the
positioning is decided.

## Stack

- Next.js 16 (App Router), TypeScript, plain CSS (`app/globals.css`)
- Hosting: Vercel, team 18Forge (`18-forge`), project `18forge`
- Planned: Supabase for database, auth and storage (connected to the Vercel
  team, not used by the code yet)

## Decisions

- 2026-10-14: No `vercel.json`. Vercel's Next.js defaults build the site
  correctly.
- 2026-10-14: Node.js pinned to 20.9 or newer through `engines` in
  `package.json`, the minimum for Next.js 16.
- 2026-10-14: Only `main` should be built on Vercel. Preview builds of other
  branches are to be skipped to keep build counts low.

## Open items

- Turn off preview builds for branches other than `main` on Vercel (handled
  in the Vercel import work; preview builds currently run on every PR).
- Replace placeholder copy and the contact address in `app/content.ts`.
- Wire up Supabase once there is content to store.
