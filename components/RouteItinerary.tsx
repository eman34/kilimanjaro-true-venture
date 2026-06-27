import type { KilimanjaroRouteDay } from "@/lib/constants";

/* "Day by day" trail timeline for mountain route pages — an always-open
   list of each day on the trail (server, no JS). The animated elevation
   profile lives separately, beneath the route's quick-facts. */

type RouteItineraryProps = {
  detailedItinerary: KilimanjaroRouteDay[];
};

function TrailTimeline({ days }: { days: KilimanjaroRouteDay[] }) {
  return (
    <ol className="relative">
      {days.map((d, i) => {
        const isSummit = d.elevation.includes("5,895m");
        const isLast = i === days.length - 1;
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

export default function RouteItinerary({ detailedItinerary }: RouteItineraryProps) {
  return <TrailTimeline days={detailedItinerary} />;
}
