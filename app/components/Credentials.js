"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { certifications, fadeUp } from "../data/portfolioData";

export default function Credentials() {
  return (
    <section
      id="awards"
      className="py-16 md:py-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUp} className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Awards & Certifications
          </h2>
          <p className="mt-2 text-[var(--color-text-muted)] sm:text-lg">
            Sertifikasi resmi dan penghargaan yang melegitimasikan kompetensi
            saya.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: "easeOut" }}
              className="group rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)] p-5 transition-transform duration-200 hover:-translate-y-1 dark:border-white/[0.08] sm:p-6"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="mb-1 text-xs font-mono uppercase tracking-wider text-[var(--color-accent-primary)]">
                    {cert.issuer}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold leading-snug">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ opacity: cert.issued ? 1 : 0.4 }}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-accent-primary)]"
                    >
                      {cert.issued ? (
                        <>
                          <CheckCircle2 className="h-3 w-3" />
                          <span>{cert.issuedDate}</span>
                        </>
                      ) : (
                        <span>Pending</span>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
              {cert.image && (
                <div className="mt-4 rounded-lg overflow-hidden border border-black/[0.06] dark:border-white/[0.08]">
                  <img src={cert.image} alt="" className="h-full w-full object-cover" />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}