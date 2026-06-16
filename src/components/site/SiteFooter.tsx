import { FooterLink } from "@/components/site/FooterLink";

export const FOOTER_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact Us", href: "/contact" },
  { label: "Manage Subscription", href: "/subscription" },
];

export function SiteFooter({ bordered = true }: { bordered?: boolean }) {
  return (
    <footer
      className={`px-6 pb-8 pt-6 text-center ${
        bordered ? "border-t border-slate-100" : ""
      }`}
    >
      <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-600">
        {FOOTER_LINKS.map((l, i) => (
          <span key={l.label} className="flex items-center gap-2">
            <FooterLink label={l.label} href={l.href} />
            {i < FOOTER_LINKS.length - 1 && (
              <span className="text-slate-300">·</span>
            )}
          </span>
        ))}
      </nav>
      <p className="mt-3 text-sm text-slate-500">
        © 2026 ImanFocus. All rights reserved.
      </p>
    </footer>
  );
}
