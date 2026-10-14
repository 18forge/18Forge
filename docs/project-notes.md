# Project notes

## What it is

18 Forge. For now, a placeholder "coming soon" landing page.

## Stack

- Next.js (App Router), TypeScript
- Hosted on Vercel, team 18Forge, project `18forge`, production at https://18forge.vercel.app
- Supabase, connected through the Vercel integration. Its variables are set on preview and production.

## Decisions

- 2026-10-14: Vercel project created in the 18Forge team and linked to Supabase.
- 2026-10-14: Browser tab title set to "18 Forge".
- 2026-10-14: Vercel builds main only (vercel.json), no preview builds for other branches.
- 2026-10-14: Merging to main deploys to production, so merges only happen when Sacha says go.

## Open items

- Waiting to go live: PR #2 (tab title).
- Real landing page copy and contact email (placeholders in `app/content.ts`).
