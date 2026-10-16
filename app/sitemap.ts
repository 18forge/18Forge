import type { MetadataRoute } from "next";
import { about, contact, expertise, nav, site, work } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [nav.home.href, work.path, expertise.path, about.path, contact.path].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
  }));
}
