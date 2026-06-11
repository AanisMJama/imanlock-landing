import type { Metadata } from "next";
import { PageShell, Section, Bullets } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — ImanLock",
  description:
    "How ImanLock collects, uses, and protects your data. Learn about our analytics, device permissions, and Accessibility Service usage. We never sell your personal data.",
  alternates: { canonical: "https://imanlock.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your trust is an amanah. This policy explains what ImanLock collects, how it is used, and the choices you have."
      updated="June 10, 2026"
    >
      <Section title="What ImanLock Does">
        <p>
          ImanLock is a mindfulness and digital wellbeing app for Muslims. It
          helps you pause before opening distracting apps by guiding you through
          a moment of remembrance — checking in with your mood, reflecting on a
          verse of the Quran, and making dua — before your selected apps unlock.
        </p>
        <p>
          Our goal is to help you build a healthier, more intentional
          relationship with your phone while strengthening your connection with
          Allah.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>We aim to collect as little personal information as possible.</p>
        <Bullets
          items={[
            <>
              <strong>Email address</strong> — only if you join our waitlist or
              contact our support team. This is used to communicate with you and
              for nothing else.
            </>,
            <>
              <strong>App usage &amp; preferences</strong> — settings such as
              which apps you choose to lock, your streaks, moods, and reflection
              history. Where possible, this is stored locally on your device.
            </>,
            <>
              <strong>Analytics data</strong> — anonymized, aggregated usage
              events (see “Analytics” below).
            </>,
            <>
              <strong>Device &amp; technical information</strong> — device model,
              operating system version, and crash diagnostics used to keep the
              app stable.
            </>,
          ]}
        />
      </Section>

      <Section title="Email Addresses &amp; Waitlist">
        <p>
          If you join the ImanLock waitlist or email us, we store your email
          address solely to send you product updates, respond to your inquiry,
          or notify you when the app becomes available in your region. You can
          ask us to delete your email at any time by contacting{" "}
          <a
            href="mailto:hello@imanlock.app"
            className="font-semibold text-iman-primary hover:underline"
          >
            hello@imanlock.app
          </a>
          . We do not send marketing from third parties.
        </p>
      </Section>

      <Section title="Analytics Usage">
        <p>
          We use privacy-respecting analytics to understand how features are
          used and to improve the app. Analytics events are aggregated and
          anonymized — they are not used to identify you personally. We do not
          use analytics to track you across other apps or websites.
        </p>
      </Section>

      <Section title="Device Permissions">
        <p>
          ImanLock only requests permissions needed for core functionality, and
          explains each one before requesting it:
        </p>
        <Bullets
          items={[
            <>
              <strong>Accessibility Service</strong> — to detect when a locked
              app is opened so the reflection screen can appear (see disclosure
              below).
            </>,
            <>
              <strong>Usage access / display over other apps</strong> — to show
              the ImanLock lock screen on top of distracting apps.
            </>,
            <>
              <strong>Notifications</strong> — for Salah reminders, dhikr
              prompts, and streak nudges. Optional and can be disabled.
            </>,
          ]}
        />
      </Section>

      <Section title="Accessibility Service Disclosure">
        <p>
          ImanLock uses Android&apos;s Accessibility Service to provide its core
          feature: gently intervening before you open a distracting app.
        </p>
        <Bullets
          items={[
            "The Accessibility Service is used only to detect which app is currently in the foreground so ImanLock can display the remembrance/lock screen for apps you have chosen to lock.",
            "ImanLock does not read, collect, log, or transmit the content of your screen, your keystrokes, your messages, or any personal data accessed via the Accessibility Service.",
            "All processing related to the Accessibility Service happens locally on your device.",
            "You may disable the Accessibility Service at any time in your device settings, which will turn off app blocking.",
          ]}
        />
      </Section>

      <Section title="How App Blocking Works">
        <p>
          When you choose apps to lock, ImanLock detects when one of those apps
          is launched and presents a full-screen reflection before granting
          access. This blocking happens entirely on your device. ImanLock does
          not see what you do inside those apps — only that one of your selected
          apps was opened, so it can show the lock screen.
        </p>
      </Section>

      <Section title="How We Use Your Information">
        <Bullets
          items={[
            "To provide and maintain the app's core features.",
            "To personalize your reflections, duas, and reminders.",
            "To respond to your support requests.",
            "To diagnose crashes and improve performance and reliability.",
          ]}
        />
      </Section>

      <Section title="Data Sharing — We Never Sell Your Data">
        <p>
          <strong>
            ImanLock does not sell, rent, or trade your personal data to anyone.
          </strong>{" "}
          We do not share your personal information with advertisers. Limited
          data may be processed by trusted service providers (such as analytics
          or crash-reporting tools) strictly to operate the app, under
          agreements that require them to protect your data.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          We keep personal information only as long as necessary to provide the
          service or as required by law. You can request deletion of your data
          (such as your email) at any time.
        </p>
      </Section>

      <Section title="Security">
        <p>
          We use reasonable technical and organizational measures to protect
          your information. However, no method of transmission or storage is
          100% secure, and we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          ImanLock is not directed to children under 13 (or the minimum age
          required in your country). We do not knowingly collect personal
          information from children. If you believe a child has provided us
          data, please contact us and we will delete it.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>
          Depending on your region, you may have the right to access, correct,
          or delete your personal data, and to object to or restrict certain
          processing. To exercise these rights, email us at{" "}
          <a
            href="mailto:hello@imanlock.app"
            className="font-semibold text-iman-primary hover:underline"
          >
            hello@imanlock.app
          </a>
          .
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Material changes
          will be reflected by updating the “Last updated” date above and, where
          appropriate, through an in-app notice.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have any questions about this Privacy Policy or your data,
          please reach out:
        </p>
        <p>
          <a
            href="mailto:hello@imanlock.app"
            className="font-semibold text-iman-primary hover:underline"
          >
            hello@imanlock.app
          </a>
        </p>
      </Section>
    </PageShell>
  );
}
