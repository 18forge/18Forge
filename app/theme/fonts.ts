import { Inter, Playfair_Display } from "next/font/google";

// Brand typefaces. This is the only place fonts are chosen; the
// stylesheet reads them as --font-display and --font-sans.
export const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontVars = `${display.variable} ${sans.variable}`;
