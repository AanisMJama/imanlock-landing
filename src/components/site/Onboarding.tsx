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
  block: "#E5484D", // prohibition slash
} as const;

/**
 * Distraction apps shown blocked in the hero. Brand glyphs are the same
 * FontAwesome6 brand icons the ImanFocus app renders in AppIconCard, with the
 * identical brand tile colours from src/data/apps.ts.
 */
const BLOCKED_APPS = [
  { id: "instagram", label: "Instagram", color: "#E1306C", pos: "left-1 top-4" },
  { id: "tiktok", label: "TikTok", color: "#000000", pos: "right-1 top-4" },
  { id: "youtube", label: "YouTube", color: "#FF0000", pos: "-left-2 bottom-16" },
  {
    id: "snapchat",
    label: "Snapchat",
    color: "#FFFC00",
    glyph: "#111111",
    pos: "-right-2 bottom-16",
  },
] as const;

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
            Protect your focus, build better habits, and grow closer to Allah
            every day.
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

      {/* Blocked distraction apps — same FontAwesome6 brand glyphs and tile
          colours the ImanFocus app uses in AppIconCard */}
      {BLOCKED_APPS.map((app) => (
        <BlockedAppTile
          key={app.id}
          appId={app.id}
          label={app.label}
          color={app.color}
          glyphColor={"glyph" in app ? app.glyph : "#FFFFFF"}
          className={app.pos}
        />
      ))}
    </div>
  );
}

function BlockedAppTile({
  appId,
  label,
  color,
  glyphColor,
  className = "",
}: {
  appId: string;
  label: string;
  color: string;
  glyphColor: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} blocked`}
      className={`absolute h-[52px] w-[52px] ${className}`}
    >
      {/* App Store style rounded tile in the app's exact brand colour */}
      <div
        className="grid h-full w-full place-items-center rounded-[15px] shadow-[0_8px_18px_-6px_rgba(0,0,0,0.5)] ring-1 ring-black/5"
        style={{ backgroundColor: color }}
      >
        <BrandGlyph appId={appId} color={glyphColor} />
      </div>
      {/* clean prohibition ring + slash */}
      <svg
        viewBox="0 0 52 52"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke={ART.block}
          strokeWidth="3.5"
        />
        <line
          x1="9.5"
          y1="42.5"
          x2="42.5"
          y2="9.5"
          stroke={ART.block}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Brand glyphs — official FontAwesome 6 brand paths, matching the    */
/*  app's @expo/vector-icons FontAwesome6 glyphs in AppIconCard.       */
/* ------------------------------------------------------------------ */

function BrandGlyph({ appId, color }: { appId: string; color: string }) {
  const common = { fill: color, "aria-hidden": true as const };
  switch (appId) {
    case "instagram":
      return (
        <svg viewBox="0 0 448 512" className="h-[26px] w-[26px]" {...common}>
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 448 512" className="h-[24px] w-[24px]" {...common}>
          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 576 512" className="h-[26px] w-[26px]" {...common}>
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg viewBox="0 0 496 512" className="h-[26px] w-[26px]" {...common}>
          <path d="M496.926 366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.959-45.42a102.889 102.889 0 0 1-9.089-16.12c-1.054-3.013-1-4.724-.248-6.287a10.221 10.221 0 0 1 2.914-3.038c3.918-2.591 7.96-5.22 10.7-6.992 4.885-3.162 8.754-5.667 11.246-7.44 9.362-6.547 15.909-13.5 20-21.278a42.371 42.371 0 0 0 2.1-35.191c-6.2-16.318-21.613-26.449-40.287-26.449a55.543 55.543 0 0 0-11.718 1.24c-1.029.224-2.059.459-3.063.72.174-11.16-.074-22.94-1.066-34.534-3.522-40.758-17.794-62.123-32.674-79.16a130.167 130.167 0 0 0-33.281-26.783C309.515 9.388 288.949 0 256.16 0S202.954 9.388 184.327 21.475a129.643 129.643 0 0 0-33.331 26.795c-14.88 17.038-29.152 38.4-32.674 79.161-.992 11.594-1.24 23.374-1.066 34.534-1-.261-2.034-.5-3.063-.72a55.543 55.543 0 0 0-11.718-1.24c-18.674 0-34.063 10.131-40.287 26.449a42.413 42.413 0 0 0 2.1 35.215c4.09 7.774 10.637 14.731 20 21.278 2.492 1.773 6.361 4.278 11.246 7.44 2.641 1.71 6.51 4.222 10.31 6.733a10.5 10.5 0 0 1 3.286 3.3c.794 1.624.844 3.36-.36 6.56a102.673 102.673 0 0 1-8.879 15.71c-12.077 17.673-29.36 32.626-51.485 44.665-11.717 6.2-23.882 10.328-29.6 25.892-4.314 11.747-1.488 25.106 9.471 36.388a52.785 52.785 0 0 0 13.339 10.211 138.109 138.109 0 0 0 33.281 13.563 15.137 15.137 0 0 1 4.652 2.075c3.6 3.137 3.087 7.861 7.857 14.768a34.34 34.34 0 0 0 8.974 9.275c10.5 7.241 22.31 7.7 34.806 8.183 11.28.459 24.063.971 38.658 5.791 6.039 1.984 12.314 5.842 19.589 10.285C240.124 504.94 253.6 512 277.61 512c.359 0 .732-.012 1.116-.037 8.55-.4 17.4-1.7 25.728-3.733 15.412-3.726 31.07-9.747 42.9-13.563 4.652-1.512 9.359-2.717 12.682-2.717a8.7 8.7 0 0 1 2.6.349c8.7 1.488 11.871 5.97 17.39 12.838 5.978 7.434 11.971 14.917 21.029 19.515 9.781 4.971 21.749 5.408 33.554 5.408a169.85 169.85 0 0 0 28.4-2.4c11.785-1.984 18.456-3.733 24.806-7.466 4.59-2.7 10.273-6.014 15.412-12.5 4.59-5.791 7.018-13.075 7.732-21.625a32.451 32.451 0 0 0-2.554-14.917z" />
        </svg>
      );
    default:
      return null;
  }
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
