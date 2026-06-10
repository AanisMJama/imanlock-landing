# ImanLock — Landing Page

A premium, conversion-focused landing page for **ImanLock**, the Islamic app that helps Muslims remember Allah before using distracting apps.

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
| `/`             | Single-screen hero with animated ImanLock phone preview  |
| `/privacy`      | Privacy Policy (Google Play & App Store ready)           |
| `/terms`        | Terms of Service                                         |
| `/contact`      | Contact page with form (`mailto:` fallback)              |
| `/subscription` | Manage Subscription                                      |

## Deploying to Vercel

This project is a standard Next.js App Router app and deploys to Vercel with
zero configuration. There are **no required environment variables**.

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Launch ImanLock landing page"
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
4. Leave environment variables empty and click **Deploy**.

Your site goes live at a `*.vercel.app` URL within ~1 minute.

### CLI alternative

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

### 3. Add the custom domain `imanlock.app`

1. In the Vercel project → **Settings → Domains**.
2. Add `imanlock.app` and `www.imanlock.app`.
3. Vercel shows the DNS records to configure at your domain registrar:

| Type    | Name  | Value                  |
| ------- | ----- | ---------------------- |
| `A`     | `@`   | `76.76.21.21`          |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> Use the exact values Vercel displays in your dashboard — they may differ from
> the examples above. If your registrar supports it, you can instead point the
> domain's nameservers to Vercel for fully managed DNS.

4. Set `imanlock.app` as the **primary** domain and redirect `www` to it (or
   vice-versa). Vercel provisions the SSL certificate automatically once DNS
   propagates (usually minutes, up to 48h).

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
  components/
    Landing.tsx         # single-screen hero layout
    icons.tsx           # brand logo + all SVG icons
    StoreBadges.tsx     # Google Play & App Store badges
    phone/
      PhoneFrame.tsx    # realistic device bezel + status bar
      HeroPhone.tsx     # auto-playing 8-step ImanLock journey
      screens.tsx       # shared app screens (Mood, Quran, etc.)
    site/
      SiteHeader.tsx    # logo header for content pages
      SiteFooter.tsx    # shared footer with legal links
      PageShell.tsx     # content-page layout + typography helpers
      ContactForm.tsx   # client contact form
      SubscriptionPanel.tsx
```

## Highlights

- **Auto-playing phone preview** — a live, animated 8-step ImanLock journey
  (Home → Choose apps → Locked → Mood → Quran → Dua → Unlock → Streak).
- No static screenshots — every screen is a real, animated React component.
- Fully responsive, SEO-optimized, and production-ready.
