# Kilimanjaro True Venture

Website for [Kilimanjaro True Venture](https://kilimanjarotrueventure.com) — Abu's
Tanzanian-owned trekking and safari company (Kilimanjaro climbs, wildlife safaris,
Mount Meru, Zanzibar, cultural experiences).

The site has one job: **make a stranger trust a small Tanzanian operator with a
$2,000+ trip.** Every page decision serves that — real names, real numbers,
operational detail over adjectives.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build + Pagefind search index
```

## Stack & layout

Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript. No database, no CMS —
all content lives in [`lib/constants.ts`](lib/constants.ts) (tours, safaris,
team, testimonials, company info). Pages in `app/`, shared components in
`components/`, photos in `public/images/`.

Deploys automatically via Vercel on push to `main`.

## The docs that matter

| Doc | What it owns |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | Design system, code standards, per-page depth strategy, testing checklist |
| [`BRAND.md`](BRAND.md) | Voice, audience positioning, anti-patterns, operational proof topics |
| [`AUDIENCE.md`](AUDIENCE.md) | Buyer psychology, objections, conversion principles |
| [`docs/VERIFY-WITH-ABU.md`](docs/VERIFY-WITH-ABU.md) | Every claim awaiting Abu's confirmation — nothing ships unverified |

**Owner**: Abdallah Athumani (Abu) · Sekei, Arusha, Tanzania
