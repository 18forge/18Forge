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

- 2026-10-14: Hero headline calmer: about 20% smaller, one upright serif at regular weight for both lines, orange alone marks the second line (no swash italic).

- 2026-10-14: Swash italic removed from the whole site. Section headings, numerals and footnotes use the same upright regular-weight serif as the hero.

- 2026-10-14: Draft assistant on the landing page: a small chat button bottom right (back to top moves just above it) that answers from the site's own text and points visitors to agency@18forge.com. Server route app/api/chat, simple per visitor limit, nothing stored. Shown only when ANTHROPIC_API_KEY is set in Vercel. Model set by ASSISTANT_MODEL (default claude-opus-5-5, about 4 cents a conversation; claude-haiku-5-5 is about 0.1 cents).

- 2026-10-15: Selected work turned on. New /work page ("A few houses we have dressed.") and the landing section now show Ta-nnin (temporary address tannin-web.vercel.app), Eighteen Diamonds and 58 Diamonds, each card linking to the live site. "Work" link added top right of the header. Header and footer now shared in app/site-chrome.tsx. Each project has a screenshot (public/work, 1600 x 1000) and a short write-up on /work.

## Open items

- Selected work: swap the Ta-nnin address for ta-nnin.be when it launches. Write-ups come from each project's own notes; screenshots are in public/work.
- Assistant: Sacha to choose the model and add ANTHROPIC_API_KEY (and ASSISTANT_MODEL if not the default) on Production in Vercel, then redeploy.
