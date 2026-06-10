import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — ImanLock",
  description:
    "Get in touch with the ImanLock team. Send us a message or email support@imanlock.app. We aim to respond within 48 hours.",
  alternates: { canonical: "https://imanlock.app/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Contact Us"
      intro="Have a question, suggestion, or need help? We'd love to hear from you, insha'Allah."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <ContactForm />

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-100 bg-iman-light/50 p-6">
            <h3 className="text-base font-bold text-iman-deep">Email us</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Prefer email? Reach us directly at:
            </p>
            <a
              href="mailto:support@imanlock.app"
              className="mt-2 inline-block font-semibold text-iman-primary hover:underline"
            >
              support@imanlock.app
            </a>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-iman-light/50 p-6">
            <h3 className="text-base font-bold text-iman-deep">Response time</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              We aim to respond within{" "}
              <span className="font-semibold text-iman-deep">48 hours</span>.
              Thank you for your patience.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-iman-light/50 p-6">
            <h3 className="text-base font-bold text-iman-deep">
              Looking for billing help?
            </h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Visit the{" "}
              <a
                href="/subscription"
                className="font-semibold text-iman-primary hover:underline"
              >
                Manage Subscription
              </a>{" "}
              page for subscription options.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
