// The 18 monogram: a slanted 1 and an 8 drawn as an hourglass.
// Filled shape only; it takes its colour from the surrounding text.
export const monogramViewBox = "0 0 135 100";
export const monogramPath =
  "M55.49 2.75A2.07 2.07 0 0 0 53.54 0L42.53 0A10.34 10.34 0 0 0 32.77 6.91L0.32 99.08A0.69 0.69 0 0 0 0.97 100L14.37 100A10.34 10.34 0 0 0 24.14 93.05ZM118.33 50.74A2.41 2.41 0 0 1 118.59 48.05L131.23 32.72A20 20 0 0 0 115.8 0L79.5 0A23.45 23.45 0 0 0 58.67 34.21L64.7 45.89A3.1 3.1 0 0 1 64.19 49.46L47.04 67.31A19.31 19.31 0 0 0 60.96 100L105.66 100A23.45 23.45 0 0 0 126.27 65.36ZM66.67 80A1.72 1.72 0 0 1 65.42 77.09L86.42 54.99A7.93 7.93 0 0 0 87.71 45.88L77.44 26.04A4.14 4.14 0 0 1 81.11 20L112.54 20A1.38 1.38 0 0 1 113.6 22.26L96.45 42.82A7.93 7.93 0 0 0 95.59 51.7L107.69 73.88A4.14 4.14 0 0 1 104.06 80Z";

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={monogramViewBox}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path fillRule="evenodd" d={monogramPath} />
    </svg>
  );
}
