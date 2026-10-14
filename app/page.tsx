import {
  capabilities,
  closing,
  footer,
  hero,
  houses,
  machinery,
  services,
  site,
  ticker,
  work,
} from "./content";
import { BackToTop } from "./back-to-top";
import { Monogram } from "./logo";

export default function Home() {
  const year = new Date().getFullYear();
  const mailto = `mailto:${site.contactEmail}`;
  const workItems = work.items.filter((item) => !item.placeholder);

  return (
    <>
      <header className="nav">
        <a className="wordmark" href="#top">
          <Monogram className="mark" />
          <span className="visually-hidden">18 </span>
          Forge
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <Monogram className="hero-mark" />
          <div className="hero-copy">
            <p className="kicker">
              {hero.eyebrow}
              <span className="kicker-sep" aria-hidden="true"> · </span>
              <span className="kicker-founded">{hero.founded}</span>
            </p>
            <p className="disciplines">{hero.disciplines}</p>
            <h1>
              {hero.headline}
              <em>{hero.headlineAccent}</em>
            </h1>
            <p className="lede">{hero.subhead}</p>
            <div className="actions">
              <a className="button" href={mailto}>
                {hero.cta}
              </a>
              <a className="button button-ghost" href={`#${services.id}`}>
                {hero.secondary}
              </a>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="What we do">
          <div className="ticker-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <span key={copy} className="ticker-group">
                {ticker.map((item) => (
                  <span key={item} className="ticker-item">
                    {item}
                  </span>
                ))}
              </span>
            ))}
          </div>
          <p className="visually-hidden">{ticker.join(", ")}</p>
        </div>

        <section id={services.id} className="section treatment">
          <p className="kicker">{services.kicker}</p>
          <h2>{services.title}</h2>
          <p className="lede">{services.intro}</p>
          <ol className="acts">
            {services.pillars.map((pillar) => (
              <li key={pillar.title} className="act">
                <span className="numeral" aria-hidden="true">
                  {pillar.numeral}
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="menu">
          <div className="menu-card">
            <p className="kicker">{capabilities.kicker}</p>
            <h2>{capabilities.title}</h2>
            <ul className="menu-items">
              {capabilities.items.map((item) => (
                <li key={item.name} className="menu-item">
                  <span className="menu-name">{item.name}</span>
                  <span className="menu-note">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section machinery">
          <div>
            <p className="kicker">{machinery.kicker}</p>
            <h2>{machinery.title}</h2>
            <p className="lede">{machinery.body}</p>
          </div>
          <ul className="examples">
            {machinery.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </section>

        {workItems.length > 0 && (
          <section id={work.id} className="section work">
            <p className="kicker">{work.kicker}</p>
            <h2>{work.title}</h2>
            <p className="lede">{work.intro}</p>
            <div className="work-grid">
              {workItems.map((item, index) => (
                <article key={index} className="work-item">
                  <p className="work-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <ul className="work-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="section houses">
          <p className="kicker">{houses.kicker}</p>
          <div className="house-grid">
            {houses.items.map((house) => (
              <article key={house.title} className="house">
                <h3>{house.title}</h3>
                <p>{house.body}</p>
              </article>
            ))}
          </div>
          <p className="houses-footnote">{houses.footnote}</p>
        </section>

        <section className="section closing">
          <p className="kicker">{closing.kicker}</p>
          <h2>{closing.title}</h2>
          <p className="lede">{closing.body}</p>
          <a className="button" href={mailto}>
            {closing.cta}
          </a>
          <a className="text-link" href={mailto}>
            {site.contactEmail}
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>
          © {year} {site.name}
        </span>
        <a className="text-link" href={mailto}>
          {site.contactEmail}
        </a>
      </footer>

      <BackToTop label={footer.backToTop} />
    </>
  );
}
