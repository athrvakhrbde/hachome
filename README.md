# hackhome

Production static site for [hackhome](https://hackhome.in). Next.js builds to plain HTML + CSS in `out/` with **no client JavaScript** in production.

## Production build

```bash
npm ci
cp .env.example .env   # set NEXT_PUBLIC_SITE_URL to your live domain
npm run build:clean
npm run preview        # http://localhost:3000
```

`build:clean` wipes `.next` and `out/`, then exports and strips hydration scripts.

## Deploy (Vercel)

1. Set `NEXT_PUBLIC_SITE_URL` in project env (Production + Preview).
2. Connect repo; `vercel.json` points at `out/` after `npm run build`.
3. Promote when ready.

Works on any static host: upload the `out/` folder (Netlify, Cloudflare Pages, S3, etc.).

## Local dev

`npm run dev` is for editing only. Preview production output with `npm run build && npm run preview`.

If dev shows a white screen or `Cannot find module './948.js'`:

```bash
npm run dev:clean
```

## Stack

- Next.js 14 static export
- Tailwind CSS
- Apply → [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfz5s_2biXXOEodc0tRTLv5o0BGZrpGZV_7Y4P1BYo84uZFtQ/viewform?usp=send_form)
- Contact → [@hackhomehq](https://x.com/hackhomehq)
