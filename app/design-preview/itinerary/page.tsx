import type { Metadata } from "next";
import AscentProfileLive from "./AscentProfileLive";
import {
  DAYS,
  SUMMIT,
  CHART,
  parseAltitudes,
  buildProfile,
  makeScales,
  linePath,
  areaPath,
} from "./profile-data";

export const metadata: Metadata = {
  title: "Design Preview — Ascent Profile Delighters",
  robots: { index: false, follow: false },
};

/* Internal sandbox: chosen direction is Trail Timeline + Ascent Profile.
   Two delighter treatments of the profile graph, Machame data. */

/* ---------- Variant 1: Mountain Story (static delighters) ---------- */

const ZONES = [
  { top: 6300, bottom: 5000, label: "Arctic summit", cls: "fill-paper", opacity: 0.75 },
  { top: 5000, bottom: 4000, label: "Alpine desert", cls: "fill-taupe", opacity: 0.4 },
  { top: 4000, bottom: 2800, label: "Moorland", cls: "fill-khaki", opacity: 0.12 },
  { top: 2800, bottom: 1200, label: "Rainforest", cls: "fill-olive", opacity: 0.09 },
];

function Tent({ cx, cy }: { cx: number; cy: number }) {
  return (
    <path
      d={`M${cx - 6},${cy} L${cx},${cy - 7} L${cx + 6},${cy} Z`}
      className="fill-parchment stroke-olive"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  );
}

function MountainStoryProfile() {
  const { W, H, PAD_X, PAD_TOP, PAD_BOT } = CHART;
  const points = buildProfile();
  const { px, py } = makeScales(DAYS.length);
  const summit = points.find((p) => p.alt === SUMMIT);
  const camps = points.filter((p) => p.isCampEnd && p.alt !== SUMMIT);
  const lavaTower = points.find((p) => p.alt === 4630);
  const barafu = points.find((p) => p.alt === 4673);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      role="img"
      aria-label="Elevation profile of the route through Kilimanjaro's climate zones — rainforest, moorland, alpine desert, and the arctic summit at Uhuru Peak, 5,895 meters"
    >
      <defs>
        <radialGradient id="ktv-sunrise">
          <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Climate zone bands */}
      {ZONES.map((z) => (
        <g key={z.label}>
          <rect
            x={PAD_X}
            width={W - PAD_X * 2}
            y={py(z.top)}
            height={py(z.bottom) - py(z.top)}
            className={z.cls}
            opacity={z.opacity}
          />
          <text
            x={W - PAD_X - 8}
            y={py(z.top) + 14}
            textAnchor="end"
            className="fill-olive/50 text-[10px] font-semibold uppercase tracking-wider"
          >
            {z.label}
          </text>
        </g>
      ))}

      {/* Sunrise behind the summit */}
      {summit && (
        <circle cx={px(summit.x) + 26} cy={py(summit.alt) - 14} r="34" fill="url(#ktv-sunrise)" />
      )}

      <path d={areaPath(points, px, py)} className="fill-olive/10" />
      <path
        d={linePath(points, px, py)}
        className="stroke-olive fill-none"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Midnight summit push — dotted gold trail from Barafu to Uhuru */}
      {barafu && summit && (
        <g>
          <path
            d={`M${px(barafu.x)},${py(barafu.alt)} L${px(summit.x)},${py(summit.alt)}`}
            className="stroke-gold-deep fill-none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="0.5 6"
          />
          <text
            x={px(barafu.x) - 8}
            y={py(barafu.alt) - 26}
            textAnchor="end"
            className="fill-olive/60 text-[10px] font-semibold"
          >
            ☾ 1 AM summit push
          </text>
        </g>
      )}

      {/* Lava Tower acclimatization callout */}
      {lavaTower && (
        <g>
          <line
            x1={px(lavaTower.x)}
            x2={px(lavaTower.x)}
            y1={py(lavaTower.alt) - 6}
            y2={py(lavaTower.alt) - 18}
            className="stroke-olive/40"
            strokeWidth="1"
          />
          <text
            x={px(lavaTower.x)}
            y={py(lavaTower.alt) - 24}
            textAnchor="middle"
            className="fill-olive/60 text-[10px] font-semibold"
          >
            Lava Tower · climb high, sleep low
          </text>
        </g>
      )}

      {/* Camps as tents */}
      {camps.map((p) => (
        <Tent key={`${p.day}-${p.alt}`} cx={px(p.x)} cy={py(p.alt)} />
      ))}

      {/* Summit flag */}
      {summit && (
        <g>
          <line
            x1={px(summit.x)}
            x2={px(summit.x)}
            y1={py(summit.alt)}
            y2={py(summit.alt) - 16}
            className="stroke-olive-deep"
            strokeWidth="1.5"
          />
          <path
            d={`M${px(summit.x)},${py(summit.alt) - 16} L${px(summit.x) + 11},${py(summit.alt) - 12} L${px(summit.x)},${py(summit.alt) - 8} Z`}
            className="fill-gold stroke-olive-deep"
            strokeWidth="1"
          />
          <circle
            cx={px(summit.x)}
            cy={py(summit.alt)}
            r="3.5"
            className="fill-gold stroke-olive-deep"
            strokeWidth="1.5"
          />
          <text
            x={px(summit.x)}
            y={py(summit.alt) - 24}
            textAnchor="middle"
            className="fill-gold-deep text-[12px] font-bold"
          >
            Uhuru Peak · 5,895m
          </text>
        </g>
      )}

      {/* Day labels */}
      {DAYS.map((d, i) => (
        <text
          key={d.day}
          x={px(i + 0.5)}
          y={H - 8}
          textAnchor="middle"
          className="fill-olive/50 text-[11px] font-semibold"
        >
          Day {d.day}
        </text>
      ))}
    </svg>
  );
}

/* ---------- Chosen timeline (Option A) for context ---------- */

function TrailTimeline() {
  return (
    <ol className="relative">
      {DAYS.map((d, i) => {
        const isSummit = parseAltitudes(d.elevation).includes(SUMMIT);
        const isLast = i === DAYS.length - 1;
        return (
          <li key={d.day} className="relative flex gap-5 md:gap-8 pb-10 last:pb-0">
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
        <h1 className="text-3xl font-bold text-olive">
          Ascent Profile — two delighter treatments
        </h1>
        <p className="text-olive/70 mt-2 text-sm">
          Chosen direction: Trail Timeline + Ascent Profile. Both graph variants below,
          then the timeline for full-section context. Machame data.
        </p>
      </div>

      <PreviewSection
        label="Variant 1"
        title="Mountain Story (static)"
        pitch="Kilimanjaro's four climate zones as tinted bands — you watch the trail leave the rainforest and cross the snow line. Camps are tents, the summit flies a gold flag with a sunrise glow behind it, the midnight push is a dotted gold trail with a moon, and Lava Tower gets a 'climb high, sleep low' annotation. Zero JavaScript."
      >
        <MountainStoryProfile />
      </PreviewSection>

      <PreviewSection
        label="Variant 2"
        title="Living Trail (motion + hover)"
        pitch="The trail draws itself over ~2.5 seconds when scrolled into view, camps appearing in walking order, summit label last. Hover or tap a day for its stats in a tooltip. Honors prefers-reduced-motion (everything appears instantly). The two variants can be combined — zones and tents underneath, draw-on and hover on top."
      >
        <AscentProfileLive />
      </PreviewSection>

      <PreviewSection
        label="Chosen"
        title="Trail Timeline (Option A)"
        pitch="The timeline that will sit directly below the graph on the route page."
      >
        <TrailTimeline />
      </PreviewSection>
    </main>
  );
}
