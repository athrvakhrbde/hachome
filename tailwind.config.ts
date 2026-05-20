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
        background: "#0a0a0a",
        foreground: "#ededed",
        muted: "#a3a3a3",
        accent: "#00ffce",
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        tektur: ["var(--font-tektur)", "sans-serif"],
        clash: ['"Clash Grotesk"', "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
