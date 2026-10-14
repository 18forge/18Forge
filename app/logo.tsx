// The 18 monogram: a slanted 1 and an 8 drawn as an hourglass.
// Filled shape only; it takes its colour from the surrounding text.
export const monogramViewBox = "0 0 135.15 100";
export const monogramPath =
  "M56.08 0.4A0.3 0.3 0 0 0 55.8 0L42.51 0A10.48 10.48 0 0 0 32.63 6.99L0.02 99.55A0.34 0.34 0 0 0 0.34 100L13.81 100A10.8 10.8 0 0 0 24.01 92.74ZM118.34 50.49A2.63 2.63 0 0 1 118.64 47.64L130.62 32.92A20.18 20.18 0 0 0 114.97 0L80.55 0A24.06 24.06 0 0 0 58.73 34.2L64.38 46.34A3.28 3.28 0 0 1 63.75 50.02L46.31 67.89A18.91 18.91 0 0 0 59.85 100L103.98 100A24.27 24.27 0 0 0 125.59 64.67ZM64.37 79.85A0.74 0.74 0 0 1 63.83 78.61L85.79 55.45A8.97 8.97 0 0 0 87.22 45.09L77.42 26.53A4.42 4.42 0 0 1 81.33 20.05L112.63 20.05A1.18 1.18 0 0 1 113.54 21.99L96.52 42.44A8.62 8.62 0 0 0 95.58 52.09L107.3 73.51A4.29 4.29 0 0 1 103.54 79.85Z";

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
