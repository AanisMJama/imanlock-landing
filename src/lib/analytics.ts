// Google Analytics 4 helpers for ImanFocus.
// Loaded only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set (see GoogleAnalytics.tsx).

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Send a page_view for client-side route changes (App Router). */
export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

export type AnalyticsEvent =
  | { action: "join_early_access_click"; source: string }
  | {
      action: "waitlist_submission";
      source: string;
      status: "success" | "duplicate";
    }
  | { action: "footer_link_click"; label: string; href: string };

/** Fire a custom GA4 event. No-ops when GA is not configured. */
export function trackEvent(event: AnalyticsEvent) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  const { action, ...params } = event;
  window.gtag("event", action, params);
}
