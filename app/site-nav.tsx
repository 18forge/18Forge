"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "./content";

// The main navigation. Wide screens show the links in the header; phones
// get a Menu button that opens the links full screen.
export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  const current = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  // Close the menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const links = () => Array.from(panel.current?.querySelectorAll<HTMLElement>("a") ?? []);
    links()[0]?.focus({ preventScroll: true });
    document.documentElement.dataset.menu = "open";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
        return;
      }
      // Keep keyboard focus inside the open menu and its Close button.
      if (event.key !== "Tab") return;
      const items = [toggle.current, ...links()].filter(Boolean) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onResize = () => window.matchMedia("(min-width: 761px)").matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      delete document.documentElement.dataset.menu;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <nav className="site-nav" aria-label={nav.label}>
      <ul className="nav-list">
        {nav.items.map((item) => (
          <li key={item.href}>
            <a
              className="nav-link"
              href={item.href}
              aria-current={current(item.href) ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        ref={toggle}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? nav.close : nav.open}
      </button>

      <div id="site-menu" ref={panel} className="menu-panel" data-open={open} hidden={!open}>
        <ol className="menu-list">
          {[nav.home, ...nav.items].map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={current(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="menu-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
        <a className="menu-email" href={`mailto:${site.contactEmail}`}>
          {site.contactEmail}
        </a>
      </div>
    </nav>
  );
}
