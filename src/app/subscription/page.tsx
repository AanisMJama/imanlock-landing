import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { SubscriptionPanel } from "@/components/site/SubscriptionPanel";

export const metadata: Metadata = {
  title: "Manage Subscription — ImanFocus",
  description:
    "View your ImanFocus subscription status, restore purchases, and manage your plan.",
  alternates: { canonical: "https://imanfocus.app/subscription" },
};

export default function SubscriptionPage() {
  return (
    <PageShell
      eyebrow="Account"
      title="Manage Subscription"
      intro="View your plan, restore previous purchases, and manage your ImanFocus subscription."
    >
      <SubscriptionPanel />
    </PageShell>
  );
}
