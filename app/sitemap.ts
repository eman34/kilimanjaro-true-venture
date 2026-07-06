import type { MetadataRoute } from "next";
import { KILIMANJARO_ROUTES } from "@/lib/constants";
import { getSafaris } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const safaris = await getSafaris();

  const staticPaths = [
    "",
    "/about",
    "/charity",
    "/contact",
    "/faq",
    "/gallery",
    "/tours/kilimanjaro",
    "/tours/safaris",
    "/tours/meru",
    "/tours/zanzibar",
    "/tours/cultural",
    "/tours/other-adventures",
    "/tours/charity-climb",
    "/tours/gorilla-trekking",
  ];
  const routePaths = KILIMANJARO_ROUTES.map(
    (r) => `/tours/kilimanjaro/${r.name.toLowerCase()}`,
  );
  const safariPaths = safaris.map((s) => `/tours/safaris/${s.slug}`);

  return [...staticPaths, ...routePaths, ...safariPaths].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path.startsWith("/tours") ? 0.8 : 0.6,
  }));
}
