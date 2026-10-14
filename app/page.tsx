import { features, hero, site } from "./content";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="nav">
        <span className="wordmark">
          <span className="mark" aria-hidden="true" />
          {site.name}
        </span>
        <a className="nav-link" href={`mailto:${site.contactEmail}`}>
          Contact
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="glow" aria-hidden="true" />
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p className="subhead">{hero.subhead}</p>
          <a className="button" href={`mailto:${site.contactEmail}`}>
            {hero.cta}
          </a>
        </section>

        <section className="features" aria-label="Highlights">
          {features.map((f) => (
            <article key={f.title} className="feature">
              <h2>{f.title}</h2>
              <p>{f.body}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        © {year} {site.name}
      </footer>
    </>
  );
}
