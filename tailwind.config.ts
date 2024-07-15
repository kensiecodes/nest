import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
      colors: {
        puff: "var(--color-puff)",
        powder: "var(--color-powder)",
        lake: "var(--color-lake)",
        night: "var(--color-night)",
        fawn: "var(--color-fawn)",

        cloud: {
          100: "#F8F8F8",
          200: "#D9D9D9",
          300: "#C6C6C6",
          800: "#414141",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      serif: ["var(--font-playfair_display)", "serif"],
      // mono: ["Fira Code", "monospace"], TODO: Add code font
      body: ["var(--font-lato)", "sans-serif"],
      logo: ["var(--font-karla)", "sans-serif"],
      gothic: ["var(--font-jacquard24)", "serif"],
    },
  },

  darkMode: "class",
  plugins: [],
};
export default config;
