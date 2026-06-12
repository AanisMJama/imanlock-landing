# Vercel Setup — ImanFocus Landing Page

How the ImanFocus landing page is hosted, deployed, and configured on Vercel.

---

## Project

| Field | Value |
| ----- | ----- |
| **Vercel project** | `imanlock-landing` (under `aanismjama-gmailcoms-projects`) |
| **GitHub repo** | `https://github.com/AanisMJama/imanlock-landing` |
| **Framework preset** | Next.js (auto-detected) |
| **Production branch** | `main` |
| **Primary domain** | `imanfocus.app` (apex 308-redirects to `www.imanfocus.app`) |

> The Vercel project keeps the original `imanlock-landing` name. It is an
> infrastructure identifier, not a public brand reference, so renaming it is
> optional and would require updating clone/import docs.

---

## Environments

| Environment | Serves | Notes |
| ----------- | ------ | ----- |
| **Production** | `imanfocus.app`, `www.imanfocus.app` | Deploys from `main`. The custom domain is attached here. |
| **Preview** | `*.vercel.app` URLs | Created for branches / PRs. |
| **Development** | local `vercel dev` | Local only. |

**The live site runs in Production.** Anything the public hits uses Production
env vars and the Production deployment.

---

## Environment Variables

Set in **Settings → Environment Variables**, scoped to **Production** (add to
Preview too if you want previews to work):

| Variable | Required | Purpose |
| -------- | -------- | ------- |
| `RESEND_API_KEY` | **Yes** | Resend API key used by `/api/contact`. See `docs/resend-setup.md`. |
| `CONTACT_TO_EMAIL` | Temporary | Overrides contact recipient while `hello@imanfocus.app` is unhosted. |
| `CONTACT_FROM_EMAIL` | Optional | Overrides the Resend sender. Default: `ImanFocus Contact <contact@imanfocus.app>`. |

> **Env vars only apply to new deployments.** After adding or editing a
> variable, you MUST redeploy Production for it to take effect.

### Common pitfall

If the live contact form returns `503 "The contact service is not configured
yet"`, then `RESEND_API_KEY` is missing from **Production** (a Preview-only
variable is not enough). Verify the scope, then redeploy.

---

## Deploying

Production auto-deploys on every push to `main`:

```bash
git add .
git commit -m "Your message"
git push origin main
```

### Trigger a redeploy without code changes

Either use **Deployments → latest Production → Redeploy** in the dashboard, or
push an empty commit:

```bash
git commit --allow-empty -m "Redeploy"
git push origin main
```

### Inspect deployments from the CLI (via GitHub API)

```bash
# Recent deployments
gh api repos/AanisMJama/imanlock-landing/deployments \
  --jq '.[0:3][] | {id, environment, sha: .sha[0:7], created_at}'

# Status + URL for a specific deployment id
gh api repos/AanisMJama/imanlock-landing/deployments/<id>/statuses \
  --jq '.[0] | {state, target_url}'
```

---

## Custom Domain

1. **Settings → Domains** → add `imanfocus.app` and `www.imanfocus.app`.
2. Configure the DNS records Vercel shows at your registrar (example values;
   always use what the dashboard displays):

   | Type | Name | Value |
   | ---- | ---- | ----- |
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

3. Set the primary domain and redirect the other (apex → `www` is the current
   setup, returning HTTP 308). SSL is provisioned automatically once DNS
   propagates.

---

## Local Build Note (Windows corporate CA)

If a local `npm run build` fails with `UNABLE_TO_VERIFY_LEAF_SIGNATURE` (Google
Fonts fetch), use the system trust store. This does not affect Vercel builds.

```powershell
$env:NODE_OPTIONS="--use-system-ca"
npm run build
```
