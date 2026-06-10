import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        iman: {
          // Core brand palette — must match the ImanLock app exactly
          primary: "#33A60A",
          mid: "#1F8A0A",
          dark: "#075C22",
          deep: "#053F18",
          light: "#EAF7E4",
          glow: "#5FD63B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(7, 92, 34, 0.35)",
        "card-lg": "0 40px 80px -30px rgba(7, 92, 34, 0.45)",
        glow: "0 0 80px rgba(51, 166, 10, 0.45)",
        phone: "0 50px 120px -30px rgba(5, 63, 24, 0.6)",
        "btn-primary": "0 18px 40px -12px rgba(51, 166, 10, 0.6)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #33A60A 0%, #1F8A0A 40%, #075C22 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(20px, -28px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
