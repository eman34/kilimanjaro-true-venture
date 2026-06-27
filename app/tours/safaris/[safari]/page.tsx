import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PackageInclusions from "@/components/PackageInclusions";
import SectionDivider from "@/components/SectionDivider";
import { SAFARIS, SAFARI_INCLUDES, SAFARI_EXCLUDES } from "@/lib/constants";

interface PageProps {
  params: Promise<{ safari: string }>;
}

export function generateStaticParams() {
  return SAFARIS.map((s) => ({ safari: s.slug }));
}

function findSafari(slug: string) {
  return SAFARIS.find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { safari: slug } = await params;
  const safari = findSafari(slug);
  if (!safari) return { title: "Safari not found" };
  return {
    title: `${safari.name} — Tanzania Safari`,
    description: `${safari.summary.slice(0, 150)}…`,
  };
}

export default async function SafariDetailPage({ params }: PageProps) {
  const { safari: slug } = await params;
  const safari = findSafari(slug);
  if (!safari) notFound();

  const daysLabel = safari.days === 1 ? "Day trip" : `${safari.days} days`;

  return (
    <>
      {/* Hero */}
      <section className="relative aspect-[2/1] sm:aspect-[5/2] md:aspect-[16/5] min-h-[280px] w-full">
        <Image
          src={safari.image}
          alt={safari.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-10 md:pb-14">
            <h1 className="text-4xl md:text-6xl font-bold text-paper leading-tight">
              {safari.name}
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
                  href="/tours/safaris"
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
                  Wildlife safaris
                </Link>
              </li>
              <li aria-hidden className="text-olive/30">/</li>
              <li className="text-olive/45 font-medium">{safari.name}</li>
            </ol>
          </nav>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-taupe/30 py-5 mb-8">
            <div>
              <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
                Duration
              </dt>
              <dd className="text-olive font-bold text-lg mt-1">{daysLabel}</dd>
            </div>
            <div>
              <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
                From, per person
              </dt>
              <dd className="text-olive font-bold text-lg mt-1">
                {safari.priceFrom}
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
                Parks
              </dt>
              <dd className="text-olive font-medium text-sm mt-1">
                {safari.parks.join(", ")}
              </dd>
            </div>
          </dl>

          <p className="text-olive/95 text-base md:text-lg leading-relaxed">
            {safari.summary}
          </p>

          {safari.highlights && safari.highlights.length > 0 && (
            <ul className="mt-6 space-y-2">
              {safari.highlights.map((h) => (
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

          <p className="text-olive/65 text-sm mt-6">
            Prices are per person and vary with group size and season. You get
            an exact quote when you inquire.
          </p>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      {/* Itinerary */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-2">
            Day by day
          </h2>
          <p className="text-olive/85 leading-relaxed mb-8">
            {safari.days === 1
              ? "One full day in the park, gate to gate."
              : "Every day of the safari, park by park."}
          </p>
          <ol className="relative">
            {safari.detailedItinerary.map((d, i) => {
              const isLast = i === safari.detailedItinerary.length - 1;
              return (
                <li
                  key={d.day}
                  className="relative flex gap-5 md:gap-8 pb-10 last:pb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm border-2 bg-parchment border-olive/40 text-olive">
                      {d.day}
                    </div>
                    {!isLast && <div className="w-px flex-1 bg-olive/20 mt-2" />}
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="text-olive font-bold text-lg md:text-xl leading-snug">
                      {d.title}
                    </h3>
                    <div className="mt-2 mb-3">
                      <span className="text-olive/65 text-[11px] uppercase tracking-wider font-semibold">
                        {d.park}
                      </span>
                    </div>
                    <p className="text-olive/85 text-sm md:text-base leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      <PackageInclusions
        includes={SAFARI_INCLUDES}
        excludes={SAFARI_EXCLUDES}
        subline="The same setup on every safari, whichever itinerary you choose."
      />

      <SectionDivider from="paper" to="parchment" />

      {/* CTA */}
      <section className="bg-parchment py-6 md:py-7">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Ready for the {safari.name}?
          </h2>
          <p className="text-olive/85 mt-4 leading-relaxed">
            Tell us your dates and group size. We&apos;ll confirm availability,
            lodge options, and a full quote.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href={`/contact?safari=${safari.slug}`} className="btn-primary">
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
