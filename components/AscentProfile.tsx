"use client";

import { useEffect, useRef, useState } from "react";
import type { KilimanjaroRouteDay } from "@/lib/constants";

/* Elevation profile for Kilimanjaro route pages — the "Living Trail":
   climate zones as tinted bands, the trail draws itself when scrolled into
   view (camps appearing in walking order), Lava Tower / acclimatization and
   the 1 AM summit push annotated, and hover or tap a day for its stats.
   Honors prefers-reduced-motion: everything appears instantly. */

const SUMMIT = 5895;

const CHART = {
  W: 880,
  H: 260,
  PAD_X: 24,
  PAD_TOP: 40,
  PAD_BOT: 30,
  MIN_ALT: 1200,
  MAX_ALT: 6300,
};

const ZONES = [
  { top: 6300, bottom: 5000, label: "Arctic summit", cls: "fill-paper", opacity: 0.75 },
  { top: 5000, bottom: 4000, label: "Alpine desert", cls: "fill-taupe", opacity: 0.4 },
  { top: 4000, bottom: 2800, label: "Moorland", cls: "fill-khaki", opacity: 0.12 },
  { top: 2800, bottom: 1200, label: "Rainforest", cls: "fill-olive", opacity: 0.09 },
];

/* "4,673m to 5,895m, descend to 3,068m" -> [4673, 5895, 3068].
   "3,720m (day hike to 4,200m)" is an out-and-back: close the loop. */
function parseAltitudes(elevation: string): number[] {
  const alts = (elevation.match(/[\d,]+(?=m)/g) ?? []).map((n) =>
    parseInt(n.replace(/,/g, ""), 10)
  );
  if (/day hike/i.test(elevation) && alts.length > 1) alts.push(alts[0]);
  return alts;
}

type ProfilePoint = { x: number; alt: number; isCampEnd: boolean; day: number };

function buildProfile(days: KilimanjaroRouteDay[]): ProfilePoint[] {
  const points: ProfilePoint[] = [];
  days.forEach((d, i) => {
    const alts = parseAltitudes(d.elevation);
    if (alts.length === 0) return;
    if (points.length === 0)
      points.push({ x: i, alt: alts[0], isCampEnd: false, day: d.day });
    const rest = alts.slice(1);
    rest.forEach((alt, j) => {
      points.push({
        x: i + (j + 1) / rest.length,
        alt,
        isCampEnd: j === rest.length - 1,
        day: d.day,
      });
    });
  });
  return points;
}

