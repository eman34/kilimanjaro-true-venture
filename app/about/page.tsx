import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import TeamCarousel from "@/components/TeamCarousel";
import { TEAM_MEMBERS, MOUNTAIN_CREW, SAFARI_CREW } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kilimanjaro True Venture — a locally owned and operated adventure company based in Arusha, Tanzania. Founded by Abdallah Athumani (Abu), a former porter turned professional mountain guide.",
};

const VALUES = [
  {
    title: "Safety, Respect, Hard Work & Integrity",
    description:
      "These are the core values shaped by our founder's journey from porter to professional guide. Every expedition is built on these principles.",
  },
  {
    title: "Ethical Porter Treatment",
    description:
      "Our founder's experience as a former porter ensures fair wages, proper equipment, safe working conditions, proper meals, reasonable load limits, and respectful treatment for all crew.",
  },
  {
    title: "Community Empowerment",
    description:
      "A portion of our profits supports community initiatives: education initiatives, health awareness, and environmental conservation. Adventure should uplift everyone involved.",
  },
  {
    title: "Personalized Experiences",
    description:
      "No two adventurers are the same. We tailor every trip to your fitness level, interests, and preferences — because the best adventures are personal.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="Founded by a professional mountain guide who began his journey as a porter — we understand the mountain from every level."
        ctaText="Meet Our Team"
        ctaHref="#team"
        backgroundImage="/images/summit-panorama.jpg"
        compact
      />

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-8 text-center">
            Abu&apos;s Story
          </h2>
          <div className="space-y-6 text-light/70 leading-relaxed">
            <p className="text-light text-lg">
              Abu didn&apos;t choose the mountain. The mountain chose him.
            </p>
            <p>
              Born in Lokoro, a small village on Kilimanjaro&apos;s slopes, he grew up where most kids see their future mapped out by geography. His father worked the mountain—a porter, a guide—and Abu spent his childhood watching climbers from distant countries arrive with expensive gear and wild dreams. He&apos;d stare up at the glaciers above his village and wonder: <em>What would it feel like to stand there?</em>
            </p>
            <p>
              At 18, Abu didn&apos;t have the luxury of wondering much longer. He started as a porter. The hardest job on the mountain. Carrying loads up 5,895 meters while older guides barked orders. The work was brutal. But it was his way in.
            </p>
            <p>
              He learned something most guides never do: what it feels like to be at the bottom. He carried loads through storms, fell behind the group, nearly quit. He watched porters get treated like they didn&apos;t matter. That stuck with him.
            </p>
            <p>
              Over the next few years, Abu moved through every role. Camp waiter, camp manager, assistant guide. Each step wasn&apos;t a promotion; it was a lesson. By the time he became a full guide, he didn&apos;t just know the mountain&apos;s routes. He knew every person who worked them and what they needed to keep going.
            </p>
            <p>
              When <strong className="text-secondary">Abdallah Athumani (Abu)</strong> founded Kilimanjaro True Venture, it wasn&apos;t to get rich. He had a simple vision: create a company where people actually matter. Where the person carrying your pack gets paid fairly and respected. Where your guide remembers your name and knows you&apos;re scared, but won&apos;t let you quit.
            </p>
            <p>
              Today, Abu brings you not just to the summit. He brings you to meet the real Tanzania. To understand why this mountain, these people, and these journeys matter. He&apos;s still here. Still climbing. Still leading every season.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Founder - Static */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-light text-center mb-4">
              Leadership
            </h2>
            <p className="text-center text-light/60 mb-12 max-w-2xl mx-auto">
              Guided by our founder who built this company on the values of respect, safety, and integrity.
            </p>

            <div className="bg-dark rounded-2xl overflow-hidden border border-white/10 max-w-2xl mx-auto">
              <div className="h-64 relative">
                <Image
                  src={TEAM_MEMBERS[0].image}
                  alt={TEAM_MEMBERS[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
              </div>
              <div className="p-8 text-center -mt-12 relative">
                <h3 className="text-2xl font-bold text-light">{TEAM_MEMBERS[0].name}</h3>
                <p className="text-secondary font-medium mb-4">{TEAM_MEMBERS[0].role}</p>
                <p className="text-light/60 leading-relaxed">{TEAM_MEMBERS[0].bio}</p>
              </div>
            </div>
          </div>

          {/* Team Carousel */}
          <TeamCarousel />

          {/* Crew */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-20">
            <div className="bg-dark rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-secondary mb-4">Mountain Crew</h3>
              <p className="text-light/50 text-sm mb-4">Every expedition is supported by:</p>
              <ul className="space-y-3">
                {MOUNTAIN_CREW.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-light/70">
                    <svg className="w-5 h-5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-secondary mb-4">Safari Crew</h3>
              <p className="text-light/50 text-sm mb-4">Our safari team includes:</p>
              <ul className="space-y-3">
                {SAFARI_CREW.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-light/70">
                    <svg className="w-5 h-5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {role}
                  </li>
                ))}
              </ul>
              <p className="text-light/50 text-sm mt-4">
                We operate custom 4x4 safari vehicles designed for comfort and optimal wildlife viewing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Ethics */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-light text-center mb-4">
            Safety & Ethics
          </h2>
          <p className="text-center text-light/60 mb-12">
            Climbing Mount Kilimanjaro requires serious preparation. Your safety is our top priority.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Certified and experienced guides",
              "Daily health checks & oxygen monitoring",
              "Emergency oxygen cylinders",
              "First aid kits",
              "Proper acclimatization schedules",
              "Clear evacuation procedures",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-dark-lighter rounded-lg p-4 border border-white/10">
                <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-light/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-light text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className="bg-dark rounded-xl p-8 border border-white/10"
              >
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-light mb-3">{value.title}</h3>
                <p className="text-light/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
