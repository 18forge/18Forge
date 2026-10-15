import { footer, nav, site, work } from "./content";
import { Monogram } from "./logo";

// Header and footer shared by every page.

export function SiteHeader({ home = "#top" }: { home?: string }) {
  return (
    <header className="nav">
      <a className="wordmark" href={home}>
        <Monogram className="mark" />
        <span className="visually-hidden">18 </span>
        Forge
      </a>
      <a className="nav-link" href={work.path}>
        {nav.work}
      </a>
    </header>
  );
}

export function SiteFooter() {
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
      <a className="text-link footer-email" href={`mailto:${site.contactEmail}`}>
        {site.contactEmail}
      </a>
    </footer>
  );
}

type WorkItem = (typeof work.items)[number];

// A screenshot of the site, framed like a browser window.
export function WorkShot({ item }: { item: WorkItem }) {
  return (
    <span className="work-shot">
      <img
        src={item.image}
        alt={`The ${item.name} website`}
        width={1600}
        height={1000}
        loading="lazy"
      />
    </span>
  );
}

// One project: the whole card links to the live site, once there is one.
export function WorkCard({ item }: { item: WorkItem }) {
  const inner = (
    <>
      <WorkShot item={item} />
      <p className="work-label">{item.label}</p>
      <h3>{item.name}</h3>
      <p>
        {item.body}
        {item.soon && <span className="work-soon"> {work.soon}</span>}
      </p>
      <span className="work-domain">
        {item.url ? (
          <>
            {item.domain}
            <span aria-hidden="true"> ↗</span>
          </>
        ) : (
          work.soon
        )}
      </span>
    </>
  );

  return item.url ? (
    <a className="work-item" href={item.url} target="_blank" rel="noopener">
      {inner}
    </a>
  ) : (
    <div className="work-item">{inner}</div>
  );
}
