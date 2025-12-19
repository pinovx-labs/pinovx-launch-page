import { Inter, Montserrat, Roboto } from "next/font/google";
import { GeistSans } from "geist/font/sans";

/**
 * Inter
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

/**
 * Montserrat
 */
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

/**
 * Geist (Vercel)
 */
export const geist = GeistSans.variable;
