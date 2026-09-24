/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-accent-primary)",
          hover: "var(--color-accent-hover)",
          deep: "var(--color-accent-deep)",
        },
        bg: {
          primary: "var(--color-bg-primary)",
          card: "var(--color-bg-card)",
          "card-border": "var(--color-bg-card-border)",
        },
        text: {
          primary: "var(--color-text-primary)",
          muted: "var(--color-text-muted)",
          subtle: "var(--color-text-subtle)",
        },
        glow: "var(--color-glow)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "scroll-horizontal": "scroll-horizontal 30s linear infinite",
      },
      keyframes: {
        "scroll-horizontal": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};