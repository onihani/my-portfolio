import type { Config } from "tailwindcss";
import * as tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        1: "1",
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        secondary: "rgb(var(--secondary))",
        accent: "rgb(var(--accent))",
        coral: "rgb(var(--coral))",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        bricolageGrotesque: "var(--font-bricolage-grotesque)",
      },
      boxShadow: {
        "3d": "rgba(255, 255, 255, 0.02) 0px -3px 0px 0px inset, rgba(255, 255, 255, 0.03) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.3) 0px 4px 2px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 24px 4px inset, rgba(0, 0, 0, 0.5) 0px 1px 3px 0px",
        "3d-light":
          "rgba(0, 0, 0, 0.05) 0px -3px 0px 0px inset, rgb(255, 255, 255) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.06) 0px 4px 2px 0px inset, rgba(0, 0, 0, 0.04) 0px 0px 24px 4px inset, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
