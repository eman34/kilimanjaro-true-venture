import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";
import SubTourCard from "@/components/SubTourCard";
import {
  ZANZIBAR_PACKAGES,
  ZANZIBAR_EXCLUDES,
  ZANZIBAR_DAY_TRIPS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Zanzibar Beach Holidays — Packages & Day Trips",
  description:
    "Zanzibar beach holidays after your climb or safari. Three 5-day packages from $1,350 per person, plus Stone Town, Mnemba snorkeling, spice farm and dhow cruise day trips.",
};

export default function ZanzibarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative aspect-[2/1] sm:aspect-[5/2] md:aspect-[16/5] min-h-[280px] w-full">
        <Image
          src="/images/zanzibar-turquoise-cove.jpg"
          alt="Turquoise water and coral rock formations on the Zanzibar coast"
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
              Zanzibar
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/tours/other-adventures"
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
                Other Adventures
              </Link>
            </li>
            <li aria-hidden className="text-olive/30">/</li>
            <li className="text-olive/45 font-medium">Zanzibar</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            The island after the mountain
          </h2>
          <div className="space-y-5 mt-6">
            <p className="text-olive/85 leading-relaxed">
              Zanzibar sits a short flight from the mainland, and most of our
              travelers add it after a climb or a safari: a beach, fresh seafood
              and nothing scheduled before ten. We run the island side the same
              way we run the mountain. Our driver meets you at the airport, the
              hotel is the one we described and the plan holds.
            </p>
            <p className="text-olive/85 leading-relaxed">
              The island is more than the beach. Stone Town is a UNESCO World
              Heritage Site shaped by centuries of Swahili, Arab and Indian
              trade. The reefs off Mnemba Island hold the clearest snorkeling
              water in the area. The interior grows the cloves, cinnamon and
              vanilla that gave Zanzibar its Spice Island name. All of it works
              as a half-day or full-day trip from your hotel.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      {/* Holiday packages */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-2">
            Holiday packages
          </h2>
          <p className="text-olive/85 leading-relaxed mb-8">
            Three five-day stays. Pick the one that matches who you&apos;re
            travelling with.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ZANZIBAR_PACKAGES.map((pkg) => (
              <SubTourCard
                key={pkg.name}
                eyebrow={pkg.tag}
                name={pkg.name}
                durationLine={pkg.duration}
                price={pkg.price}
                priceUnit={pkg.priceUnit}
                summary={pkg.summary}
                bestFor={pkg.bestFor}
                items={pkg.includes}
              />
            ))}
          </div>
          <p className="text-olive/65 text-sm mt-6">
            Prices vary with season and hotel level. You get an exact quote when
            you inquire, and we time the package around your climb or safari
            dates.
          </p>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      {/* Day trips */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-2">
            Day trips and excursions
          </h2>
          <p className="text-olive/85 leading-relaxed mb-8">
            Each runs from your hotel and books on its own or as an add-on to any
            package.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ZANZIBAR_DAY_TRIPS.map((trip) => (
              <SubTourCard
                key={trip.name}
                eyebrow={trip.duration}
                name={trip.name}
                price={trip.price}
                priceUnit="per person"
                summary={trip.description}
                items={trip.includes}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      {/* Not included */}
      <section className="section-padding">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Not included
          </h2>
          <p className="text-olive/85 leading-relaxed mt-4 mb-8">
            The same exclusions apply to all three packages, so there are no
            surprises on the invoice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {ZANZIBAR_EXCLUDES.map((item) => (
              <div key={item} className="flex items-start gap-3 text-olive/85">
                <svg
                  className="w-5 h-5 text-khaki shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="paper" to="parchment" />

      {/* CTA */}
      <section className="bg-parchment py-6 md:py-7">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Add Zanzibar to your trip?
          </h2>
          <p className="text-olive/85 mt-4 leading-relaxed">
            Tell us your dates and group size. We&apos;ll match the stay to your
            budget and handle the timing around a climb or safari.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact?adventure=zanzibar" className="btn-primary">
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
