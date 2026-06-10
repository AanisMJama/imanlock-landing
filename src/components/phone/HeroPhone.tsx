"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneFrame, StatusBar } from "./PhoneFrame";
import { MoodScreen, QuranScreen } from "./screens";
import {
  LogoMark,
  AppIcon,
  IconLock,
  IconCheck,
  IconSparkle,
  IconStreak,
  IconDua,
  IconDhikr,
  IconQuran,
  IconSalah,
} from "@/components/icons";

const STEP_MS = 2000;
const fade = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } };

/* ------------------------------------------------------------------ */
/*  Shared: third-party app glyphs (used in the home + selection cards) */
/* ------------------------------------------------------------------ */

const APP_LIST = [
  { id: "instagram", label: "Instagram", from: "#FEDA77", to: "#DD2A7B", on: true },
  { id: "tiktok", label: "TikTok", from: "#25F4EE", to: "#000000", on: true },
  { id: "youtube", label: "YouTube", from: "#FF4E45", to: "#C4302B", on: true },
  { id: "x", label: "X", from: "#1d1d1d", to: "#000000", on: false },
] as const;

function appGlyph(id: string) {
  switch (id) {
    case "instagram":
      return (
        <>
          <rect x="12" y="12" width="24" height="24" rx="7" fill="none" stroke="#fff" strokeWidth="3" />
          <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" strokeWidth="3" />
          <circle cx="32" cy="16" r="2" fill="#fff" />
        </>
      );
    case "tiktok":
      return (
        <path
          d="M30 13c.8 3 2.6 4.7 5.5 5v4.3c-2 .1-3.8-.4-5.5-1.4v7.7a8 8 0 1 1-8-8c.5 0 1 .05 1.5.15v4.4a3.7 3.7 0 1 0 2.6 3.5V13H30Z"
          fill="#fff"
        />
      );
    case "youtube":
      return (
        <>
          <rect x="11" y="16" width="26" height="16" rx="5" fill="#fff" />
          <path d="M21 20.5v7l6-3.5-6-3.5Z" fill="#C4302B" />
        </>
      );
    case "x":
      return (
        <path
          d="M14 14h4.5l5 6.8L29.5 14H34l-7.7 9.4L34.5 34H30l-5.5-7.4L18.3 34H14l8.2-10L14 14Z"
          fill="#fff"
        />
      );
    default:
      return null;
  }
}

/* ================================================================== */
/*  1. ImanLock Home — hierarchy-based                                 */
/* ================================================================== */

