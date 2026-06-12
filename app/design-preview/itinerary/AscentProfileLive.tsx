"use client";

import { useEffect, useRef, useState } from "react";
import {
  DAYS,
  SUMMIT,
  CHART,
  buildProfile,
  makeScales,
  linePath,
  areaPath,
} from "./profile-data";

/* Variant 2 — "Living Trail": the route draws itself when scrolled into
   view, camps appear in walking order, and hovering (or tapping) a day
   reveals its stats. Honors prefers-reduced-motion. */
export default function AscentProfileLive() {
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

  const { W, H, PAD_TOP, PAD_BOT } = CHART;
  const points = buildProfile();
  const { px, py } = makeScales(DAYS.length);
  const summit = points.find((p) => p.alt === SUMMIT);
  const camps = points.filter((p) => p.isCampEnd && p.alt !== SUMMIT);
  const hoveredDay = hovered !== null ? DAYS[hovered] : null;

  const t = (style: React.CSSProperties): React.CSSProperties =>
    reduceMotion ? {} : style;

  return (
    <div ref={containerRef} className="relative">
      {/* Tooltip */}
      {hoveredDay && (
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-full pointer-events-none bg-olive text-paper rounded-lg px-4 py-3 shadow-xl w-56"
          style={{
            left: `${(px(hovered! + 0.5) / W) * 100}%`,
            top: `${((py(Math.max(...parseAlts(hoveredDay.elevation))) - 14) / H) * 100}%`,
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
        aria-label="Elevation profile of the route, day by day, peaking at Uhuru Peak, 5,895 meters"
      >
        {[2000, 3000, 4000, 5000].map((alt) => (
          <g key={alt}>
            <line
              x1={CHART.PAD_X}
              x2={W - CHART.PAD_X}
              y1={py(alt)}
              y2={py(alt)}
              className="stroke-olive/10"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            <text x={CHART.PAD_X} y={py(alt) - 4} className="fill-olive/40 text-[10px] font-semibold">
              {alt.toLocaleString("en-US")}m
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
          d={areaPath(points, px, py)}
          className="fill-olive/10"
          style={{
            opacity: inView ? 1 : 0,
            ...t({ transition: "opacity 900ms ease 1500ms" }),
          }}
        />

        {/* The trail draws itself */}
        <path
          d={linePath(points, px, py)}
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

        {DAYS.map((d, i) => (
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
        {DAYS.map((d, i) => (
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

function parseAlts(elevation: string): number[] {
  return (elevation.match(/[\d,]+(?=m)/g) ?? []).map((n) =>
    parseInt(n.replace(/,/g, ""), 10)
  );
}
