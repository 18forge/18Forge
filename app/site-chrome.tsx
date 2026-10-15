import { nav, site, work } from "./content";
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
      <span>
        © {year} {site.name}
      </span>
      <a className="text-link" href={`mailto:${site.contactEmail}`}>
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

// One project: the whole card links to the live site.
export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <a className="work-item" href={item.url} target="_blank" rel="noopener">
      <WorkShot item={item} />
      <p className="work-label">{item.label}</p>
      <h3>{item.name}</h3>
      <p>{item.body}</p>
      <span className="work-domain">
        {item.domain}
        <span aria-hidden="true"> ↗</span>
      </span>
    </a>
  );
}
