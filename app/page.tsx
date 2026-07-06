import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AdventureSplit from "@/components/AdventureSplit";
import SectionLink from "@/components/SectionLink";
import CTABanner from "@/components/CTABanner";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  // Root page doesn't inherit the layout title template — spell out the brand.
  title:
    "Kilimanjaro Climbs & Tanzania Safaris — Local Tour Operator | Kilimanjaro True Venture",
  description:
    "Kilimanjaro climbs, Serengeti safaris, Zanzibar and cultural trips from a tour operator that's locally owned and run in Arusha, Tanzania. Local guides and crews on every trip.",
};

export default function Home() {
  return (
    <>
      {/* Hero — centered minimal wordmark over the glacier sunrise */}
      <section className="relative h-[240px] sm:h-[300px] md:h-[400px]">
        <Image
          src="/images/kili-trail-kibo-group.jpg"
          alt="Trekkers walking the trail toward the snow-capped Kibo summit"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive-deep/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-gold text-[11px] md:text-sm uppercase tracking-[0.4em] font-semibold drop-shadow">
            Tanzanian Local Operator
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl font-bold text-paper tracking-tight drop-shadow-lg">
            True Venture
          </h1>
        </div>
      </section>

      {/* Intro blurb — the local-operator story */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-olive leading-tight">
            One Team. One Adventure
          </h2>
          <p className="text-gold-deep italic text-base md:text-lg mt-3">
            &ldquo;Experience True Adventure in Africa&rdquo;
          </p>
          <span className="block w-16 h-0.5 bg-gold mx-auto mt-5" aria-hidden="true" />
          <p className="text-olive/85 leading-relaxed mt-6 text-base md:text-lg">
            Kilimanjaro True Venture is a Tanzanian-owned tour operator in
            Arusha, founded by a former porter who worked his way up to
            professional mountain guide. From Kilimanjaro climbs to Serengeti
            safaris and Zanzibar beaches, every trip is run by guides and crews
            who grew up here and proud to show you their home.
          </p>
        </div>
      </section>

      {/* Proof band */}
      <section className="bg-paper pb-2 md:pb-3">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <dl className="grid grid-cols-3 gap-y-6 gap-x-4 border-y border-taupe/40 py-6 text-center">
            {[
              ["5,895m", "Africa's highest summit"],
              ["6 routes", "to Uhuru Peak"],
              ["3:1", "crew per climber"],
            ].map(([stat, label]) => (
              <div key={stat}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-gold-deep text-2xl md:text-3xl font-bold leading-none">
                  {stat}
                </dd>
                <dd className="text-olive/75 text-sm mt-2">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <AdventureSplit />

      {/* Founder */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-44 h-44 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden">
              <Image
                src="/images/team/team-member-1.png"
                alt="Abdallah Athumani (Abu), founder of Kilimanjaro True Venture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 176px, 224px"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-gold-deep text-xs uppercase tracking-[0.3em] font-semibold">
                Founder
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-olive mt-2">
                From porter to founder
              </h2>
              <p className="text-olive/85 leading-relaxed mt-4">
                Abdallah Athumani — Abu — grew up in Lokoro, a small village
                on Kilimanjaro&apos;s slopes, waking every morning under the
                mountain his father worked on. The stories his father brought
                home of climbers, guides, and porters from around the world
                planted a dream that wouldn&apos;t let go.
              </p>
              <p className="text-olive/85 leading-relaxed mt-3">
                Abu started on the mountain the only way open to him: carrying
                loads as a porter. Camp waiter, camp manager, assistant guide,
                and finally professional mountain guide — he has done every
                job on a climb, and knows exactly what each one costs the
                person doing it. True Venture is the company he built from
                that knowledge: adventures for travelers, and
                fair, dignified work for the crews who make them possible.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <SectionLink href="/about">
              Meet Abu and the team
            </SectionLink>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              {
                src: "/images/summit-celebration.jpg",
                alt: "Climbers celebrating at the summit sign at dawn",
              },
              {
                src: "/images/camp-snowy-peak.jpg",
                alt: "Camp tents below Kilimanjaro's snowy peak",
              },
              {
                src: "/images/kili-camp-night-town-lights.jpg",
                alt: "Mountain camp at night with town lights glowing far below",
              },
              {
                src: "/images/safari-elephant-road-crossing.jpg",
                alt: "An elephant crossing the track between safari vehicles",
              },
            ].map((img) => (
              <Link
                key={img.src}
                href="/gallery"
                className="relative h-44 md:h-56 rounded-lg overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <SectionLink href="/gallery">Explore the gallery</SectionLink>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <CTABanner seamFrom="paper" />
    </>
  );
}
