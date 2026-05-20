import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import RouteItinerary from "@/components/RouteItinerary";
import FeaturedRouteCard from "@/components/FeaturedRouteCard";
import AlternativeRouteCard from "@/components/AlternativeRouteCard";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import {
  KILIMANJARO_ROUTES,
  PACKAGE_INCLUDES,
  PACKAGE_EXCLUDES,
  MOUNTAIN_INTRO,
  ECOLOGICAL_ZONES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mount Kilimanjaro Climbing Routes & Expeditions",
  description:
    "Choose from 6 unique routes to summit Africa's highest peak at 5,895m. Expert guides, all-inclusive packages. Machame, Lemosho, Marangu, Rongai, Umbwe, Londorossi.",
};

export default function KilimanjaroPage() {
  const lemoshoRoute = KILIMANJARO_ROUTES.find((r) => r.name === "Lemosho");
  const alternativeOrder = ["Machame", "Rongai", "Marangu", "Umbwe", "Londorossi"];
  const alternativeRoutes = alternativeOrder
    .map((name) => KILIMANJARO_ROUTES.find((r) => r.name === name))
    .filter((r): r is NonNullable<typeof r> => r !== undefined);

  return (
    <>
      <Hero
        title="Mount Kilimanjaro"
        tagline="Africa's highest mountain. Six routes to the summit. Pick the one that matches your fitness and time."
        backgroundImage="/images/summit-glaciers.jpg"
      />

      {/* Trust strip */}
      <section className="bg-parchment border-y border-taupe/30 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-wine text-sm md:text-base font-semibold">
            Tanzanian-owned · Tanzanian-guided
          </p>
        </div>
      </section>

      {/* Featured Lemosho */}
      {lemoshoRoute && (
        <section className="section-padding">
          <FeaturedRouteCard
            route={lemoshoRoute}
            ctaHref="/contact?route=lemosho"
            itineraryAnchor="lemosho-itinerary"
          />

          {lemoshoRoute.detailedItinerary && (
            <div id="lemosho-itinerary" className="mt-8 scroll-mt-24">
              <RouteItinerary
                routeName="Lemosho"
                detailedItinerary={lemoshoRoute.detailedItinerary}
              />
            </div>
          )}
        </section>
      )}

      {/* Alternatives */}
      <section className="section-padding pt-0">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-wine">
            Other routes worth considering
          </h2>
          <p className="text-wine/70 mt-3 leading-relaxed">
            Each has a different character. Tell us how you want to experience
            the mountain and we&apos;ll match you to a route.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {alternativeRoutes.map((route) => (
            <AlternativeRouteCard key={route.name} route={route} />
          ))}
        </div>
      </section>

      {/* Ecological zones band */}
      <section className="bg-wine text-paper py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-emerald text-xs uppercase tracking-[0.18em] font-semibold mb-3">
            On the mountain
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-paper leading-tight">
            Five ecological zones in five days
          </h2>
          <p className="text-paper/80 mt-4 max-w-3xl leading-relaxed">
            {MOUNTAIN_INTRO}
          </p>

          <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-10">
            {ECOLOGICAL_ZONES.map((zone, idx) => (
              <li
                key={zone.name}
                className="border-l-2 border-emerald/40 pl-4"
              >
                <p className="text-emerald text-[11px] uppercase tracking-wider font-semibold">
                  Zone {idx + 1}
                </p>
                <p className="text-paper font-bold mt-1">{zone.name}</p>
                <p className="text-paper/60 text-xs mt-0.5">{zone.altitude}</p>
                <p className="text-paper/70 text-sm mt-2 leading-relaxed">
                  {zone.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How we operate */}
      <section className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-wine">
          How we run a climb.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div>
            <h3 className="text-emerald text-xs uppercase tracking-[0.18em] font-semibold mb-3">
              Porter standards
            </h3>
            <p className="text-wine/80 leading-relaxed">
              We work with KPAP-aligned porter standards: fair wages, weight
              limits, and proper gear.
            </p>
          </div>
          <div>
            <h3 className="text-emerald text-xs uppercase tracking-[0.18em] font-semibold mb-3">
              Lead guides
            </h3>
            <p className="text-wine/80 leading-relaxed">
              Tanzanian lead guides with multi-year experience on every route
              we offer. Names and bios available on request.
            </p>
          </div>
          <div>
            <h3 className="text-emerald text-xs uppercase tracking-[0.18em] font-semibold mb-3">
              Crew ratio
            </h3>
            <p className="text-wine/80 leading-relaxed">
              Typical 3:1 porter-to-climber ratio. Climbing crews carry water,
              food, and tents so you carry your day pack only.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included / Excluded */}
      <section className="py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-wine text-center mb-12">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-emerald mb-4">
                Included in Your Package
              </h3>
              <ul className="space-y-3">
                {PACKAGE_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-wine/70 text-sm"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald mb-4">Not Included</h3>
              <ul className="space-y-3">
                {PACKAGE_EXCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-wine/70 text-sm"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan your Kilimanjaro climb"
        subtitle="Tell us your dates, group size, and route interest. Abu will reply within 4 hours on WhatsApp."
      />

      <StickyWhatsApp />
    </>
  );
}
