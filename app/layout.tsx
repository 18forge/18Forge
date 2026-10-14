import type { Metadata, Viewport } from "next";
import { site } from "./content";
import { palette, paletteVars } from "./tokens";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: palette.ink,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={paletteVars}>
      <body>{children}</body>
    </html>
  );
}
