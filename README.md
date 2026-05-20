# HackHome

Landing site for HackHome, a live-in workspace for founders and hackers in Bangalore.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- react-hook-form

## Scripts

```bash
npm install
npm run dev      # local dev
npm run build    # production build
npm run start    # run production build locally
npm run lint
```

## Environment

Copy `.env.example` to `.env.local` for local development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

On Vercel, set `NEXT_PUBLIC_SITE_URL` to your production domain.

## Deploy

Deploys to [Vercel](https://vercel.com). Push to `main` triggers production if the project is linked.

Apply form submissions POST to `/api/apply` and are logged server-side. Wire a CRM, email, or database when ready.
