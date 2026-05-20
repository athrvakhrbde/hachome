# HackHome

Static HTML marketing site for HackHome. Built with Next.js static export (no server runtime, no client JS bundles for UI).

## Local preview

```bash
npm install
npm run build
npm run preview
```

Open the URL shown by `serve` (usually http://localhost:3000). Built files live in `out/`.

## Deploy

**Do not deploy until explicitly requested.** When ready, set `NEXT_PUBLIC_SITE_URL` to your production domain and run `npm run build`, then host the `out/` folder on any static host (or re-enable Vercel with static output).

Apply form uses `mailto:` (opens the user's email client). Wire Formspree or a backend later if you need server-side intake.
