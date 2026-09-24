"use client";

import { motion } from "framer-motion";
import { profile, stats, traits } from "../data/portfolioData";

export default function Overview() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-primary)]">
            About
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {profile.tagline}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            {profile.bio}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)] p-6 transition-transform duration-200 hover:-translate-y-1 dark:border-white/[0.08] sm:p-8"
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <span className="font-mono text-3xl font-bold tabular-nums text-[var(--color-accent-primary)]">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)] p-6 transition-transform duration-200 hover:-translate-y-1 dark:border-white/[0.08] sm:p-8"
          >
            <h3 className="mb-4 text-lg font-semibold">
              Personality Traits
            </h3>
            <div className="flex flex-wrap gap-3">
              {traits.map((trait) => (
                <motion.span
                  key={trait}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 px-4 py-2 text-sm font-medium transition-all hover:bg-[var(--color-accent-primary)]/20"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
