"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Send } from "lucide-react";
import { contacts, profile } from "../data/portfolioData";
import ContactModal from "./ContactModal";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="py-16 md:py-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-primary)]">
                Get in touch
              </p>
              <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                LET&apos;S WORK TOGETHER
              </h2>
              <p className="mb-4 text-lg font-medium">
                Looking for the next problem worth solving.
              </p>
              <p className="text-base text-[var(--color-text-muted)]">
                I am open to full-time opportunities, freelance projects, and exciting collaborations.
              </p>
            </div>
            <div>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-black/[0.06] bg-[var(--color-bg-card)] px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-1 dark:border-white/[0.08]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {contacts.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
                className="group relative flex items-center gap-5 rounded-2xl border border-[var(--color-bg-card-border)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 ease-out hover:translate-x-2 hover:border-[var(--color-text-primary)] hover:brightness-125 sm:p-6"
              >
                <span className="absolute right-6 top-6 font-mono text-xs font-bold text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-primary)]">
                  {item.number}
                </span>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/[0.04] transition-all duration-300 ease-out group-hover:bg-[var(--color-text-primary)] dark:bg-white/5">
                  <ArrowRight className="h-5 w-5 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-[var(--color-bg-primary)]" />
                </div>
                <div className="pr-8">
                  <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                    {item.label}
                  </p>
                  <p className="break-all text-sm font-medium group-hover:text-[var(--color-accent-primary)] sm:text-base">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.button
              onClick={() => setModalOpen(true)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] border border-[var(--color-text-primary)] transition-all duration-300 ease-out hover:bg-[var(--color-bg-primary)] hover:text-[var(--color-text-primary)] hover:-translate-y-1 px-6 py-4 text-center text-base font-bold active:translate-y-0"
            >
              <Send className="h-5 w-5" />
              SEND ME A MESSAGE
            </motion.button>
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          </div>
        </div>
      </div>
    </section>
  );
}
