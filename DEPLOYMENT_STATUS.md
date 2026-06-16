# Deployment Status

| Field                 | Value                                      |
| --------------------- | ------------------------------------------ |
| **Project**           | ImanFocus Landing Page                      |
| **Domain**            | [imanfocus.app](https://imanfocus.app)       |
| **Hosting**           | Vercel                                      |
| **Deployment status** | 🟢 Live                                     |
| **Framework**         | Next.js 15 (App Router)                     |
| **Last deployment**   | June 12, 2026                               |
| **Release tag**       | `v1.0-landing-live`                         |
| **Auto-deploy**       | Enabled — every push to `main` redeploys    |

## Live Routes

| Route           | Page                | Status |
| --------------- | ------------------- | ------ |
| `/`             | Landing / hero      | 🟢 Live |
| `/privacy`      | Privacy Policy      | 🟢 Live |
| `/terms`        | Terms of Service    | 🟢 Live |
| `/contact`      | Contact Us          | 🟢 Live |
| `/subscription` | Manage Subscription | 🟢 Live |
| `/robots.txt`   | Robots              | 🟢 Live |
| `/sitemap.xml`  | Sitemap             | 🟢 Live |

## Current Features

- Single-screen, PrayerLock-style hero with large headline + subheadline.
- Animated ImanFocus phone preview — an auto-playing 8-step journey
  (Home → Choose apps → Apps locked → Mood → Quran verse → Dua → Unlock → Streak),
  built entirely from live React components (no static screenshots).
- App Store + Google Play download badges (placeholder links).
- Fully responsive (mobile-first) layout.
- SEO: unique title + meta description per page, Open Graph, Twitter cards,
  JSON-LD structured data, `robots.txt`, and `sitemap.xml`.
- Legal pages ready for app-store submission (Privacy Policy with Accessibility
  Service disclosure; Terms of Service).
- Contact form sends messages through the `/api/contact` Resend backend.
- **"Join Early Access" waitlist popup** — captures name + email and stores them
  in the dedicated `imanfocus-waitlist` Supabase project (`waitlist_signups`
  table). Auto-opens once per visitor; duplicate emails are handled gracefully.
- **Google Analytics 4** — page views, waitlist CTA clicks, waitlist submissions,
  and footer link clicks (see `docs/analytics-setup.md`).
- Subscription management page with placeholder status + restore/manage actions.

## Pending Tasks

- Replace placeholder store badge links with real Google Play / App Store URLs.
- Keep `CONTACT_TO_EMAIL` pointed at the temporary recipient until the
  `hello@imanfocus.app` mailbox is ready.
- Create the `imanfocus-waitlist` Supabase project, run
  `supabase/migrations/0001_waitlist_signups.sql`, and set
  `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel to
  activate the waitlist in production.
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel and redeploy (see
  `docs/analytics-setup.md`).
- Legal review of Privacy Policy & Terms before formal store submission.
- Android app debugging and Google Play launch (see `PROJECT_ROADMAP.md`).

## Verification (last checked: June 10, 2026)

- `npm run lint` → ✅ No ESLint warnings or errors
- `npm run build` → ✅ Compiled successfully, all routes prerendered
- All routes return `200`
