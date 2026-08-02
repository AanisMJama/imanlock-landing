import type { Metadata } from "next";
import { PageShell, Section, Bullets } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — ImanFocus",
  description:
    "How ImanFocus collects, uses, and protects your data. Learn about on-device storage, notifications, and analytics. We never sell your personal data.",
  alternates: { canonical: "https://imanfocus.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your trust is an amanah. This policy explains what ImanFocus collects, how it is used, and the choices you have."
      updated="August 2, 2026"
    >
      <Section title="What ImanFocus Does">
        <p>
          ImanFocus is a mindfulness app for Muslims. It helps you pause while
          using your phone, remember Allah through Quran, dhikr, reflection, and
          hadith, track your hasanat and streaks, and return to your day with
          intention.
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
              <strong>Email address</strong> — only if you contact our support
              team. This is used to respond to you and for nothing else.
            </>,
            <>
              <strong>App preferences &amp; progress</strong> — settings such as
              session preferences, Quran reading progress, hasanat totals,
              streaks, and reflection history. Where possible, this is stored
              locally on your device.
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

      <Section title="Email &amp; Support">
        <p>
          If you email us, we store your email address solely to respond to your
          inquiry. You can ask us to delete your email at any time by contacting{" "}
          <a
            href="mailto:hello@imanfocus.app"
            className="font-semibold text-iman-primary hover:underline"
          >
            hello@imanfocus.app
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
          ImanFocus only requests permissions needed for core functionality, and
          explains each one before requesting it:
        </p>
        <Bullets
          items={[
            <>
              <strong>Notifications</strong> — for mindful session reminders,
              dhikr prompts, and streak nudges. Optional and can be disabled.
            </>,
          ]}
        />
      </Section>

      <Section title="On-Device Features">
        <p>
          Quran reading progress, hasanat tracking, reflection check-ins,
          streaks, and mindful session activity are stored locally on your
          device unless you explicitly choose to share something outside the app
          (for example, by using a standard iOS share sheet). This information
          is used solely to provide ImanFocus&apos;s spiritual-growth features.
        </p>
        <p>
          <strong>No advertising or sale of data.</strong> ImanFocus does not
          sell your personal information. We do not use your app data for
          advertising, and no third-party advertising networks receive this
          information from ImanFocus.
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
            ImanFocus does not sell, rent, or trade your personal data to anyone.
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
          ImanFocus is not directed to children under 13 (or the minimum age
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
            href="mailto:hello@imanfocus.app"
            className="font-semibold text-iman-primary hover:underline"
          >
            hello@imanfocus.app
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
            href="mailto:hello@imanfocus.app"
            className="font-semibold text-iman-primary hover:underline"
          >
            hello@imanfocus.app
          </a>
        </p>
      </Section>
    </PageShell>
  );
}
