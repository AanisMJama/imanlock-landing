"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCheck } from "@/components/icons";
import { getSupabaseClient } from "@/lib/supabaseClient";

type Status = "idle" | "sending" | "success" | "duplicate" | "error";

const SUCCESS_MESSAGE =
  "You’re on the list. We’ll email you when ImanFocus launches.";
const DUPLICATE_MESSAGE = "You’re already on the waitlist.";

const SEEN_KEY = "imanfocus_waitlist_seen";
const AUTO_OPEN_DELAY_MS = 5000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Waitlist({
  buttonLabel = "Join Early Access",
  source = "landing_waitlist_popup",
  className = "",
}: {
  buttonLabel?: string;
  source?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const markSeen = useCallback(() => {
    try {
      window.localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }, []);

  // Auto-open once per visitor, shortly after landing.
  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(SEEN_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;
    const t = window.setTimeout(() => setOpen(true), AUTO_OPEN_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    markSeen();
  }, [markSeen]);

  // Open via button always works (even if previously seen).
  const openModal = () => setOpen(true);

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!EMAIL_RE.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      setError(
        "The waitlist isn’t available right now. Please try again later.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError(null);

    const { error: insertError } = await supabase
      .from("waitlist_signups")
      .insert({
        name: cleanName || null,
        email: cleanEmail,
        source,
        platform: "web",
      });

    if (insertError) {
      // 23505 = unique_violation → email already on the waitlist.
      if (insertError.code === "23505") {
        markSeen();
        setStatus("duplicate");
        return;
      }
      setError(
        "Something went wrong adding you to the waitlist. Please try again.",
      );
      setStatus("error");
      return;
    }

    markSeen();
    setStatus("success");
  };

  const sending = status === "sending";
  const done = status === "success" || status === "duplicate";

  const inputBase =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-iman-deep placeholder:text-slate-400 outline-none transition-shadow focus:border-iman-primary focus:ring-4 focus:ring-iman-primary/15 disabled:opacity-60";

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={
          className ||
          "inline-flex items-center justify-center gap-2 rounded-2xl bg-iman-primary px-7 py-3.5 text-base font-bold text-white shadow-btn-primary transition-transform hover:-translate-y-0.5"
        }
      >
        {buttonLabel}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="waitlist-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-hidden={!open}
          >
            <div
              className="absolute inset-0 bg-iman-deep/50 backdrop-blur-sm"
              onClick={close}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="waitlist-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative z-10 w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-card-lg sm:p-8"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-iman-deep"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-iman-primary text-white shadow-glow">
                      <IconCheck className="h-8 w-8" />
                    </span>
                    <h3
                      id="waitlist-title"
                      className="mt-5 text-xl font-bold text-iman-deep"
                    >
                      {status === "duplicate"
                        ? "Already signed up"
                        : "JazakAllahu Khairan!"}
                    </h3>
                    <p className="mt-2 max-w-sm text-slate-600">
                      {status === "duplicate"
                        ? DUPLICATE_MESSAGE
                        : SUCCESS_MESSAGE}
                    </p>
                    <button
                      onClick={close}
                      className="mt-6 rounded-2xl bg-iman-primary px-6 py-3 text-sm font-bold text-white shadow-btn-primary transition-transform hover:-translate-y-0.5"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={onSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="pr-8">
                      <h3
                        id="waitlist-title"
                        className="text-2xl font-bold text-iman-deep"
                      >
                        Join Early Access
                      </h3>
                      <p className="mt-1.5 text-[15px] text-slate-600">
                        ImanFocus isn’t public yet. Leave your details and we’ll
                        email you the moment it launches, insha’Allah.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="waitlist-name"
                        className="mb-1.5 block text-sm font-semibold text-iman-deep"
                      >
                        Name
                      </label>
                      <input
                        id="waitlist-name"
                        type="text"
                        autoComplete="name"
                        disabled={sending}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className={inputBase}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="waitlist-email"
                        className="mb-1.5 block text-sm font-semibold text-iman-deep"
                      >
                        Email
                      </label>
                      <input
                        id="waitlist-email"
                        type="email"
                        required
                        autoComplete="email"
                        disabled={sending}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={inputBase}
                      />
                    </div>

                    {status === "error" && error ? (
                      <p
                        role="alert"
                        className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                      >
                        {error}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      disabled={sending}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-iman-primary px-6 py-3.5 text-base font-bold text-white shadow-btn-primary transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {sending ? (
                        <>
                          <span
                            className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                            aria-hidden="true"
                          />
                          Joining…
                        </>
                      ) : (
                        "Join Early Access"
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      No spam. We’ll only email you about the launch.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