function ImanLockHome() {
  const cards = [
    { Icon: IconDua, title: "Dua", sub: "Daily supplication" },
    { Icon: IconDhikr, title: "Dhikr", sub: "23 today" },
    { Icon: IconQuran, title: "Quran", sub: "Verse of the day" },
    { Icon: IconSalah, title: "Salah", sub: "Asr in 1h 20m" },
  ];

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-iman-primary via-iman-mid to-iman-dark text-white">
      <StatusBar dark />
      <div className="flex-1 overflow-hidden px-4 pt-4">
        {/* header */}
        <motion.div {...fade} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoMark className="h-8 w-8" />
            <span className="text-base font-bold">ImanLock</span>
          </div>
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium text-white/90">
            السلام عليكم
          </span>
        </motion.div>

        {/* "Your apps are locked" hero card */}
        <motion.div
          {...fade}
          transition={{ delay: 0.08 }}
          className="mt-4 flex items-center gap-3 rounded-3xl bg-white p-4 text-iman-deep shadow-card"
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-iman-primary to-iman-dark text-white">
            <IconLock className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold">Your apps are locked</p>
            <p className="text-xs text-iman-deep/60">4 apps protected today</p>
          </div>
          <span className="rounded-full bg-iman-light px-2.5 py-1 text-[10px] font-bold text-iman-primary">
            ON
          </span>
        </motion.div>

        {/* 2×2 feature cards */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fade}
              transition={{ delay: 0.14 + i * 0.06 }}
              className="rounded-2xl bg-white p-3.5 text-iman-deep shadow-card"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-iman-light text-iman-primary">
                <c.Icon className="h-5 w-5" />
              </div>
              <p className="mt-2.5 text-sm font-bold">{c.title}</p>
              <p className="text-[11px] text-iman-deep/55">{c.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* streak strip */}
        <motion.div
          {...fade}
          transition={{ delay: 0.42 }}
          className="mt-3 flex items-center justify-between rounded-2xl bg-white/12 p-3.5 ring-1 ring-white/15"
        >
          <div className="flex items-center gap-2">
            <IconStreak className="h-5 w-5 text-iman-glow" />
            <span className="text-sm font-semibold">7 day streak</span>
          </div>
          <span className="text-xs text-white/70">MashaAllah</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  2. Choose distracting apps                                         */
/* ================================================================== */

function ChooseAppsScreen() {
  return (
    <div className="flex h-full flex-col bg-iman-light text-iman-deep">
      <StatusBar />
      <div className="flex-1 px-5 pt-7">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-iman-primary">
          Setup
        </p>
        <h3 className="mt-2 text-xl font-bold leading-tight">
          Choose distracting apps
        </h3>
        <p className="mt-1 text-xs text-iman-deep/60">
          Select the apps to lock behind remembrance.
        </p>

        <div className="mt-5 space-y-3">
          {APP_LIST.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
              className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-card"
            >
              <div className="h-10 w-10 overflow-hidden rounded-xl">
                <AppIcon
                  gradientId={`choose-${app.id}`}
                  from={app.from}
                  to={app.to}
                  glyph={appGlyph(app.id)}
                />
              </div>
              <span className="flex-1 text-sm font-semibold">{app.label}</span>
              {/* toggle */}
              <span className="relative h-6 w-10 rounded-full">
                <motion.span
                  className="absolute inset-0 rounded-full"
                  initial={{ backgroundColor: "rgba(7,92,34,0.15)" }}
                  animate={{
                    backgroundColor: app.on ? "#33A60A" : "rgba(7,92,34,0.15)",
                  }}
                  transition={{ delay: app.on ? 0.35 + i * 0.2 : 0, duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow"
                  initial={{ left: 2 }}
                  animate={{ left: app.on ? 18 : 2 }}
                  transition={{ delay: app.on ? 0.35 + i * 0.2 : 0, duration: 0.3 }}
                />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mx-auto mb-4 h-1 w-28 rounded-full bg-iman-deep/20" />
    </div>
  );
}

/* ================================================================== */
/*  3. Apps locked                                                     */
/* ================================================================== */

function AppsLockedScreen() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-iman-primary via-iman-mid to-iman-dark px-6 text-center text-white">
      <StatusBar dark />
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
          className="relative grid h-24 w-24 place-items-center rounded-full bg-white/12 ring-1 ring-white/25"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white/30" />
          <IconLock className="h-11 w-11 text-white" />
        </motion.div>
        <motion.h3 {...fade} transition={{ delay: 0.2 }} className="mt-7 text-2xl font-bold">
          Your apps are locked
        </motion.h3>
        <motion.p
          {...fade}
          transition={{ delay: 0.32 }}
          className="mt-3 max-w-[220px] text-sm text-white/80"
        >
          Pause and remember Allah before you continue.
        </motion.p>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  6. Personalized dua                                                */
/* ================================================================== */

function DuaScreen() {
  return (
    <div className="flex h-full flex-col bg-iman-light text-iman-deep">
      <StatusBar />
      <div className="flex flex-1 flex-col px-5 pt-7">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-iman-primary text-white">
            <IconSparkle className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-bold leading-none">Your Dua</p>
            <p className="text-[10px] text-iman-deep/55">A moment of remembrance</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 flex flex-1 flex-col justify-center rounded-3xl bg-white p-6 text-center shadow-card"
        >
          <p className="text-lg font-semibold leading-relaxed text-iman-deep">
            “Ya Allah, help me remember You before distraction.”
          </p>
          <span className="mt-4 text-sm font-bold text-iman-primary">Ameen.</span>
        </motion.div>
      </div>
      <div className="mx-auto mb-4 h-1 w-28 rounded-full bg-iman-deep/20" />
    </div>
  );
}

/* ================================================================== */
/*  7. Unlock success                                                  */
/* ================================================================== */

function UnlockSuccessScreen() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-iman-primary via-iman-mid to-iman-dark px-6 text-center text-white">
      <StatusBar dark />
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          className="grid h-24 w-24 place-items-center rounded-full bg-white text-iman-primary shadow-glow"
        >
          <IconCheck className="h-12 w-12" />
        </motion.div>
        <motion.h3 {...fade} transition={{ delay: 0.28 }} className="mt-6 text-2xl font-bold">
          Apps unlocked
        </motion.h3>
        <motion.p
          {...fade}
          transition={{ delay: 0.4 }}
          className="mt-3 max-w-[210px] text-sm text-white/80"
        >
          May Allah accept your remembrance.
        </motion.p>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  8. Dhikr streak                                                    */
/* ================================================================== */

function StreakScreen() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="flex h-full flex-col items-center bg-iman-light text-iman-deep">
      <StatusBar />
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-iman-primary to-iman-dark text-white shadow-glow"
        >
          <IconStreak className="h-10 w-10" />
        </motion.div>
        <motion.p {...fade} transition={{ delay: 0.2 }} className="mt-5 text-5xl font-extrabold text-iman-primary">
          7
        </motion.p>
        <motion.p {...fade} transition={{ delay: 0.3 }} className="text-lg font-bold">
          Day Dhikr Streak
        </motion.p>
        <motion.div
          {...fade}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center gap-2"
        >
          {days.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-iman-primary text-white">
                <IconCheck className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-medium text-iman-deep/60">{d}</span>
            </div>
          ))}
        </motion.div>
        <motion.p {...fade} transition={{ delay: 0.5 }} className="mt-6 text-xs text-iman-deep/55">
          MashaAllah — keep your heart connected.
        </motion.p>
      </div>
    </div>
  );
}

const SCREENS: (() => ReactNode)[] = [
  () => <ImanLockHome />,
  () => <ChooseAppsScreen />,
  () => <AppsLockedScreen />,
  () => <MoodScreen selected="grateful" />,
  () => <QuranScreen />,
  () => <DuaScreen />,
  () => <UnlockSuccessScreen />,
  () => <StreakScreen />,
];

export function HeroPhone() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % SCREENS.length), STEP_MS);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <PhoneFrame className="w-[260px] sm:w-[290px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          {SCREENS[i]()}
        </motion.div>
      </AnimatePresence>
    </PhoneFrame>
  );
}
