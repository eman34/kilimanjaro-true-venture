import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import SafariSpread from "@/components/SafariSpread";
import { SAFARIS, NORTHERN_PARKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wildlife Safaris — Serengeti, Ngorongoro, Tarangire & More",
  description:
    "Four Tanzanian safaris with private 4x4, professional driver guides, and park fees included: Serengeti Migration, Ngorongoro Crater, Tarangire, Lake Manyara, and Mkomazi. From $430.",
};

export default function SafarisPage() {
  return (
    <>
      <Hero
        title="Wildlife safaris"
        backgroundImage="/images/safari-zebra-herd-crater.jpg"
      />

      {/* Safaris — stacked editorial spread */}
      <section className="section-padding">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Safaris across Tanzania
          </h2>
          <p className="text-olive/85 mt-3 leading-relaxed max-w-3xl">
            Tanzania is home to some of the greatest wildlife on Earth: endless
            golden savannahs, massive elephant herds, ancient volcanic craters,
            tree-climbing lions, flamingo-filled lakes and the world-famous Great
            Migration. From the plains of the Serengeti to the elephants of
            Tarangire, the Ngorongoro Crater, the forests of Lake Manyara, Arusha
            National Park and the hidden wilderness of Mkomazi, every safari
            shows a different side of the country, guided by experienced local
            professionals who know Tanzania deeply.
          </p>
        </div>

        <div className="space-y-6">
          {SAFARIS.map((safari, i) => (
            <SafariSpread key={safari.slug} safari={safari} reverse={i % 2 === 1} />
          ))}
        </div>

        <p className="text-olive/65 text-sm mt-6">
          Prices are per person and vary with group size and season. You get an
          exact quote when you inquire.
        </p>
      </section>

      {/* When to go — the safari year */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            When to go
          </h2>
          <p className="text-olive/85 mt-4 leading-relaxed max-w-3xl">
            The parks hold wildlife in every month. What moves is the Great
            Migration and the rains. If your dates are flexible, the dry months
            give the easiest game viewing; if they are fixed, your guide still
            finds the animals.
          </p>

          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="flex mb-2">
                {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map(
                  (m, i) => (
                    <span
                      key={i}
                      className="flex-1 text-center text-[11px] font-semibold text-olive/50"
                    >
                      {m}
                    </span>
                  )
                )}
              </div>
              <div className="flex">
                <div className="flex-[2] rounded-l-lg bg-khaki/15 p-3">
                  <p className="text-olive text-xs font-bold">Calving</p>
                  <p className="text-olive/65 text-[11px] mt-1">Jan – Feb · Ndutu</p>
                </div>
                <div className="flex-[3] bg-taupe p-3">
                  <p className="text-olive text-xs font-bold">Long rains</p>
                  <p className="text-olive/65 text-[11px] mt-1">
                    Mar – May · quiet, green
                  </p>
                </div>
                <div className="flex-[5] bg-gold p-3">
                  <p className="text-olive-deep text-xs font-bold">
                    Dry season · best game viewing
                  </p>
                  <p className="text-olive-deep/75 text-[11px] mt-1">
                    Jun – Oct · river crossings Jul – Sep
                  </p>
                </div>
                <div className="flex-[2] rounded-r-lg bg-taupe/50 p-3">
                  <p className="text-olive text-xs font-bold">Short rains</p>
                  <p className="text-olive/65 text-[11px] mt-1">Nov – Dec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The parks — field guide */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-gold-deep text-xs uppercase tracking-[0.18em] font-semibold mb-3">
            Where you go
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-olive leading-tight">
            The parks of northern Tanzania
          </h2>
          <p className="text-olive/85 mt-4 leading-relaxed max-w-3xl">
            Five parks, each a different ecosystem, all within a day&apos;s drive
            of Arusha. Most safaris string two or three together.
          </p>

          <ul className="mt-8 border-t border-taupe">
            {NORTHERN_PARKS.map((park) => (
              <li
                key={park.name}
                className="flex flex-col sm:flex-row sm:gap-6 py-4 border-b border-taupe"
              >
                <div className="sm:w-56 shrink-0">
                  <h3 className="text-olive font-bold text-lg leading-snug">
                    {park.name}
                  </h3>
                  <p className="text-gold-deep text-[11px] uppercase tracking-wider font-semibold mt-1">
                    {park.locator}
                  </p>
                </div>
                <p className="text-olive/85 text-sm md:text-base leading-relaxed mt-1 sm:mt-0">
                  {park.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we run a safari */}
      <section className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-olive">
          How we run a safari
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8">
          <div className="border-t-2 border-gold pt-4">
            <h3 className="text-olive font-bold text-lg">Private or shared 4x4</h3>
            <p className="text-olive/85 leading-relaxed mt-2">
              Every safari runs in a 4x4 with a pop-up roof. Most are private,
              yours alone to set the pace and linger at a sighting; some can be
              shared to keep the cost down. Your call when you book.
            </p>
          </div>
          <div className="border-t-2 border-gold pt-4">
            <h3 className="text-olive font-bold text-lg">A Tanzanian guide</h3>
            <p className="text-olive/85 leading-relaxed mt-2">
              Your driver guide grew up here and has spent years reading these
              parks: where the cats rest in the heat, how the herds move, which
              track the elephants crossed an hour ago.
            </p>
          </div>
          <div className="border-t-2 border-gold pt-4">
            <h3 className="text-olive font-bold text-lg">Park fees included</h3>
            <p className="text-olive/85 leading-relaxed mt-2">
              The single largest cost of a safari is in the price, with lodging,
              meals in the parks, and water in the vehicle. We match the lodge
              level to your budget.
            </p>
          </div>
          <div className="border-t-2 border-gold pt-4">
            <h3 className="text-olive font-bold text-lg">One trip, not three</h3>
            <p className="text-olive/85 leading-relaxed mt-2">
              Pairing a safari with Kilimanjaro or Zanzibar? We plan the
              transfers and timing so it is one trip.{" "}
              <Link
                href="/about"
                className="text-gold-deep underline-offset-4 hover:underline"
              >
                Meet the team
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan your Tanzania safari"
        subtitle="Tell us your dates, group size, and what you want to see, and we'll help you plan the rest."
        seamFrom="paper"
      />
    </>
  );
}
