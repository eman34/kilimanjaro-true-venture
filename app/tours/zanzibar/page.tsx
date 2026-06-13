import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import SectionDivider from "@/components/SectionDivider";
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

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold-deep shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ZanzibarPage() {
  return (
    <>
      <Hero
        title="Zanzibar Holidays"
        tagline="Crystal water. Old Stone Town. Rest."
        backgroundImage="/images/flamingos-flight.jpg"
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-6 text-center">
            The Island After the Mountain
          </h2>
          <div className="space-y-5">
            <p className="text-olive/85 leading-relaxed">
              Zanzibar sits a short flight from the mainland, and most of our
              travelers add it after a climb or a safari: a beach, fresh
              seafood and nothing scheduled before ten. We run the island side
              the same way we run the mountain. Our driver meets you at the
              airport, the hotel is the one we described and the plan holds.
            </p>
            <p className="text-olive/85 leading-relaxed">
              The island is more than the beach. Stone Town is a UNESCO World
              Heritage Site shaped by centuries of Swahili, Arab and Indian
              trade. The reefs off Mnemba Island hold the clearest snorkeling
              water in the area. The interior grows the cloves, cinnamon and
              vanilla that gave Zanzibar its Spice Island name. All of it
              works as a half-day or full-day trip from your hotel.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider from="paper" to="parchment" />

      {/* Holiday packages */}
      <section className="py-6 md:py-7 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive text-center mb-12">
            Zanzibar Holiday Packages
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ZANZIBAR_PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className="bg-paper rounded-2xl p-6 md:p-8 border border-taupe/10 hover:border-gold/30 transition-all duration-300 flex flex-col"
              >
                <p className="text-gold-deep text-[11px] uppercase tracking-[0.18em] font-semibold mb-2">
                  {pkg.tag}
                </p>
                <h3 className="text-2xl font-bold text-olive leading-snug">{pkg.name}</h3>
                <p className="text-olive/65 text-sm mt-1">{pkg.duration}</p>
                <p className="text-olive mt-4">
                  <span className="text-olive/65 text-xs uppercase tracking-wider font-semibold mr-2">
                    From
                  </span>
                  <span className="font-bold text-2xl text-gold-deep">{pkg.price}</span>
                  <span className="text-olive/65 text-sm"> {pkg.priceUnit}</span>
                </p>
                <p className="text-olive/80 text-sm leading-relaxed mt-4">{pkg.summary}</p>
                <p className="text-olive/65 text-sm mt-3">
                  <span className="font-semibold text-olive/80">Best for:</span> {pkg.bestFor}
                </p>
                <ul className="mt-5 pt-5 border-t border-taupe/40 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-olive/85 text-sm">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="text-olive/65 text-sm mt-6">
            Prices vary with season and hotel level. You get an exact quote when
            you inquire, and we time the package around your climb or safari
            dates.
          </p>
        </div>
      </section>

      <SectionDivider from="parchment" to="paper" />

      {/* Not included */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-olive text-center mb-4">
            Not Included
          </h2>
          <p className="text-olive/75 text-center mb-8">
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

      {/* Day trips */}
      <section className="py-6 md:py-7 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive text-center mb-4">
            Day Trips & Excursions
          </h2>
          <p className="text-olive/75 text-center max-w-2xl mx-auto mb-12">
            Each of these runs from your hotel and books on its own or as an
            add-on to any package.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ZANZIBAR_DAY_TRIPS.map((trip) => (
              <article
                key={trip.name}
                className="bg-paper rounded-xl p-6 border border-taupe/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <p className="text-gold-deep text-[11px] uppercase tracking-[0.18em] font-semibold">
                    {trip.duration}
                  </p>
                  <p className="text-olive whitespace-nowrap">
                    <span className="text-olive/65 text-xs uppercase tracking-wider font-semibold mr-1.5">
                      From
                    </span>
                    <span className="font-bold">{trip.price}</span>
                    <span className="text-olive/65 text-sm"> per person</span>
                  </p>
                </div>
                <h3 className="text-xl font-bold text-olive">{trip.name}</h3>
                <p className="text-olive/80 text-sm leading-relaxed mt-3">{trip.description}</p>
                <p className="text-olive/65 text-sm mt-4">
                  <span className="font-semibold text-olive/80">Includes:</span>{" "}
                  {trip.includes.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        seamFrom="parchment"
        title="Add Zanzibar to Your Adventure"
        subtitle="Combine a Kilimanjaro climb or safari with a Zanzibar beach holiday, or book the island on its own. We handle the timing either way."
      />
    </>
  );
}
