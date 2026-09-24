# Konteks Project: Portfolio Sangood

## Stack
- Next.js (App Router) + Tailwind CSS + Framer Motion
- Deploy: Vercel
- Struktur: app/components/ (Navbar, Hero, Overview, Projects, Experience,
  Credentials, Contact, Footer, DraggableImage, FadeIn)
- Overview.js = gabungan About + Skills + quick stats dalam satu bento grid
  (bukan section terpisah)

## Arah Desain
- Minimalis, clean, whitespace luas (py-20/py-24 antar section)
- Tipografi jadi hierarki utama (ukuran & weight), bukan warna
- Font: Inter (via next/font/google)
- Dark mode sebagai default: background dark charcoal (#0D0D0E), card sedikit
  lebih terang (#151517), border halus (#232326)
- Satu warna aksen (#F5A524, amber) — dipakai terbatas: CTA, hover state,
  indikator. Bukan warna dominan.
- Bento grid dipakai di section Overview
- Navbar: floating, sticky top, rounded-full, glassmorphism
  (backdrop-blur-md + bg-opacity)
- Animasi: fade-in halus pas scroll (pakai komponen FadeIn.js yang reusable),
  hover transition cepat & lembut. Hindari animasi berlebihan.

## Preferensi Kerja
- Saya lebih fokus ke backend (PHP/Laravel), kurang familiar dengan detail
  CSS/styling — kalau ada keputusan desain, jelaskan alasannya, jangan cuma
  kasih kode.
- Bahasa Indonesia santai, respons langsung ke inti, hindari basa-basi.
