import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Contact Us — ImanFocus",
  description:
    "Get in touch with the ImanFocus team at hello@imanfocus.app. We aim to respond within 48 hours.",
  alternates: { canonical: "https://imanfocus.app/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Contact ImanFocus"
      intro="Have a question, suggestion, or need help? We’d love to hear from you, insha’Allah."
    >
      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-100 bg-iman-light/50 p-6">
            <h3 className="text-base font-bold text-iman-deep">Email us</h3>
            <a
              href="mailto:hello@imanfocus.app"
              className="mt-2 inline-block font-semibold text-iman-primary hover:underline"
            >
              hello@imanfocus.app
            </a>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-iman-light/50 p-6">
            <h3 className="text-base font-bold text-iman-deep">Response time</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              We aim to respond within 48 hours. Thank you for your patience.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-iman-light/50 p-6">
            <h3 className="text-base font-bold text-iman-deep">
              Subscription help
            </h3>
            <p className="mt-1.5 text-sm text-slate-600">
              ImanFocus does not currently offer paid subscriptions. Premium
              features may be introduced in a future update.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
