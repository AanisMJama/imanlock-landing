# Resend Setup — ImanFocus Contact Form

The contact form (`/contact`) submits to a Next.js API route that sends email
through [Resend](https://resend.com). This doc covers the one-time Resend setup
and how the integration works.

---

## How It Works

- **Form:** `src/components/site/ContactForm.tsx` — POSTs JSON
  `{ name, email, message }` to `/api/contact` with loading / success / error
  states.
- **API route:** `src/app/api/contact/route.ts` — Node.js runtime. Validates
  input, then calls Resend to send the message.
- **Delivery:**
  - **To:** `CONTACT_TO_EMAIL` env var → defaults to `hello@imanfocus.app`.
  - **From:** `CONTACT_FROM_EMAIL` env var → defaults to
    `ImanFocus Contact <contact@imanfocus.app>`.
  - **Reply-To:** the visitor's email (so you can reply directly).

---

## One-Time Setup

### 1. Verify the sending domain

1. In Resend → **Domains → Add Domain** → `imanfocus.app`.
2. Add the DNS records Resend shows (SPF/DKIM + Return-Path) at your DNS
   provider.
3. Wait until the domain status is **Verified**.

> The sender (`contact@imanfocus.app`) must be on this verified domain. No
> mailbox is required to *send* — only domain verification.

### 2. Create an API key

1. Resend → **API Keys → Create API Key**.
2. Copy the key (starts with `re_`). You only see it once.

### 3. Add the key to Vercel

In the `imanlock-landing` Vercel project → **Settings → Environment Variables**:

| Variable | Value | Scope |
| -------- | ----- | ----- |
| `RESEND_API_KEY` | your `re_...` key | **Production** (required) |
| `CONTACT_TO_EMAIL` | recipient inbox | Production (temporary override) |
| `CONTACT_FROM_EMAIL` | optional sender override | Production (optional) |

Then **redeploy Production** — env vars only apply to new deployments.

---

## Recipient: temporary vs. final

- **Temporary:** until the `hello@imanfocus.app` mailbox exists, set
  `CONTACT_TO_EMAIL` to a personal inbox (e.g. a Gmail address) so you can
  receive and test submissions.
- **Final:** once email hosting for `imanfocus.app` is set up, remove or change
  `CONTACT_TO_EMAIL` so messages go to `hello@imanfocus.app`, then redeploy.

> Do not hardcode a personal address in the repo — the repo is public. Keep the
> recipient in the Vercel env var only.

---

## Testing the Live Endpoint

```powershell
$body = @{ name = "Test"; email = "test@imanfocus.app"; message = "Live test." } | ConvertTo-Json -Compress
Invoke-WebRequest -Uri "https://www.imanfocus.app/api/contact" -Method Post `
  -ContentType "application/json" -Body $body -UseBasicParsing
```

### Interpreting responses

| Response | Meaning | Fix |
| -------- | ------- | --- |
| `{"ok":true,...}` | Sent. | Check the recipient inbox. |
| `503` "not configured yet" | `RESEND_API_KEY` missing in Production. | Add it to Production, redeploy. |
| `502` / Resend error | Key present, but send failed. | Confirm the domain is **Verified** and the sender uses it. |
| `400` | Invalid/empty fields. | Send valid `name`, `email`, `message`. |

---

## Error Handling (built in)

The API route fails gracefully and never leaks secrets:

- Missing key → `503` with a user-friendly "email us directly" message.
- Resend error → `502`.
- Unexpected error → `500`.
- Invalid input → `400`.

The form surfaces these as a red alert with a fallback to `hello@imanfocus.app`.
