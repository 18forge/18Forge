import type { Metadata } from "next";
import { disciplines, expertise, site, work, workPage, type WorkItem } from "../content";
import { Closing, SiteShell, WorkShot } from "../site-chrome";

export const metadata: Metadata = {
  title: `${workPage.title} | ${site.title}`,
  description: workPage.intro,
  alternates: { canonical: work.path },
};

const delivered = work.items.filter((item) => !item.concept);
const concepts = work.items.filter((item) => item.concept);

// Every picture is the same size; the sides alternate down the page.
function layoutFor(i: number) {
  return i % 2 === 0 ? "case-split" : "case-split case-flip";
}

function Case({ item, index, layout }: { item: WorkItem; index: number; layout: string }) {
  const skills = disciplines.items.filter((d) => (item.expertise as string[]).includes(d.id));
  const status = item.concept ? workPage.conceptLabel : item.soon ? work.soon : workPage.live;

  return (
    <article id={item.slug} className={`case ${layout}`} aria-labelledby={`${item.slug}-title`}>
      <a className="case-shot" href={item.url} target="_blank" rel="noopener" tabIndex={-1} aria-hidden="true">
        <WorkShot item={item} eager={index === 0} />
      </a>
      <div className="case-copy">
        <header className="case-head">
          <span className="case-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="case-label">{item.label}</p>
          <h2 id={`${item.slug}-title`}>{item.name}</h2>
        </header>
        <div className="case-text">
          {item.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="case-facts">
          <div>
            <dt>{workPage.role}</dt>
            <dd>{item.role}</dd>
          </div>
          <div>
            <dt>{workPage.status}</dt>
            <dd className={item.soon || item.concept ? "accent" : undefined}>{status}</dd>
          </div>
          <div>
            <dt>{workPage.expertise}</dt>
            <dd>
              {skills.map((skill, i) => (
                <span key={skill.id}>
                  {i > 0 && ", "}
                  <a className="inline-link" href={`${expertise.path}#${skill.id}`}>
                    {skill.title}
                  </a>
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt>{workPage.visit}</dt>
            <dd>
              <a className="inline-link" href={item.url} target="_blank" rel="noopener">
                {item.domain}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <SiteShell>
      <section className="page-head" aria-labelledby="page-title">
        <p className="kicker">{work.kicker}</p>
        <h1 id="page-title">{work.title}</h1>
        <p className="page-intro">{workPage.intro}</p>
      </section>

      <div className="section case-list">
        {delivered.map((item, i) => (
          <Case key={item.slug} item={item} index={i} layout={layoutFor(i)} />
        ))}
      </div>

      {concepts.length > 0 && (
        <section className="section concepts" aria-labelledby="concepts-title">
          <header className="section-head">
            <p className="kicker">{workPage.conceptsKicker}</p>
            <h2 id="concepts-title">{workPage.conceptsTitle}</h2>
            <p className="section-intro">{workPage.conceptsIntro}</p>
          </header>
          <div className="case-list">
            {concepts.map((item, i) => (
              <Case key={item.slug} item={item} index={delivered.length + i} layout={layoutFor(delivered.length + i)} />
            ))}
          </div>
        </section>
      )}

      <Closing title={workPage.closingTitle} />
    </SiteShell>
  );
}
