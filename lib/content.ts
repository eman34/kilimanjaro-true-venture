import { SAFARIS, type Safari } from "./constants";

/* Safari content accessors. Pages call these and get back the shapes from
   lib/constants.ts, so components never know where content lives. If content
   ever moves (e.g. to a CMS), only this file changes. Both stay async so
   callers don't care either way. */

export async function getSafaris(): Promise<Safari[]> {
  return SAFARIS;
}

export async function getSafari(slug: string): Promise<Safari | undefined> {
  return SAFARIS.find((s) => s.slug === slug);
}
