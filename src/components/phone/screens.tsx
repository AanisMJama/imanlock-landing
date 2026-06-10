"use client";

import { motion } from "framer-motion";
import {
  AppIcon,
  IconLock,
  IconSparkle,
  IconCheck,
  MoodGrateful,
  MoodAnxious,
  MoodStressed,
  MoodDistracted,
  MoodPeaceful,
  MoodTired,
} from "@/components/icons";
import { StatusBar } from "./PhoneFrame";

/* ------------------------------------------------------------------ */
/*  Shared data                                                        */
/* ------------------------------------------------------------------ */

export const MOODS = [
  { id: "grateful", label: "Grateful", Icon: MoodGrateful, ring: "#F59E0B" },
  { id: "anxious", label: "Anxious", Icon: MoodAnxious, ring: "#DB2777" },
  { id: "stressed", label: "Stressed", Icon: MoodStressed, ring: "#EF4444" },
  { id: "distracted", label: "Distracted", Icon: MoodDistracted, ring: "#7C3AED" },
  { id: "peaceful", label: "Peaceful", Icon: MoodPeaceful, ring: "#059669" },
  { id: "tired", label: "Tired", Icon: MoodTired, ring: "#2563EB" },
] as const;

export const CLOSENESS = [
  { id: "very-close", label: "Very Close", emoji: "🌟", desc: "Alhamdulillah" },
  { id: "good", label: "Good", emoji: "🌿", desc: "Steady & grateful" },
  { id: "struggling", label: "Struggling", emoji: "🌧️", desc: "Finding my way" },
  { id: "distant", label: "Distant", emoji: "🌑", desc: "Need to reconnect" },
] as const;

export const APPS = [
  { id: "instagram", label: "Instagram", from: "#FEDA77", to: "#DD2A7B" },
  { id: "tiktok", label: "TikTok", from: "#25F4EE", to: "#000000" },
  { id: "youtube", label: "YouTube", from: "#FF4E45", to: "#C4302B" },
  { id: "x", label: "X", from: "#1d1d1d", to: "#000000" },
] as const;

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

/* ------------------------------------------------------------------ */
/*  App glyphs                                                         */
/* ------------------------------------------------------------------ */

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
/*  1. HOME                                                            */
/* ================================================================== */

