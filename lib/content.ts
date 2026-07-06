import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";
import type { Safari } from "./constants";

/* The only module that talks to the CMS. Pages call these functions and get
   back the same TypeScript shapes they always used (from lib/constants.ts),
   so components never know where content lives. Swap the CMS and only this
   file changes. */

const reader = createReader(process.cwd(), keystaticConfig);

export async function getSafaris(): Promise<Safari[]> {
  const entries = await reader.collections.safaris.all();
  return entries
    .sort((a, b) => a.entry.order - b.entry.order)
    .map(({ slug, entry }) => ({
      slug,
      name: entry.name,
      image: entry.image,
      days: entry.days,
      priceFrom: entry.priceFrom,
      parks: [...entry.parks],
      summary: entry.summary,
      goodFor: entry.goodFor || undefined,
      includes: [...entry.includes],
      excludes: [...entry.excludes],
      detailedItinerary:
        entry.detailedItinerary.length > 0
          ? entry.detailedItinerary.map((d) => ({
              day: d.day,
              title: d.title,
              park: d.park,
              description: d.description,
            }))
          : undefined,
    }));
}

export async function getSafari(slug: string): Promise<Safari | undefined> {
  const safaris = await getSafaris();
  return safaris.find((s) => s.slug === slug);
}
