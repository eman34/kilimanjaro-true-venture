import { KILIMANJARO_ROUTES, type KilimanjaroRouteDay } from "@/lib/constants";

export const DAYS: KilimanjaroRouteDay[] =
  KILIMANJARO_ROUTES.find((r) => r.name === "Machame")?.detailedItinerary ?? [];

export const SUMMIT = 5895;

export const CHART = {
  W: 880,
  H: 260,
  PAD_X: 24,
  PAD_TOP: 40,
  PAD_BOT: 30,
  MIN_ALT: 1200,
  MAX_ALT: 6300,
};

/* "4,673m to 5,895m, descend to 3,068m" -> [4673, 5895, 3068] */
export function parseAltitudes(elevation: string): number[] {
  return (elevation.match(/[\d,]+(?=m)/g) ?? []).map((n) =>
    parseInt(n.replace(/,/g, ""), 10)
  );
}

export type ProfilePoint = {
  x: number;
  alt: number;
  isCampEnd: boolean;
  day: number;
};

export function buildProfile(days: KilimanjaroRouteDay[] = DAYS): ProfilePoint[] {
  const points: ProfilePoint[] = [];
  days.forEach((d, i) => {
    const alts = parseAltitudes(d.elevation);
    if (alts.length === 0) return;
    if (i === 0) points.push({ x: 0, alt: alts[0], isCampEnd: false, day: d.day });
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

export function makeScales(dayCount: number) {
  const { W, H, PAD_X, PAD_TOP, PAD_BOT, MIN_ALT, MAX_ALT } = CHART;
  const px = (x: number) => PAD_X + (x / dayCount) * (W - PAD_X * 2);
  const py = (alt: number) =>
    PAD_TOP + (1 - (alt - MIN_ALT) / (MAX_ALT - MIN_ALT)) * (H - PAD_TOP - PAD_BOT);
  return { px, py };
}

export function linePath(
  points: ProfilePoint[],
  px: (x: number) => number,
  py: (alt: number) => number
): string {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"}${px(p.x).toFixed(1)},${py(p.alt).toFixed(1)}`)
    .join(" ");
}

export function areaPath(
  points: ProfilePoint[],
  px: (x: number) => number,
  py: (alt: number) => number
): string {
  const floor = CHART.H - CHART.PAD_BOT;
  return `${linePath(points, px, py)} L${px(points[points.length - 1].x).toFixed(1)},${floor} L${px(points[0].x).toFixed(1)},${floor} Z`;
}
