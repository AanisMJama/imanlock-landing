import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* ------------------------------------------------------------------ */
/*  Brand                                                              */
/* ------------------------------------------------------------------ */

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5FD63B" />
          <stop offset="100%" stopColor="#075C22" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#logoGrad)" />
      {/* padlock body */}
      <rect x="13" y="22" width="22" height="16" rx="5" fill="#ffffff" />
      {/* shackle */}
      <path
        d="M18 22v-4a6 6 0 0 1 12 0v4"
        stroke="#ffffff"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* crescent keyhole */}
      <path
        d="M27 28.5a3.4 3.4 0 1 0 0 5.6 4 4 0 1 1 0-5.6Z"
        fill="#33A60A"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Mood icons (colorful)                                              */
/* ------------------------------------------------------------------ */

export function MoodGrateful(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="14" fill="#FEF3C7" />
      <path
        d="M16 9.5c1.3-2.4 6-2 6 1.4 0 2.8-3.8 5.6-6 7-2.2-1.4-6-4.2-6-7 0-3.4 4.7-3.8 6-1.4Z"
        fill="#F59E0B"
      />
      <circle cx="11" cy="20.5" r="1.3" fill="#F59E0B" />
      <circle cx="21" cy="20.5" r="1.3" fill="#F59E0B" />
    </svg>
  );
}

export function MoodAnxious(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="14" fill="#FCE7F3" />
      <circle cx="11.5" cy="14" r="1.6" fill="#DB2777" />
      <circle cx="20.5" cy="14" r="1.6" fill="#DB2777" />
      <path
        d="M11 21c1.4-1.6 3-2.2 5-2.2s3.6.6 5 2.2"
        stroke="#DB2777"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 9.5c1.2-1 2.6-1 3.8-.2M23 9.5c-1.2-1-2.6-1-3.8-.2"
        stroke="#DB2777"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoodStressed(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="14" fill="#FEE2E2" />
      <path
        d="M9 13.5l3 1.4M9 16l3-1.4"
        stroke="#EF4444"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M23 13.5l-3 1.4M23 16l-3-1.4"
        stroke="#EF4444"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 22c1.2-1.4 2.6-2 4-2s2.8.6 4 2"
        stroke="#EF4444"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoodDistracted(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="14" fill="#EDE9FE" />
      <circle cx="11.5" cy="14.5" r="2.4" fill="#7C3AED" />
      <circle cx="20.8" cy="13.5" r="1.6" fill="#7C3AED" />
      <path
        d="M11 21h10"
        stroke="#7C3AED"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M25 9l2-1M25 12l2.4 0"
        stroke="#7C3AED"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoodPeaceful(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="14" fill="#D1FAE5" />
      <path
        d="M9.5 14.5c1-1.4 3.2-1.4 4.2 0M18.3 14.5c1-1.4 3.2-1.4 4.2 0"
        stroke="#059669"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M11.5 19.5c1.4 1.6 3 2.2 4.5 2.2s3.1-.6 4.5-2.2"
        stroke="#059669"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoodTired(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="14" fill="#DBEAFE" />
      <path
        d="M9.5 14.5h4M18.5 14.5h4"
        stroke="#2563EB"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="16" cy="21" r="2" fill="#2563EB" />
      <path
        d="M22 8l3 0-3 3 3 0"
        stroke="#2563EB"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature / UI icons                                                 */
/* ------------------------------------------------------------------ */

export function IconLock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="10" width="16" height="11" rx="3.5" fill="currentColor" />
      <path
        d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15.5" r="1.8" fill="#fff" />
    </svg>
  );
}

export function IconQuran(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5C4.7 19 4 18.3 4 17.5v-12Z"
        fill="currentColor"
      />
      <path
        d="M20 5.5C20 4.7 19.3 4 18.5 4H13v15h5.5c.8 0 1.5-.7 1.5-1.5v-12Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path d="M12 4v15" stroke="#fff" strokeWidth="1.4" />
    </svg>
  );
}

export function IconHadith(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" fill="currentColor" />
      <path
        d="M8 9h8M8 12h8M8 15h5"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconDhikr(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="6" r="2" fill="currentColor" />
      <circle cx="6.5" cy="9" r="1.7" fill="currentColor" />
      <circle cx="17.5" cy="9" r="1.7" fill="currentColor" />
      <circle cx="5" cy="14.5" r="1.7" fill="currentColor" />
      <circle cx="19" cy="14.5" r="1.7" fill="currentColor" />
      <circle cx="8.5" cy="18.5" r="1.7" fill="currentColor" />
      <circle cx="15.5" cy="18.5" r="1.7" fill="currentColor" />
      <path
        d="M12 8c-3 1-5 3.5-5.5 6.5M12 8c3 1 5 3.5 5.5 6.5"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.4"
      />
    </svg>
  );
}

export function IconDua(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3c1.6 2.4 1.6 4.8 0 7.2-1.6-2.4-1.6-4.8 0-7.2Z"
        fill="currentColor"
      />
      <path
        d="M8 11c-2 1.5-3 4-3 7h6c0-3-1-5.5-3-7ZM16 11c2 1.5 3 4 3 7h-6c0-3 1-5.5 3-7Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}

export function IconMood(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <circle cx="9" cy="10.5" r="1.3" fill="#fff" />
      <circle cx="15" cy="10.5" r="1.3" fill="#fff" />
      <path
        d="M8.5 15c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconSalah(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 20V11l6-5 6 5v9H6Z"
        fill="currentColor"
      />
      <path
        d="M12 6V3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="3" r="1.3" fill="currentColor" />
      <path d="M10 20v-4h4v4" fill="#fff" />
    </svg>
  );
}

export function IconStreak(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13 3c.5 3-1.5 4.5-3 6.5C8.2 11.8 7 13.6 7 16a5 5 0 0 0 10 0c0-2-1-3.8-2-5 .2 1.2-.3 2.3-1.3 2.8.5-2.2-.2-4.5-1.7-6 .4 1.6-.2 2.6-1 3.4C9.4 9 11 5.5 13 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Misc UI                                                            */
/* ------------------------------------------------------------------ */

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
        fill="currentColor"
      />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 20s-7-4.4-9.2-8.6C1.3 8.6 2.6 5.5 5.8 5.5c1.9 0 3.2 1.1 4.2 2.6C11 6.6 12.3 5.5 14.2 5.5c3.2 0 4.5 3.1 3 5.9C15 15.6 12 20 12 20Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Brand app icons used in demo (Instagram-like, etc.) */
export function AppIcon({
  gradientId,
  from,
  to,
  glyph,
  className = "h-full w-full",
}: {
  gradientId: string;
  from: string;
  to: string;
  glyph: React.ReactNode;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${gradientId})`} />
      {glyph}
    </svg>
  );
}
