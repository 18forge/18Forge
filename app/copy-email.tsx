"use client";

import { useState } from "react";
import { contact, site } from "./content";

// Copies the address, for visitors without a mail app on this device.
export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Clipboard blocked: the address stays visible to select by hand.
    }
  };

  return (
    <button type="button" className="quiet-link copy-email" onClick={copy}>
      <span aria-live="polite">{copied ? contact.copied : contact.copy}</span>
    </button>
  );
}
