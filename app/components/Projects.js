"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { fadeUp, selectedWork } from "../data/portfolioData";
import TypewriterText from "./TypewriterText";

export default function Projects() {
  return (
    <section
      id="work"
      className="py-16 md:py-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <TypewriterText text="Selected Work" />
          </h2>
          <p className="mt-2 text-[var(--color-text-muted)] sm:text-lg">
            Proyek paling signifikan yang saya kerjakan dengan fokus kualitas dan
            skalabilitas.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {selectedWork.filter(p => p.github).map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)] transition-transform duration-200 hover:-translate-y-1 dark:border-white/[0.08]"
            >
              <div className="relative aspect-video overflow-hidden bg-black/[0.04] dark:bg-white/5">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-black/[0.03] to-transparent dark:from-white/5 dark:to-transparent">
                    <span className="font-mono text-sm text-[var(--color-text-muted)]">
                      No Preview
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-[var(--color-accent-primary)]">
                  {project.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--color-accent-primary)]/10 px-2.5 py-0.5 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-bg-primary)] transition-all duration-200 hover:-translate-y-1"
                >
                  View Project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>


      </div>
    </section>
  );
}
