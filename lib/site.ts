/* Canonical site origin for metadata, sitemap, robots and JSON-LD.
   Set NEXT_PUBLIC_SITE_URL once the real domain is live; the fallback
   matches the domain implied by the company email address. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kilimanjarotrueventure.com";
