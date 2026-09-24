"use client";

import { motion } from "framer-motion";

// Contoh: gambar yang bisa di-drag bebas ke segala arah, lalu balik lagi
// (kayak sticker) sambil ada efek scale waktu ditekan.
export default function DraggableImage({ src, alt = "" }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      drag
      dragElastic={0.2} // seberapa "lentur" pas ditarik ngelewatin batas
      dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }} // batas area drag
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }} // efek pantul pas dilepas
      whileTap={{ scale: 1.1, cursor: "grabbing" }} // membesar sedikit pas ditekan/ditarik
      whileHover={{ scale: 1.05 }}
      className="w-44 h-44 rounded-full object-cover border border-base-border shadow-xl cursor-grab select-none"
    />
  );
}
