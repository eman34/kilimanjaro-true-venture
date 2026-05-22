import Image from "next/image";
import type { Metadata } from "next";
import { KILIMANJARO_ROUTES, formatDaysRange, minPrice } from "@/lib/constants";
import type { KilimanjaroRoute } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Design Preview — Route Card Density Mockups",
  robots: { index: false, follow: false },
};

const ROUTE_ORDER = ["Lemosho", "Machame", "Rongai", "Marangu", "Umbwe", "Londorossi"];
const ROUTES: KilimanjaroRoute[] = ROUTE_ORDER
  .map((name) => KILIMANJARO_ROUTES.find((r) => r.name === name))
  .filter((r): r is KilimanjaroRoute => r !== undefined);

function PatternHeader({
  letter,
  title,
  pitch,
  approxHeight,
  best,
  worst,
}: {
  letter: string;
  title: string;
  pitch: string;
  approxHeight: string;
  best: string;
  worst: string;
}) {
  return (
    <header className="max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-emerald font-semibold mb-2">
        Pattern {letter} · approx {approxHeight}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-forest mb-3">{title}</h2>
      <p className="text-forest/80 leading-relaxed mb-3">{pitch}</p>
      <p className="text-sm text-forest/70 leading-relaxed">
        <strong className="text-forest">Best for:</strong> {best}
      </p>
      <p className="text-sm text-forest/70 leading-relaxed mt-1">
        <strong className="text-forest">Worst for:</strong> {worst}
      </p>
    </header>
  );
}

