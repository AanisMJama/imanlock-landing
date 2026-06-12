# ImanFocus — Launch Runbook

Complete deployment and launch documentation for the ImanFocus landing page.
This captures the rebrand, the Resend-powered contact form, the Vercel
environment setup, the store-badge policy, the legal pages, and the
verification + deploy process used to take the site live.

---

## 1. Project Facts

| Field | Value |
| ----- | ----- |
| **Brand** | ImanFocus (formerly ImanLock) |
| **Live domain** | `https://imanfocus.app` (apex 308-redirects to `https://www.imanfocus.app`) |
| **Framework** | Next.js 15 (App Router) + TypeScript + Tailwind CSS 3 + Framer Motion |
| **Hosting** | Vercel (auto-deploy on every push to `main`) |
| **GitHub repo** | `https://github.com/AanisMJama/imanlock-landing` |
| **Vercel project** | `imanlock-landing` (under `aanismjama-gmailcoms-projects`) |
| **Default branch** | `main` (kept deployable at all times) |

> Note: the repo, Vercel project, and npm package keep the original
> `imanlock-landing` identifier. These are infrastructure names, not
> public-facing brand references, and are intentionally left unchanged so the
> clone/import instructions stay valid.

---

## 2. Rebrand: ImanLock → ImanFocus

The following replacements were applied across the entire project (all
public-facing brand, domain, and email references):

| From | To |
| ---- | -- |
| `ImanLock` | `ImanFocus` |
| `imanlock.app` | `imanfocus.app` |
| `hello@imanlock.app` | `hello@imanfocus.app` |
| `support@imanlock.app` | `hello@imanfocus.app` |
| `contact@imanlock.app` | `contact@imanfocus.app` |

**Files updated during the rebrand:**

- Metadata / SEO / Open Graph / Twitter / JSON-LD — `src/app/layout.tsx`
- Web manifest — `public/site.webmanifest`
- SEO infra — `src/app/sitemap.ts`, `src/app/robots.ts`
- Pages — `src/app/contact/page.tsx`, `src/app/privacy/page.tsx`,
  `src/app/terms/page.tsx`, `src/app/subscription/page.tsx`
- Components — `src/components/site/SiteHeader.tsx`,
  `src/components/site/SiteFooter.tsx`,
  `src/components/site/SubscriptionPanel.tsx`,
  `src/components/phone/HeroPhone.tsx` (internal `ImanLockHome` → `ImanFocusHome`)
- Styling comment — `tailwind.config.ts`
- Contact backend — `src/app/api/contact/route.ts`, `.env.example`
- Docs — `README.md`, `DEPLOYMENT_STATUS.md`, `BACKUP_NOTES.md`,
  `PROJECT_ROADMAP.md`

**Verification:** a final audit for `imanlock`, `ImanLock`, `imanlock.app`,
`hello@imanlock.app`, and `contact@imanlock.app` returned **no public-facing
references**. The only remaining matches are the infra names noted above.

---

## 3. Contact Form (Resend)

The contact form was changed from a `mailto:` placeholder to a real backend.

### Architecture

- **API route:** `src/app/api/contact/route.ts` (Node.js runtime, `POST`).
  - Validates `name`, `email`, `message` (required, email format, length caps).
  - Sends via Resend; sets the visitor's email as `replyTo`.
  - HTML-escapes user input.
  - Graceful failures: `503` if `RESEND_API_KEY` missing, `502` on Resend
    error, `500` on unexpected error, `400` on bad input.
- **Form component:** `src/components/site/ContactForm.tsx`
  - Real `fetch("/api/contact")` POST.
  - States: idle → sending (spinner, disabled inputs) → sent (success) / error
    (red alert with fallback email).

### Delivery configuration

- **Recipient:** `CONTACT_TO_EMAIL` env var → falls back to
  `hello@imanfocus.app` if unset.
- **Sender:** `CONTACT_FROM_EMAIL` env var → falls back to
  `ImanFocus Contact <contact@imanfocus.app>`.
- The sending domain (`imanfocus.app`) must be **verified in Resend**.

---

## 4. Vercel Environment Variables

Set in **Vercel → Project `imanlock-landing` → Settings → Environment
Variables**, scoped to **Production**:

| Variable | Required | Scope | Purpose |
| -------- | -------- | ----- | ------- |
| `RESEND_API_KEY` | **Yes** | Production | Resend API key (`re_...`) used by `/api/contact`. |
| `CONTACT_TO_EMAIL` | Temporary | Production | Overrides recipient while `hello@imanfocus.app` mailbox is not yet hosted (set to a personal inbox for testing). |
| `CONTACT_FROM_EMAIL` | Optional | Production | Overrides the verified Resend sender. Defaults to `ImanFocus Contact <contact@imanfocus.app>`. |

### Which environment serves the live site?

- `imanfocus.app` / `www.imanfocus.app` are served by Vercel **Production**
  (deploys from `main`). The custom domain is attached to the production
  deployment.
- **Preview** = temporary `*.vercel.app` URLs from branches/PRs.
- **Development** = `vercel dev` locally.

