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
    <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-6 lg:min-h-[320px]">
      <Image
        src={route.image}
        alt={`${route.name} route on Kilimanjaro`}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      {route.tag && (
        <span className="absolute top-4 left-4 bg-paper/95 backdrop-blur text-olive text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
          {route.tag}
        </span>
      )}
      {route.successRate && (
        <div className="absolute top-4 right-4 bg-paper/95 backdrop-blur rounded-lg px-3 py-2 shadow-sm">
          <p className="text-olive/75 text-[10px] uppercase tracking-wider font-semibold">
            Summit success
          </p>
          <p className="text-gold-deep font-bold text-base leading-tight">
            {route.successRate}
          </p>
        </div>
      )}
    </div>
  );

  const content = (
    <div className="lg:col-span-6 p-6 flex flex-col">
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3 className="text-2xl md:text-3xl font-bold text-olive leading-tight">
          {route.name}
        </h3>
        <span className="text-olive/75 text-base font-medium">{daysLabel}</span>
      </div>
      <p className="text-gold-deep italic text-sm mt-1">{route.nickname}</p>

      <dl className="grid grid-cols-3 gap-4 mt-3 border-y border-taupe/30 py-2.5">
        <div>
          <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
            From
          </dt>
          <dd className="text-olive font-bold text-base mt-1">{fromPrice}</dd>
        </div>
        <div>
          <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
            Difficulty
          </dt>
          <dd className="text-olive font-medium text-sm mt-1">{route.difficulty}</dd>
        </div>
        <div>
          <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
            Scenery
          </dt>
          <dd className="text-olive text-sm mt-1" aria-label={`${route.scenery} out of 5`}>
            {"★".repeat(route.scenery)}
            <span className="text-olive/30">{"★".repeat(5 - route.scenery)}</span>
          </dd>
        </div>
      </dl>

      <p className="text-olive/95 text-sm leading-relaxed mt-3 line-clamp-2">
        {route.description}
      </p>

      {route.highlights && route.highlights.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {route.highlights.slice(0, 2).map((h) => (
            <li key={h} className="flex items-start gap-2 text-olive/95 text-sm">
              <svg
                className="w-4 h-4 text-gold-deep shrink-0 mt-0.5"
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

      <div className="mt-auto pt-3">
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
