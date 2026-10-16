import { closing, disciplines, expertise, hero, ticker, work } from "./content";
import { Monogram } from "./logo";
import { Closing, SiteShell, WorkShot, findWork, mailto, workHref } from "./site-chrome";

// The few projects the landing page shows; the rest are on /portfolio.
const homeWork = findWork(work.home);

export default function Home() {
  return (
    <SiteShell>
      <section className="hero" aria-labelledby="hero-title">
        <Monogram className="hero-mark" />
        <div className="hero-copy">
          <p className="kicker">{hero.eyebrow}</p>
          <h1 id="hero-title">
            <span className="hero-line">{hero.headline}</span>{" "}
            <span className="hero-line hero-accent">{hero.headlineAccent}</span>
          </h1>
          <p className="hero-lede">{hero.subhead}</p>
          <div className="actions">
            <a className="button" href={mailto}>
              {hero.cta}
            </a>
            <a className="quiet-link" href={work.path}>
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

      <section id={work.id} className="section home-work" aria-labelledby="work-title">
        <header className="section-head">
          <p className="kicker">{work.kicker}</p>
          <h2 id="work-title">{work.title}</h2>
          <p className="section-intro">{work.intro}</p>
        </header>

        <div className="feature-list">
          {homeWork.map((item, i) => (
            <a key={item.slug} className={`feature feature-${i % 2 ? "right" : "left"}`} href={workHref(item)}>
              <WorkShot item={item} />
              <span className="feature-copy">
                <span className="feature-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="feature-meta">{item.label}</span>
                <span className="feature-name">{item.name}</span>
                <span className="feature-body">
                  {item.body}
                  {item.soon && <span className="soon"> {work.soon}</span>}
                </span>
              </span>
            </a>
          ))}
        </div>

        <a className="quiet-link section-more" href={work.path}>
          {work.more}
        </a>
      </section>

      <section className="section home-disciplines" aria-labelledby="disciplines-title">
        <header className="section-head">
          <p className="kicker">{disciplines.kicker}</p>
          <h2 id="disciplines-title">{disciplines.title}</h2>
          <p className="section-intro">{disciplines.intro}</p>
        </header>

        <ol className="discipline-row">
          {disciplines.items.map((item) => (
            <li key={item.id}>
              <a className="discipline-cell" href={`${expertise.path}#${item.id}`}>
                <span className="numeral" aria-hidden="true">
                  {item.numeral}
                </span>
                <span className="discipline-title">{item.title}</span>
                <span className="discipline-summary">{item.summary}</span>
              </a>
            </li>
          ))}
        </ol>

        <a className="quiet-link section-more" href={expertise.path}>
          {disciplines.more}
        </a>
      </section>

      <Closing title={closing.home} note />
    </SiteShell>
  );
}
