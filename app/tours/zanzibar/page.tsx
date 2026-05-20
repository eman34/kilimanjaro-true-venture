import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Zanzibar Beach Holidays — Tropical Paradise",
  description:
    "Relax in beautiful Zanzibar after your adventure. Crystal-clear waters, historic Stone Town, and tropical paradise. Packages start from $600 for 3 days.",
};

const HIGHLIGHTS = [
  {
    title: "Stone Town Exploration",
    description:
      "Wander the UNESCO World Heritage streets of Stone Town — a maze of narrow alleys, historic architecture, bustling markets, and vibrant culture dating back centuries.",
  },
  {
    title: "Pristine Beaches",
    description:
      "Sink your toes into white sand beaches with crystal-clear turquoise waters. Some of the most beautiful coastline in the Indian Ocean.",
  },
  {
    title: "Spice Tours",
    description:
      "Discover why Zanzibar is called the Spice Island. Visit local spice farms and experience the aromas and flavors of clove, cinnamon, vanilla, and more.",
  },
  {
    title: "Snorkeling & Diving",
    description:
      "Explore vibrant coral reefs teeming with tropical fish, dolphins, and sea turtles in the warm Indian Ocean waters.",
  },
  {
    title: "Sunset Dhow Cruises",
    description:
      "Sail on a traditional wooden dhow as the sun sets over the Indian Ocean — a magical way to end a perfect Zanzibar day.",
  },
  {
    title: "Local Cuisine",
    description:
      "Taste the unique Zanzibari fusion of African, Arab, and Indian flavors — fresh seafood, street food at Forodhani Gardens, and tropical fruits.",
  },
];

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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-wine mb-6">
            The Perfect Post-Adventure Reward
          </h2>
          <p className="text-wine/70 leading-relaxed mb-8">
            After conquering Kilimanjaro or exploring the Serengeti, unwind in the tropical paradise of Zanzibar. With its stunning beaches, rich history, and vibrant culture, Zanzibar is the ideal way to cap off your Tanzanian adventure.
          </p>
          <div className="inline-block bg-parchment rounded-xl p-8 border border-emerald/30">
            <p className="text-wine/50 text-sm mb-2">Packages start from</p>
            <p className="text-4xl font-bold text-emerald mb-2">$600</p>
            <p className="text-wine/60 text-sm">3 days including hotel, airport transfer, and Stone Town tour</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-wine text-center mb-12">
            Zanzibar Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="bg-paper rounded-xl p-6 border border-taupe/10 hover:border-emerald/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-emerald mb-3">{item.title}</h3>
                <p className="text-wine/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-wine text-center mb-8">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Hotel accommodation",
              "Airport transfers",
              "Stone Town guided tour",
              "Breakfast included",
              "Local transport assistance",
              "24/7 trip support",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-wine/70">
                <svg className="w-5 h-5 text-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Add Zanzibar to Your Adventure"
        subtitle="Combine a Kilimanjaro climb or safari with a relaxing Zanzibar beach holiday for the ultimate Tanzania experience."
      />
    </>
  );
}
