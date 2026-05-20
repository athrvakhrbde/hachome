import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0c0c0c",
        "surface-raised": "#111111",
        foreground: "#f4f4f5",
        muted: "#8a8a8a",
        accent: "#00ffce",
        "accent-dim": "rgba(0, 255, 206, 0.12)",
        border: "rgba(255, 255, 255, 0.09)",
        "border-strong": "rgba(255, 255, 255, 0.16)",
      },
      fontFamily: {
        tektur: ["var(--font-tektur)", "sans-serif"],
        clash: ['"Clash Grotesk"', "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        glow: "0 0 60px rgba(0, 255, 206, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
