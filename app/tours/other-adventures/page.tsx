import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import AdventureSpread, { type Adventure } from "@/components/AdventureSpread";

export const metadata: Metadata = {
  title: "Other Adventures — Meru, Zanzibar, Gorilla Trekking & More",
  description:
    "Beyond Kilimanjaro and the safari circuit. Mount Meru treks, Zanzibar beach extensions, cultural tours, gorilla trekking in Rwanda and charity climbs.",
};

const ADVENTURES: Adventure[] = [
  {
    title: "Mount Meru",
    href: "/tours/meru",
    image: "/images/safari-giraffe-landscape.jpg",
    imageAlt:
      "A giraffe on the lower slopes of Mount Meru in Arusha National Park",
    priceFrom: "$950",
    duration: "4 days",
    inside: "One trek",
    summary:
      "Tanzania's second peak at 4,566m. Most climb it as acclimatization before Kilimanjaro.",
  },
  {
    title: "Zanzibar",
    href: "/tours/zanzibar",
    image: "/images/flamingos-flight.jpg",
    imageAlt: "Coastal birds in flight",
    priceFrom: "$1,350",
    duration: "5 days",
    inside: "3 stays + 4 day trips",
    summary:
      "White-sand coast, Stone Town and the Mnemba reef. The wind-down after a climb or safari.",
  },
  {
    title: "Cultural experiences",
    href: "/tours/cultural",
    image: "/images/culture-maasai-dance.jpg",
    imageAlt: "Maasai dancers in traditional dress",
    priceFrom: "Day rates",
    duration: "Half to full day",
    inside: "6 experiences",
    summary:
      "Maasai bomas, Chagga coffee farms and the Materuni falls. Half-days that slot between adventures.",
  },
  {
    title: "Gorilla trekking",
    href: "/tours/gorilla-trekking",
    image: "/images/kili-rainforest-trail.jpg",
    imageAlt: "A forest trail",
    priceFrom: "On request",
    duration: "1 day permit",
    inside: "One experience",
    summary:
      "An hour with a mountain gorilla family in Rwanda's Volcanoes National Park, run with our partners.",
  },
  {
    title: "Charity climb",
    href: "/tours/charity-climb",
    image: "/images/summit-celebration.jpg",
    imageAlt: "Climbers celebrating at the summit",
    priceFrom: "On request",
    duration: "6 to 9 days",
    inside: "One climb",
    summary:
      "Summit Kilimanjaro with a group raising money for the schools and communities around the mountain.",
  },
];

export default function OtherAdventuresPage() {
  return (
    <>
      <Hero title="Other adventures" backgroundImage="/images/kili-trekkers-above-clouds.jpg" />

      <section className="section-padding">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Beyond the mountain and the safari
          </h2>
          <p className="text-olive/85 mt-3 leading-relaxed max-w-3xl">
            A second peak, an island, gorilla trekking in Rwanda, a charity
            climb and cultural days that slot between the rest. Most pair with a
            climb or safari. Tell us what you want and we&apos;ll fit it to your
            trip.
          </p>
        </div>

        <div className="space-y-6">
          {ADVENTURES.map((a, i) => (
            <AdventureSpread key={a.href} adventure={a} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Adding it to your trip */}
      <section className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-olive">
          Adding it to your trip
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8">
          <div className="border-t-2 border-gold pt-4">
            <h3 className="text-olive font-bold text-lg">One trip, one plan</h3>
            <p className="text-olive/85 leading-relaxed mt-2">
              Most of these pair with a Kilimanjaro climb or a safari. We handle
              the timing, the transfers and the internal flights so it reads as
              one trip, not three bookings.
            </p>
          </div>
          <div className="border-t-2 border-gold pt-4">
            <h3 className="text-olive font-bold text-lg">Or on its own</h3>
            <p className="text-olive/85 leading-relaxed mt-2">
              Coming for the gorillas, the island or a charity climb alone is
              fine too. Tell us your dates and we&apos;ll build the trip around
              it.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan something beyond the climb"
        subtitle="Tell us what you want to add and your rough dates, and we'll help you plan the rest."
        seamFrom="paper"
      />
    </>
  );
}
