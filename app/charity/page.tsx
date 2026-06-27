import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import SectionDivider from "@/components/SectionDivider";
import SectionLink from "@/components/SectionLink";

export const metadata: Metadata = {
  title: "Community & the Abu Hope Foundation",
  description:
    "Kilimanjaro True Venture is Tanzanian-owned. Booking a trip pays local guides and crews fairly and keeps tourism money in Tanzania. Abu also runs the Abu Hope Foundation, a charity doing hands-on work in the communities around the mountain.",
};

const PILLARS = [
  {
    title: "Fair work for the crew",
    body: "Guides, porters and cooks are hired locally and paid fairly, with sensible load limits and proper gear for the cold. The people who carry the mountain come first.",
  },
  {
    title: "Money that stays in Tanzania",
    body: "Park fees, food, fuel and wages are spent here, with no overseas head office taking a cut. Tourism is one of the country's biggest employers, and a locally-owned trip keeps more of it in local hands.",
  },
  {
    title: "Communities you can visit",
    body: "Trips can include time with Maasai and Chagga families near the mountain — a meal, a coffee farm, a village walk. The fee for those visits goes straight to the families who host you.",
  },
];

/* Abu Hope Foundation external presence + media. Fill these in when available —
   the buttons and photo strip below only render once set, so nothing looks
   broken while they're empty. */
const FOUNDATION_WEBSITE: string = ""; // e.g. "https://abuhopefoundation.org"
const FOUNDATION_INSTAGRAM: string = ""; // e.g. "https://instagram.com/abuhopefoundation"
const FOUNDATION_IMAGES: { src: string; alt: string }[] = []; // add real foundation photos in /public/images

export default function CharityPage() {
  return (
    <>
      <Hero
        title="Where your trip money goes"
        backgroundImage="/images/kili-porters-rainforest.jpg"
      />

      {/* Thesis — why a local operator matters */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-olive leading-tight">
            Why it matters who you book with
          </h2>
          <span className="block w-16 h-0.5 bg-gold mx-auto mt-5" aria-hidden="true" />
          <p className="text-olive/85 leading-relaxed mt-6 text-base md:text-lg">
            Many of the operators you&apos;ll compare are registered overseas.
            Kilimanjaro True Venture is owned and run in Tanzania — by guides and
            crew who grew up in the villages around the mountain. When you book
            with us the money stays here: fair pay for the crew, food bought at
            local markets, families near Kilimanjaro and the Abu Hope Foundation.
          </p>
        </div>
      </section>

      {/* Where your money goes — pillars */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive text-center">
            Where your money goes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-parchment rounded-xl p-6 md:p-8 border border-taupe/20"
              >
                <h3 className="text-xl font-bold text-gold-deep mb-3">
                  {pillar.title}
                </h3>
                <p className="text-olive/85 leading-relaxed text-sm md:text-base">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abu — the person you support */}
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
                The person you support
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-olive mt-2">
                Abu started as a porter.
              </h2>
              <p className="text-olive/85 leading-relaxed mt-4">
                Abu grew up in Lokoro, a village on Kilimanjaro&apos;s slopes, and
                started on the mountain the only way open to him — carrying loads
                as a porter. He worked his way up: camp crew, assistant guide,
                then mountain guide.
              </p>
              <p className="text-olive/85 leading-relaxed mt-3">
                He built Kilimanjaro True Venture to do the job differently —
                fair, dignified work for the crews who make the climbs possible.
                The Abu Hope Foundation is how that carries past the mountain,
                into the communities the crews come home to.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <SectionLink href="/about">Meet Abu and the team</SectionLink>
          </div>
        </div>
      </section>

      <SectionDivider from="paper" to="olive" />

      {/* Abu's words — dark accent band */}
      <section className="bg-olive py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <blockquote className="text-xl md:text-2xl text-paper italic leading-relaxed">
            &ldquo;I started as a porter because I had no choice. I became a guide
            because I wanted to. I built this company because I believed tourism
            could be fair. The mountain taught me that. The people taught me that.
            Abu Hope Foundation is my way of saying thank you&mdash;and making sure
            the next generation of Tanzanian kids don&apos;t have to start where I
            started.&rdquo;
          </blockquote>
          <p className="text-gold font-semibold mt-6">
            &mdash; Abdallah Athumani (Abu)
          </p>
        </div>
      </section>

      <SectionDivider from="olive" to="paper" />

      {/* The Abu Hope Foundation — the real, active charity */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold-deep text-xs uppercase tracking-[0.3em] font-semibold">
            The charity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-olive mt-2">
            The Abu Hope Foundation
          </h2>
          <div className="space-y-5 text-olive/85 leading-relaxed mt-6">
            <p>
              Beyond the company, Abu runs his own charity. The Abu Hope
              Foundation does hands-on work in the villages around Kilimanjaro and
              northern Tanzania &mdash; education, health and the local
              environment &mdash; and Abu is out there doing it himself.
            </p>
            <p>
              He shares the work as it happens: the projects, the people and the
              days out in the community.
            </p>
          </div>

          {(FOUNDATION_WEBSITE || FOUNDATION_INSTAGRAM) && (
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {FOUNDATION_WEBSITE && (
                <a
                  href={FOUNDATION_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit the foundation
                </a>
              )}
              {FOUNDATION_INSTAGRAM && (
                <a
                  href={FOUNDATION_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  Follow on Instagram
                </a>
              )}
            </div>
          )}
        </div>

        {FOUNDATION_IMAGES.length > 0 && (
          <div className="max-w-5xl mx-auto px-4 md:px-8 mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {FOUNDATION_IMAGES.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* How to support */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive text-center">
            How to support
          </h2>
          <p className="text-olive/85 text-center max-w-2xl mx-auto mt-3 leading-relaxed">
            The most useful thing you can do costs nothing extra: travel with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-parchment rounded-xl p-6 md:p-8 border border-taupe/20">
              <h3 className="text-xl font-bold text-gold-deep mb-3">Book a trip</h3>
              <p className="text-olive/85 leading-relaxed text-sm md:text-base">
                The simplest way to help. A booking pays local crews and keeps
                tourism money in Tanzania.
              </p>
              <Link
                href="/tours/kilimanjaro"
                className="inline-block mt-4 text-gold-deep font-semibold hover:text-olive transition-colors"
              >
                See our trips &rarr;
              </Link>
            </div>
            <div className="bg-parchment rounded-xl p-6 md:p-8 border border-taupe/20">
              <h3 className="text-xl font-bold text-gold-deep mb-3">
                Add a charity climb
              </h3>
              <p className="text-olive/85 leading-relaxed text-sm md:text-base">
                Turn a climb into a group fundraiser for a community project. Tell
                us your cause and rough dates and we&apos;ll help you plan it.
              </p>
              <Link
                href="/tours/charity-climb"
                className="inline-block mt-4 text-gold-deep font-semibold hover:text-olive transition-colors"
              >
                Charity climbs &rarr;
              </Link>
            </div>
            <div className="bg-parchment rounded-xl p-6 md:p-8 border border-taupe/20">
              <h3 className="text-xl font-bold text-gold-deep mb-3">
                Visit when you travel
              </h3>
              <p className="text-olive/85 leading-relaxed text-sm md:text-base">
                Ask us to build in time with a local community when you book, and
                meet some of the people your trip supports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        seamFrom="paper"
        title="Plan a trip that stays local"
        subtitle="Tell us your dates and what you want to see, and we'll help you plan the rest."
      />
    </>
  );
}
