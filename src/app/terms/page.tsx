import type { Metadata } from "next";
import { PageShell, Section, Bullets } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service — ImanFocus",
  description:
    "The terms governing your use of ImanFocus, including permitted use, subscriptions, refunds, limitation of liability, and account termination.",
  alternates: { canonical: "https://imanfocus.app/terms" },
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      intro="Please read these terms carefully. By using ImanFocus, you agree to the terms below."
      updated="June 10, 2026"
    >
      <Section title="1. Acceptance of Terms">
        <p>
          By downloading, installing, or using the ImanFocus application (the
          “App”), you agree to be bound by these Terms of Service (the “Terms”).
          If you do not agree to these Terms, please do not use the App. If you
          use the App on behalf of an organization, you represent that you have
          authority to accept these Terms on its behalf.
        </p>
      </Section>

      <Section title="2. Description of Service &amp; Permitted Use">
        <p>
          ImanFocus is a digital wellbeing app that helps you pause and remember
          Allah before using distracting apps. You may use the App for your
          personal, non-commercial purposes in accordance with these Terms and
          all applicable laws.
        </p>
        <p>You agree not to:</p>
        <Bullets
          items={[
            "Use the App for any unlawful, harmful, or fraudulent purpose.",
            "Reverse engineer, decompile, or attempt to extract the source code of the App, except where permitted by law.",
            "Interfere with, disrupt, or attempt to gain unauthorized access to the App or its systems.",
            "Resell, redistribute, or commercially exploit the App without our written permission.",
          ]}
        />
      </Section>

      <Section title="3. User Responsibilities">
        <Bullets
          items={[
            "You are responsible for the device permissions you grant and for configuring the App to suit your needs.",
            "You are responsible for maintaining the confidentiality of any account credentials, if applicable.",
            "You acknowledge that ImanFocus is a tool to support mindful phone use and is not a substitute for professional, medical, or religious advice.",
          ]}
        />
      </Section>

      <Section title="4. Subscription Terms">
        <p>
          ImanFocus may offer optional paid subscriptions that unlock premium
          features. The following applies to subscriptions:
        </p>
        <Bullets
          items={[
            "Subscriptions are billed through the Apple App Store or Google Play, according to the plan and price shown at purchase.",
            "Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period.",
            "Your account will be charged for renewal within 24 hours prior to the end of the current period.",
            "You can manage or cancel your subscription at any time through your App Store or Google Play account settings.",
          ]}
        />
      </Section>

      <Section title="5. Refund Policy">
        <p>
          All purchases are processed by the Apple App Store or Google Play.
          Refunds are therefore subject to the policies of those platforms.
          Please submit refund requests directly through Apple or Google. Where
          required by applicable law, you may have additional refund rights, and
          nothing in these Terms limits those rights.
        </p>
      </Section>

      <Section title="6. Intellectual Property">
        <p>
          The App, including its design, content, logos, and software, is owned
          by ImanFocus and protected by intellectual property laws. Quranic
          verses and authentic narrations are presented respectfully for the
          benefit of users. We grant you a limited, non-exclusive,
          non-transferable license to use the App for personal use.
        </p>
      </Section>

      <Section title="7. Disclaimer &amp; Limitation of Liability">
        <p>
          The App is provided “as is” and “as available” without warranties of
          any kind, whether express or implied. We do not warrant that the App
          will be uninterrupted, error-free, or that app blocking will function
          perfectly on every device or operating system.
        </p>
        <p>
          To the maximum extent permitted by law, ImanFocus and its team shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, arising from your use of or
          inability to use the App.
        </p>
      </Section>

      <Section title="8. Account Termination">
        <p>
          You may stop using the App and delete it at any time. We may suspend
          or terminate your access if you violate these Terms or use the App in
          a way that could cause harm or legal liability. Upon termination, the
          rights granted to you under these Terms will end.
        </p>
      </Section>

      <Section title="9. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Continued use of the App
          after changes take effect constitutes acceptance of the revised Terms.
          We will update the “Last updated” date above when changes are made.
        </p>
      </Section>

      <Section title="10. Contact Information">
        <p>
          For questions about these Terms, contact us at{" "}
          <a
            href="mailto:hello@imanfocus.app"
            className="font-semibold text-iman-primary hover:underline"
          >
            hello@imanfocus.app
          </a>
          .
        </p>
      </Section>
    </PageShell>
  );
}
