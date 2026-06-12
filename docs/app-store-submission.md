# App Store Submission — ImanFocus

Checklist and reference for submitting the ImanFocus app to the Google Play
Store (primary, Android) and the Apple App Store (if/when an iOS build exists).

> The landing page is already live and provides the required legal URLs. The
> store badges on the site stay **"Coming soon"** (non-clickable) until real
> listing URLs exist — see `src/components/StoreBadges.tsx`.

---

## Required Legal URLs (live)

| Document | URL |
| -------- | --- |
| Privacy Policy | `https://imanfocus.app/privacy` |
| Terms of Service | `https://imanfocus.app/terms` |

Both are public (no login) and include the **Accessibility Service Disclosure**
required by Google Play.

---

## Google Play (Android) — primary

### Account & listing

- [ ] Google Play Console developer account created.
- [ ] App created in the console (package name finalized).
- [ ] Store listing: app name (**ImanFocus**), short description, full
      description, category (Lifestyle / Health & Fitness).
- [ ] Graphic assets: app icon (512×512), feature graphic (1024×500), phone
      screenshots, optional promo video.

### Policy & data

- [ ] **Privacy Policy URL** → `https://imanfocus.app/privacy`.
- [ ] **Data safety form** — declare what is collected (email on contact/
      waitlist, anonymized analytics, crash diagnostics, device info) and that
      data is **not sold**.
- [ ] **Accessibility Service declaration** — ImanFocus uses the Accessibility
      Service to detect the foreground app and show the lock/reflection screen.
      Provide the prominent disclosure both in-app and in the listing.
      - Only foreground-app detection; no screen content, keystrokes, or
        messages are read/collected/transmitted.
      - All processing is on-device.
- [ ] Content rating questionnaire completed.
- [ ] Target audience & content (not directed to children under 13).

### Build & release

- [ ] Signed release build (AAB) produced.
- [ ] Internal testing → closed testing → production track.
- [ ] Pricing & subscriptions configured (if premium is enabled).

---

## Apple App Store (iOS) — if applicable

- [ ] Apple Developer Program membership.
- [ ] App record in App Store Connect.
- [ ] Privacy Policy URL → `https://imanfocus.app/privacy`.
- [ ] App Privacy ("nutrition label") questionnaire completed.
- [ ] Screenshots for required device sizes.
- [ ] Note: iOS does not have an Android-style Accessibility Service; document
      the actual iOS mechanism used for app limiting (e.g. Screen Time APIs) if
      an iOS build is pursued.
- [ ] TestFlight beta → submit for review.

---

## After Listings Go Live

1. Get the real store URLs:
   - App Store: `https://apps.apple.com/...`
   - Google Play: `https://play.google.com/store/apps/details?id=...`
2. Enable the landing-page badges:

   ```tsx
   <AppStoreBadge href="https://apps.apple.com/..." comingSoon={false} />
   <GooglePlayBadge href="https://play.google.com/..." comingSoon={false} />
   ```

3. Deploy and verify the badges link to the correct listings.

> Never link the badges to an unrelated or placeholder app.
