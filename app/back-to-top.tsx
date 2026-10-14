"use client";

import { useEffect, useState } from "react";

// A small round button that appears once the visitor has scrolled about a
// screen down, and takes them back to the top of the page.
export function BackToTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goToTop = () => {
    // The stylesheet makes this smooth, unless the visitor asked for reduced motion.
    window.scrollTo({ top: 0 });
    // Keep keyboard focus at the top too, instead of on a button that hides.
    document.querySelector<HTMLElement>(".wordmark")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      className="back-to-top"
      data-visible={visible}
      aria-label={label}
      title={label}
      tabIndex={visible ? 0 : -1}
      onClick={goToTop}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 4.5 20 13.2h-5.2V20H9.2v-6.8H4z" />
      </svg>
    </button>
  );
}
