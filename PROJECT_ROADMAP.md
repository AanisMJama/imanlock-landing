# ImanFocus — Project Roadmap

Status legend: ✅ Done · 🟡 In progress · ⬜ Pending

## 1. Landing Page

- ✅ Single-screen hero (headline + subheadline + badges + footer)
- ✅ Animated ImanFocus phone preview (8-step auto-playing journey)
- ✅ Responsive design (mobile + desktop)
- ✅ Legal pages: Privacy Policy, Terms of Service
- ✅ Contact page (with Resend-powered form)
- ✅ Manage Subscription page (placeholder)
- ✅ SEO metadata, sitemap, robots
- ✅ Deployed to Vercel + connected to `imanfocus.app`
- ✅ Release tagged `v1.0-landing-live`
- ⬜ Replace placeholder store badge links with real URLs
- ✅ Wire contact form to a real email backend

## 2. Android App

- 🟡 Android app debugging pending
- ⬜ Finalize Accessibility Service behavior (app blocking)
- ⬜ Stabilize core flow: app lock → mood → Quran → dua → unlock → streak
- ⬜ QA across devices / Android versions
- ⬜ Build signed release (AAB)

## 3. Google Play Launch Checklist

- ⬜ Create Google Play Console developer account
- ⬜ App listing: title, short & full description, category
- ⬜ Graphic assets: app icon, feature graphic, phone screenshots
- ⬜ Privacy Policy URL → `https://imanfocus.app/privacy` ✅ (page live)
- ⬜ Data safety form (declare data collection & Accessibility Service usage)
- ⬜ Accessibility Service prominent disclosure (in-app + listing)
- ⬜ Content rating questionnaire
- ⬜ Internal testing track → closed testing → production
- ⬜ Pricing & subscriptions setup (if applicable)

## 4. Waitlist / Email Collection

- ⬜ Choose provider (e.g. ConvertKit, Mailchimp, Resend + DB, or Vercel + form)
- ⬜ Add email capture UI to landing page
- ⬜ Connect to storage / mailing list
- ⬜ Confirmation + welcome email
- ⬜ Update Privacy Policy if collection method changes

## 5. Analytics Setup

- ⬜ Choose privacy-respecting analytics (e.g. Vercel Analytics, Plausible)
- ⬜ Add to landing page
- ⬜ Define key conversion events (badge clicks, waitlist signups)
- ⬜ Confirm analytics disclosure matches Privacy Policy

## 6. Privacy & Terms Status

- ✅ Privacy Policy page live (`/privacy`) — includes Accessibility Service
  disclosure, data collection, analytics, "no selling data"
- ✅ Terms of Service page live (`/terms`) — subscriptions, refunds, liability
- ⬜ Legal review before formal Google Play / App Store submission
- ⬜ Add legal entity name + governing-law jurisdiction
- ⬜ Keep "Last updated" dates current on any edits

## 7. Future Integration

- ⬜ Link landing CTAs to the real app store listings once published
- ⬜ Optional: deep-link / smart-banner for app installs
- ⬜ Optional: blog / dhikr content section for SEO
