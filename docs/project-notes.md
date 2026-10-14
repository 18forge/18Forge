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
- 2026-10-14: Back to top button: a small filled orange circle bottom right, shown after about one screen of scrolling. PR #7.
- 2026-10-14: README documents the Vercel settings and environment variables; Node.js pinned to 20.9 or newer. PR #3.
- 2026-10-14: Landing page reworked after an outside review: discreet tone with one or two playful touches, pillars Create / Build / Advise / Experience, most restaurant language cut, human oversight stated on every AI claim, main call to action "Start a conversation" (email) plus "See what we do", "Viddy well" dropped, new Selected work section for founder projects (hidden until real projects are added).

- 2026-10-14: Top left logo about 1.6 times bigger, with the 18 in Hermes Orange and Forge in white. "Take one, or take the lot." removed. The two hero buttons now share one width.

## Open items

- Selected work section: add two or three real founder projects in app/content.ts and set placeholder to false to show it.
