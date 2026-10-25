import Link from "next/link";
import { LogoMark } from "@/components/icons";

export function SiteHeader({ showBackLink = true }: { showBackLink?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#24262b]/95 text-white shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ImanFocus home">
          <LogoMark className="h-9 w-9" />
          <span className="text-lg font-bold tracking-tight text-white">
            Iman<span className="text-[#f45b21]">Focus</span>
          </span>
        </Link>
        {showBackLink && (
          <Link
            href="/"
            className="text-sm font-semibold text-white/80 transition-colors hover:text-orange-300"
          >
            ← Back to home
          </Link>
        )}
      </div>
    </header>
  );
}
