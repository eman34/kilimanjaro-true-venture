import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { SAFARIS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wildlife Safaris — Serengeti, Ngorongoro, Tarangire & More",
  description:
    "Four Tanzanian safaris with private 4x4, professional driver guides, and park fees included: Serengeti Migration, Ngorongoro Crater, Tarangire, Lake Manyara, and Mkomazi. From $430.",
};

export default function SafarisPage() {
  return (
    <>
      <Hero
        title="Wildlife Safaris"
        tagline="Serengeti. Ngorongoro. Tarangire. Mkomazi."
        backgroundImage="/images/ngorongoro-wildlife.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-olive mb-6">
          Safari in northern Tanzania
        </h2>
        <div className="space-y-5 max-w-4xl">
          <p className="text-olive/95 leading-relaxed">
            Tanzania holds some of the best wildlife country in Africa: the
            golden plains of the Serengeti, the natural enclosure of Ngorongoro
            Crater, and the ancient baobab landscapes of Tarangire. Our safaris
            are planned end to end, with comfort, expert guiding, and a relaxed
            pace, so the logistics never get between you and the animals.
          </p>
          <p className="text-olive/95 leading-relaxed">
            Every safari is led by an experienced professional driver guide who
            understands animal behavior, migration patterns, and the best times
            and places for wildlife viewing. Expect lions, elephants, leopards,
            buffalo, rhinos, giraffes, zebras, wildebeest, and more bird species
            than you can count.
          </p>
          <p className="text-olive/95 leading-relaxed">
            All safaris run in a private 4x4 with a pop-up roof and include
            mineral water, park fees, and carefully selected accommodation from
            mid-range to luxury, depending on your preference.
          </p>
        </div>
      </section>

      {/* Safari packages */}
      <section className="section-padding">
        <div className="space-y-6 md:space-y-8">
          {SAFARIS.map((safari) => (
            <Link
              key={safari.slug}
              href={`/tours/safaris/${safari.slug}`}
              className="group block"
            >
              <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden grid grid-cols-1 md:grid-cols-[340px_1fr] hover:border-gold/40 transition-colors">
                <div className="relative h-56 md:h-auto md:min-h-[250px]">
                  <Image
                    src={safari.image}
                    alt={safari.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                  <span className="absolute top-4 left-4 bg-paper/95 backdrop-blur text-olive text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {safari.tag}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col min-w-0">
                  <p className="text-gold-deep text-[11px] uppercase tracking-[0.18em] font-semibold mb-2">
                    {safari.days === 1 ? "Day trip" : `${safari.days} days`}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-olive leading-snug group-hover:text-gold-deep transition-colors">
                    {safari.name}
                  </h3>
                  <p className="text-olive/80 text-sm md:text-base leading-relaxed mt-3 line-clamp-3">
                    {safari.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {safari.parks.map((park) => (
                      <span
                        key={park}
                        className="bg-gold/15 text-gold-deep text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {park}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-5 flex items-baseline justify-between gap-4">
                    <p className="text-olive">
                      <span className="text-olive/65 text-xs uppercase tracking-wider font-semibold mr-2">
                        From
                      </span>
                      <span className="font-bold text-lg">
                        {safari.priceFrom}
                      </span>
                      <span className="text-olive/65 text-sm"> per person</span>
                    </p>
                    <span className="text-gold-deep font-semibold text-sm group-hover:underline underline-offset-4 whitespace-nowrap">
                      View itinerary →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <p className="text-olive/65 text-sm mt-6">
          Prices are per person and vary with group size and season. You get an
          exact quote when you inquire.
        </p>
      </section>

      {/* Photo Gallery Strip */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto px-4">
          {[
            { src: "/images/safari-leopard-tree.jpg", alt: "Leopard lounging on a branch" },
            { src: "/images/safari-serval-grass.jpg", alt: "Serval cat in tall golden grass" },
            { src: "/images/safari-giraffe-sunset.jpg", alt: "Giraffe at sunset on the savanna" },
            { src: "/images/safari-elephant-road-crossing.jpg", alt: "Elephant crossing between safari vehicles" },
          ].map((img) => (
            <div key={img.src} className="relative h-48 rounded-lg overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Plan your Tanzania safari"
        subtitle="Tell us your dates, group size, and what you want to see. Abu replies personally on WhatsApp."
        seamFrom="paper"
      />

      <StickyWhatsApp />
    </>
  );
}
