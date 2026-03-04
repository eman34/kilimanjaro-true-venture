import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Mount Meru Trekking — Tanzania's Hidden Gem",
  description:
    "Trek Mount Meru (4,566m), Tanzania's second-highest peak in Arusha National Park. Incredible wildlife encounters, stunning views of Kilimanjaro, and an unforgettable 4-day adventure. From $950.",
};

const ITINERARY = [
  {
    day: "Day 1",
    title: "Hotel to Arusha National Park – Miriakamba Camp",
    altitude: "1,500m → 2,514m",
    description:
      "Begin your trek at Arusha National Park. Walk through lush montane forest, passing waterfalls and possibly encountering giraffes, buffaloes, and colobus monkeys.",
  },
  {
    day: "Day 2",
    title: "Miriakamba Camp – Saddle Camp (for summit)",
    altitude: "2,514m → 3,566m",
    description:
      "Ascend through the heather and moorland zone with increasingly spectacular views. Prepare at Saddle Camp for the early morning summit push.",
  },
  {
    day: "Day 3",
    title: "Summit (from Saddle Camp) – Miriakamba Camp",
    altitude: "3,566m → 4,566m → 2,514m",
    description:
      "Early morning start for the summit push along the spectacular ridge. Watch the sunrise from Socialist Peak with panoramic views of Kilimanjaro and the Great Rift Valley. Descend to Miriakamba Camp.",
  },
  {
    day: "Day 4",
    title: "Miriakamba Camp – Back to Hotel",
    altitude: "2,514m → 1,500m",
    description:
      "Final descent through the forest, with more chances to spot wildlife. Transfer back to your hotel for a well-earned rest.",
  },
];

export default function MeruPage() {
  return (
    <>
      <Hero
        title="Mount Meru"
        subtitle="Tanzania's second-highest peak at 4,566m. A stunning 4-day trek through wildlife-rich Arusha National Park to a dramatic volcanic summit."
        ctaText="Book This Trek"
        ctaHref="/contact"
        backgroundImage="/images/mawenzi-silhouette.jpg"
        compact
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
            Perfect Preparation Before Kilimanjaro
          </h2>
          <p className="text-light/70 leading-relaxed">
            Climb Tanzania&apos;s second highest peak in Arusha National Park. Mount Meru is often overlooked in favor of its famous neighbor, but those who trek it call it one of the best experiences in East Africa. With close wildlife encounters, dramatic crater scenery, and stunning views of Kilimanjaro, Meru offers an intimate and rewarding adventure.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { label: "Duration", value: "4 Days" },
            { label: "Summit", value: "4,566m" },
            { label: "Difficulty", value: "Moderate" },
            { label: "Price", value: "From $950" },
          ].map((fact) => (
            <div key={fact.label} className="bg-dark-lighter rounded-xl p-6 text-center border border-white/10">
              <p className="text-secondary text-2xl font-bold mb-1">{fact.value}</p>
              <p className="text-light/50 text-sm">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-light text-center mb-12">
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-6">
            {ITINERARY.map((day) => (
              <div
                key={day.day}
                className="bg-dark rounded-xl p-6 md:p-8 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="shrink-0">
                    <span className="text-secondary font-bold text-lg">{day.day}</span>
                    <p className="text-light/40 text-xs">{day.altitude}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-light mb-2">{day.title}</h3>
                    <p className="text-light/70 leading-relaxed">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-light text-center mb-8">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Professional armed ranger & mountain guide",
              "All park entry & hut fees",
              "Hut accommodation",
              "All meals during the trek",
              "Porters for group equipment",
              "Airport transfers",
              "Pre and post-trek hotel accommodation",
              "Drinking water",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-light/70">
                <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Trek Mount Meru With Us"
        subtitle="Combine it with a Kilimanjaro climb or enjoy it as a standalone adventure. Let's plan your perfect trip."
        ctaText="Inquire Now"
      />
    </>
  );
}
