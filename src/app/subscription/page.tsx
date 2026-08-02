import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { SubscriptionPanel } from "@/components/site/SubscriptionPanel";

export const metadata: Metadata = {
  title: "ImanFocus Premium — ImanFocus",
  description:
    "ImanFocus is currently free to use. Premium features are planned for a future update, insha’Allah.",
  alternates: { canonical: "https://imanfocus.app/subscription" },
};

export default function SubscriptionPage() {
  return (
    <PageShell
      eyebrow="Account"
      title="ImanFocus Premium"
      intro="ImanFocus is currently free to use. Premium features are planned for a future update, insha’Allah."
    >
      <SubscriptionPanel />
    </PageShell>
  );
}
