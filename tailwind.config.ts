import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        muted: "#a1a1aa",
        "muted-subtle": "#858585",
        accent: "#F92119",
        "accent-dim": "rgba(249, 33, 25, 0.18)",
        border: "rgba(255, 255, 255, 0.12)",
        "border-strong": "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        tektur: ["var(--font-tektur)", "sans-serif"],
        clash: ['"Clash Grotesk"', "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        glow: "0 0 60px rgba(249, 33, 25, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
