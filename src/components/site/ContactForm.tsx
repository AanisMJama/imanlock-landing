"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCheck } from "@/components/icons";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet — open the user's mail client as a graceful fallback,
    // then show a confirmation state.
    const subject = encodeURIComponent(`ImanLock support — ${name || "Inquiry"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:support@imanlock.app?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputBase =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-iman-deep placeholder:text-slate-400 outline-none transition-shadow focus:border-iman-primary focus:ring-4 focus:ring-iman-primary/15";

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
      <AnimatePresence mode="wait">
        {sent ? (
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
              Your message is ready in your email app. If it didn&apos;t open,
              email us directly at{" "}
              <a
                href="mailto:support@imanlock.app"
                className="font-semibold text-iman-primary hover:underline"
              >
                support@imanlock.app
              </a>
              . We aim to respond within 48 hours.
            </p>
            <button
              onClick={() => setSent(false)}
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
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                className={`${inputBase} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-iman-primary px-6 py-3.5 text-base font-bold text-white shadow-btn-primary transition-transform hover:-translate-y-0.5"
            >
              Send Message
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
