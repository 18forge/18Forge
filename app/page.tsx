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
import { Chat } from "./chat";
import { Monogram } from "./logo";
import { SiteFooter, SiteHeader, WorkCard } from "./site-chrome";

// The few projects the landing page shows; the rest are on /portfolio.
const homeWork = work.home.flatMap((name) => work.items.filter((item) => item.name === name));

export default function Home() {
  const mailto = `mailto:${site.contactEmail}`;

  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero">
          <Monogram className="hero-mark" />
          <div className="hero-copy">
            <p className="kicker">{hero.eyebrow}</p>
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

        <section id={work.id} className="section work">
          <p className="kicker">{work.kicker}</p>
          <h2>{work.title}</h2>
          <p className="lede">{work.intro}</p>
          <div className="work-grid">
            {homeWork.map((item) => (
              <WorkCard key={item.name} item={item} />
            ))}
          </div>
          <a className="text-link work-more" href={work.path}>
            {work.more}
          </a>
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

      <SiteFooter />

      <BackToTop label={footer.backToTop} />
      {/* The assistant only appears once its API key is set on the host. */}
      {process.env.ANTHROPIC_API_KEY && <Chat />}
    </>
  );
}
