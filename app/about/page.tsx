import type { Metadata } from "next";
import { about, closing, houses, site } from "../content";
import { Closing, SiteShell, WorkLinks, findWork } from "../site-chrome";

export const metadata: Metadata = {
  title: `${about.kicker} | ${site.title}`,
  description: about.metaDescription,
  alternates: { canonical: about.path },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="page-head" aria-labelledby="page-title">
        <p className="kicker">{about.kicker}</p>
        <h1 id="page-title">{about.title}</h1>
        <p className="page-intro">{about.intro}</p>
      </section>

      <section className="section principles" aria-labelledby="approach-title">
        <h2 id="approach-title" className="kicker">
          {about.approachKicker}
        </h2>
        <ol className="principle-list">
          {about.principles.map((principle, i) => (
            <li key={principle.title}>
              <span className="principle-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section audiences" aria-labelledby="audiences-title">
        <header className="section-head">
          <p className="kicker">{houses.kicker}</p>
          <h2 id="audiences-title">{houses.title}</h2>
        </header>
        <ul className="audience-list">
          {houses.items.map((house) => {
            const shown = findWork(house.work);
            return (
              <li key={house.title} className="audience">
                <h3>{house.title}</h3>
                <div>
                  <p>{house.body}</p>
                  {shown.length > 0 && (
                    <p className="audience-work">
                      <WorkLinks items={shown} />
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <p className="audiences-footnote">{houses.footnote}</p>
      </section>

      <Closing title={closing.about} />
    </SiteShell>
  );
}
