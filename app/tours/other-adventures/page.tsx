import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Other Adventures — Meru, Zanzibar, Gorilla Trekking & More",
  description:
    "Beyond Kilimanjaro and the safari circuit. Mount Meru treks, Zanzibar beach extensions, cultural tours, gorilla trekking in Rwanda and charity climbs.",
};

const ADVENTURES = [
  {
    title: "Mount Meru",
    tag: "4-day trek · From $950",
    image: "/images/mawenzi-silhouette.jpg",
    description:
      "Tanzania's second-highest peak. Often climbed as acclimatization before Kilimanjaro.",
    href: "/tours/meru",
  },
  {
    title: "Zanzibar",
    tag: "Beach extension",
    image: "/images/flamingos-flight.jpg",
    description:
      "White-sand beaches, spice tours and Stone Town. A common add-on after a climb or safari.",
    href: "/tours/zanzibar",
  },
  {
    title: "Cultural Tours",
    tag: "Half-day to full-day",
    image: "/images/guide-client.jpg",
    description:
      "Maasai village visits, Chagga coffee farms and local markets. Easy add-ons between adventures.",
    href: "/tours/cultural",
  },
  {
    title: "Gorilla Trekking",
    tag: "Rwanda collaboration",
    image: "/images/ngorongoro-wildlife.jpg",
    description:
      "Track mountain gorillas in Rwanda's Volcanoes National Park, run with our trusted Rwandan partners.",
    href: "/tours/gorilla-trekking",
  },
  {
    title: "Charity Climb",
    tag: "Climb with purpose",
    image: "/images/summit-celebration.jpg",
    description:
      "Summit Kilimanjaro while raising funds for the communities around the mountain.",
    href: "/tours/charity-climb",
  },
];

export default function OtherAdventuresPage() {
  return (
    <>
      <Hero
        title="Other Adventures"
        tagline="Beyond the mountain, beyond the safari."
        backgroundImage="/images/hero-sunset.jpg"
      />

      <section className="py-6 md:py-7 bg-paper">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {ADVENTURES.map((adventure) => (
              <Link
                key={adventure.href}
                href={adventure.href}
                className="group block bg-parchment rounded-2xl overflow-hidden border border-taupe/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={adventure.image}
                    alt={adventure.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gold-deep text-xs uppercase tracking-wider font-semibold mb-2">
                    {adventure.tag}
                  </p>
                  <h2 className="text-2xl font-bold text-olive mb-3 group-hover:text-gold-deep transition-colors">
                    {adventure.title}
                  </h2>
                  <p className="text-olive/85 leading-relaxed mb-4">
                    {adventure.description}
                  </p>
                  <span className="text-gold-deep font-semibold text-sm group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