// ===========================================================================
// PATTERN A — Compressed Spread (current shape, smaller everything)
// ===========================================================================
function CompressedSpread({ route, reverse }: { route: KilimanjaroRoute; reverse?: boolean }) {
  const photo = (
    <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-6 lg:min-h-[460px]">
      <Image
        src={route.image}
        alt={route.name}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      {route.tag && (
        <span className="absolute top-4 left-4 bg-paper/95 backdrop-blur text-forest text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
          {route.tag}
        </span>
      )}
      {route.successRate && (
        <div className="absolute top-4 right-4 bg-paper/95 backdrop-blur rounded-lg px-3 py-2 shadow-sm">
          <p className="text-forest/60 text-[10px] uppercase tracking-wider font-semibold">
            Summit success
          </p>
          <p className="text-emerald font-bold text-base leading-tight">{route.successRate}</p>
        </div>
      )}
    </div>
  );

  const content = (
    <div className="lg:col-span-6 p-6 md:p-8 flex flex-col">
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3 className="text-2xl md:text-3xl font-bold text-forest leading-tight">{route.name}</h3>
        <span className="text-forest/60 text-base font-medium">
          {formatDaysRange(route.durations)}
        </span>
      </div>
      <p className="text-emerald italic text-sm mt-1">{route.nickname}</p>
      <dl className="grid grid-cols-3 gap-4 mt-4 border-y border-taupe/30 py-3">
        <div>
          <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">From</dt>
          <dd className="text-forest font-bold text-base mt-1">{minPrice(route.durations)}</dd>
        </div>
        <div>
          <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Difficulty</dt>
          <dd className="text-forest font-medium text-sm mt-1">{route.difficulty}</dd>
        </div>
        <div>
          <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Scenery</dt>
          <dd className="text-forest text-sm mt-1">
            {"★".repeat(route.scenery)}
            <span className="text-forest/30">{"★".repeat(5 - route.scenery)}</span>
          </dd>
        </div>
      </dl>
      <p className="text-forest/80 text-sm leading-relaxed mt-4 line-clamp-3">
        {route.description}
      </p>
      {route.highlights && route.highlights.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {route.highlights.slice(0, 2).map((h) => (
            <li key={h} className="flex items-start gap-2 text-forest/80 text-sm">
              <svg
                className="w-4 h-4 text-emerald shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-4">
        <span className="btn-primary">View {route.name} details</span>
      </div>
    </div>
  );

  return (
    <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      {reverse ? <>{content}{photo}</> : <>{photo}{content}</>}
    </article>
  );
}

function PatternA() {
  return (
    <section className="bg-paper border-t border-taupe">
      <PatternHeader
        letter="A"
        title="Compressed spread — current production"
        approxHeight="~460px tall (~50% taller than the original A mockup)"
        pitch="Same horizontal photo-left / content-right layout. Heading text-2xl md:text-3xl, padding p-6 md:p-8, 3-col dl, description clamped to 3 lines, 2 highlights. Photo min-h 460px on lg. Matches the production /tours/kilimanjaro page exactly."
        best="Fits about 1.5 cards per laptop viewport — close to your 2-card target without sacrificing description or highlights."
        worst="Description still occasionally clips at the 3rd line for the longer-route copy."
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="space-y-4">
          {ROUTES.slice(0, 4).map((r, i) => (
            <CompressedSpread key={r.name} route={r} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================================================================
// PATTERN B — Banner card (photo on top, dense content strip below)
// ===========================================================================
function BannerCard({ route }: { route: KilimanjaroRoute }) {
  return (
    <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden">
      <div className="relative aspect-[16/7]">
        <Image
          src={route.image}
          alt={route.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 80vw, 100vw"
        />
        {route.tag && (
          <span className="absolute top-3 left-3 bg-paper/95 backdrop-blur text-forest text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md">
            {route.tag}
          </span>
        )}
        {route.successRate && (
          <div className="absolute top-3 right-3 bg-paper/95 backdrop-blur rounded-md px-2.5 py-1.5 shadow-sm">
            <p className="text-forest/60 text-[9px] uppercase tracking-wider font-semibold leading-none">
              Success
            </p>
            <p className="text-emerald font-bold text-sm">{route.successRate}</p>
          </div>
        )}
      </div>
      <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Title block */}
        <div className="md:col-span-4">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="text-2xl font-bold text-forest leading-tight">{route.name}</h3>
            <span className="text-forest/60 text-sm font-medium">
              {formatDaysRange(route.durations)}
            </span>
          </div>
          <p className="text-emerald italic text-sm">{route.nickname}</p>
        </div>
        {/* Stats */}
        <dl className="md:col-span-5 grid grid-cols-3 gap-3">
          <div>
            <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">From</dt>
            <dd className="text-forest font-bold text-sm mt-0.5">{minPrice(route.durations)}</dd>
          </div>
          <div>
            <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Difficulty</dt>
            <dd className="text-forest font-medium text-xs mt-0.5">{route.difficulty}</dd>
          </div>
          <div>
            <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Scenery</dt>
            <dd className="text-forest text-xs mt-0.5">
              {"★".repeat(route.scenery)}
              <span className="text-forest/30">{"★".repeat(5 - route.scenery)}</span>
            </dd>
          </div>
        </dl>
        {/* CTA */}
        <div className="md:col-span-3 md:justify-self-end">
          <span className="btn-primary text-sm whitespace-nowrap">View details</span>
        </div>
      </div>
    </article>
  );
}

function PatternB() {
  return (
    <section className="bg-paper border-t border-taupe">
      <PatternHeader
        letter="B"
        title="Banner card (photo top, content row below)"
        approxHeight="340px tall"
        pitch="Photo as wide 16:7 banner across the top. Below: title block on the left, dl in the middle, CTA on the right — single 75px content row. Removes the description entirely; trusts the photo + numbers to do the selling, the detail page does the convincing."
        best="Photo-led pages where the route photography is strong. Reads as 'shop the trip' — cleaner editorial than the spread."
        worst="No narrative text on the overview at all. Travelers who want a paragraph of context before clicking through will feel under-informed."
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="space-y-4">
          {ROUTES.slice(0, 4).map((r) => (
            <BannerCard key={r.name} route={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================================================================
// PATTERN C — Photo-overlay poster (photo dominant, text overlaid + stats strip)
// ===========================================================================
function PhotoOverlay({ route }: { route: KilimanjaroRoute }) {
  return (
    <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden">
      <div className="relative aspect-[16/8]">
        <Image
          src={route.image}
          alt={route.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 80vw, 100vw"
        />
        {/* Forest gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
        {/* Top-right success badge */}
        {route.successRate && (
          <div className="absolute top-4 right-4 bg-paper/95 backdrop-blur rounded-md px-2.5 py-1.5 shadow-sm">
            <p className="text-forest/60 text-[9px] uppercase tracking-wider font-semibold leading-none">
              Success
            </p>
            <p className="text-emerald font-bold text-sm">{route.successRate}</p>
          </div>
        )}
        {/* Bottom-left title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {route.tag && (
            <span className="inline-block bg-paper/95 backdrop-blur text-forest text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md mb-2">
              {route.tag}
            </span>
          )}
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="text-3xl md:text-4xl font-bold text-paper leading-tight">
              {route.name}
            </h3>
            <span className="text-paper/80 text-base font-medium">
              {formatDaysRange(route.durations)}
            </span>
          </div>
          <p className="text-emerald italic text-base">{route.nickname}</p>
        </div>
      </div>
      {/* Stats + CTA strip below photo */}
      <div className="px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
        <dl className="flex gap-6">
          <div>
            <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">From</dt>
            <dd className="text-forest font-bold text-sm mt-0.5">{minPrice(route.durations)}</dd>
          </div>
          <div>
            <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Difficulty</dt>
            <dd className="text-forest font-medium text-sm mt-0.5">{route.difficulty}</dd>
          </div>
          <div>
            <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Scenery</dt>
            <dd className="text-forest text-sm mt-0.5">
              {"★".repeat(route.scenery)}
              <span className="text-forest/30">{"★".repeat(5 - route.scenery)}</span>
            </dd>
          </div>
        </dl>
        <span className="btn-primary text-sm whitespace-nowrap">View details</span>
      </div>
    </article>
  );
}

function PatternC() {
  return (
    <section className="bg-paper border-t border-taupe">
      <PatternHeader
        letter="C"
        title="Photo-overlay poster"
        approxHeight="360px tall"
        pitch="Photo is the whole card (16:8 aspect). Title + nickname overlay on the photo bottom-left (paper text, forest gradient for legibility). Stats and CTA in a tight 50px strip below the photo. Most photo-forward of the four — feels cinematic, more 'destination ad' than 'product card.'"
        best="Trusting your photos to sell the experience. Cinematic, magazine-spread mood. Photos are the differentiator."
        worst="Stats are harder to scan (single row vs. grid). The route description is gone from the overview entirely. Risk: if a photo is weaker than the others, the inconsistency shows."
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="space-y-4">
          {ROUTES.slice(0, 4).map((r) => (
            <PhotoOverlay key={r.name} route={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================================================================
// PATTERN D — List row (thumbnail + dense text)
// ===========================================================================
function ListRow({ route }: { route: KilimanjaroRoute }) {
  return (
    <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden grid grid-cols-1 sm:grid-cols-[280px_1fr] hover:border-emerald/40 transition-colors">
      <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[180px]">
        <Image
          src={route.image}
          alt={route.name}
          fill
          className="object-cover"
          sizes="280px"
        />
        {route.tag && (
          <span className="absolute top-2 left-2 bg-paper/95 backdrop-blur text-forest text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md">
            {route.tag}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="text-xl font-bold text-forest leading-tight">{route.name}</h3>
          <span className="text-emerald italic text-sm">{route.nickname}</span>
          <span className="text-forest/60 text-sm font-medium ml-auto">
            {formatDaysRange(route.durations)}
          </span>
        </div>
        <p className="text-forest/70 text-sm leading-snug line-clamp-2">{route.description}</p>
        <div className="flex items-center justify-between gap-3 mt-auto pt-1 flex-wrap">
          <dl className="flex gap-5 text-sm">
            <div className="flex items-baseline gap-1.5">
              <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">From</dt>
              <dd className="text-forest font-bold">{minPrice(route.durations)}</dd>
            </div>
            <div className="flex items-baseline gap-1.5">
              <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Diff</dt>
              <dd className="text-forest">{route.difficulty.split(" ")[0]}</dd>
            </div>
            {route.successRate && (
              <div className="flex items-baseline gap-1.5">
                <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Success</dt>
                <dd className="text-emerald font-bold">{route.successRate}</dd>
              </div>
            )}
            <div className="flex items-baseline gap-1.5">
              <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Scenery</dt>
              <dd className="text-forest text-xs">
                {"★".repeat(route.scenery)}
                <span className="text-forest/30">{"★".repeat(5 - route.scenery)}</span>
              </dd>
            </div>
          </dl>
          <span className="text-emerald font-semibold text-sm">View details →</span>
        </div>
      </div>
    </article>
  );
}

function PatternD() {
  return (
    <section className="bg-paper border-t border-taupe">
      <PatternHeader
        letter="D"
        title="List row (thumbnail + dense info)"
        approxHeight="~200px tall (4+ fit in a laptop viewport)"
        pitch="Small fixed-width thumbnail on the left (280px). All text on the right: title + nickname inline, 2-line description, stats inline (not a grid), 'View details' link (not a button). The 'I'm comparing 6 things' density mode."
        best="Decision-mode shoppers — the whole list fits on screen. Best when the user has narrowed and wants to compare apples-to-apples."
        worst="Editorial mood is gone. Reads like search results / Airbnb listing, not magazine. Photo gets less than 40% of card width."
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="space-y-3">
          {ROUTES.slice(0, 6).map((r) => (
            <ListRow key={r.name} route={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================================================================
// Reference — current production size
// ===========================================================================
function ReferenceCurrent() {
  return (
    <section className="bg-paper border-t border-taupe">
      <PatternHeader
        letter="0"
        title="Reference — current production card"
        approxHeight="~500px tall (barely 1 card fits in viewport)"
        pitch="What's at /tours/kilimanjaro right now. lg:min-h-[420px] photo, 4-col dl, 3 highlights, full description. The height problem you flagged — one card eats most of the viewport."
        best="Density per card; full visible context per route."
        worst="Long scroll — you only see one route at a time on most laptops."
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        {/* Just render one as reference — too long to render all 6 */}
        <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-6 lg:min-h-[420px]">
            <Image src={ROUTES[0].image} alt={ROUTES[0].name} fill className="object-cover" sizes="50vw" />
            {ROUTES[0].tag && (
              <span className="absolute top-4 left-4 bg-paper/95 backdrop-blur text-forest text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                {ROUTES[0].tag}
              </span>
            )}
          </div>
          <div className="lg:col-span-6 p-6 md:p-8 lg:p-10 flex flex-col">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="text-3xl md:text-4xl font-bold text-forest leading-tight">{ROUTES[0].name}</h3>
              <span className="text-forest/60 text-lg font-medium">{formatDaysRange(ROUTES[0].durations)}</span>
            </div>
            <p className="text-emerald italic mt-1">{ROUTES[0].nickname}</p>
            <dl className="grid grid-cols-3 gap-4 mt-5 border-y border-taupe/30 py-4">
              <div>
                <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">From</dt>
                <dd className="text-forest font-bold text-base mt-1">{minPrice(ROUTES[0].durations)}</dd>
              </div>
              <div>
                <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Difficulty</dt>
                <dd className="text-forest font-medium text-sm mt-1">{ROUTES[0].difficulty}</dd>
              </div>
              <div>
                <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">Scenery</dt>
                <dd className="text-forest text-sm mt-1">
                  {"★".repeat(ROUTES[0].scenery)}
                  <span className="text-forest/30">{"★".repeat(5 - ROUTES[0].scenery)}</span>
                </dd>
              </div>
            </dl>
            <p className="text-forest/80 text-sm md:text-base leading-relaxed mt-5">{ROUTES[0].description}</p>
            {ROUTES[0].highlights && (
              <ul className="mt-4 space-y-1.5">
                {ROUTES[0].highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-forest/80 text-sm">
                    <svg className="w-4 h-4 text-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto pt-5">
              <span className="btn-primary">View {ROUTES[0].name} details</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function DesignPreviewPage() {
  return (
    <div className="bg-paper text-forest">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-wider text-emerald font-semibold mb-2">
          Internal · not linked from the site · round 8 (card density)
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Design Preview — Shorter Route Cards
        </h1>
        <p className="text-forest/80 leading-relaxed">
          Goal: two cards per laptop viewport. Current card is ~500px tall; on a typical laptop (~800–900px viewport), one card eats the whole screen.
        </p>
        <p className="text-forest/80 leading-relaxed mt-3 text-sm">
          <strong>0</strong> Today (~500px reference) · <strong>A</strong> Compressed spread (~320px) · <strong>B</strong> Banner card (~340px) · <strong>C</strong> Photo-overlay poster (~360px) · <strong>D</strong> List row (~200px)
        </p>
        <p className="text-forest/70 leading-relaxed mt-3 text-sm">
          Each pattern renders the first 4 (or 6 for D) routes so you can see what 2+ stacked cards feel like. Scroll within each section.
        </p>
      </div>

      <ReferenceCurrent />
      <PatternA />
      <PatternB />
      <PatternC />
      <PatternD />

      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-forest/70 text-sm">
          End of round 8. Tell me which (0 / A / B / C / D) — or which features from which (e.g., "C but keep a one-line description like A").
        </p>
      </div>
    </div>
  );
}
