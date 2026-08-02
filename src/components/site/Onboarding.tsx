"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogoMark } from "@/components/icons";

type Provider = "apple" | "google" | "email";

/**
 * Illustration-only material tones (NOT brand UI surfaces).
 * All backgrounds, gradients, buttons, borders, and text accents use the
 * `iman-*` brand tokens from tailwind.config.ts:
 *   primary #33A60A · mid #1F8A0A · dark #075C22 · deep #053F18
 *   light  #EAF7E4 · glow #5FD63B
 */
const ART = {
  gold: "#E8B23A", // crescent moon
  goldSoft: "#F2D27A",
} as const;

export function Onboarding() {
  const router = useRouter();
  const [notice, setNotice] = useState<string | null>(null);

  // The landing site has no auth backend yet. When the ImanFocus app ships its
  // real Apple/Google/Email flow, swap these handlers to route there. For now
  // we surface a graceful, honest notice instead of a broken or fake link.
  const onProvider = (provider: Provider) => {
    const labels: Record<Provider, string> = {
      apple: "Apple",
      google: "Google",
      email: "Email",
    };
    setNotice(
      `${labels[provider]} sign-in connects to the ImanFocus app at launch.`,
    );
  };

  const onSkip = () => {
    router.push("/");
  };

  return (
    <main className="flex min-h-screen w-full justify-center bg-white px-4 py-6">
      <div className="flex w-full max-w-[440px] flex-col">
        {/* ---------------------------------------------------------------- */}
        {/*  HERO CARD — rich dark-green gradient (brand tokens)             */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-iman-mid via-iman-dark to-iman-deep px-6 pb-7 pt-6 shadow-card-lg">
          {/* atmospheric lighting */}
          <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-iman-glow/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-10 h-60 w-60 rounded-full bg-iman-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-iman-glow/10 blur-3xl" />

          {/* header */}
          <header className="relative flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="ImanFocus home"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/12 ring-1 ring-white/20">
                <LogoMark className="h-7 w-7" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                ImanFocus
              </span>
            </Link>
            <span className="arabic glass rounded-full px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/20">
              السلام عليكم
            </span>
          </header>

          {/* headline — most prominent text */}
          <h1 className="relative mt-6 text-balance text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[40px]">
            Give a few minutes of your time to{" "}
            <span className="text-iman-glow">Allah.</span>
          </h1>

          {/* Islamic illustration scene */}
          <div className="relative mt-5">
            <IslamicScene />
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  SUPPORTING CARD                                                 */}
        {/* ---------------------------------------------------------------- */}
        <div className="-mt-5 flex items-center gap-3.5 rounded-3xl border border-slate-100 bg-white p-4 shadow-card">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-iman-light text-iman-primary">
            <ClockGlyph className="h-6 w-6" />
          </span>
          <p className="text-[14.5px] font-medium leading-snug text-slate-600">
            Pause with intention, remember Allah, and grow closer to Him every
            day.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/*  CTA + AUTH BUTTONS (functionality unchanged)                    */}
        {/* ---------------------------------------------------------------- */}
        <p className="mt-7 text-center text-base font-bold text-iman-deep">
          Let&apos;s get you started
        </p>

        <div className="mt-4 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => onProvider("apple")}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-black px-6 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            <AppleGlyph className="h-5 w-5" />
            Continue with Apple
          </button>

          <button
            type="button"
            onClick={() => onProvider("google")}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-bold text-iman-deep transition-transform hover:-translate-y-0.5"
          >
            <GoogleGlyph className="h-5 w-5" />
            Continue with Google
          </button>

          <button
            type="button"
            onClick={() => onProvider("email")}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-bold text-iman-deep transition-transform hover:-translate-y-0.5"
          >
            <MailGlyph className="h-5 w-5 text-iman-primary" />
            Continue with Email
          </button>

          <button
            type="button"
            onClick={onSkip}
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-iman-primary px-6 py-3.5 text-[15px] font-bold text-white shadow-btn-primary transition-transform hover:-translate-y-0.5"
          >
            Skip for now
            <ArrowGlyph className="h-4 w-4" />
          </button>

          {notice ? (
            <p
              role="status"
              className="rounded-2xl border border-iman-primary/20 bg-iman-light/60 px-4 py-3 text-center text-sm font-medium text-iman-dark"
            >
              {notice}
            </p>
          ) : null}
        </div>

        {/* footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          By continuing, you agree to our{" "}
          <Link
            href="/terms"
            className="font-semibold text-iman-primary hover:underline"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-semibold text-iman-primary hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Illustration: Quran on a rehal, mosque + crescent + stars          */
/* ------------------------------------------------------------------ */

function IslamicScene() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[330px]">
      {/* Islamic background: mosque silhouette, crescent, stars, soft glow */}
      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ob-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5FD63B" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#5FD63B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#5FD63B" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ob-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={ART.goldSoft} />
            <stop offset="100%" stopColor={ART.gold} />
          </linearGradient>
        </defs>

        {/* soft atmospheric lighting */}
        <rect x="30" y="40" width="260" height="260" fill="url(#ob-halo)" />

        {/* crescent moon */}
        <g transform="translate(250 56)">
          <path
            d="M0 0a18 18 0 1 0 13 31A14.4 14.4 0 1 1 13 0 18 18 0 0 0 0 0Z"
            fill="url(#ob-gold)"
          />
        </g>

        {/* stars */}
        <g fill="#FFFFFF">
          <circle cx="64" cy="58" r="2.4" opacity="0.85" />
          <circle cx="104" cy="38" r="1.6" opacity="0.6" />
          <circle cx="150" cy="46" r="1.8" opacity="0.7" />
          <circle cx="206" cy="40" r="1.5" opacity="0.55" />
          <circle cx="280" cy="120" r="1.8" opacity="0.6" />
          <circle cx="40" cy="110" r="1.6" opacity="0.5" />
        </g>
        <path
          d="M196 64c.6 2 .9 2.3 2.9 2.9-2 .6-2.3.9-2.9 2.9-.6-2-.9-2.3-2.9-2.9 2-.6 2.3-.9 2.9-2.9Z"
          fill="#5FD63B"
          opacity="0.9"
        />

        {/* mosque silhouette */}
        <g fill="#053F18" opacity="0.5">
          <rect x="74" y="150" width="9" height="92" rx="4.5" />
          <path d="M78.5 132c-6 0-9 5-9 11h18c0-6-3-11-9-11Z" />
          <circle cx="78.5" cy="129" r="3.2" />
          <rect x="237" y="150" width="9" height="92" rx="4.5" />
          <path d="M241.5 132c-6 0-9 5-9 11h18c0-6-3-11-9-11Z" />
          <circle cx="241.5" cy="129" r="3.2" />
          <path d="M112 174c-10 0-16 7-16 17h32c0-10-6-17-16-17Z" />
          <rect x="98" y="191" width="28" height="51" />
          <path d="M208 174c-10 0-16 7-16 17h32c0-10-6-17-16-17Z" />
          <rect x="194" y="191" width="28" height="51" />
          <path d="M160 120c-17 0-28 12-28 28h56c0-16-11-28-28-28Z" />
          <path d="M160 109v11" stroke="#053F18" strokeWidth="3" />
          <rect x="135" y="148" width="50" height="94" />
        </g>
      </svg>

      {/* Realistic Quran on a rehal — the actual ImanFocus app illustration,
          now with a transparent background so it floats on the hero */}
      <div className="absolute inset-x-4 bottom-8 top-16 grid place-items-center">
        <Image
          src="/illustrations/open-quran@2x.webp"
          alt="An open Quran resting on a wooden rehal stand"
          className="h-auto w-[82%] max-w-[260px] drop-shadow-[0_22px_28px_rgba(0,0,0,0.45)]"
          width={1140}
          height={869}
          sizes="(max-width: 480px) 62vw, 260px"
          priority
        />
      </div>

    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  UI glyphs                                                          */
/* ------------------------------------------------------------------ */

type GlyphProps = { className?: string };

function AppleGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.71-1.04-2.74-4.13Z" />
      <path d="M14.6 4.77c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44Z" />
    </svg>
  );
}

function GoogleGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9l3.3-2.6Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 7.8 9.4 6.1 12 6.1Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function MailGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
