import type { Metadata } from "next";
import { disciplines, expertise, machinery, site, work } from "../content";
import { Closing, SiteShell, WorkLinks } from "../site-chrome";

export const metadata: Metadata = {
  title: `${expertise.kicker} | ${site.title}`,
  description: expertise.metaDescription,
  alternates: { canonical: expertise.path },
};

export default function ExpertisePage() {
  return (
    <SiteShell>
      <section className="page-head" aria-labelledby="page-title">
        <p className="kicker">{expertise.kicker}</p>
        <h1 id="page-title">{expertise.title}</h1>
        <p className="page-intro">{expertise.intro}</p>
      </section>

      <div className="section disciplines">
        {disciplines.items.map((item) => {
          const shown = work.items.filter((w) => (w.expertise as string[]).includes(item.id));
          return (
            <section key={item.id} id={item.id} className="discipline" aria-labelledby={`${item.id}-title`}>
              <header className="discipline-head">
                <span className="numeral" aria-hidden="true">
                  {item.numeral}
                </span>
                <h2 id={`${item.id}-title`}>{item.title}</h2>
                <p className="discipline-lede">{item.summary}</p>
                <p className="discipline-body">{item.body}</p>
                {shown.length > 0 && (
                  <p className="discipline-work">
                    <span className="see-in">{expertise.seeIn}</span> <WorkLinks items={shown} />
                  </p>
                )}
              </header>
              <ul className="capabilities">
                {item.capabilities.map((capability) => (
                  <li key={capability.name}>
                    <span className="capability-name">{capability.name}</span>
                    <span className="capability-note">{capability.note}</span>
                  </li>
                ))}
              </ul>

              {item.id === "build" && (
                <aside className="clockwork" aria-labelledby="clockwork-title">
                  <div>
                    <p className="kicker">{machinery.kicker}</p>
                    <h3 id="clockwork-title">{machinery.title}</h3>
                    <p className="clockwork-body">{machinery.body}</p>
                  </div>
                  <ul className="clockwork-list">
                    {machinery.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </aside>
              )}
            </section>
          );
        })}
      </div>

      <Closing />
    </SiteShell>
  );
}
