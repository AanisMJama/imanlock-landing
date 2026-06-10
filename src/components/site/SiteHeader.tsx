import Link from "next/link";
import { LogoMark } from "@/components/icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ImanLock home">
          <LogoMark className="h-9 w-9" />
          <span className="text-lg font-bold tracking-tight text-iman-deep">
            ImanLock
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-iman-primary transition-colors hover:text-iman-dark"
        >
          ← Back to home
        </Link>
      </div>
    </header>
  );
}