export default function AscentProfile({ days }: { days: KilimanjaroRouteDay[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
      setInView(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { W, H, PAD_X, PAD_TOP, PAD_BOT, MIN_ALT, MAX_ALT } = CHART;
  const points = buildProfile(days);
  if (points.length < 2) return null;

  const px = (x: number) => PAD_X + (x / days.length) * (W - PAD_X * 2);
  const py = (alt: number) =>
    PAD_TOP + (1 - (alt - MIN_ALT) / (MAX_ALT - MIN_ALT)) * (H - PAD_TOP - PAD_BOT);

  const line = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${px(p.x).toFixed(1)},${py(p.alt).toFixed(1)}`)
    .join(" ");
  const floor = H - PAD_BOT;
  const area = `${line} L${px(points[points.length - 1].x).toFixed(1)},${floor} L${px(points[0].x).toFixed(1)},${floor} Z`;

  const summitIndex = points.findIndex((p) => p.alt === SUMMIT);
  const summit = summitIndex > 0 ? points[summitIndex] : undefined;
  const beforeSummit = summitIndex > 0 ? points[summitIndex - 1] : undefined;
  const camps = points.filter((p) => p.isCampEnd && p.alt !== SUMMIT);
  const acclimatizers = points.filter(
    (p, i) =>
      !p.isCampEnd &&
      p.alt !== SUMMIT &&
      i > 0 &&
      i < points.length - 1 &&
      p.alt > points[i - 1].alt &&
      p.alt > points[i + 1].alt
  );
  const hoveredDay = hovered !== null ? days[hovered] : null;

  /* Suppress transitions when reduced motion is preferred. */
  const t = (style: React.CSSProperties): React.CSSProperties =>
    reduceMotion ? {} : style;

  return (
    <div ref={containerRef} className="relative">
      {hoveredDay && (
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-full pointer-events-none bg-olive text-paper rounded-lg px-4 py-3 shadow-xl w-56"
          style={{
            left: `${(px(hovered! + 0.5) / W) * 100}%`,
            top: `${((py(Math.max(...parseAltitudes(hoveredDay.elevation))) - 14) / H) * 100}%`,
          }}
        >
          <p className="text-gold text-[10px] uppercase tracking-[0.18em] font-semibold mb-1">
            Day {hoveredDay.day}
          </p>
          <p className="font-semibold text-sm leading-snug">{hoveredDay.title}</p>
          <p className="text-paper/90 text-xs mt-1.5">
            {hoveredDay.elevation}
            <br />
            {hoveredDay.distance} · {hoveredDay.time} · {hoveredDay.terrain}
          </p>
        </div>
      )}

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label={`Elevation profile of the route through Kilimanjaro's climate zones, from rainforest to the arctic summit at Uhuru Peak, 5,895 meters, over ${days.length} days`}
      >
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

        {/* Hovered-day band */}
        {hovered !== null && (
          <rect
            x={px(hovered)}
            width={px(hovered + 1) - px(hovered)}
            y={PAD_TOP - 8}
            height={H - PAD_TOP - PAD_BOT + 8}
            className="fill-gold/10"
          />
        )}

        {/* Area fades in once the line has mostly drawn */}
        <path
          d={area}
          className="fill-olive/10"
          style={{
            opacity: inView ? 1 : 0,
            ...t({ transition: "opacity 900ms ease 1500ms" }),
          }}
        />

        {/* The trail draws itself */}
        <path
          d={line}
          pathLength={1}
          className="stroke-olive fill-none"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: inView ? 0 : 1,
            ...t({ transition: "stroke-dashoffset 2400ms cubic-bezier(0.65, 0, 0.35, 1)" }),
          }}
        />

        {/* Midnight summit push */}
        {beforeSummit && summit && (
          <g
            style={{
              opacity: inView ? 1 : 0,
              ...t({ transition: "opacity 500ms ease 2100ms" }),
            }}
          >
            <path
              d={`M${px(beforeSummit.x)},${py(beforeSummit.alt)} L${px(summit.x)},${py(summit.alt)}`}
              className="stroke-gold-deep fill-none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="0.5 6"
            />
            <text
              x={px(beforeSummit.x) - 8}
              y={py(beforeSummit.alt) - 26}
              textAnchor="end"
              className="fill-olive/60 text-[10px] font-semibold"
            >
              ☾ 1 AM summit push
            </text>
          </g>
        )}

        {/* Lava Tower / acclimatization annotations */}
        {acclimatizers.map((p) => (
          <g
            key={`acc-${p.day}-${p.alt}`}
            style={{
              opacity: inView ? 1 : 0,
              ...t({ transition: "opacity 500ms ease 1900ms" }),
            }}
          >
            <line
              x1={px(p.x)}
              x2={px(p.x)}
              y1={py(p.alt) - 6}
              y2={py(p.alt) - 18}
              className="stroke-olive/40"
              strokeWidth="1"
            />
            <text
              x={px(p.x)}
              y={py(p.alt) - 24}
              textAnchor="middle"
              className="fill-olive/60 text-[10px] font-semibold"
            >
              {p.alt === 4630
                ? "Lava Tower · climb high, sleep low"
                : "Climb high, sleep low"}
            </text>
          </g>
        ))}

        {/* Camps appear in walking order */}
        {camps.map((p, i) => (
          <circle
            key={`${p.day}-${p.alt}`}
            cx={px(p.x)}
            cy={py(p.alt)}
            r="4"
            className="fill-parchment stroke-olive"
            strokeWidth="2"
            style={{
              opacity: inView ? 1 : 0,
              ...t({ transition: `opacity 350ms ease ${300 + i * 280}ms` }),
            }}
          />
        ))}

        {/* Summit */}
        {summit && (
          <g
            style={{
              opacity: inView ? 1 : 0,
              ...t({ transition: "opacity 500ms ease 2100ms" }),
            }}
          >
            <circle
              cx={px(summit.x)}
              cy={py(summit.alt)}
              r="5.5"
              className="fill-gold stroke-olive-deep"
              strokeWidth="2"
            />
            <text
              x={px(summit.x)}
              y={py(summit.alt) - 12}
              textAnchor="middle"
              className="fill-gold-deep text-[12px] font-bold"
            >
              Uhuru Peak · 5,895m
            </text>
          </g>
        )}

        {/* Day labels */}
        {days.map((d, i) => (
          <text
            key={d.day}
            x={px(i + 0.5)}
            y={H - 8}
            textAnchor="middle"
            className={`text-[11px] font-semibold ${
              hovered === i ? "fill-gold-deep" : "fill-olive/50"
            }`}
          >
            Day {d.day}
          </text>
        ))}

        {/* Invisible hover/tap targets, one per day */}
        {days.map((d, i) => (
          <rect
            key={`hit-${d.day}`}
            x={px(i)}
            width={px(i + 1) - px(i)}
            y={0}
            height={H}
            fill="transparent"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setHovered(hovered === i ? null : i)}
          />
        ))}
      </svg>
    </div>
  );
}
