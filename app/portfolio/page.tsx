import type { Metadata } from "next";
import { closing, footer, site, work, workPage } from "../content";
import { BackToTop } from "../back-to-top";
import { Chat } from "../chat";
import { SiteFooter, SiteHeader, WorkShot } from "../site-chrome";

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
          <h1>{workPage.heading}</h1>
          <p className="lede">{workPage.intro}</p>
          <div className="case-list">
            {work.items.map((item) => (
              <article key={item.name} className="case">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener" tabIndex={-1}>
                    <WorkShot item={item} />
                  </a>
                ) : (
                  <WorkShot item={item} />
                )}
                <div className="case-copy">
                  <p className="work-label">{item.label}</p>
                  <h2>{item.name}</h2>
                  {item.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {!item.url && <p className="case-soon">{work.soon}</p>}
                  <p className="case-role">
                    <span>{workPage.role}</span>
                    {item.role}
                  </p>
                  {item.url && (
                    <a className="text-link" href={item.url} target="_blank" rel="noopener">
                      {workPage.visit}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  )}
                </div>
              </article>
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
      {/* The assistant only appears once its API key is set on the host. */}
      {process.env.ANTHROPIC_API_KEY && <Chat />}
    </>
  );
}
