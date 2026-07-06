import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PackageInclusions from "@/components/PackageInclusions";
import RouteItinerary from "@/components/RouteItinerary";
import AscentProfile from "@/components/AscentProfile";
import SectionDivider from "@/components/SectionDivider";
import JsonLd from "@/components/JsonLd";
import {
  KILIMANJARO_ROUTES,
  formatDaysRange,
  minPrice,
} from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

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
    openGraph: {
      title: `${route.name} Route — Mount Kilimanjaro`,
      description: `${route.name} (${route.nickname}) with a locally owned operator in Arusha, Tanzania.`,
      images: [{ url: route.image }],
    },
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Kilimanjaro routes",
              item: `${SITE_URL}/tours/kilimanjaro`,
            },
            { "@type": "ListItem", position: 3, name: `${route.name} Route` },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: `${route.name} Route — Mount Kilimanjaro`,
          description: route.description,
          image: `${SITE_URL}${route.image}`,
          provider: {
            "@type": "TravelAgency",
            name: "Kilimanjaro True Venture",
            url: SITE_URL,
          },
        }}
      />
      {/* Hero */}
      <section className="relative aspect-[2/1] sm:aspect-[5/2] md:aspect-[16/5] min-h-[280px] w-full">
        <Image
          src={route.image}
          alt={`${route.name} route on Kilimanjaro`}
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-10 md:pb-14">
            <h1 className="text-4xl md:text-6xl font-bold text-paper leading-tight">
              {route.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding">
        <div>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/tours/kilimanjaro"
                  className="inline-flex items-center gap-1.5 text-olive/60 hover:text-gold-deep transition-colors font-medium"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Kilimanjaro routes
                </Link>
              </li>
              <li aria-hidden className="text-olive/30">/</li>
              <li className="text-olive/45 font-medium">{route.name}</li>
            </ol>
          </nav>

          <p className="text-gold-deep italic text-lg md:text-xl mb-5">
            {route.nickname}
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-taupe/30 py-5 mb-8">
            <div>
              <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
                Duration
              </dt>
              <dd className="text-olive font-bold text-lg mt-1">{daysLabel}</dd>
            </div>
            <div>
              <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
                From
              </dt>
              <dd className="text-olive font-bold text-lg mt-1">{fromPrice}</dd>
            </div>
            <div>
              <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
                Difficulty
              </dt>
              <dd className="text-olive font-medium text-sm mt-1">
                {route.difficulty}
              </dd>
            </div>
            <div>
              <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
                Scenery
              </dt>
              <dd
                className="text-olive text-sm mt-1"
                aria-label={`${route.scenery} out of 5`}
              >
                {"★".repeat(route.scenery)}
                <span className="text-olive/30">
                  {"★".repeat(5 - route.scenery)}
                </span>
              </dd>
            </div>
            {route.successRate && (
              <div>
                <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
                  Summit success
                </dt>
                <dd className="text-gold-deep font-bold text-lg mt-1">
                  {route.successRate}
                </dd>
              </div>
            )}
          </dl>

          {route.detailedItinerary && (
            <div className="mb-8">
              <AscentProfile days={route.detailedItinerary} />
            </div>
          )}

          <p className="text-olive/95 text-base md:text-lg leading-relaxed">
            {route.description}
          </p>

          <p className="text-olive/65 text-sm mt-6">
            Prices are in US dollars, per person, and vary with group size and
            season. You get an exact quote when you inquire.
          </p>

          {route.highlights && route.highlights.length > 0 && (
            <ul className="mt-6 space-y-2">
              {route.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-olive/95 text-base"
                >
                  <svg
                    className="w-5 h-5 text-gold-deep shrink-0 mt-0.5"
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
        <>
        <SectionDivider from="paper" to="paper" />
        <section className="bg-paper py-6 md:py-7">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-olive mb-2">
              Day by day
            </h2>
            <p className="text-olive/85 leading-relaxed mb-8">
              Every day on the trail, from rainforest to the arctic summit.
            </p>
            <RouteItinerary detailedItinerary={route.detailedItinerary} />
          </div>
        </section>
        </>
      )}

      {route.detailedItinerary && <SectionDivider from="paper" to="paper" />}

      <PackageInclusions />

      <SectionDivider from="paper" to="parchment" />

      {/* CTA */}
      <section className="bg-parchment py-6 md:py-7">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Ready to climb {route.name}?
          </h2>
          <p className="text-olive/85 mt-4 leading-relaxed">
            Tell us your dates and group size — we&apos;ll put together a quote,
            confirm guide availability, and answer questions about fitness and
            gear.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href={`/contact?route=${slug}`}
              className="btn-primary"
            >
              Get a {route.name} quote
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
