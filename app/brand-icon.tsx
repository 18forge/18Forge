import { ImageResponse } from "next/og";
import { monogramPath, monogramViewBox } from "./logo";
import { palette } from "./tokens";

// Square icon: alabaster monogram on ink. Used for the favicon and the
// iPhone home screen icon.
export function brandIcon(size: number, { rounded }: { rounded: boolean }) {
  const width = Math.round(size * 0.68);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: palette.ink,
          borderRadius: rounded ? size * 0.22 : 0,
        }}
      >
        <svg width={width} height={Math.round((width * 100) / 135)} viewBox={monogramViewBox}>
          <path fillRule="evenodd" fill={palette.alabaster} d={monogramPath} />
        </svg>
      </div>
    ),
    { width: size, height: size },
  );
}
