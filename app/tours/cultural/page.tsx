import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Cultural Experiences — Authentic Tanzanian Encounters",
  description:
    "Experience authentic Tanzanian culture with community visits, Maasai village tours, coffee farm experiences, and local market explorations.",
};

const EXPERIENCES = [
  {
    title: "Maasai Village Visit",
    duration: "Half day",
    description:
      "Visit an authentic Maasai boma (village) and learn about their centuries-old traditions, warrior culture, and pastoralist lifestyle. Participate in traditional dances, learn about herbal medicines, and gain a deep appreciation for one of Africa's most iconic cultures.",
    highlights: ["Traditional dance ceremony", "Village tour & daily life", "Beadwork demonstration", "Bush walk with warriors"],
  },
  {
    title: "Chagga Cultural Tour",
    duration: "Full day",
    description:
      "Explore the culture of the Chagga people, who live on the slopes of Kilimanjaro. Visit banana plantations, learn traditional brewing methods, tour underground caves, and enjoy a home-cooked meal with a local family.",
    highlights: ["Underground cave exploration", "Banana beer brewing", "Traditional cooking class", "Coffee harvesting"],
  },
  {
    title: "Coffee Farm Experience",
    duration: "Half day",
    description:
      "Tanzania's Kilimanjaro region produces some of the world's finest coffee. Visit a local farm, learn the bean-to-cup process from planting to roasting, and savor freshly brewed coffee with stunning mountain views.",
    highlights: ["Farm-to-cup journey", "Hands-on roasting", "Fresh coffee tasting", "Support local farmers"],
  },
  {
    title: "Local Market & Town Tour",
    duration: "Half day",
    description:
      "Explore the vibrant markets of Moshi or Arusha with a local guide. Discover fresh tropical fruits, handmade crafts, colorful fabrics, and the bustling energy of everyday Tanzanian life.",
    highlights: ["Vibrant local markets", "Street food tasting", "Artisan crafts", "Photography opportunities"],
  },
  {
    title: "Community School Visit",
    duration: "Half day",
    description:
      "Visit a local school supported by Kilimanjaro True Venture. Meet the students, learn about education in rural Tanzania, and see firsthand how your tourism dollars make a meaningful impact.",
    highlights: ["Meet local students", "Interactive activities", "Learn about rural education", "Direct community impact"],
  },
  {
    title: "Materuni Waterfalls Hike",
    duration: "Full day",
    description:
      "Hike through lush Chagga village landscapes to the stunning Materuni Waterfalls. Swim in the natural pool, enjoy a traditional lunch, and combine nature with cultural immersion.",
    highlights: ["Scenic waterfall hike", "Swimming in natural pool", "Traditional lunch", "Village interaction"],
  },
];

export default function CulturalPage() {
  return (
    <>
      <Hero
        title="Cultural Experiences"
        tagline="Beyond the trail. Into the community."
        backgroundImage="/images/culture-maasai-dance.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-6">
            More Than Just Tourism
          </h2>
          <p className="text-olive/85 leading-relaxed">
            Our cultural experiences are designed in partnership with local communities to create meaningful, respectful exchanges. Every visit supports local families, schools, and community projects. This isn&apos;t a show — it&apos;s a genuine connection.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className="bg-parchment rounded-2xl border border-taupe/10 overflow-hidden hover:border-gold/30 transition-all duration-300"
            >
              <div className="h-3 bg-gradient-to-r from-gold to-gold" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-olive">{exp.title}</h3>
                  <span className="text-xs text-gold-deep bg-gold/10 px-2 py-1 rounded-full shrink-0 ml-2">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-olive/75 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-olive/30 text-olive/85 text-xs px-2 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider from="paper" to="parchment" />

      {/* What to Expect */}
      <section className="py-6 md:py-7 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-olive text-center mb-12">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Authentic Interactions",
                desc: "These are real communities, not staged performances. Expect genuine hospitality, honest conversations, and unique insights into daily life.",
              },
              {
                title: "Respectful Engagement",
                desc: "Our guides facilitate culturally sensitive exchanges. We'll brief you on etiquette and customs before each visit.",
              },
              {
                title: "Direct Impact",
                desc: "Fees go directly to the communities. Your visit supports local schools, healthcare, and sustainable development projects.",
              },
              {
                title: "Flexible Scheduling",
                desc: "Cultural experiences can be added to any trek or safari package, or enjoyed as standalone day trips from Moshi or Arusha.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-paper rounded-xl p-6 border border-taupe/10">
                <h3 className="text-lg font-bold text-gold-deep mb-2">{item.title}</h3>
                <p className="text-olive/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-12 bg-parchment">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto px-4">
          {[
            { src: "/images/culture-maasai-portrait.jpg", alt: "Maasai woman wearing a traditional beaded headdress" },
            { src: "/images/culture-coffee-pounding.jpg", alt: "Guest pounding coffee the traditional Chagga way" },
            { src: "/images/materuni-waterfall.jpg", alt: "Materuni waterfall dropping into a green gorge" },
            { src: "/images/culture-maasai-women-boma.jpg", alt: "Maasai women outside a traditional boma" },
          ].map((img) => (
            <div key={img.src} className="relative h-48 rounded-lg overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Connect With Tanzania's Culture"
        subtitle="Add a cultural experience to your trek or safari, or book a standalone cultural day trip."
        seamFrom="parchment"
      />
    </>
  );
}
