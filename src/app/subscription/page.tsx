import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { SubscriptionPanel } from "@/components/site/SubscriptionPanel";

export const metadata: Metadata = {
  title: "Manage Subscription — ImanLock",
  description:
    "View your ImanLock subscription status, restore purchases, and manage your plan. Premium subscription features are coming soon.",
  alternates: { canonical: "https://imanlock.app/subscription" },
};

export default function SubscriptionPage() {
  return (
    <PageShell
      eyebrow="Account"
      title="Manage Subscription"
      intro="View your plan, restore previous purchases, and manage your ImanLock subscription."
    >
      <SubscriptionPanel />
    </PageShell>
  );
}
