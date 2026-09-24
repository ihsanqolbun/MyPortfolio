"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const [active, setActive] = useState("#work");
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      }
      setActive(`#${current}`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between gap-3 rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)]/70 px-4 py-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl"
      >
        <a href="#work" className="pl-2 text-sm font-bold tracking-tight">
          Ihsan Qolbun
        </a>
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] font-semibold tracking-widest transition-colors ${
                active === link.href
                  ? "text-[var(--color-accent-primary)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-between gap-3 rounded-xl border border-black/[0.06] bg-[var(--color-bg-card)]/70 px-4 py-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-xl bg-[var(--color-accent-primary)] px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 sm:inline-flex"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-primary)] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>
      {open && (
        <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-black/[0.06] bg-[var(--color-bg-card)]/95 p-4 backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-2.5 text-xs font-semibold tracking-widest ${
                active === link.href
                  ? "bg-[var(--color-accent-primary)]/15 text-[var(--color-accent-primary)]"
                  : "text-[var(--color-text-muted)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[var(--color-accent-primary)] px-5 py-2.5 text-sm font-semibold text-white sm:hidden"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}