> **Critical:** `RESEND_API_KEY` must exist in **Production**. A Preview-only
> variable will NOT make the live form work. Env-var changes only take effect on
> the **next deployment** — redeploy after adding/changing them.

---

## 5. Store Badges Policy

Until real store URLs are provided, the App Store and Google Play badges must
**not** link to any unrelated or placeholder app.

- `src/components/StoreBadges.tsx` renders both badges as non-clickable
  `<span>` "Coming soon" labels (no `href`, reduced opacity,
  `cursor-not-allowed`).
- `src/components/Landing.tsx` uses `<AppStoreBadge comingSoon />` and
  `<GooglePlayBadge comingSoon />`.

When real URLs exist, flip them live:

```tsx
<AppStoreBadge href="https://apps.apple.com/..." comingSoon={false} />
<GooglePlayBadge href="https://play.google.com/..." comingSoon={false} />
```

---

## 6. Legal Pages

Both pages are public (prerendered as static, no login), linked from the shared
footer (`src/components/site/SiteFooter.tsx`), and fully ImanFocus-branded.

| Page | Route | Source | Notes |
| ---- | ----- | ------ | ----- |
| Privacy Policy | `/privacy` | `src/app/privacy/page.tsx` | 13 sections incl. **Accessibility Service Disclosure** (required for Google Play), "we never sell your data", children's privacy, your rights. Contact: `hello@imanfocus.app`. |
| Terms of Service | `/terms` | `src/app/terms/page.tsx` | 10 sections incl. permitted use, subscriptions, refunds, IP, liability, termination. Contact: `hello@imanfocus.app`. |

> **Outstanding:** the "Last updated" date on both pages currently reads
> **June 10, 2026**. Bump it whenever the legal content materially changes.

---

## 7. Local Build & Verify

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the production build locally
```

### Windows SSL note (corporate CA)

If `npm install` or `npm run build` fails with
`UNABLE_TO_VERIFY_LEAF_SIGNATURE` (Google Fonts fetch in `layout.tsx`), use the
system trust store:

```powershell
$env:NODE_OPTIONS="--use-system-ca"
npm run build
```

This is a local-machine TLS issue only; it does **not** affect Vercel builds.

---

## 8. Deploy Process

Production auto-deploys on every push to `main`.

```bash
git add .
git commit -m "Your message"
git push origin main
```

### Verifying a deployment via GitHub/Vercel

```bash
# Latest deployments
gh api repos/AanisMJama/imanlock-landing/deployments \
  --jq '.[0:3][] | {id, environment, sha: .sha[0:7], created_at}'

# Status + URL for a deployment id
gh api repos/AanisMJama/imanlock-landing/deployments/<id>/statuses \
  --jq '.[0] | {state, target_url}'
```

---

## 9. Post-Deploy Verification Checklist

- [ ] `https://www.imanfocus.app` loads as ImanFocus (home).
- [ ] `/contact`, `/privacy`, `/terms`, `/subscription` load and are branded.
- [ ] `robots.txt` and `sitemap.xml` return 200.
- [ ] Footer links to Terms + Privacy work and require no login.
- [ ] Store badges show "Coming soon" and are non-clickable.
- [ ] No `ImanLock` / `imanlock.app` references remain on any page.
- [ ] Contact form: submit a test message and confirm delivery to
      `CONTACT_TO_EMAIL`.

### Test the live contact API directly (PowerShell)

```powershell
$body = @{ name = "Test"; email = "test@imanfocus.app"; message = "Live test." } | ConvertTo-Json -Compress
Invoke-WebRequest -Uri "https://www.imanfocus.app/api/contact" -Method Post `
  -ContentType "application/json" -Body $body -UseBasicParsing
```

Interpreting the response:

- `{"ok":true,...}` → message sent; check the recipient inbox.
- `503 ... "not configured yet"` → `RESEND_API_KEY` missing in **Production**.
- `502` / Resend error → key present, but sender/domain not verified.

---

## 10. Deployment History (today)

| Commit | Description |
| ------ | ----------- |
| `5511a67` | Rebrand landing page to ImanFocus (brand, domain, metadata, contact backend, docs). |
| `896a555` | Redeploy ImanFocus landing page (trigger fresh production build for env vars). |
| `20ff5f9` | Disable store badges until real URLs are available ("Coming soon"). |

All deployed to Vercel **Production** successfully; `/privacy` and `/terms`
verified live.

---

## 11. Outstanding Items

1. **`RESEND_API_KEY` in Production** — must be set in the `imanlock-landing`
   Vercel project's **Production** scope, then redeploy. Until then the contact
   form returns "not configured yet."
2. **`CONTACT_TO_EMAIL`** — currently points to a temporary personal inbox.
   Switch back to `hello@imanfocus.app` once that mailbox/email hosting exists.
3. **Legal "Last updated" dates** — still `June 10, 2026`; refresh on the next
   material change.
4. **Real store URLs** — replace the "Coming soon" badges once the App Store /
   Google Play listings are live.
5. **Store badge links, waitlist/analytics** — see `PROJECT_ROADMAP.md` for the
   broader launch checklist.
