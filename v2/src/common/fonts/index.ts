import { Poppins } from "next/font/google";

export const poppins = Poppins({
  preload: true,
  subsets: ["latin"],
  variable: "--font-poppins",
  // TODO: update to use only needed weights
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})