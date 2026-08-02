"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneFrame, StatusBar } from "./PhoneFrame";
import {
  LogoMark,
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

/* ================================================================== */
/*  1. Home — Mindful Session                                          */
/* ================================================================== */

function HomeScreen() {
  const cards = [
    { Icon: IconDua, title: "Dua", sub: "Daily pause" },
    { Icon: IconDhikr, title: "Dhikr", sub: "Count with intention" },
    { Icon: IconQuran, title: "Quran", sub: "Full-screen reader" },
    { Icon: IconSalah, title: "Salah", sub: "Start a session" },
  ];

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-iman-primary via-iman-mid to-iman-dark text-white">
      <StatusBar dark />
      <div className="flex-1 overflow-hidden px-4 pt-4">
        <motion.div {...fade} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoMark className="h-8 w-8" />
            <span className="text-base font-bold">ImanFocus</span>
          </div>
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium text-white/90">
            السلام عليكم
          </span>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ delay: 0.08 }}
          className="mt-4 rounded-3xl bg-white p-4 text-iman-deep shadow-card"
        >
          <p className="text-[10px] font-bold uppercase tracking-wide text-iman-primary">
            Mindful Pause
          </p>
          <p className="mt-1 text-sm font-bold">Start Mindful Session</p>
          <p className="mt-0.5 text-[11px] text-iman-deep/60">
            Pause. Remember Allah. Return with intention.
          </p>
          <div className="mt-3 rounded-full bg-iman-primary py-2 text-center text-xs font-bold text-white">
            Start Mindful Session →
          </div>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ delay: 0.14 }}
          className="mt-3 rounded-2xl bg-gradient-to-br from-[#0B5E2C] to-[#053C1B] p-3.5 ring-1 ring-white/10"
        >
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#F5D76E]">
              Today&apos;s Akhira Wealth
            </p>
            <IconQuran className="h-4 w-4 text-[#F5D76E]" />
          </div>
          <p className="mt-1 text-sm font-bold text-white">1,240 hasanat today</p>
          <p className="text-[10px] text-white/70">Tap to read Quran</p>
        </motion.div>

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fade}
              transition={{ delay: 0.18 + i * 0.05 }}
              className="rounded-2xl bg-white p-3 text-iman-deep shadow-card"
            >
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-iman-light text-iman-primary">
                <c.Icon className="h-4.5 w-4.5" />
              </div>
              <p className="mt-2 text-sm font-bold">{c.title}</p>
              <p className="text-[10px] text-iman-deep/55">{c.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  2. Choose Remembrance                                              */
/* ================================================================== */

function ChooseRemembranceScreen() {
  const missions = [
    { emoji: "📖", title: "Read Quran", sub: "Full-screen with auto-scroll" },
    { emoji: "🤲", title: "Dhikr", sub: "Count with intention" },
    { emoji: "💭", title: "Reflection", sub: "A short spiritual pause" },
    { emoji: "📚", title: "Hadith", sub: "Read and remember" },
  ];

  return (
    <div className="flex h-full flex-col bg-iman-primary text-white">
      <StatusBar dark />
      <div className="flex-1 overflow-hidden px-4 pt-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
          Time to Remember Allah
        </p>
        <h3 className="mt-1 text-center text-xl font-extrabold">Choose Your Remembrance</h3>
        <p className="mt-1 text-center text-[11px] text-white/75">
          Complete any one mission to finish your session.
        </p>
        <div className="mt-4 space-y-2.5">
          {missions.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 * i }}
              className="flex items-center gap-3 rounded-2xl bg-white p-3.5 text-iman-deep shadow-card"
            >
              <span className="text-2xl">{m.emoji}</span>
              <div>
                <p className="text-sm font-bold">{m.title}</p>
                <p className="text-[10px] text-iman-deep/55">{m.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  3. Quran Reader                                                    */
/* ================================================================== */

function QuranReaderScreen() {
  return (
    <div className="flex h-full flex-col bg-iman-primary text-white">
      <StatusBar dark />
      <div className="flex items-center justify-between px-3 pt-2">
        <span className="text-lg">‹</span>
        <div className="text-center">
          <p className="text-sm font-bold">Al-Fatihah</p>
          <p className="arabic text-[11px] text-white/80">الفاتحة</p>
        </div>
        <span className="text-sm opacity-80">⚙</span>
      </div>
      <div className="mx-3 mt-2 flex items-center justify-center gap-2">
        <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold">A−</span>
        <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold">A+</span>
        <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-iman-primary">
          Pause
        </span>
      </div>
      <div className="mx-3 mt-3 flex-1 overflow-hidden rounded-t-3xl bg-white px-4 pt-5 text-iman-deep">
        <p className="text-center text-[10px] font-bold uppercase tracking-wide text-[#C79A2E]">
          Bismillah
        </p>
        <p className="arabic mt-2 text-center text-[22px] leading-[2.1] text-iman-deep">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <div className="mx-auto my-3 h-6 w-6 rounded-full bg-[#EFE3BD] text-center text-[10px] font-bold leading-6 text-[#C79A2E]">
          1
        </div>
        <p className="arabic text-center text-[20px] leading-[2] text-iman-deep">
          ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ
        </p>
        <div className="mx-auto my-3 h-6 w-6 rounded-full bg-[#EFE3BD] text-center text-[10px] font-bold leading-6 text-[#C79A2E]">
          2
        </div>
        <p className="arabic text-center text-[20px] leading-[2] text-iman-deep">
          ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  4. Dhikr                                                           */
/* ================================================================== */

function DhikrScreen() {
  return (
    <div className="flex h-full flex-col bg-iman-primary text-white">
      <StatusBar dark />
      <div className="flex flex-1 flex-col px-4 pt-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-wide text-white/80">
          Remembrance
        </p>
        <h3 className="text-center text-xl font-extrabold">Dhikr</h3>
        <p className="mt-1 text-center text-[11px] text-white/75">
          Count with intention. Complete at your target.
        </p>
        <motion.div
          {...fade}
          transition={{ delay: 0.12 }}
          className="mt-5 flex flex-1 flex-col items-center justify-center rounded-3xl bg-white p-6 text-iman-deep shadow-card"
        >
          <p className="arabic text-2xl">سُبْحَانَ ٱللَّهِ</p>
          <p className="mt-1 text-sm font-bold text-iman-deep/60">SubhanAllah</p>
          <p className="mt-4 text-6xl font-black text-iman-primary">12</p>
          <p className="text-base font-extrabold">12 / 33</p>
          <p className="mt-3 text-xs font-semibold text-iman-deep/50">Tap to count</p>
        </motion.div>
        <div className="py-4">
          <div className="rounded-full bg-white/30 py-3 text-center text-sm font-bold text-white/70">
            Complete
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  5. Reflection                                                      */
/* ================================================================== */

function ReflectionScreen() {
  return (
    <div className="flex h-full flex-col bg-iman-primary text-white">
      <StatusBar dark />
      <div className="flex flex-1 flex-col px-4 pt-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-wide text-white/80">
          Remembrance
        </p>
        <h3 className="text-center text-xl font-extrabold">Reflection</h3>
        <p className="mt-1 text-center text-[11px] text-white/75">
          A short spiritual pause before you return.
        </p>
        <motion.div
          {...fade}
          transition={{ delay: 0.1 }}
          className="mt-5 rounded-3xl bg-white p-5 text-iman-deep shadow-card"
        >
          <p className="text-[10px] font-bold uppercase tracking-wide text-iman-primary">
            Reflect
          </p>
          <p className="mt-2 text-sm font-bold leading-relaxed">
            What is one thing you can return to with more intention for the sake of Allah today?
          </p>
        </motion.div>
        <div className="mt-3 min-h-[100px] rounded-2xl bg-white/95 p-3 text-[12px] font-semibold text-iman-deep/50 shadow-card">
          Write a few lines from the heart…
        </div>
        <div className="mt-auto py-4">
          <div className="rounded-full bg-white/30 py-3 text-center text-sm font-bold text-white/70">
            Complete
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  6. Session Timer                                                   */
/* ================================================================== */

function SessionTimerScreen() {
  const presets = ["10 Minutes", "15 Minutes", "30 Minutes", "Custom"];
  return (
    <div className="flex h-full flex-col bg-iman-primary text-white">
      <StatusBar dark />
      <div className="flex flex-1 flex-col px-4 pt-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-wide text-white/80">
          Step 1
        </p>
        <h3 className="text-center text-xl font-extrabold">How long will you scroll?</h3>
        <p className="mt-1 text-center text-[11px] text-white/75">
          We will gently call you back to remember Allah when time is up.
        </p>
        <div className="mt-5 space-y-2.5">
          {presets.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className={`rounded-2xl px-4 py-3.5 text-center text-sm font-bold ${
                i === 1
                  ? "bg-white text-iman-primary shadow-card"
                  : "bg-white/15 text-white"
              }`}
            >
              {label}
            </motion.div>
          ))}
        </div>
        <div className="mt-auto py-4">
          <div className="rounded-full bg-white py-3.5 text-center text-sm font-bold text-iman-primary shadow-card">
            Start Session
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  7. Streaks                                                         */
/* ================================================================== */

function StreakScreen() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="flex h-full flex-col items-center bg-iman-primary text-white">
      <StatusBar dark />
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="grid h-20 w-20 place-items-center rounded-full bg-white text-iman-primary shadow-glow"
        >
          <IconStreak className="h-10 w-10" />
        </motion.div>
        <motion.p {...fade} transition={{ delay: 0.2 }} className="mt-5 text-5xl font-extrabold">
          7
        </motion.p>
        <motion.p {...fade} transition={{ delay: 0.3 }} className="text-lg font-bold">
          Day Remembrance Streak
        </motion.p>
        <motion.div
          {...fade}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center gap-2"
        >
          {days.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-iman-primary">
                <IconCheck className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-medium text-white/70">{d}</span>
            </div>
          ))}
        </motion.div>
        <motion.p {...fade} transition={{ delay: 0.5 }} className="mt-6 text-xs text-white/70">
          Every pause for Allah strengthens your iman.
        </motion.p>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  8. Hasanat Counter — primary selling point                         */
/* ================================================================== */

function HasanatCounterScreen() {
  return (
    <div className="flex h-full flex-col bg-iman-primary text-white">
      <StatusBar dark />
      <div className="flex flex-1 flex-col px-4 pt-5">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15">
            <IconSparkle className="h-4 w-4 text-[#F5D76E]" />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#F5D76E]">
              Akhira Wealth
            </p>
            <p className="text-sm font-extrabold leading-none">Grow Your Akhira Wealth</p>
          </div>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-white/80">
          Every letter of the Quran brings reward. Watch your lifetime hasanat grow and stay
          motivated every day.
        </p>

        <motion.div
          {...fade}
          transition={{ delay: 0.12 }}
          className="mt-4 rounded-3xl bg-gradient-to-br from-[#0B5E2C] to-[#053C1B] p-5 shadow-card ring-1 ring-white/10"
        >
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#F5D76E]">
            Lifetime Hasanat
          </p>
          <p className="mt-1 text-4xl font-black text-white">48,720</p>
          <p className="mt-1 text-[11px] text-white/70">estimated reward · on this device</p>
        </motion.div>

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <motion.div
            {...fade}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-white p-3.5 text-iman-deep shadow-card"
          >
            <p className="text-[10px] font-bold text-iman-deep/55">Today</p>
            <p className="mt-1 text-2xl font-black text-iman-primary">1,240</p>
            <p className="text-[10px] font-semibold text-iman-deep/50">hasanat</p>
          </motion.div>
          <motion.div
            {...fade}
            transition={{ delay: 0.26 }}
            className="rounded-2xl bg-white p-3.5 text-iman-deep shadow-card"
          >
            <p className="text-[10px] font-bold text-iman-deep/55">Streak</p>
            <p className="mt-1 text-2xl font-black text-iman-primary">7</p>
            <p className="text-[10px] font-semibold text-iman-deep/50">days</p>
          </motion.div>
        </div>

        <motion.div
          {...fade}
          transition={{ delay: 0.32 }}
          className="mt-3 flex items-center justify-between rounded-2xl bg-white/12 p-3.5 ring-1 ring-white/15"
        >
          <span className="text-xs font-semibold">Letters read today</span>
          <span className="text-sm font-extrabold text-[#F5D76E]">124</span>
        </motion.div>
      </div>
    </div>
  );
}

const SCREENS: (() => ReactNode)[] = [
  () => <HomeScreen />,
  () => <ChooseRemembranceScreen />,
  () => <QuranReaderScreen />,
  () => <DhikrScreen />,
  () => <ReflectionScreen />,
  () => <SessionTimerScreen />,
  () => <StreakScreen />,
  () => <HasanatCounterScreen />,
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
