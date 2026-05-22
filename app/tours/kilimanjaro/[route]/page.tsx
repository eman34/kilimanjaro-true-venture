import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RouteItinerary from "@/components/RouteItinerary";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import {
  KILIMANJARO_ROUTES,
  formatDaysRange,
  minPrice,
} from "@/lib/constants";

interface PageProps {
  params: Promise<{ route: string }>;
}

export function generateStaticParams() {
  return KILIMANJARO_ROUTES.map((r) => ({ route: r.name.toLowerCase() }));
}

function findRoute(slug: string) {
  return KILIMANJARO_ROUTES.find((r) => r.name.toLowerCase() === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { route: slug } = await params;
  const route = findRoute(slug);
  if (!route) return { title: "Route not found" };
  return {
    title: `${route.name} Route — Mount Kilimanjaro`,
    description: `${route.name} (${route.nickname}). ${route.description.slice(0, 140)}…`,
  };
}

export default async function RouteDetailPage({ params }: PageProps) {
  const { route: slug } = await params;
  const route = findRoute(slug);
  if (!route) notFound();

  const daysLabel = formatDaysRange(route.durations);
  const fromPrice = minPrice(route.durations);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] md:h-[65vh]">
        <Image
          src={route.image}
          alt={`${route.name} route on Kilimanjaro`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-10 md:pb-14">
            <Link
              href="/tours/kilimanjaro"
              className="inline-flex items-center gap-1 text-paper/80 hover:text-paper text-sm font-semibold mb-3"
            >
              <span aria-hidden>←</span> All Kilimanjaro routes
            </Link>
            {route.tag && (
              <span className="inline-block bg-paper/95 backdrop-blur text-forest text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3">
                {route.tag}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-paper leading-tight">
              {route.name}
            </h1>
            <p className="text-emerald italic text-lg md:text-xl mt-1">
              {route.nickname}
            </p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-parchment border-y border-taupe/30 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-forest text-sm md:text-base font-semibold">
            Tanzanian-owned · Tanzanian-guided · Sekei, Arusha
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding">
        <div className="max-w-4xl">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-taupe/30 py-5 mb-8">
            <div>
              <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">
                Duration
              </dt>
              <dd className="text-forest font-bold text-lg mt-1">{daysLabel}</dd>
            </div>
            <div>
              <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">
                From
              </dt>
              <dd className="text-forest font-bold text-lg mt-1">{fromPrice}</dd>
            </div>
            <div>
              <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">
                Difficulty
              </dt>
              <dd className="text-forest font-medium text-sm mt-1">
                {route.difficulty}
              </dd>
            </div>
            <div>
              <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">
                Scenery
              </dt>
              <dd
                className="text-forest text-sm mt-1"
                aria-label={`${route.scenery} out of 5`}
              >
                {"★".repeat(route.scenery)}
                <span className="text-forest/30">
                  {"★".repeat(5 - route.scenery)}
                </span>
              </dd>
            </div>
            {route.successRate && (
              <div>
                <dt className="text-forest/50 text-[10px] uppercase tracking-wider font-semibold">
                  Summit success
                </dt>
                <dd className="text-emerald font-bold text-lg mt-1">
                  {route.successRate}
                </dd>
              </div>
            )}
          </dl>

          <p className="text-forest/80 text-base md:text-lg leading-relaxed">
            {route.description}
          </p>

          {route.highlights && route.highlights.length > 0 && (
            <ul className="mt-6 space-y-2">
              {route.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-forest/80 text-base"
                >
                  <svg
                    className="w-5 h-5 text-emerald shrink-0 mt-0.5"
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
        </div>
      </section>

      {/* Itinerary */}
      {route.detailedItinerary && (
        <section className="bg-parchment py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-2">
              Day by day
            </h2>
            <p className="text-forest/70 leading-relaxed mb-8">
              Tap any day for elevation, distance, and what to expect on the
              trail.
            </p>
            <RouteItinerary detailedItinerary={route.detailedItinerary} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-forest py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-paper">
            Ready to climb {route.name}?
          </h2>
          <p className="text-paper/80 mt-4 leading-relaxed">
            Tell us your dates and group size — we&apos;ll put together a quote,
            confirm guide availability, and answer questions about fitness and
            gear.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href={`/contact?route=${slug}`}
              className="btn-primary"
            >
              Get a {route.name} quote
            </Link>
            <Link
              href="/tours/kilimanjaro"
              className="text-paper/80 hover:text-paper font-semibold self-center underline underline-offset-4"
            >
              Back to all routes
            </Link>
          </div>
        </div>
      </section>

      <StickyWhatsApp />
    </>
  );
}
