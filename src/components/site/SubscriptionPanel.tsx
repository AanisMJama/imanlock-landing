import { IconSparkle, IconCheck } from "@/components/icons";

const PLANNED_FEATURES = [
  "Unlock by Remembrance",
  "Advanced Hasanat insights",
  "Additional Quran and Hadith content",
  "Personalised reminders",
  "Extended streak and habit insights",
];

export function SubscriptionPanel() {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-iman-primary/10 blur-3xl" />
        <div className="flex items-center gap-2 text-iman-primary">
          <IconSparkle className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">
            Future update
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-extrabold text-iman-deep">
          Premium is coming later
        </h3>
        <p className="mt-2 text-slate-600">
          There is currently no paid subscription, purchase, billing account, or
          restoration process available in ImanFocus.
        </p>
      </div>

      <div className="rounded-3xl border border-iman-primary/15 bg-gradient-to-br from-iman-light/70 to-white p-6 shadow-card sm:p-8">
        <h3 className="text-lg font-bold text-iman-deep">
          Planned Premium Features
        </h3>
        <ul className="mt-4 space-y-2.5">
          {PLANNED_FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-iman-primary/15 text-iman-primary">
                <IconCheck className="h-3 w-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-slate-500">
          Planned features may change before release.
        </p>
      </div>
    </div>
  );
}
