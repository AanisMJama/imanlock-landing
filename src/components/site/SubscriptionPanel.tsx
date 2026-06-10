"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconSparkle, IconCheck } from "@/components/icons";

export function SubscriptionPanel() {
  const [notice, setNotice] = useState<string | null>(null);

  const ping = (msg: string) => {
    setNotice(msg);
    window.clearTimeout((ping as unknown as { _t?: number })._t);
    (ping as unknown as { _t?: number })._t = window.setTimeout(
      () => setNotice(null),
      3500
    );
  };

  return (
    <div className="space-y-6">
      {/* Status card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-iman-primary/10 blur-3xl" />
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-iman-primary">
            Current Plan
          </span>
          <span className="rounded-full bg-iman-light px-3 py-1 text-xs font-bold text-iman-primary">
            Free
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-extrabold text-iman-deep">
          No active subscription
        </h3>
        <p className="mt-2 text-slate-600">
          You&apos;re currently on the free plan. Premium subscription features
          are on the way.
        </p>

        <div className="mt-6 rounded-2xl bg-iman-light/60 p-4">
          <div className="flex items-center gap-2 text-iman-deep">
            <IconSparkle className="h-5 w-5 text-iman-primary" />
            <span className="text-sm font-semibold">
              Subscription features coming soon.
            </span>
          </div>
        </div>
      </div>

      {/* Premium preview card */}
      <div className="rounded-3xl border border-iman-primary/15 bg-gradient-to-br from-iman-light/70 to-white p-6 shadow-card sm:p-8">
        <h3 className="text-lg font-bold text-iman-deep">
          ImanLock Premium <span className="text-iman-primary">(soon)</span>
        </h3>
        <ul className="mt-4 space-y-2.5">
          {[
            "Unlimited app locks & schedules",
            "Advanced AI dua personalization",
            "Full Quran & hadith reflection library",
            "Detailed streak & habit insights",
          ].map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-iman-primary/15 text-iman-primary">
                <IconCheck className="h-3 w-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => ping("Restore purchases will be available once subscriptions launch.")}
          className="flex-1 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-iman-deep transition-colors hover:bg-iman-light"
        >
          Restore Purchases
        </button>
        <button
          onClick={() => ping("Subscription management will open in your App Store / Google Play account.")}
          className="flex-1 rounded-2xl bg-iman-primary px-6 py-3.5 text-sm font-bold text-white shadow-btn-primary transition-transform hover:-translate-y-0.5"
        >
          Manage Subscription
        </button>
      </div>

      <AnimatePresence>
        {notice && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="rounded-2xl bg-iman-deep px-4 py-3 text-center text-sm font-medium text-white"
          >
            {notice}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
