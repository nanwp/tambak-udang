import type { Config } from "tailwindcss";

import daisyui from "daisyui"
import animationWind from "tailwindcss-animated"
import tailwindScrollbar from "tailwind-scrollbar"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui, animationWind, tailwindScrollbar],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
