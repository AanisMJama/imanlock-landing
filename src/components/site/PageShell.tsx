import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      {/* Title band */}
      <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-iman-light/70 to-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-iman-primary/10 blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-iman-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-iman-primary">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-iman-deep sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              {intro}
            </p>
          )}
          {updated && (
            <p className="mt-4 text-sm text-slate-400">Last updated: {updated}</p>
          )}
        </div>
      </div>

      {/* Body */}
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-14">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-slate-100 py-7 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold text-iman-deep sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-600">
        {children}
      </div>
    </section>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iman-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
