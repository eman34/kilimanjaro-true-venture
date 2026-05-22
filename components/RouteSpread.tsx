import Image from "next/image";
import Link from "next/link";
import type { KilimanjaroRoute } from "@/lib/constants";
import { formatDaysRange, minPrice } from "@/lib/constants";

interface RouteSpreadProps {
  route: KilimanjaroRoute;
  reverse?: boolean;
}

export default function RouteSpread({ route, reverse }: RouteSpreadProps) {
  const daysLabel = formatDaysRange(route.durations);
  const fromPrice = minPrice(route.durations);
  const slug = route.name.toLowerCase();

  const photo = (
    <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-6 lg:min-h-[460px]">
      <Image
        src={route.image}
        alt={`${route.name} route on Kilimanjaro`}
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
          <p className="text-emerald font-bold text-base leading-tight">
            {route.successRate}
          </p>
        </div>
      )}
    </div>
  );

  const content = (
    <div className="lg:col-span-6 p-6 md:p-8 flex flex-col">
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3 className="text-2xl md:text-3xl font-bold text-forest leading-tight">
          {route.name}
        </h3>
        <span className="text-forest/60 text-base font-medium">{daysLabel}</span>
      </div>
      <p className="text-emerald italic text-sm mt-1">{route.nickname}</p>

      <dl className="grid grid-cols-3 gap-4 mt-4 border-y border-taupe/30 py-3">
        <div>
          <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">
            From
          </dt>
          <dd className="text-forest font-bold text-base mt-1">{fromPrice}</dd>
        </div>
        <div>
          <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">
            Difficulty
          </dt>
          <dd className="text-forest font-medium text-sm mt-1">{route.difficulty}</dd>
        </div>
        <div>
          <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">
            Scenery
          </dt>
          <dd className="text-forest text-sm mt-1" aria-label={`${route.scenery} out of 5`}>
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
        <Link href={`/tours/kilimanjaro/${slug}`} className="btn-primary">
          View {route.name} details
        </Link>
      </div>
    </div>
  );

  return (
    <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      {reverse ? (
        <>
          {content}
          {photo}
        </>
      ) : (
        <>
          {photo}
          {content}
        </>
      )}
    </article>
  );
}
