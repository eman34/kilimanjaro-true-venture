import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";
import SubTourCard from "@/components/SubTourCard";

export const metadata: Metadata = {
  title: "Cultural Experiences — Tanzania",
  description:
    "Tanzanian cultural experiences: Maasai village visits, Chagga coffee farms, the Materuni waterfalls and local markets. Add a half-day to a climb or safari, or book a standalone day trip.",
};

const EXPERIENCES = [
  {
    title: "Maasai Village Visit",
    duration: "Half day",
    description:
      "Visit a Maasai boma (village) and learn about their centuries-old traditions, warrior culture, and pastoralist lifestyle. Take part in traditional dances, learn about herbal medicines, and gain an appreciation for one of Africa's most iconic cultures.",
    highlights: [
      "Traditional dance ceremony",
      "Village tour and daily life",
      "Beadwork demonstration",
      "Bush walk with warriors",
    ],
  },
  {
    title: "Chagga Cultural Tour",
    duration: "Full day",
    description:
      "Explore the culture of the Chagga people, who live on the slopes of Kilimanjaro. Visit banana plantations, learn traditional brewing methods, tour underground caves, and enjoy a home-cooked meal with a local family.",
    highlights: [
      "Underground cave exploration",
      "Banana beer brewing",
      "Traditional cooking class",
      "Coffee harvesting",
    ],
  },
  {
    title: "Coffee Farm Experience",
    duration: "Half day",
    description:
      "Tanzania's Kilimanjaro region produces some of the world's finest coffee. Visit a local farm, learn the bean-to-cup process from planting to roasting, and taste freshly brewed coffee with mountain views.",
    highlights: [
      "Farm-to-cup journey",
      "Hands-on roasting",
      "Fresh coffee tasting",
      "Support local farmers",
    ],
  },
  {
    title: "Local Market & Town Tour",
    duration: "Half day",
    description:
      "Explore the markets of Moshi or Arusha with a local guide. Fresh tropical fruits, handmade crafts, colorful fabrics, and the everyday energy of Tanzanian town life.",
    highlights: [
      "Local markets",
      "Street food tasting",
      "Artisan crafts",
      "Photography stops",
    ],
  },
  {
    title: "Community School Visit",
    duration: "Half day",
    description:
      "Visit a local school supported by Kilimanjaro True Venture. Meet the students, learn about education in rural Tanzania, and see firsthand where your tourism money goes.",
    highlights: [
      "Meet local students",
      "Interactive activities",
      "Learn about rural education",
      "Direct community impact",
    ],
  },
  {
    title: "Materuni Waterfalls Hike",
    duration: "Full day",
    description:
      "Hike through Chagga village landscapes to the Materuni waterfalls. Swim in the natural pool, enjoy a traditional lunch, and combine the walk with a coffee tour in the same village.",
    highlights: [
      "Scenic waterfall hike",
      "Swim in the natural pool",
      "Traditional lunch",
      "Village coffee tour",
    ],
  },
];

export default function CulturalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative aspect-[2/1] sm:aspect-[5/2] md:aspect-[16/5] min-h-[280px] w-full">
        <Image
          src="/images/culture-maasai-dance.jpg"
          alt="Maasai dancers in traditional dress"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-10 md:pb-14">
            <h1 className="text-4xl md:text-6xl font-bold text-paper leading-tight">
              Cultural experiences
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/tours/other-adventures"
                className="inline-flex items-center gap-1.5 text-olive/60 hover:text-gold-deep transition-colors font-medium"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Other Adventures
              </Link>
            </li>
            <li aria-hidden className="text-olive/30">/</li>
            <li className="text-olive/45 font-medium">Cultural experiences</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            More than just tourism
          </h2>
          <p className="text-olive/85 leading-relaxed mt-6">
            We run these in partnership with the communities you visit, and every
            visit puts money into local families, schools and projects. They are
            real days with real people, not staged performances. Our guides brief
            you on etiquette and customs first, so the exchange stays respectful
            on both sides.
          </p>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      {/* The experiences */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-2">
            The experiences
          </h2>
          <p className="text-olive/85 leading-relaxed mb-8">
            Each runs as a half-day or full-day from Moshi or Arusha, on its own
            or alongside a climb or safari.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => (
              <SubTourCard
                key={exp.title}
                eyebrow={exp.duration}
                name={exp.title}
                summary={exp.description}
                items={exp.highlights}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      {/* What to expect */}
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-8">
            What to expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Real interactions",
                desc: "These are working communities, not staged performances. Expect honest conversations and a window into daily life.",
              },
              {
                title: "Respectful engagement",
                desc: "Our guides brief you on etiquette and customs before each visit, so the exchange stays comfortable on both sides.",
              },
              {
                title: "Direct impact",
                desc: "Fees go to the communities. Your visit supports local schools, healthcare and community projects.",
              },
              {
                title: "Flexible scheduling",
                desc: "Add a cultural day to any climb or safari, or book it on its own from Moshi or Arusha.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-paper rounded-xl p-6 border border-taupe"
              >
                <h3 className="text-lg font-bold text-gold-deep mb-2">
                  {item.title}
                </h3>
                <p className="text-olive/85 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-12 bg-paper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto px-4">
          {[
            {
              src: "/images/culture-maasai-portrait.jpg",
              alt: "Maasai woman wearing a traditional beaded headdress",
            },
            {
              src: "/images/culture-coffee-pounding.jpg",
              alt: "Guest pounding coffee the traditional Chagga way",
            },
            {
              src: "/images/materuni-waterfall.jpg",
              alt: "Materuni waterfall dropping into a green gorge",
            },
            {
              src: "/images/culture-maasai-women-boma.jpg",
              alt: "Maasai women outside a traditional boma",
            },
          ].map((img) => (
            <div
              key={img.src}
              className="relative h-48 rounded-lg overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </section>

      <SectionDivider from="paper" to="parchment" />

      {/* CTA */}
      <section className="bg-parchment py-6 md:py-7">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Add a cultural day to your trip?
          </h2>
          <p className="text-olive/85 mt-4 leading-relaxed">
            Tell us your dates and which experiences interest you, and we&apos;ll
            fit them around your climb or safari.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact?adventure=cultural" className="btn-primary">
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
