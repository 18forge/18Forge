import type { CSSProperties } from "react";

// Brand colours. This is the only place colour values are defined:
// the stylesheet, the favicon and the app icon all read from here.
export const palette = {
  ink: "#0E0D0C",
  charcoal: "#1C1A19",
  alabaster: "#F5F1EB",
  orange: "#F37021",
};

// The palette as CSS variables (--ink, --charcoal, ...), set on <html>.
export const paletteVars = Object.fromEntries(
  Object.entries(palette).map(([name, value]) => [`--${name}`, value]),
) as CSSProperties;
