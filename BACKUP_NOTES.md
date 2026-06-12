# Backup & Recovery Notes

Reference for restoring, redeploying, or handing off the ImanFocus landing page.

## Key URLs

| Resource           | URL                                                          |
| ------------------ | ------------------------------------------------------------ |
| **GitHub repo**    | https://github.com/AanisMJama/imanlock-landing               |
| **Live site**      | https://imanfocus.app                                         |
| **Vercel project** | https://vercel.com/dashboard → project `imanlock-landing`    |
| **Default branch** | `main` (always kept deployable)                              |
| **Release tag**    | `v1.0-landing-live`                                          |

## Domain Information

- **Domain:** `imanfocus.app`
- **Connected to:** Vercel (project `imanlock-landing`)
- **DNS records** (use the exact values shown in the Vercel dashboard):

  | Type    | Name  | Value                  |
  | ------- | ----- | ---------------------- |
  | `A`     | `@`   | `76.76.21.21`          |
  | `CNAME` | `www` | `cname.vercel-dns.com` |

- SSL: provisioned automatically by Vercel.

## Environment Variables

Set these in **Vercel → Settings → Environment Variables** for Production:

| Name | Required | Purpose |
| ---- | -------- | ------- |
| `RESEND_API_KEY` | Yes | Sends contact form messages through Resend. |
| `CONTACT_TO_EMAIL` | Temporary | Overrides the recipient while `hello@imanfocus.app` is not hosted yet. |
| `CONTACT_FROM_EMAIL` | Optional | Overrides the verified Resend sender. Defaults to `ImanFocus Contact <contact@imanfocus.app>`. |

## Local Development

```bash
git clone https://github.com/AanisMJama/imanlock-landing.git
cd imanlock-landing
npm install
npm run dev          # http://localhost:3000
```

> **Windows SSL note:** if `npm install` fails with
> `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, run:
> ```powershell
> $env:NODE_OPTIONS="--use-system-ca"
> npm install
> ```

## Build & Verify

```bash
npm run lint     # ESLint
npm run build    # production build
npm run start    # serve the production build locally
```

## Deployment Instructions

### Automatic (preferred)

- Every push to `main` triggers an automatic Vercel production deploy.

```bash
git add .
git commit -m "Your message"
git push origin main
```

### Manual via CLI

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## Recovery: redeploy from scratch

1. Ensure the GitHub repo exists and contains the latest `main`.
2. Go to [vercel.com/new](https://vercel.com/new) → import `imanlock-landing`.
3. Framework auto-detects as **Next.js**; add the Resend env vars above → **Deploy**.
4. Re-add the domain `imanfocus.app` under **Settings → Domains** and confirm DNS.

## Restore a specific release

```bash
git fetch --tags
git checkout v1.0-landing-live   # inspect the snapshot
# to branch from it:
git switch -c restore-v1 v1.0-landing-live
```

## Safety Conventions

- Keep `main` deployable at all times.
- Make all changes on a feature branch, then merge into `main`.
- Do not remove pages, routes, SEO metadata, or legal pages without approval.
