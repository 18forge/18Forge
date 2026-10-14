# Project notes

## What it is

18 Forge. A single landing page for the agency, contact agency@18forge.com.

## Stack

- Next.js (App Router), TypeScript
- Hosted on Vercel, team 18Forge, project `18forge`, production at https://18forge.vercel.app and https://18forge.com
- Supabase, connected through the Vercel integration. Its variables are set on preview and production.

## Decisions

- 2026-10-14: Vercel project created in the 18Forge team and linked to Supabase.
- 2026-10-14: Full landing page live (logo, favicon, final palette, copy), PR #5.
- 2026-10-14: Vercel builds main only (vercel.json), no preview builds for other branches.
- 2026-10-14: 18forge.com (GoDaddy) added to the Vercel project, www.18forge.com redirects to it. DNS set at GoDaddy and verified by Vercel.
- 2026-10-14: Main history cleaned of tool attribution; feature branches no longer use tool names.
- 2026-10-14: Vercel bot comments on GitHub switched off (vercel.json github.silent).
- 2026-10-14: Merging to main deploys to production, so merges only happen when Sacha says go.
- 2026-10-14: Back to top button: a small filled orange circle bottom right, shown after about one screen of scrolling.

## Open items

- Waiting to go live: main-only builds and silent Vercel bot (branch site-title-and-domain).
- Waiting to go live: back to top button (branch back-to-top).
