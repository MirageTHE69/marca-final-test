This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Admin panel (Payload CMS)

The site's content lives in MongoDB and is edited at `/admin`. Media files
live in Cloudinary; the admin uploads straight from the browser to Cloudinary.

### Environment variables

Set these in `.env.local` locally and in Vercel → Settings → Environment Variables:

| Name | What it is |
| --- | --- |
| `DATABASE_URL` | MongoDB Atlas connection string |
| `PAYLOAD_SECRET` | Long random string that signs admin logins |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret (never commit it) |

MongoDB Atlas must allow connections from anywhere (`0.0.0.0/0`) for Vercel.

### Scripts

- `npm run payload run scripts/create-admin.ts` with `ADMIN_EMAIL` and
  `ADMIN_PASSWORD` set — creates an admin login, or resets its password.
- `npm run payload run scripts/seed.ts` — fills an empty database with the
  launch content (add `-- --force` to rewrite pages and lists).
- `npm run generate:types` / `npm run generate:importmap` — after changing
  anything in `payload/` or `payload.config.ts`.

Publishing in the admin refreshes the live pages within seconds; no redeploy
is needed for content changes. Payload is pinned to 3.90.2 because it is the
newest release that runs on Node 20.