export function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-iman-primary via-iman-mid to-iman-dark text-white">
      <StatusBar dark />
      <div className="flex-1 overflow-hidden px-5 pt-6">
        <motion.p {...fade} className="text-xs font-medium text-white/80">
          السلام عليكم
        </motion.p>
        <motion.h3 {...fade} transition={{ delay: 0.05 }} className="mt-1 text-xl font-bold">
          Assalamu Alaikum
        </motion.h3>

        <motion.div
          {...fade}
          transition={{ delay: 0.12 }}
          className="mt-5 rounded-3xl bg-white/12 p-4 backdrop-blur-md ring-1 ring-white/15"
        >
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span>Verse of the day</span>
            <IconSparkle className="h-3.5 w-3.5 text-iman-glow" />
          </div>
          <p className="arabic mt-2 text-right text-lg leading-loose">
            وَاذْكُر رَّبَّكَ كَثِيرًا
          </p>
          <p className="mt-1 text-[11px] text-white/80">
            “And remember your Lord much.”
          </p>
        </motion.div>

        <motion.div {...fade} transition={{ delay: 0.18 }} className="mt-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Protected apps</span>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium">
              4 active
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {APPS.map((app) => (
              <div
                key={app.id}
                className="flex items-center gap-2.5 rounded-2xl bg-white/10 p-2.5"
              >
                <div className="h-9 w-9 overflow-hidden rounded-xl">
                  <AppIcon
                    gradientId={`home-${app.id}`}
                    from={app.from}
                    to={app.to}
                    glyph={appGlyph(app.id)}
                  />
                </div>
                <span className="text-xs font-medium">{app.label}</span>
                <IconLock className="ml-auto h-4 w-4 text-iman-glow" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ delay: 0.26 }}
          className="mt-5 flex items-center justify-between rounded-2xl bg-white/12 p-4"
        >
          <div>
            <p className="text-2xl font-bold">7</p>
            <p className="text-[11px] text-white/70">day streak 🔥</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">23</p>
            <p className="text-[11px] text-white/70">dhikr today</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  2. TAP INSTAGRAM                                                   */
/* ================================================================== */

export function TapScreen({
  tapped = false,
  onTap,
  interactive = false,
}: {
  tapped?: boolean;
  onTap?: () => void;
  interactive?: boolean;
}) {
  const homeApps = [
    ...APPS,
    { id: "messages", label: "Messages", from: "#5BF675", to: "#1FB141" },
    { id: "phone", label: "Phone", from: "#5BF675", to: "#0E9F3C" },
    { id: "maps", label: "Maps", from: "#7AD3FF", to: "#2A8FE0" },
    { id: "photos", label: "Photos", from: "#FFD36E", to: "#FF7AC4" },
  ];
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#0d2516] to-[#06160d] text-white">
      <StatusBar dark />
      <div className="flex-1 px-6 pt-10">
        <div className="grid grid-cols-4 gap-x-4 gap-y-6">
          {homeApps.map((app, i) => {
            const isTarget = app.id === "instagram";
            return (
              <button
                key={app.id}
                onClick={isTarget && interactive ? onTap : undefined}
                className="relative flex flex-col items-center gap-1.5"
              >
                {isTarget && (
                  <span className="absolute -inset-1 top-0 z-0 h-12 w-12 self-center rounded-2xl">
                    <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-iman-glow/60" />
                  </span>
                )}
                <motion.div
                  className="relative z-10 h-12 w-12 overflow-hidden rounded-2xl shadow-lg"
                  animate={
                    isTarget
                      ? tapped
                        ? { scale: 0.82 }
                        : { scale: [1, 1.06, 1] }
                      : {}
                  }
                  transition={
                    isTarget && !tapped
                      ? { duration: 1.4, repeat: Infinity }
                      : { duration: 0.2 }
                  }
                >
                  <AppIcon
                    gradientId={`tap-${app.id}-${i}`}
                    from={app.from}
                    to={app.to}
                    glyph={appGlyph(app.id)}
                  />
                </motion.div>
                <span className="z-10 text-[9px] text-white/85">{app.label}</span>
                {isTarget && tapped && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-1 h-12 w-12 rounded-full bg-white"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
      {interactive && !tapped && (
        <p className="pb-5 text-center text-[11px] text-white/60">
          Tap Instagram to continue
        </p>
      )}
      <div className="mx-auto mb-3 h-1 w-28 rounded-full bg-white/40" />
    </div>
  );
}

/* ================================================================== */
/*  3. LOCKED                                                          */
/* ================================================================== */

export function LockedScreen({ onContinue, interactive = false }: { onContinue?: () => void; interactive?: boolean }) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-iman-dark via-iman-deep to-black px-6 text-center text-white">
      <StatusBar dark />
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="relative grid h-24 w-24 place-items-center rounded-full bg-white/10 ring-1 ring-white/20"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-iman-glow/40" />
          <IconLock className="h-11 w-11 text-iman-glow" />
        </motion.div>

        <motion.p
          {...fade}
          transition={{ delay: 0.2 }}
          className="mt-7 text-[11px] uppercase tracking-[0.25em] text-iman-glow"
        >
          Apps Locked
        </motion.p>
        <motion.h3
          {...fade}
          transition={{ delay: 0.3 }}
          className="mt-3 text-2xl font-bold leading-snug"
        >
          Pause and<br />remember Allah.
        </motion.h3>
        <motion.p
          {...fade}
          transition={{ delay: 0.4 }}
          className="mt-3 max-w-[220px] text-sm text-white/70"
        >
          Take a breath. Reconnect your intention before you continue.
        </motion.p>
      </div>

      <motion.button
        {...fade}
        transition={{ delay: 0.5 }}
        onClick={interactive ? onContinue : undefined}
        className="mb-9 w-full rounded-2xl bg-white py-3.5 text-sm font-bold text-iman-dark shadow-lg"
      >
        Begin Reflection
      </motion.button>
    </div>
  );
}

/* ================================================================== */
/*  4. MOOD                                                            */
/* ================================================================== */

export function MoodScreen({
  selected,
  onSelect,
  interactive = false,
}: {
  selected?: string;
  onSelect?: (id: string) => void;
  interactive?: boolean;
}) {
  return (
    <div className="flex h-full flex-col bg-iman-light text-iman-deep">
      <StatusBar />
      <div className="flex-1 px-5 pt-7">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-iman-primary">
          Step 1 of 3
        </p>
        <h3 className="mt-2 text-xl font-bold leading-tight">
          How are you feeling today?
        </h3>
        <p className="mt-1 text-xs text-iman-deep/60">
          Naming it is the first step to bringing it to Allah.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {MOODS.map((m, i) => {
            const active = selected === m.id;
            return (
              <motion.button
                key={m.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.04 * i }}
                onClick={interactive ? () => onSelect?.(m.id) : undefined}
                className="relative flex items-center gap-2.5 rounded-2xl bg-white p-3 text-left shadow-card transition-all"
                style={
                  active
                    ? { boxShadow: `0 0 0 2.5px ${m.ring}, 0 14px 30px -16px ${m.ring}` }
                    : undefined
                }
              >
                <m.Icon className="h-9 w-9 shrink-0" />
                <span className="text-sm font-semibold">{m.label}</span>
                {active && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-2 top-2 grid h-4 w-4 place-items-center rounded-full text-white"
                    style={{ backgroundColor: m.ring }}
                  >
                    <IconCheck className="h-2.5 w-2.5" />
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="mx-auto mb-3 h-1 w-28 rounded-full bg-iman-deep/20" />
    </div>
  );
}

/* ================================================================== */
/*  5. CLOSENESS                                                       */
/* ================================================================== */

export function ClosenessScreen({
  selected,
  onSelect,
  interactive = false,
}: {
  selected?: string;
  onSelect?: (id: string) => void;
  interactive?: boolean;
}) {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-iman-primary to-iman-dark text-white">
      <StatusBar dark />
      <div className="flex-1 px-5 pt-7">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-iman-glow">
          Step 2 of 3
        </p>
        <h3 className="mt-2 text-xl font-bold leading-tight">
          How close do you feel to Allah today?
        </h3>

        <div className="mt-5 space-y-3">
          {CLOSENESS.map((c, i) => {
            const active = selected === c.id;
            return (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i }}
                onClick={interactive ? () => onSelect?.(c.id) : undefined}
                className={`flex w-full items-center gap-3 rounded-2xl p-3.5 text-left transition-all ${
                  active
                    ? "bg-white text-iman-dark shadow-lg"
                    : "bg-white/12 text-white ring-1 ring-white/15"
                }`}
              >
                <span className="text-2xl">{c.emoji}</span>
                <span className="flex flex-col">
                  <span className="text-sm font-bold">{c.label}</span>
                  <span
                    className={`text-[11px] ${active ? "text-iman-dark/60" : "text-white/60"}`}
                  >
                    {c.desc}
                  </span>
                </span>
                {active && (
                  <span className="ml-auto grid h-5 w-5 place-items-center rounded-full bg-iman-primary text-white">
                    <IconCheck className="h-3 w-3" />
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="mx-auto mb-3 h-1 w-28 rounded-full bg-white/30" />
    </div>
  );
}

/* ================================================================== */
/*  6. QURAN REFLECTION                                                */
/* ================================================================== */

export function QuranScreen() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-iman-deep via-iman-dark to-iman-deep px-6 text-center text-white">
      <StatusBar dark />
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-iman-glow/20 blur-3xl" />
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 rounded-full bg-white/10 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-iman-glow ring-1 ring-white/15"
        >
          Quran Reflection
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="arabic text-2xl leading-[2.4] text-white"
        >
          أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4 }}
          className="my-5 h-px w-16 bg-iman-glow/50"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-[240px] text-sm leading-relaxed text-white/85"
        >
          “Verily, in the remembrance of Allah do hearts find rest.”
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="mt-3 text-xs font-semibold text-iman-glow"
        >
          Quran 13:28
        </motion.p>
      </div>
      <div className="mx-auto mb-9 h-1 w-28 rounded-full bg-white/30" />
    </div>
  );
}

/* ================================================================== */
/*  7. PERSONALIZED DUA                                                */
/* ================================================================== */

export function DuaScreen({ typed = true }: { typed?: boolean }) {
  const lines = [
    "O Allah, I feel the weight of distraction pulling at my heart.",
    "Help me turn this moment of pause into nearness to You.",
    "Replace my restlessness with the calm of Your remembrance.",
  ];
  return (
    <div className="flex h-full flex-col bg-iman-light text-iman-deep">
      <StatusBar />
      <div className="flex-1 px-5 pt-7">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-iman-primary text-white">
            <IconSparkle className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-bold leading-none">Your Personal Dua</p>
            <p className="text-[10px] text-iman-deep/55">AI-crafted for how you feel</p>
          </div>
        </div>

        <div className="mt-5 rounded-3xl bg-white p-5 shadow-card">
          <p className="arabic mb-4 text-right text-base leading-loose text-iman-primary">
            اللّٰهُمَّ اجْعَلْ هٰذِهِ الوَقْفَةَ قُرْبًا إِلَيْكَ
          </p>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={typed ? { opacity: 0, y: 6 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.45 }}
              className="mb-2.5 text-[13px] leading-relaxed text-iman-deep/85"
            >
              {line}
            </motion.p>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="mt-2 inline-block text-xs font-semibold text-iman-primary"
          >
            Ameen.
          </motion.span>
        </div>

        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-iman-deep/70 shadow-sm">
            #Distracted
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-iman-deep/70 shadow-sm">
            #SeekingCalm
          </span>
        </div>
      </div>
      <div className="mx-auto mb-3 h-1 w-28 rounded-full bg-iman-deep/20" />
    </div>
  );
}

/* ================================================================== */
/*  8. SUCCESS                                                         */
/* ================================================================== */

export function SuccessScreen({ onDone, interactive = false }: { onDone?: () => void; interactive?: boolean }) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-iman-primary via-iman-mid to-iman-dark px-6 text-center text-white">
      <StatusBar dark />
      {/* confetti-ish sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white/70"
          initial={{ opacity: 0, y: 40, x: (i - 3) * 22 }}
          animate={{ opacity: [0, 1, 0], y: -60 }}
          transition={{ duration: 1.6, delay: 0.2 + i * 0.08, repeat: Infinity, repeatDelay: 0.8 }}
          style={{ left: "50%", top: "45%" }}
        />
      ))}
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          className="grid h-24 w-24 place-items-center rounded-full bg-white text-iman-primary shadow-glow"
        >
          <IconCheck className="h-12 w-12" />
        </motion.div>
        <motion.h3
          {...fade}
          transition={{ delay: 0.3 }}
          className="arabic mt-6 text-3xl font-bold"
        >
          الحمد لله
        </motion.h3>
        <motion.p {...fade} transition={{ delay: 0.42 }} className="mt-1 text-xl font-bold">
          Alhamdulillah
        </motion.p>
        <motion.p
          {...fade}
          transition={{ delay: 0.52 }}
          className="mt-3 max-w-[210px] text-sm text-white/80"
        >
          Your heart is centered. Apps unlocked — use them with intention.
        </motion.p>
      </div>

      <motion.button
        {...fade}
        transition={{ delay: 0.62 }}
        onClick={interactive ? onDone : undefined}
        className="mb-9 w-full rounded-2xl bg-white py-3.5 text-sm font-bold text-iman-dark shadow-lg"
      >
        Continue with Barakah
      </motion.button>
    </div>
  );
}
