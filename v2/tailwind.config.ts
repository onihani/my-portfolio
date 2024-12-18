import type { Config } from "tailwindcss";
import * as tailwindcssAnimate from "tailwindcss-animate"

export default {
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
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
