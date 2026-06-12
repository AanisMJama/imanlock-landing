"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCheck } from "@/components/icons";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        setError(
          data?.error ??
            "We couldn't send your message right now. Please try again, or email hello@imanfocus.app.",
        );
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setError(
        "Network error — please check your connection and try again, or email hello@imanfocus.app.",
      );
      setStatus("error");
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError(null);
    setStatus("idle");
  };

  const sending = status === "sending";

  const inputBase =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-iman-deep placeholder:text-slate-400 outline-none transition-shadow focus:border-iman-primary focus:ring-4 focus:ring-iman-primary/15 disabled:opacity-60";

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-8 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-iman-primary text-white shadow-glow">
              <IconCheck className="h-8 w-8" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-iman-deep">
              JazakAllahu Khairan!
            </h3>
            <p className="mt-2 max-w-sm text-slate-600">
              Your message has been sent. We aim to respond within 48 hours,
              insha&apos;Allah. You can also reach us anytime at{" "}
              <a
                href="mailto:hello@imanfocus.app"
                className="font-semibold text-iman-primary hover:underline"
              >
                hello@imanfocus.app
              </a>
              .
            </p>
            <button
              onClick={reset}
              className="mt-6 text-sm font-semibold text-iman-primary hover:text-iman-dark"
            >
              Send another message
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
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold text-iman-deep"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                disabled={sending}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputBase}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-iman-deep"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                disabled={sending}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputBase}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-iman-deep"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                disabled={sending}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                className={`${inputBase} resize-none`}
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
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </button>

            <p className="text-center text-xs text-slate-400">
              We aim to respond within 48 hours.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
