import { brandIcon } from "./brand-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so this one is a full square.
export default function AppleIcon() {
  return brandIcon(size.width, { rounded: false });
}
