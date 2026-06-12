# Launch Checklist — ImanFocus

End-to-end checklist to take (and keep) the ImanFocus landing page and app
launch-ready. See also: `docs/vercel-setup.md`, `docs/resend-setup.md`,
`docs/app-store-submission.md`, and `IMANFOCUS-LAUNCH-RUNBOOK.md`.

---

## 1. Branding

- [x] Rebrand `ImanLock` → `ImanFocus` across all public-facing files.
- [x] Rebrand `imanlock.app` → `imanfocus.app` (domain, canonicals, OG,
      sitemap, robots, emails).
- [x] Audit confirms no public `ImanLock` / `imanlock.app` references remain.
- [ ] (Optional) Rename the `imanlock-landing` repo / Vercel project / npm
      package to `imanfocus-landing` and update clone/import docs.

## 2. Landing Page

- [x] Home, Contact, Privacy, Terms, Subscription pages live and branded.
- [x] SEO: per-page title + description, Open Graph, Twitter cards, JSON-LD.
- [x] `robots.txt` and `sitemap.xml` return 200.
- [x] Store badges show **"Coming soon"** and are non-clickable.
- [ ] Replace badges with real store URLs once listings are live.

## 3. Contact Form (Resend)

- [x] `/api/contact` route + form with loading/success/error states.
- [ ] `RESEND_API_KEY` set in Vercel **Production**.
- [ ] `imanfocus.app` verified as a sending domain in Resend.
- [ ] `CONTACT_TO_EMAIL` set (temporary personal inbox for now).
- [ ] Live submission test delivers to the configured recipient.
- [ ] Switch `CONTACT_TO_EMAIL` back to `hello@imanfocus.app` once hosted.

## 4. Hosting & Domain

- [x] Deployed to Vercel; auto-deploy on push to `main`.
- [x] `imanfocus.app` connected; apex 308-redirects to `www.imanfocus.app`.
- [x] SSL provisioned.

## 5. Legal

- [x] Privacy Policy live at `/privacy` (incl. Accessibility Service
      Disclosure).
- [x] Terms of Service live at `/terms`.
- [ ] Refresh "Last updated" dates (currently June 10, 2026) on next change.
- [ ] Legal review before formal store submission.
- [ ] Add legal entity name + governing-law jurisdiction.

## 6. Android App

- [ ] Finalize Accessibility Service behavior (app blocking).
- [ ] Stabilize core flow: lock → mood → Quran → dua → unlock → streak.
- [ ] QA across devices / Android versions.
- [ ] Signed release build (AAB).

## 7. Store Submission

- [ ] Google Play Console account + listing (see
      `docs/app-store-submission.md`).
- [ ] Data safety form + Accessibility Service prominent disclosure.
- [ ] Content rating, screenshots, feature graphic, icon.
- [ ] Internal → closed → production rollout.

## 8. Post-Launch

- [ ] Analytics (privacy-respecting) added + disclosure matches Privacy Policy.
- [ ] Waitlist / email capture (if pursued).
- [ ] Monitor contact form deliverability.
- [ ] Update store badge links + roadmap.

---

## Pre-Deploy Verification (run each release)

- [ ] `npm run build` passes locally (use `NODE_OPTIONS=--use-system-ca` on
      Windows if Google Fonts TLS fails).
- [ ] No `ImanLock` / `imanlock.app` references on any page.
- [ ] Footer links to Terms + Privacy work without login.
- [ ] After deploy: home, `/contact`, `/privacy`, `/terms` load and are branded.
- [ ] After deploy: contact form test message is delivered.
