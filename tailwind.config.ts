import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fef7f0",
          100: "#fde8d4",
          200: "#f9cb9c",
          300: "#f4a864",
          400: "#ea7d2d",
          500: "#d96a1d",
          600: "#b65a1c",
          700: "#8f461d",
          800: "#723d1f",
          900: "#5f341d",
        },
      },
      boxShadow: {
        soft: "0 12px 35px rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
