import type { Metadata } from "next";
import { Onboarding } from "@/components/site/Onboarding";

export const metadata: Metadata = {
  title: "Get Started — ImanFocus",
  description:
    "Give a few minutes of your time to Allah. Protect your focus, build better habits, and grow closer to Allah every day with ImanFocus.",
  alternates: { canonical: "https://imanfocus.app/onboarding" },
};

export default function OnboardingPage() {
  return <Onboarding />;
}
