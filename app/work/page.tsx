import type { Metadata } from "next";
import { closing, footer, site, work, workPage } from "../content";
import { BackToTop } from "../back-to-top";
import { SiteFooter, SiteHeader, WorkCard } from "../site-chrome";

export const metadata: Metadata = {
  title: `${workPage.title} | ${site.title}`,
  description: workPage.intro,
};

export default function WorkPage() {
  const mailto = `mailto:${site.contactEmail}`;

  return (
    <>
      <SiteHeader home="/" />

      <main id="top">
        <section className="section work-page">
          <p className="kicker">{work.kicker}</p>
          <h1>{work.title}</h1>
          <p className="lede">{workPage.intro}</p>
          <div className="work-grid">
            {work.items.map((item) => (
              <WorkCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="section closing">
          <p className="kicker">{closing.kicker}</p>
          <h2>{workPage.closingTitle}</h2>
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
    </>
  );
}
