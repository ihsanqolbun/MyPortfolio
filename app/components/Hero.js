"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, ArrowUpRight } from "lucide-react";
import { profile, fadeUp } from "../data/portfolioData";

export default function Hero() {
  const ref = useRef(null);
  const [coffees, setCoffees] = useState(24);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="z-10 flex flex-col items-start gap-6 lg:col-span-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-bg-card-border)] bg-[var(--color-bg-card)] px-4 py-2">
<span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
</span>
            <span className="text-xs font-medium text-[var(--color-text-muted)]">
              Open to opportunities
            </span>
          </div>

          <motion.h1 {...fadeUp} className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.role} <br className="hidden sm:block" />
            Creating Clean Systems
          </motion.h1>

          <p className="max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            {profile.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] border border-[var(--color-text-primary)] transition-all duration-300 ease-out hover:bg-[var(--color-bg-primary)] hover:text-[var(--color-text-primary)] hover:-translate-y-1 px-6 py-3 text-sm font-semibold"
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-bg-card-border)] bg-[var(--color-bg-card)] px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-1"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="relative flex min-h-[400px] items-center justify-center lg:col-span-7"
        >
          <div className="pointer-events-none absolute inset-0 z-0 flex select-none flex-col items-center justify-center overflow-hidden text-center leading-none" aria-hidden="true">
            <motion.span style={{ x: xLeft }} className="whitespace-nowrap text-5xl font-black uppercase tracking-tighter text-stroke sm:text-6xl lg:text-7xl xl:text-8xl">
              BACKEND DEVELOPER
            </motion.span>
            <motion.span style={{ x: xRight }} className="mt-8 whitespace-nowrap text-4xl font-black uppercase tracking-tighter text-stroke sm:text-5xl lg:text-6xl">
              IHSAN QOLBUN
            </motion.span>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            className="relative z-10 max-w-md"
          >
            <img src="/foto-ihsan.jpg" alt={profile.name} className="w-full" />
          </motion.div>

          <button
            onClick={() => setCoffees((c) => c + 1)}
            className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full border border-[var(--color-bg-card-border)] bg-[var(--color-bg-primary)]/80 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-200 hover:bg-[var(--color-accent-primary)] hover:text-white"
          >
            
          </button>
        </motion.div>
      </div>
    </section>
  );
}
