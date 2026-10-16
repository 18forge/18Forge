import { closing, footer, nav, site, work, type WorkItem } from "./content";
import { BackToTop } from "./back-to-top";
import { Chat } from "./chat";
import { Monogram } from "./logo";
import { SiteNav } from "./site-nav";

// Header, footer and closing shared by every page.

export const mailto = `mailto:${site.contactEmail}`;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#content">
        {nav.skip}
      </a>
      <SiteHeader />
      <main id="content">{children}</main>
      <SiteFooter />
      <BackToTop label={footer.backToTop} />
      {/* The assistant only appears once its API key is set on the host. */}
      {process.env.ANTHROPIC_API_KEY && <Chat />}
    </>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="wordmark" href="/">
          <Monogram className="mark" />
          <span className="visually-hidden">18 </span>
          Forge
        </a>
        <SiteNav />
      </div>
    </header>
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span className="footer-brand">
        <span>©&nbsp;{year}</span>
        <span className="footer-logo">
          <Monogram className="mark" />
          <span className="visually-hidden">18 </span>
          Forge
        </span>
      </span>
      <a className="footer-credit" href="/">
        {footer.credit}
        <Monogram className="mark" />
        <span className="visually-hidden">18</span>
      </a>
      <a className="text-link footer-email" href={mailto}>
        {site.contactEmail}
      </a>
    </footer>
  );
}

// The invitation that ends every page but Contact.
export function Closing({ title = closing.title }: { title?: string }) {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <p className="kicker">{closing.kicker}</p>
      <h2 id="closing-title">{title}</h2>
      <p className="closing-body">{closing.body}</p>
      <a className="closing-email" href={mailto}>
        {site.contactEmail}
      </a>
    </section>
  );
}

// A screenshot of the site.
export function WorkShot({ item, eager = false }: { item: WorkItem; eager?: boolean }) {
  return (
    <span className="work-shot">
      <img
        src={item.image}
        alt={`The ${item.name} ${item.label.toLowerCase().includes("app") ? "app" : "website"}`}
        width={1600}
        height={1000}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </span>
  );
}

export const workHref = (item: WorkItem) => `${work.path}#${item.slug}`;

export const findWork = (names: string[]) =>
  names.flatMap((name) => work.items.filter((item) => item.name === name));

// A short, comma separated list of project names, each linking to its
// entry on /portfolio.
export function WorkLinks({ items }: { items: WorkItem[] }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={item.slug}>
          {i > 0 && ", "}
          <a className="inline-link" href={workHref(item)}>
            {item.name}
          </a>
        </span>
      ))}
    </>
  );
}
