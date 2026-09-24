# Portfolio

Struktur dasar portfolio pakai Next.js (App Router) + Tailwind CSS.

## Struktur folder

```
portfolio/
├── app/
│   ├── layout.js        # root layout (metadata, <html>/<body>)
│   ├── page.js           # halaman utama, merakit semua section
│   ├── globals.css       # Tailwind directives
│   └── components/
│       ├── Navbar.js
│       ├── Hero.js
│       ├── DraggableImage.js  # contoh: gambar bisa di-drag pakai Framer Motion
│       ├── About.js
│       ├── Skills.js
│       ├── Projects.js
│       ├── Experience.js
│       ├── Credentials.js
│       ├── Contact.js
│       └── Footer.js
├── public/                # taruh CV (cv.pdf), foto, favicon, dll di sini
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Cara jalanin

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Cara deploy ke Vercel

1. Push folder ini ke repo GitHub baru.
2. Buka vercel.com → Add New Project → import repo tersebut.
3. Vercel otomatis detect Next.js, langsung deploy.

## Status

Semua komponen di `app/components/` masih placeholder (ditandai komentar `TODO`).
Langkah berikutnya: isi konten asli (CV, project, skill, kontak) satu per satu.

## Animasi (Framer Motion)

`DraggableImage.js` di Hero adalah contoh gambar yang bisa di-drag bebas
(dipakai untuk foto profil). Library ini (`framer-motion`) sudah ditambahkan
ke `package.json` — tinggal `npm install` seperti biasa untuk dapat.

Ganti `src="/avatar-placeholder.png"` di `Hero.js` dengan foto asli kamu,
taruh file fotonya di folder `public/`.
