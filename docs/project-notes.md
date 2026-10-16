# Project notes

## What it is

18 Forge. The agency's website, contact agency@18forge.com. Five destinations: Home, Portfolio (/portfolio), Expertise, About and Contact.

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

- 2026-10-15: Selected work turned on. New /work page ("A few houses we have dressed.") and the landing section now show Ta-nnin (temporary address tannin-web.vercel.app), Eighteen Diamonds, 58 Diamonds and the 18 Sitters app, each card linking to the live site. "Work" link added top right of the header. Header and footer now shared in app/site-chrome.tsx. Each project has a screenshot (public/work, 1600 x 1000) and a short write-up on /work.
- 2026-10-15: The work page moved to /portfolio (the old /work address redirects there) and the header link now reads "Portfolio", since "Work" read like a jobs link. The assistant shows on the portfolio page too.
- 2026-10-15: Mezze House added to the portfolio: a restaurant concept (site, live booking and the proposal behind it) at mezzehouse.netlify.app, with placeholder name, address and photos.
- 2026-10-15: Footer shows the logo (orange 18 and Forge) after the year, "Forged by" with the 18 mark in the centre (grey, orange on hover, as on Eighteen Diamonds) and the email on the right. On phones the three lines stack, centred.
- 2026-10-15: Ta-nnin links to tannin-web.vercel.app again (Sacha), card and /portfolio, with "Online Soon" after its Volkstraat line on the landing card and in its /portfolio write-up (soon: true in app/content.ts).
- 2026-10-15: The landing page work section shows only Ta-nnin and 58 Diamonds (work.home in app/content.ts); all five stay on /portfolio. Ta-nnin is described as a wine bar on Volkstraat in Antwerp, with no link and no mention of a temporary address; its card and its /portfolio write-up end with "Online Soon". The work heading, on the landing and /portfolio, reads "A few of the houses we have dressed.", and the landing intro reads "These are some of the projects our founders have led." "Est. 2026" removed from the hero. The "All work" link under the landing work section is now "Portfolio", styled like the header link (orange on hover).
- 2026-10-15: On phones every /portfolio project shows its picture first, then the text. The desktop rule that swaps sides on every second project was still winning on phones, so those projects showed text first.
- 2026-10-15: More space on phones (Sacha found both pages loaded). Under 760px: sections 96 to 136px apart, a hairline between the four pillars and between /portfolio projects, more room inside and between cards, rows and lists. Desktop unchanged.
- 2026-10-16: Redesign from Sacha's restructuring brief. Shared header with Portfolio, Expertise, About and Contact (a full screen menu on phones), and a shorter landing page: hero, selected work right after it, the four disciplines in brief, and a contact close built around the email address. "Everything under one roof" and the AI clockwork section moved to /expertise, "Who we work for" to /about (an editorial list with links to matching projects). New /contact page with the address, a mail button and a copy button; no form. /portfolio keeps all five projects with alternating layouts, status, role and expertise for each, and Mezze House under "Independent concepts", labelled as uncommissioned. Square edged buttons and hairline underlined links replace the pill buttons and small arrows. The nav keeps "Portfolio" rather than "Work" (2026-10-15 decision). Fonts and palette unchanged. sitemap.xml added.
- 2026-10-16: Redesign second pass after Sacha saw the preview: headings and the contact email scaled well down, and copy softened to stay confident and classy without sounding like a know-it-all (About title now "Independent, and close to the work.", concepts heading "Proposals of our own.").
- 2026-10-16: "Tell us what you are working on." now appears once, on /contact (Sacha). The other pages end with their own short line and the email only.

## Open items

- Selected work: when ta-nnin.be launches, swap the Ta-nnin url and domain in app/content.ts and drop soon: true. Write-ups come from each project's own notes; screenshots are in public/work.
- Assistant: Sacha to choose the model and add ANTHROPIC_API_KEY (and ASSISTANT_MODEL if not the default) on Production in Vercel, then redeploy.
