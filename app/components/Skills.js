"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { competencies, techStack } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What I Can Do
          </h2>
          <p className="mt-2 text-[var(--color-text-muted)] sm:text-lg">
            Keahlian yang saya kuasai dengan fokus pada backend development dan
            database architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut" }} className="rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)] p-6 dark:border-white/[0.08]">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Tech Stack</h3>
              <span className="text-xs text-[var(--color-text-muted)]">(Click to filter)</span>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
              {techStack.map(({ name, icon: Icon }) => {
                const isActive = activeSkill === name;
                return (
                  <motion.button
                    key={name}
                    type="button"
                    onClick={() => setActiveSkill(isActive ? null : name)}
                    className={`flex flex-col items-center justify-center gap-1 rounded-xl p-3 transition-all duration-200 ${
                      isActive
                        ? "bg-[var(--color-accent-primary)]/20 border border-[var(--color-accent-primary)]"
                        : "bg-transparent border border-black/[0.06] hover:border-[var(--color-accent-primary)]/30 hover:bg-[var(--color-accent-primary)]/10 dark:border-white/[0.08]"
                    }`}
                  >
                    <motion.div
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className={`h-5 w-5 transition-colors ${
                        isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]"
                      }`} />
                    </motion.div>
                    <span
                      className={`text-xs font-medium transition-colors ${
                        isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      {name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div className="grid gap-4">
            {competencies.map((comp) => (
              <motion.article
                key={comp.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                className="group rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)] p-5 transition-transform duration-200 hover:-translate-y-1 dark:border-white/[0.08] sm:p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-primary)]/20 font-mono text-sm font-bold">
                    {comp.number}
                  </span>
                  <h3 className="text-lg font-semibold">{comp.title}</h3>
                </div>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {comp.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-accent-primary)] px-3 py-1.5 text-xs font-medium text-[var(--color-bg-primary)] transition-all hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="h-3 w-3" /> Discuss
                  </a>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}