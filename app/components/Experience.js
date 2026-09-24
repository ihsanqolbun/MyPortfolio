"use client";

import { motion } from "framer-motion";
import { experience, fadeUp } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="trainings"
      className="py-16 md:py-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trainings & Experience
          </h2>
          <p className="mt-2 text-[var(--color-text-muted)] sm:text-lg">
            Pengalaman magang dan organisasi yang membentuk kemampuan
            teknis dan kepemimpinan saya.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute -left-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-primary)] via-[var(--color-accent-deep)] to-transparent opacity-30"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experience.map((item, i) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05 * i, ease: "easeOut" }}
                className="relative pl-8 lg:pl-10"
              >
                <span className="absolute -left-1.5 top-6 h-2.5 w-2.5 rounded-full bg-[var(--color-accent-primary)] ring-4 ring-[var(--color-bg-primary)] md:-left-2.5" />
                <div className="rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)] p-5 transition-transform duration-200 hover:-translate-y-1 dark:border-white/[0.08] sm:p-6">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-1 text-xs font-mono uppercase tracking-wider text-[var(--color-accent-primary)]">
                        {item.org}
                      </p>
                      <h3 className="text-lg font-semibold">{item.role}</h3>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-[var(--color-text-muted)]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                  {item.image && (
                    <div className="mt-4 rounded-lg overflow-hidden border border-black/[0.06] dark:border-white/[0.08]">
                      <img src={item.image} alt="" className="w-full" />
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}