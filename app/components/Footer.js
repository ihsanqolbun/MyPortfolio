"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#A1A1A6]/20 bg-[#222223] py-12 text-[#FEFEFE]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 rounded-2xl border border-[#A1A1A6]/20 bg-[#1A1A1C] px-6 py-8 text-center"
        >
          <p className="text-sm text-[#A1A1A6]">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-[#FEFEFE]">Ihsan Qolbun</span>
          </p>
          <p className="font-mono text-xs text-[#A1A1A6]">
            Built with Next.js + Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}