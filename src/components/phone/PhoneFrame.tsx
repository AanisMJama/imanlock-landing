"use client";

import type { ReactNode } from "react";

/**
 * Realistic phone bezel. Children render inside the screen area.
 * Scales with the `width` utility passed via className on the wrapper.
 */
export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Outer titanium frame */}
      <div className="relative rounded-[3rem] bg-gradient-to-b from-[#1b2a1f] via-[#0c160f] to-[#1b2a1f] p-[3px] shadow-phone">
        <div className="rounded-[2.85rem] bg-black p-[10px]">
          {/* Screen */}
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.25rem] bg-white">
            {/* Dynamic island */}
            <div className="pointer-events-none absolute left-1/2 top-2 z-50 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
            {children}
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute -left-[3px] top-[110px] h-9 w-[3px] rounded-l bg-[#0c160f]" />
      <div className="absolute -left-[3px] top-[160px] h-14 w-[3px] rounded-l bg-[#0c160f]" />
      <div className="absolute -left-[3px] top-[230px] h-14 w-[3px] rounded-l bg-[#0c160f]" />
      <div className="absolute -right-[3px] top-[180px] h-20 w-[3px] rounded-r bg-[#0c160f]" />
    </div>
  );
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const color = dark ? "text-white" : "text-iman-deep";
  return (
    <div
      className={`relative z-40 flex items-center justify-between px-6 pt-3 text-[11px] font-semibold ${color}`}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg viewBox="0 0 18 12" className="h-3 w-4 fill-current">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5" width="3" height="7" rx="1" />
          <rect x="10" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        {/* wifi */}
        <svg viewBox="0 0 16 12" className="h-3 w-4 fill-current">
          <path d="M8 11.5 1.2 4.7a9.6 9.6 0 0 1 13.6 0L8 11.5Z" opacity="0.95" />
        </svg>
        {/* battery */}
        <svg viewBox="0 0 26 12" className="h-3 w-6 fill-current">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" />
          <rect x="2" y="2" width="17" height="8" rx="1.5" />
          <rect x="24" y="3.5" width="2" height="5" rx="1" />
        </svg>
      </div>
    </div>
  );
}
