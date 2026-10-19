"use client";

import { motion } from "framer-motion";
import { profile, currently } from "../data/portfolioData";

export default function Overview() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            {profile.tagline}
          </h2>

          <div className="mb-12 space-y-4 text-base leading-relaxed text-neutral-300 md:text-lg md:leading-relaxed">
            {profile.bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Currently
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {currently.map((item) => (
                <div key={item.label}>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {item.label}
                  </p>
                  <p className="text-sm text-neutral-300 md:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
