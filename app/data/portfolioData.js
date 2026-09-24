import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const navLinks = [
  { href: "#work", label: "WORK" },
  { href: "#skills", label: "WHAT I CAN DO" },
  { href: "#about", label: "ABOUT" },
  { href: "#awards", label: "AWARDS" },
  { href: "#trainings", label: "TRAININGS" },
];

export const profile = {
  name: "Ihsan Qolbun",
  tagline: "Problem Solver. Digital Generalist.",
  role: "Backend Developer",
  email: "ihsanqolbun@gmail.com",
  github: "https://github.com/ihsanqolbun",
  githubLabel: "github.com/ihsanqolbun",
  linkedin: "https://linkedin.com/in/ihsanqolbun-",
  linkedinLabel: "linkedin.com/in/ihsanqolbun-",
  resumePath: "/resume.pdf",
  bio: "Mahasiswa tingkat akhir Sistem Informasi di Universitas Bina Sarana Informatika dengan sertifikasi BNSP Software Development. Saat magang di Pengadilan Agama, saya membangun sistem internal yang mengintegrasikan dua database nasional pemerintah — mencakup pelaporan perkara, manajemen data pihak lintas-database, dan penilaian kinerja triwulanan otomatis.",
};

export const stats = [
  { value: "03", label: "Projects" },
  { value: "3", label: "Certificates" },
  { value: "2026", label: "Graduated" },
];

export const traits = ["Detail-Oriented", "Organized", "Curious"];

export const techStack = [
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "MySQL", icon: SiMysql },
  { name: "REST API", icon: TbApi },
  { name: "Git", icon: SiGit },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
];

export const competencies = [
  {
    number: "01",
    title: "FULLSTACK DEVELOPMENT",
    description:
      "Merancang arsitektur server yang bersih dan scalable dengan PHP & Laravel — RESTful API, autentikasi, caching strategy, dan struktur kode yang mudah dipelihara.",
  },
  {
    number: "02",
    title: "MuayThai Gym Management System",
    description:
      " Sistem manajemen gym Muay Thai full-stack — mengelola member, jadwal kelas, dan pembayaran dengan UI yang reaktif tanpa perlu API terpisah, berintegrasi Laravel dan React lewat Inertia.js.",
  },
];

export const selectedWork = [
  {
    title: "Sistem Integrasi Data Pengadilan Agama",
    description:
      "Sistem internal yang mengintegrasikan dua database nasional pemerintah — pelaporan perkara, manajemen data pihak lintas-database, dan penilaian kinerja triwulanan otomatis. 8 REST API endpoint dengan caching, dikerjakan solo end-to-end.",
    image: null,
    stack: ["PHP", "Laravel", "MySQL", "REST API"],
    href: "#",
    github: "https://github.com/ihsanqolbun",
  },
  {
    title: "MuayThai Gym Management System",
    description:
      "Sistem manajemen gym Muay Thai full-stack — mengelola member, jadwal kelas, dan pembayaran dengan UI yang reaktif tanpa perlu API terpisah, berintegrasi Laravel dan React lewat Inertia.js.",
    image: null,
    stack: ["Laravel", "Inertia.js", "React", "TypeScript", "MySQL"],
    href: "#",
    github: "https://github.com/ihsanqolbun",
  },
];

export const archiveProjects = [
  {
    number: "01",
    title: "Sistem Integrasi Data Pengadilan Agama",
    category: "Full Stack",
    stack: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/ihsanqolbun",
    live: "#",
  },
  {
    number: "02",
    title: "MuayThai Gym Management System",
    category: "Backend",
    stack: ["Laravel", "Inertia.js", "React", "TypeScript", "MySQL"],
    github: "https://github.com/ihsanqolbun",
    live: "#",
  },
  {
    number: "03",
    title: "Portfolio Website",
    category: "Beyond Code",
    stack: ["Next.js", "TypeScript"],
    github: "https://github.com/ihsanqolbun",
    live: "#",
  },
];

export const experience = [
  {
    role: "Intern — Backend Developer",
    org: "Pengadilan Agama",
    period: "Agu 2025 – Nov 2025",
    description:
      "Membangun sistem internal integrasi 2 database nasional pemerintah. Merancang 8 REST API endpoint & implementasi caching, dikerjakan solo end-to-end.",
    image: null,
  },
  {
    role: "Ketua Divisi Olahraga & Kesehatan",
    org: "BEM",
    period: "2024 – 2025",
    description:
      "Event lead untuk pesta olahraga tingkat universitas — mengelola jadwal, budget, logistik, dan koordinasi lintas tim.",
    image: null,
  },
];

export const certifications = [
  {
    name: "BNSP — Software Development",
    issuer: "BNSP",
    issuedDate: "Terbit 2025",
    issued: true,
    image: null,
  },
  {
    name: "BNSP — Database",
    issuer: "BNSP",
    issuedDate: "Terbit 2025",
    issued: true,
    image: null,
  },
];

export const contacts = [
  {
    number: "01",
    label: "Email",
    value: "ihsanqolbun@gmail.com",
    href: "mailto:ihsanqolbun@gmail.com",
    external: false,
  },
  {
    number: "02",
    label: "GitHub",
    value: "github.com/ihsanqolbun",
    href: "https://github.com/ihsanqolbun",
    external: true,
  },
  {
    number: "03",
    label: "LinkedIn",
    value: "linkedin.com/in/ihsanqolbun-",
    href: "https://linkedin.com/in/ihsanqolbun-",
    external: true,
  },
];

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};
