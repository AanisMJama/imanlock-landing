# ImanFocus — Landing Page

A premium, conversion-focused landing page for **ImanFocus**, the Islamic app that helps Muslims remember Allah before using distracting apps.

> _"Remember Allah Before You Unlock."_

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (animations & interactive phone demos)
- Mobile-first, fully responsive
- SEO optimized (metadata, Open Graph, sitemap, robots)
- Vercel-ready

## Brand

| Token         | Hex       |
| ------------- | --------- |
| Primary Green | `#33A60A` |
| Mid Green     | `#1F8A0A` |
| Dark Green    | `#075C22` |
| White         | `#FFFFFF` |

Hero gradient: `linear-gradient(180deg, #33A60A 0%, #1F8A0A 40%, #075C22 100%)`

## Getting Started

```bash
npm install
npm run dev
```

### Windows SSL note

If `npm install` fails with `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, run:

```powershell
$env:NODE_OPTIONS="--use-system-ca"
npm install
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Routes

| Route           | Description                                              |
| --------------- | -------------------------------------------------------- |
| `/`             | Single-screen hero with animated ImanFocus phone preview  |
| `/privacy`      | Privacy Policy (Google Play & App Store ready)           |
| `/terms`        | Terms of Service                                         |
| `/contact`      | Contact page with Resend-powered form                    |
| `/subscription` | Manage Subscription                                      |

## Deploying to Vercel

This project is a standard Next.js App Router app and deploys to Vercel. The
contact form requires Resend environment variables in Production.

| Variable | Required | Notes |
| -------- | -------- | ----- |
| `RESEND_API_KEY` | Yes | Resend API key used by `/api/contact`. |
| `CONTACT_TO_EMAIL` | Temporary | Use a personal inbox until `hello@imanfocus.app` is hosted. |
| `CONTACT_FROM_EMAIL` | Optional | Defaults to `ImanFocus Contact <contact@imanfocus.app>`. |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes (for waitlist) | API URL of the `imanfocus-waitlist` Supabase project. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes (for waitlist) | Public anon key of the `imanfocus-waitlist` Supabase project. |

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Launch ImanFocus landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/imanlock-landing.git
git push -u origin main
```

### 2. Import the project on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Click **Import** next to the `imanlock-landing` repository.
3. Vercel auto-detects the **Next.js** framework preset:
   - Build command: `next build`
   - Output: handled automatically
   - Install command: `npm install`
4. Add the Resend environment variables above and click **Deploy**.

Your site goes live at a `*.vercel.app` URL within ~1 minute.

### CLI alternative

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

### 3. Add the custom domain `imanfocus.app`

1. In the Vercel project → **Settings → Domains**.
2. Add `imanfocus.app` and `www.imanfocus.app`.
3. Vercel shows the DNS records to configure at your domain registrar:

| Type    | Name  | Value                  |
| ------- | ----- | ---------------------- |
| `A`     | `@`   | `76.76.21.21`          |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> Use the exact values Vercel displays in your dashboard — they may differ from
> the examples above. If your registrar supports it, you can instead point the
> domain's nameservers to Vercel for fully managed DNS.

4. Set `imanfocus.app` as the **primary** domain and redirect `www` to it (or
   vice-versa). Vercel provisions the SSL certificate automatically once DNS
   propagates (usually minutes, up to 48h).

## Waitlist (early access)

ImanFocus isn't publicly available yet, so the landing page collects interested
users before any ad spend. A **"Join Early Access"** popup captures a **name**
and **email** and stores them in Supabase.

- **UI:** `src/components/site/Waitlist.tsx` — a popup that can be opened from
  the hero CTA and also auto-opens once per visitor. CTA button text:
  **"Join Early Access"**.
- **Client:** `src/lib/supabaseClient.ts` — browser Supabase client built from
  the `NEXT_PUBLIC_SUPABASE_*` env vars.
- **Backend:** a dedicated Supabase project named **`imanfocus-waitlist`** with
  a `waitlist_signups` table.

### Set up the Supabase backend

1. Create a new Supabase project named **`imanfocus-waitlist`**.
2. Open **SQL Editor**, paste the contents of
   [`supabase/migrations/0001_waitlist_signups.sql`](supabase/migrations/0001_waitlist_signups.sql),
   and run it. This creates the table and a Row Level Security policy that lets
   anonymous visitors **insert** (join) but **not read** the list.
3. In **Project Settings → API**, copy the **Project URL** and **anon public**
   key into `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   (locally in `.env.local`, and in Vercel for production).

`waitlist_signups` columns: `id` (uuid), `name` (text, nullable), `email`
(text, unique, not null), `source` (text), `platform` (text), `created_at`
(timestamptz). Duplicate emails are rejected by the unique constraint and the
popup shows _"You're already on the waitlist."_

> The signup list is readable only with the **service role** key (Supabase
> dashboard → Table editor), never with the public anon key.

## Project Structure

```
src/
  app/
    layout.tsx          # fonts, global SEO metadata, JSON-LD, viewport
    page.tsx            # renders the Landing hero
    globals.css         # Tailwind + theme utilities
    robots.ts           # robots.txt
    sitemap.ts          # sitemap.xml
    privacy/page.tsx
    terms/page.tsx
    contact/page.tsx
    subscription/page.tsx
    api/contact/route.ts # Resend contact form endpoint
  components/
    Landing.tsx         # single-screen hero layout
    icons.tsx           # brand logo + all SVG icons
    StoreBadges.tsx     # Google Play & App Store badges
    phone/
      PhoneFrame.tsx    # realistic device bezel + status bar
      HeroPhone.tsx     # auto-playing 8-step ImanFocus journey
      screens.tsx       # shared app screens (Mood, Quran, etc.)
    site/
      SiteHeader.tsx    # logo header for content pages
      SiteFooter.tsx    # shared footer with legal links
      PageShell.tsx     # content-page layout + typography helpers
      ContactForm.tsx   # client contact form
      Waitlist.tsx      # "Join Early Access" popup + Supabase email capture
      SubscriptionPanel.tsx
  lib/
    supabaseClient.ts   # public (anon) Supabase client for the waitlist
supabase/
  migrations/
    0001_waitlist_signups.sql  # waitlist table + RLS (run in imanfocus-waitlist)
```

## Highlights

- **Auto-playing phone preview** — a live, animated 8-step ImanFocus journey
  (Home → Choose apps → Locked → Mood → Quran → Dua → Unlock → Streak).
- No static screenshots — every screen is a real, animated React component.
- Fully responsive, SEO-optimized, and production-ready.
