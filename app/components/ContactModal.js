"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setSent(false);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(onClose, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Send me a message"
            className="relative w-full max-w-md rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)] p-6 shadow-2xl dark:border-white/[0.08]"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Send Me a Message</h3>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="rounded-full p-1.5 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {sent ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-[var(--color-accent-primary)]" />
                <p className="font-semibold">Message sent successfully</p>
                <p className="text-sm text-[var(--color-text-muted)]">I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="cm-name" className="mb-1 block text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                    Full Name
                  </label>
                  <input
                    id="cm-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full border-b border-black/[0.06] bg-transparent pb-2 text-sm outline-none transition-colors focus:border-[var(--color-accent-primary)] dark:border-white/[0.08]"
                  />
                </div>
                <div>
                  <label htmlFor="cm-email" className="mb-1 block text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                    Email Address
                  </label>
                  <input
                    id="cm-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full border-b border-black/[0.06] bg-transparent pb-2 text-sm outline-none transition-colors focus:border-[var(--color-accent-primary)] dark:border-white/[0.08]"
                  />
                </div>
                <div>
                  <label htmlFor="cm-msg" className="mb-1 block text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                    Message
                  </label>
                  <textarea
                    id="cm-msg"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none border-b border-black/[0.06] bg-transparent pb-2 text-sm outline-none transition-colors focus:border-[var(--color-accent-primary)] dark:border-white/[0.08]"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent-primary)] px-6 py-3 text-sm font-bold text-[var(--color-bg-primary)] transition-all hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
