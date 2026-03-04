import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import { SAFARI_PARKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wildlife Safaris — Serengeti, Ngorongoro, Tarangire & More",
  description:
    "Experience Tanzania's world-famous wildlife parks: Serengeti, Ngorongoro Crater, Tarangire, Lake Manyara, and Mkomazi. See the Big Five and the Great Migration. From $1,370.",
};

const SAFARI_ITINERARY = [
  {
    day: "Day 1",
    title: "Tarangire National Park",
    description: "Game drives through Tarangire, famous for its massive elephant herds, ancient baobab trees, and incredible birdlife.",
  },
  {
    day: "Day 2 & 3",
    title: "Serengeti National Park",
    description: "Two full days exploring the endless Serengeti plains — home to the Great Migration, Big Five, and Africa's most iconic wildlife landscapes.",
  },
  {
    day: "Day 4",
    title: "Ngorongoro Crater",
    description: "Descend into the world's largest intact volcanic caldera for a spectacular day of wildlife viewing in this natural amphitheater.",
  },
  {
    day: "Day 5",
    title: "Return to Arusha",
    description: "Morning game viewing and scenic drive back to Arusha. Transfer to your hotel.",
  },
];

export default function SafarisPage() {
  return (
    <>
      <Hero
        title="Wildlife Safaris"
        subtitle="Witness the raw beauty of Tanzania's iconic national parks — from the endless Serengeti plains to the Ngorongoro Crater's wildlife wonderland."
        ctaText="Plan Your Safari"
        ctaHref="/contact"
        backgroundImage="/images/ngorongoro-wildlife.jpg"
        compact
      />

      {/* Main Package */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            5-Day, 4-Night Safari
          </h2>
          <p className="text-secondary text-2xl font-bold mb-4">Starting from $1,370</p>
          <p className="text-light/60 max-w-2xl mx-auto">
            Our signature safari package covers Tanzania&apos;s three must-see wildlife destinations. Travel in comfort in our custom 4x4 Land Cruiser with professional driver guide.
          </p>
        </div>

        {/* Itinerary */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            {SAFARI_ITINERARY.map((day) => (
              <div
                key={day.day}
                className="bg-dark-lighter rounded-xl p-6 md:p-8 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="shrink-0">
                    <span className="text-secondary font-bold text-lg">{day.day}</span>
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

        {/* Includes */}
        <div className="max-w-2xl mx-auto bg-dark-lighter rounded-xl p-8 border border-white/10">
          <h3 className="text-xl font-bold text-secondary mb-4 text-center">Package Includes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "4x4 Land Cruiser",
              "Professional safari driver guide",
              "Accommodation (lodges/camps)",
              "All meals included",
              "Park entry fees",
              "Airport transfers",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-light/70 text-sm">
                <svg className="w-4 h-4 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parks We Visit */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-light text-center mb-12">
            Parks We Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAFARI_PARKS.map((park) => (
              <div
                key={park.name}
                className="bg-dark rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-primary-light relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-light mb-2">{park.name}</h3>
                  <p className="text-light/60 text-sm leading-relaxed mb-4">
                    {park.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {park.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-primary/30 text-light/80 text-xs px-3 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto px-4">
          {[
            { src: "/images/zebra-herd.jpg", alt: "Zebra herd on the plains" },
            { src: "/images/waterhole-wildlife.jpg", alt: "Wildlife at the waterhole" },
            { src: "/images/flamingos-flight.jpg", alt: "Flamingos in flight" },
            { src: "/images/ngorongoro-wildlife.jpg", alt: "Ngorongoro Crater wildlife" },
          ].map((img) => (
            <div key={img.src} className="relative h-48 rounded-lg overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Your Dream Safari Awaits"
        subtitle="Tell us your dates and interests and we'll craft the perfect Tanzanian safari experience for you."
        ctaText="Get a Free Safari Quote"
      />
    </>
  );
}
