"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      onClick={() =>
        trackEvent({ action: "footer_link_click", label, href })
      }
      className="transition-colors hover:text-iman-primary"
    >
      {label}
    </Link>
  );
}
