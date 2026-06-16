# Google Analytics 4 — ImanFocus

Simple GA4 setup for **imanfocus.app**. Analytics only loads when
`NEXT_PUBLIC_GA_MEASUREMENT_ID` is set — local dev without the env var is a
no-op (no scripts, no events).

## 1. Create a GA4 property

1. Go to [Google Analytics](https://analytics.google.com/).
2. **Admin** → **Create** → **Property** → name it **ImanFocus**.
3. Add a **Web** data stream for `https://imanfocus.app`.
4. Copy the **Measurement ID** (format `G-XXXXXXXXXX`).

## 2. Add the environment variable

Set in **Vercel → Project `imanlock-landing` → Settings → Environment
Variables** (Production, and Preview if you want staging data):

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

For local testing, add the same line to `.env.local` (never commit it).

Redeploy after adding the variable — `NEXT_PUBLIC_*` values are baked in at
build time.

## 3. What is tracked

| Event | GA4 event name | When | Parameters |
| ----- | -------------- | ---- | ---------- |
| Page views | `page_view` (via `gtag config`) | Every route change | `page_path` |
| Join Early Access click | `join_early_access_click` | User clicks the hero CTA that opens the waitlist popup | `source` (e.g. `landing_hero`) |
| Waitlist submission | `waitlist_submission` | Email successfully saved or duplicate detected | `source`, `status` (`success` \| `duplicate`) |
| Footer link click | `footer_link_click` | User clicks a footer nav link | `label`, `href` |

### Viewing events in GA4

- **Reports → Engagement → Events** — lists all custom events after traffic
  arrives (can take up to 24h for some reports; use **Realtime** for immediate
  checks).
- **Realtime** — open `imanfocus.app`, click **Join Early Access**, submit the
  form, click a footer link; events should appear within seconds.

### Recommended explorations

- Funnel: `join_early_access_click` → `waitlist_submission` (filter
  `status = success`) to measure conversion from interest to signup.
- Compare `source` values if you add more waitlist CTAs later.

## 4. Code locations

| File | Role |
| ---- | ---- |
| `src/lib/analytics.ts` | `pageview()` + `trackEvent()` helpers |
| `src/components/site/GoogleAnalytics.tsx` | Loads gtag.js, tracks route changes |
| `src/app/layout.tsx` | Mounts `<GoogleAnalytics />` on every page |
| `src/components/site/Waitlist.tsx` | Waitlist + CTA events |
| `src/components/site/FooterLink.tsx` | Footer link click events |

## 5. Privacy notes

- GA4 is disclosed in the [Privacy Policy](/privacy) (analytics section).
- No PII (email, name) is sent to Google — only event names and generic
  parameters (`source`, `status`, `label`, `href`).
- If you need cookie-consent gating later, wrap `<GoogleAnalytics />` behind a
  consent banner before loading gtag.

## 6. Disable analytics

Remove `NEXT_PUBLIC_GA_MEASUREMENT_ID` from Vercel and redeploy. The site
works normally with zero analytics overhead.
