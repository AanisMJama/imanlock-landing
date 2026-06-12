"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogoMark } from "@/components/icons";

type Provider = "apple" | "google" | "email";

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
    <main className="flex min-h-screen w-full justify-center bg-gradient-to-b from-iman-light/60 via-white to-white px-5 py-8">
      <div className="flex w-full max-w-[430px] flex-col">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="ImanFocus home">
            <LogoMark className="h-9 w-9" />
            <span className="text-lg font-bold tracking-tight text-iman-deep">
              ImanFocus
            </span>
          </Link>
          <span className="arabic rounded-full bg-iman-light px-3 py-1 text-sm font-semibold text-iman-dark">
            السلام عليكم
          </span>
        </header>

        {/* Headline */}
        <h1 className="mt-7 text-balance text-center text-[32px] font-extrabold leading-[1.12] tracking-tight text-iman-deep sm:text-4xl">
          Give a few minutes of your time to{" "}
          <span className="text-iman-primary">Allah.</span>
        </h1>

        {/* Illustration */}
        <div className="mt-6">
          <IslamicScene />
        </div>

        {/* Supporting copy */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-card">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-iman-light text-iman-primary">
            <ClockGlyph className="h-6 w-6" />
          </span>
          <p className="text-[14px] font-medium leading-snug text-slate-600">
            Protect your focus, build better habits, and grow closer to Allah
            every day.
          </p>
        </div>

        {/* CTA section */}
        <p className="mt-7 text-center text-base font-bold text-iman-deep">
          Let&apos;s get you started
        </p>

        <div className="mt-4 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => onProvider("apple")}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-bold text-iman-deep transition-transform hover:-translate-y-0.5"
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

        {/* Footer */}
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
/*  Illustration: Quran on a stand, mosque + crescent, blocked apps    */
/* ------------------------------------------------------------------ */

function IslamicScene() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px]">
      {/* Soft radial backdrop */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-iman-light to-white" />

      <svg
        viewBox="0 0 300 300"
        className="relative h-full w-full"
        role="img"
        aria-label="A Quran resting on a stand in front of a mosque and crescent moon, surrounded by blocked distraction apps"
      >
        {/* Crescent moon */}
        <g opacity="0.9">
          <path
            d="M150 40a26 26 0 1 0 18 44 21 21 0 1 1 0-44 26 26 0 0 0-18 0Z"
            fill="#33A60A"
            opacity="0.35"
          />
        </g>

        {/* Mosque silhouette */}
        <g fill="#075C22" opacity="0.16">
          {/* central dome */}
          <path d="M150 96c-13 0-22 10-22 22h44c0-12-9-22-22-22Z" />
          <rect x="128" y="118" width="44" height="40" rx="4" />
          {/* minarets */}
          <rect x="104" y="120" width="9" height="40" rx="4" />
          <path d="M108.5 110c-5 0-8 4-8 9h16c0-5-3-9-8-9Z" />
          <rect x="187" y="120" width="9" height="40" rx="4" />
          <path d="M191.5 110c-5 0-8 4-8 9h16c0-5-3-9-8-9Z" />
        </g>

        {/* Rehal (book stand) */}
        <g>
          <path
            d="M112 196l38 20 38-20"
            stroke="#8a5a2b"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M150 216v22"
            stroke="#8a5a2b"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M126 238h48"
            stroke="#8a5a2b"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>

        {/* Open Quran */}
        <g>
          <path
            d="M150 150c-14-9-30-9-44-4v44c14-5 30-5 44 4 14-9 30-9 44-4v-44c-14-5-30-5-44 4Z"
            fill="#ffffff"
            stroke="#33A60A"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M150 150v48" stroke="#33A60A" strokeWidth="3" />
          <path
            d="M120 162h18M120 172h18M162 162h18M162 172h18"
            stroke="#9CC9A6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Blocked distraction badges */}
      <BlockedBadge className="left-1 top-10" glyph={<CameraGlyph />} />
      <BlockedBadge className="right-1 top-10" glyph={<PlayGlyph />} />
      <BlockedBadge className="left-0 top-1/2" glyph={<MusicGlyph />} />
      <BlockedBadge className="right-0 top-1/2" glyph={<ChatGlyph />} />
    </div>
  );
}

function BlockedBadge({
  className = "",
  glyph,
}: {
  className?: string;
  glyph: React.ReactNode;
}) {
  return (
    <div
      className={`absolute grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white shadow-card ${className}`}
    >
      <span className="text-slate-400">{glyph}</span>
      {/* strike-through to signal "blocked" */}
      <svg
        viewBox="0 0 48 48"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <line
          x1="10"
          y1="38"
          x2="38"
          y2="10"
          stroke="#E5484D"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline glyphs                                                      */
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
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
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

function CameraGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="16" height="13" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="13.5" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M9 7l1.2-2h3.6L15 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M11 10l3.5 2L11 14v-4Z" fill="currentColor" />
    </svg>
  );
}

function MusicGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M9 18V6l9-2v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ChatGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
