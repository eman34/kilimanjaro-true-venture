import type { Metadata } from "next";
import { KILIMANJARO_ROUTES, type KilimanjaroRouteDay } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Design Preview — Day by Day Patterns",
  robots: { index: false, follow: false },
};

/* Internal sandbox: three candidate designs for the route-page "Day by day"
   section, rendered with real Machame data. Not linked from the site. */

const DAYS: KilimanjaroRouteDay[] =
  KILIMANJARO_ROUTES.find((r) => r.name === "Machame")?.detailedItinerary ?? [];

/* "4,673m to 5,895m, descend to 3,068m" -> [4673, 5895, 3068] */
function parseAltitudes(elevation: string): number[] {
  return (elevation.match(/[\d,]+(?=m)/g) ?? []).map((n) =>
    parseInt(n.replace(/,/g, ""), 10)
  );
}

function splitCamps(title: string): { from: string; to: string } {
  const clean = title.replace(/^Summit Day: /, "");
  const parts = clean.split(" to ");
  return { from: parts[0], to: parts[parts.length - 1] };
}

/* ---------- Option A: Trail Timeline ---------- */

function TrailTimeline() {
  return (
    <ol className="relative">
      {DAYS.map((d, i) => {
        const isSummit = parseAltitudes(d.elevation).includes(5895);
        const isLast = i === DAYS.length - 1;
        return (
          <li key={d.day} className="relative flex gap-5 md:gap-8 pb-10 last:pb-0">
            {/* Rail */}
            <div className="flex flex-col items-center">
              <div
                className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
                  isSummit
                    ? "bg-gold border-gold text-olive-deep"
                    : "bg-parchment border-olive/40 text-olive"
                }`}
              >
                {d.day}
              </div>
              {!isLast && <div className="w-px flex-1 bg-olive/20 mt-2" />}
            </div>
            {/* Entry */}
            <div className="flex-1 min-w-0 pt-1">
              <h3 className="text-olive font-bold text-lg md:text-xl leading-snug">
                {d.title}
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 mb-3">
                {[d.elevation, d.distance, d.time, d.terrain].map((stat) => (
                  <span
                    key={stat}
                    className="text-olive/65 text-[11px] uppercase tracking-wider font-semibold"
                  >
                    {stat}
                  </span>
                ))}
              </div>
              <p className="text-olive/85 text-sm md:text-base leading-relaxed">
                {d.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/* ---------- Option B: Camp Ledger ---------- */

function deltaLabel(alts: number[]): { up?: string; down?: string } {
  if (alts.length < 2) return {};
  const first = alts[0];
  const last = alts[alts.length - 1];
  const peak = Math.max(...alts);
  const fmt = (n: number) => n.toLocaleString("en-US") + "m";
  if (peak > first && peak > last) {
    return { up: "+" + fmt(peak - first), down: "−" + fmt(peak - last) };
  }
  const diff = last - first;
  return diff >= 0 ? { up: "+" + fmt(diff) } : { down: "−" + fmt(-diff) };
}

function CampLedger() {
  return (
    <div className="border-t border-olive/20">
      {DAYS.map((d) => {
        const camps = splitCamps(d.title);
        const delta = deltaLabel(parseAltitudes(d.elevation));
        return (
          <details key={d.day} className="group border-b border-olive/20">
            <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer py-5 grid grid-cols-[auto_1fr_auto] md:grid-cols-[56px_1fr_170px_90px_110px_24px] items-center gap-x-4 gap-y-2 hover:bg-paper/60 transition-colors px-2 -mx-2">
              <span className="text-3xl md:text-4xl font-bold text-olive/25 tabular-nums leading-none">
                {String(d.day).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block text-olive font-semibold text-sm md:text-base leading-snug">
                  {camps.from}
                  <span className="text-gold-deep mx-2" aria-hidden>
                    →
                  </span>
                  {camps.to}
                </span>
                <span className="block md:hidden text-olive/65 text-xs mt-1">
                  {d.distance} · {d.time}
                </span>
              </span>
              <span className="hidden md:flex items-center gap-2 text-xs font-semibold tabular-nums">
                {delta.up && <span className="text-gold-deep">↑ {delta.up}</span>}
                {delta.down && <span className="text-khaki">↓ {delta.down}</span>}
              </span>
              <span className="hidden md:block text-olive/65 text-xs tabular-nums">
                {d.distance}
              </span>
              <span className="hidden md:block text-olive/65 text-xs">
                {d.time}
              </span>
              <svg
                className="w-4 h-4 text-olive/40 transition-transform group-open:rotate-180 justify-self-end col-start-3 md:col-start-6 row-start-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-6 pl-2 md:pl-[72px] pr-2 md:pr-12">
              <span className="inline-block bg-gold/15 text-gold-deep text-xs font-medium px-3 py-1 rounded-full mb-3">
                {d.terrain} · {d.elevation}
              </span>
              <p className="text-olive/85 text-sm md:text-base leading-relaxed">
                {d.description}
              </p>
            </div>
          </details>
        );
      })}
    </div>
  );
}

/* ---------- Option C: Ascent Profile ---------- */

const SUMMIT = 5895;

function buildProfile() {
  /* x: one unit per day, intermediate altitudes spread inside the day */
  const points: { x: number; alt: number; isCampEnd: boolean; day: number }[] = [];
  DAYS.forEach((d, i) => {
    const alts = parseAltitudes(d.elevation);
    if (alts.length === 0) return;
    const start = i === 0 ? [{ x: i, alt: alts[0], isCampEnd: false, day: d.day }] : [];
    const rest = alts.slice(i === 0 ? 1 : 1).map((alt, j, arr) => ({
      x: i + (j + 1) / arr.length,
      alt,
      isCampEnd: j === arr.length - 1,
      day: d.day,
    }));
    points.push(...start, ...rest);
  });
  return points;
}

function AscentProfile() {
  const W = 880;
  const H = 240;
  const PAD_X = 24;
  const PAD_TOP = 34;
  const PAD_BOT = 30;
  const points = buildProfile();
  const maxX = DAYS.length;
  const minAlt = 1200;
  const maxAlt = 6100;
  const px = (x: number) => PAD_X + (x / maxX) * (W - PAD_X * 2);
  const py = (alt: number) =>
    PAD_TOP + (1 - (alt - minAlt) / (maxAlt - minAlt)) * (H - PAD_TOP - PAD_BOT);

  const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${px(p.x).toFixed(1)},${py(p.alt).toFixed(1)}`).join(" ");
  const area = `${line} L${px(points[points.length - 1].x).toFixed(1)},${H - PAD_BOT} L${px(points[0].x).toFixed(1)},${H - PAD_BOT} Z`;
  const summit = points.find((p) => p.alt === SUMMIT);

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Elevation profile of the route, day by day, peaking at Uhuru Peak, 5,895 meters">
        {/* Altitude gridlines */}
        {[2000, 3000, 4000, 5000].map((alt) => (
          <g key={alt}>
            <line x1={PAD_X} x2={W - PAD_X} y1={py(alt)} y2={py(alt)} className="stroke-olive/10" strokeWidth="1" strokeDasharray="2 4" />
            <text x={PAD_X} y={py(alt) - 4} className="fill-olive/40 text-[10px] font-semibold">
              {alt.toLocaleString("en-US")}m
            </text>
          </g>
        ))}
        <path d={area} className="fill-olive/10" />
        <path d={line} className="stroke-olive fill-none" strokeWidth="2" strokeLinejoin="round" />
        {/* Camp dots */}
        {points.filter((p) => p.isCampEnd && p.alt !== SUMMIT).map((p) => (
          <circle key={`${p.day}-${p.alt}`} cx={px(p.x)} cy={py(p.alt)} r="4" className="fill-parchment stroke-olive" strokeWidth="2" />
        ))}
        {/* Summit */}
        {summit && (
          <g>
            <circle cx={px(summit.x)} cy={py(summit.alt)} r="5.5" className="fill-gold stroke-olive-deep" strokeWidth="2" />
            <text x={px(summit.x)} y={py(summit.alt) - 12} textAnchor="middle" className="fill-gold-deep text-[12px] font-bold">
              Uhuru Peak · 5,895m
            </text>
          </g>
        )}
        {/* Day labels */}
        {DAYS.map((d, i) => (
          <text key={d.day} x={px(i + 0.5)} y={H - 8} textAnchor="middle" className="fill-olive/50 text-[11px] font-semibold">
            Day {d.day}
          </text>
        ))}
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {DAYS.map((d) => {
          const isSummit = parseAltitudes(d.elevation).includes(SUMMIT);
          return (
            <div
              key={d.day}
              className={`rounded-xl border p-5 ${
                isSummit ? "border-gold/60 bg-gold/10" : "border-taupe/40 bg-paper"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <p className="text-gold-deep text-[11px] uppercase tracking-[0.18em] font-semibold">
                  Day {d.day}
                  {isSummit && " · Summit"}
                </p>
                <p className="text-olive/65 text-[11px] uppercase tracking-wider font-semibold">
                  {d.distance} · {d.time}
                </p>
              </div>
              <h3 className="text-olive font-bold leading-snug">{d.title}</h3>
              <p className="text-olive/65 text-xs mt-1 mb-3">
                {d.elevation} · {d.terrain}
              </p>
              <p className="text-olive/85 text-sm leading-relaxed">{d.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

function PreviewSection({
  label,
  title,
  pitch,
  children,
}: {
  label: string;
  title: string;
  pitch: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-parchment py-10 md:py-14 border-b-8 border-paper">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-deep font-semibold mb-2">
          {label}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-olive mb-2">{title}</h2>
        <p className="text-olive/70 text-sm leading-relaxed mb-8 max-w-3xl">{pitch}</p>
        {children}
      </div>
    </section>
  );
}

export default function ItineraryPreviewPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-10 pb-6">
        <h1 className="text-3xl font-bold text-olive">Day by Day — three candidates</h1>
        <p className="text-olive/70 mt-2 text-sm">
          Internal preview, Machame data. Each section below renders inside the same
          parchment band the real route page uses.
        </p>
      </div>

      <PreviewSection
        label="Option A"
        title="Trail Timeline"
        pitch="Always-open narrative on a vertical trail line. Gold node marks summit day. No clicks — the full story of the climb reads top to bottom, like a feature article. Longest on the page; the depth is the point."
      >
        <TrailTimeline />
      </PreviewSection>

      <PreviewSection
        label="Option B"
        title="Camp Ledger"
        pitch="Editorial table: big faded day numerals, camp-to-camp with computed ascent/descent deltas, distance and time aligned in columns. Rows expand for the day's story. Built for the comparison-minded reader who wants the shape of the week at a glance."
      >
        <CampLedger />
      </PreviewSection>

      <PreviewSection
        label="Option C"
        title="Ascent Profile"
        pitch="An elevation chart of the whole route drawn from the real altitude data — you can see acclimatization ('climb high, sleep low' at Lava Tower) and the summit-night spike before reading a word. Day cards below, summit day highlighted in gold."
      >
        <AscentProfile />
      </PreviewSection>
    </main>
  );
}
