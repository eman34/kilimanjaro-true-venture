import Image from "next/image";
import Link from "next/link";
import type { KilimanjaroRoute } from "@/lib/constants";
import { formatDaysRange, minPrice } from "@/lib/constants";

interface FeaturedRouteCardProps {
  route: KilimanjaroRoute;
  ctaHref?: string;
  itineraryAnchor?: string;
}

export default function FeaturedRouteCard({
  route,
  ctaHref = "/contact",
  itineraryAnchor,
}: FeaturedRouteCardProps) {
  const daysLabel = formatDaysRange(route.durations);
  const startsAt = minPrice(route.durations);

  return (
    <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[520px]">
        {/* Photo */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-7">
          <Image
            src={route.image}
            alt={`${route.name} route on Kilimanjaro`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority
          />
          {route.successRate && (
            <div className="absolute top-4 right-4 bg-paper/95 backdrop-blur rounded-lg px-3 py-2 shadow-sm">
              <p className="text-wine/60 text-[10px] uppercase tracking-wider font-semibold">
                Summit success
              </p>
              <p className="text-emerald font-bold text-lg leading-tight">
                {route.successRate}
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col">
          <p className="text-emerald text-xs uppercase tracking-[0.18em] font-semibold mb-3">
            Our Recommendation
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-wine leading-tight">
            {route.name}
            <span className="text-wine/60 font-normal text-2xl md:text-3xl">
              {" "}· {daysLabel}
            </span>
          </h3>
          <p className="text-emerald italic mt-1">{route.nickname}</p>

          <dl className="grid grid-cols-3 gap-4 mt-6 border-y border-taupe/30 py-4">
            <div>
              <dt className="text-wine/50 text-[11px] uppercase tracking-wider font-semibold">
                Starts at
              </dt>
              <dd className="text-wine font-bold text-lg mt-1">{startsAt}</dd>
            </div>
            <div>
              <dt className="text-wine/50 text-[11px] uppercase tracking-wider font-semibold">
                Difficulty
              </dt>
              <dd className="text-wine font-medium text-sm mt-1">
                {route.difficulty}
              </dd>
            </div>
            <div>
              <dt className="text-wine/50 text-[11px] uppercase tracking-wider font-semibold">
                {route.leadGuide ? "Lead guide" : "Crew"}
              </dt>
              <dd className="text-wine font-medium text-sm mt-1">
                {route.leadGuide ?? "Tanzanian-led"}
              </dd>
            </div>
          </dl>

          <p className="text-wine/80 text-sm md:text-base leading-relaxed mt-6">
            {route.description}
          </p>

          {route.highlights && route.highlights.length > 0 && (
            <ul className="mt-5 space-y-2">
              {route.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-wine/80 text-sm"
                >
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

          <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
            <Link href={ctaHref} className="btn-primary text-center">
              Get a {route.name} quote
            </Link>
            {itineraryAnchor && (
              <a
                href={`#${itineraryAnchor}`}
                className="btn-accent text-center"
              >
                View {daysLabel.replace(" days", "-day")} itinerary
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
