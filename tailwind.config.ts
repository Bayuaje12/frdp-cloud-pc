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
        bg: {
          main: "#08080B",
          secondary: "#101015",
        },
        glass: {
          card: "rgba(255,255,255,0.045)",
          border: "rgba(255,255,255,0.10)",
        },
        brand: {
          red: "#DC2626",
          accent: "#EF4444",
          bright: "#F87171",
        },
        fg: {
          primary: "#F8FAFC",
          secondary: "#A1A1AA",
        },
        status: {
          success: "#22C55E",
          warning: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
