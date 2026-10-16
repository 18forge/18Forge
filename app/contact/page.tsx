import type { Metadata } from "next";
import { contact, site } from "../content";
import { CopyEmail } from "../copy-email";
import { SiteShell, mailto } from "../site-chrome";

export const metadata: Metadata = {
  title: `${contact.kicker} | ${site.title}`,
  description: contact.metaDescription,
  alternates: { canonical: contact.path },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="contact" aria-labelledby="page-title">
        <p className="kicker">{contact.kicker}</p>
        <h1 id="page-title">{contact.title}</h1>
        <a className="contact-email" href={mailto}>
          {site.contactEmail}
        </a>
        <div className="contact-actions">
          <a className="button" href={mailto}>
            {contact.write}
          </a>
          <CopyEmail />
        </div>
        <div className="contact-notes">
          <p>{contact.body}</p>
          <p>{contact.hint}</p>
        </div>
      </section>
    </SiteShell>
  );
}
