import Image from "next/image";
import Link from "next/link";
import type { KilimanjaroRoute } from "@/lib/constants";
import { formatDaysRange, minPrice } from "@/lib/constants";
import RouteItinerary from "@/components/RouteItinerary";

interface AlternativeRouteCardProps {
  route: KilimanjaroRoute;
}

export default function AlternativeRouteCard({ route }: AlternativeRouteCardProps) {
  const daysLabel = formatDaysRange(route.durations);
  const fromPrice = minPrice(route.durations);
  const slug = route.name.toLowerCase();

  return (
    <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden flex flex-col transition-all duration-200 ease-out hover:border-emerald/40 hover:-translate-y-0.5">
      {/* Image */}
      <div className="relative aspect-[4/3]">
        <Image
          src={route.image}
          alt={`${route.name} route on Kilimanjaro`}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        {route.tag && (
          <span className="absolute top-3 left-3 bg-paper/95 backdrop-blur text-wine text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
            {route.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-wine leading-tight">
          {route.name}
        </h3>
        <p className="text-emerald italic text-sm mt-0.5">{route.nickname}</p>

        <dl className="grid grid-cols-3 gap-2 mt-4 border-y border-taupe/30 py-3">
          <div>
            <dt className="text-wine/50 text-[10px] uppercase tracking-wider font-semibold">
              Days
            </dt>
            <dd className="text-wine font-semibold text-sm mt-0.5">
              {daysLabel}
            </dd>
          </div>
          {route.successRate ? (
            <div>
              <dt className="text-wine/50 text-[10px] uppercase tracking-wider font-semibold">
                Success
              </dt>
              <dd className="text-wine font-semibold text-sm mt-0.5">
                {route.successRate}
              </dd>
            </div>
          ) : (
            <div>
              <dt className="text-wine/50 text-[10px] uppercase tracking-wider font-semibold">
                Difficulty
              </dt>
              <dd className="text-wine font-semibold text-sm mt-0.5">
                {route.difficulty.split(" ")[0]}
              </dd>
            </div>
          )}
          <div>
            <dt className="text-wine/50 text-[10px] uppercase tracking-wider font-semibold">
              From
            </dt>
            <dd className="text-wine font-semibold text-sm mt-0.5">
              {fromPrice}
            </dd>
          </div>
        </dl>

        <p className="text-wine/70 text-sm leading-relaxed mt-4 line-clamp-3">
          {route.description}
        </p>

        <div className="mt-4">
          <Link
            href={`/contact?route=${slug}`}
            className="inline-flex items-center gap-1 text-emerald font-semibold text-sm hover:text-emerald-deep transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald rounded"
          >
            Get a quote
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {route.detailedItinerary && (
          <div className="mt-auto">
            <RouteItinerary
              routeName={route.name}
              detailedItinerary={route.detailedItinerary}
            />
          </div>
        )}
      </div>
    </article>
  );
}
