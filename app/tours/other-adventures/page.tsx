import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Other Adventures — Meru, Zanzibar & Cultural Experiences",
  description:
    "Beyond Kilimanjaro and the safari circuit. Mount Meru treks, Zanzibar beach extensions and cultural day trips across Tanzania.",
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
    title: "Cultural Experiences",
    tag: "Half-day to full-day",
    image: "/images/guide-client.jpg",
    description:
      "Maasai village visits, Chagga coffee farms and local markets. Easy add-ons between adventures.",
    href: "/tours/cultural",
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

      <section className="py-16 md:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {ADVENTURES.map((adventure) => (
              <Link
                key={adventure.href}
                href={adventure.href}
                className="group block bg-parchment rounded-2xl overflow-hidden border border-taupe/10 hover:border-emerald/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald/10"
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
                  <p className="text-emerald text-xs uppercase tracking-wider font-semibold mb-2">
                    {adventure.tag}
                  </p>
                  <h2 className="text-2xl font-bold text-wine mb-3 group-hover:text-emerald transition-colors">
                    {adventure.title}
                  </h2>
                  <p className="text-wine/70 leading-relaxed mb-4">
                    {adventure.description}
                  </p>
                  <span className="text-emerald font-semibold text-sm group-hover:underline">
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
