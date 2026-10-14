import {
  closing,
  footer,
  hero,
  houses,
  machinery,
  menu,
  site,
  ticker,
  treatment,
} from "./content";
import { BackToTop } from "./back-to-top";
import { Monogram } from "./logo";

export default function Home() {
  const year = new Date().getFullYear();
  const mailto = `mailto:${site.contactEmail}`;

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
            <h1>
              {hero.headline}
              <em>{hero.headlineAccent}</em>
            </h1>
            <p className="lede">{hero.subhead}</p>
            <div className="actions">
              <a className="button" href={mailto}>
                {hero.cta}
              </a>
              <a className="text-link" href={mailto}>
                {site.contactEmail}
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

        <section className="section treatment">
          <p className="kicker">{treatment.kicker}</p>
          <h2>{treatment.title}</h2>
          <p className="lede">{treatment.intro}</p>
          <ol className="acts">
            {treatment.acts.map((act) => (
              <li key={act.title} className="act">
                <span className="numeral" aria-hidden="true">
                  {act.numeral}
                </span>
                <h3>{act.title}</h3>
                <p>{act.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="menu">
          <div className="menu-card">
            <p className="kicker">{menu.kicker}</p>
            <h2>{menu.title}</h2>
            <ul className="menu-items">
              {menu.items.map((item) => (
                <li key={item.name} className="menu-item">
                  <span className="menu-line">
                    <span className="menu-name">{item.name}</span>
                    <span className="menu-dots" aria-hidden="true" />
                    <span className="menu-price">{menu.price}</span>
                  </span>
                  <span className="menu-note">{item.note}</span>
                </li>
              ))}
            </ul>
            <p className="menu-footnote">{menu.footnote}</p>
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
        <span className="signoff">{footer.signoff}</span>
      </footer>

      <BackToTop label={footer.backToTop} />
    </>
  );
}
