# 18 Forge

Landing page, built with Next.js and deployed on Vercel.

## Develop

```bash
npm install
npm run dev   # http://localhost:3000
```

Requires Node.js 20.9 or newer (Next.js 16's minimum).

## Edit the page

- Text: `app/content.ts`
- Colours: `app/theme/colors.ts` (the only place colour values are defined)
- Fonts: `app/theme/fonts.ts` (loaded from Google Fonts with `next/font`)
- Layout and styles: `app/page.tsx`, `app/back-to-top.tsx` and `app/globals.css`
- Logo and icons: `app/logo.tsx`, `app/brand-icon.tsx`, `app/icon.tsx`,
  `app/apple-icon.tsx`

## Deploy

Vercel team: **18Forge** (`18-forge`).

The defaults Vercel detects for this repo are correct:

| Setting          | Value                        |
| ---------------- | ---------------------------- |
| Framework preset | Next.js                      |
| Root directory   | `./`                         |
| Install command  | `npm install` (uses `package-lock.json`) |
| Build command    | `npm run build` (`next build`) |
| Output           | `.next` (managed by Vercel)  |
| Node.js version  | 20.x or newer (from `engines` in `package.json`) |

The repo is imported as the `18forge` project in that team. Every push to
`main` deploys to production. `vercel.json` turns off builds for every other
branch, so pull requests get no preview deployment, and keeps the Vercel bot
from commenting on GitHub.

## Environment variables

The site needs **no** environment variables to build or run today; the page is
fully static.

| Variable        | Where it's used | Required |
| --------------- | --------------- | -------- |
| `VERCEL_TOKEN`  | Only for running the Vercel CLI locally (see `.env.example`). Never set it on the Vercel project. | No |

### Supabase (not used yet)

The 18Forge Vercel team has the Supabase integration installed, but the code
doesn't talk to Supabase yet. When the integration is connected to this
project it adds these variables (plus `POSTGRES_*` connection strings) to the
project automatically, so there is
nothing to copy by hand:

| Variable                         | Exposed to the browser | Use |
| -------------------------------- | ---------------------- | --- |
| `NEXT_PUBLIC_SUPABASE_URL`       | Yes | Project URL for the Supabase client |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`  | Yes | Public anon key; safe in the browser, protected by row-level security |
| `SUPABASE_SERVICE_ROLE_KEY`      | **No**, server only | Bypasses row-level security; never import it in client code |

For local development, pull them into `.env.local` (already git-ignored) with
`vercel env pull .env.local`.
