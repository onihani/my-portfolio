import { Poppins, Bricolage_Grotesque } from "next/font/google";

export const poppins = Poppins({
  preload: true,
  subsets: ["latin"],
  variable: "--font-poppins",
  // TODO: update to use only needed weights
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const bricolageGrotesque = Bricolage_Grotesque({
  preload: true,
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  // TODO: update to use only needed weights
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
})