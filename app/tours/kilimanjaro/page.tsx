import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import { KILIMANJARO_ROUTES, PACKAGE_INCLUDES, PACKAGE_EXCLUDES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mount Kilimanjaro Climbing Routes & Expeditions",
  description:
    "Choose from 6 unique routes to summit Africa's highest peak at 5,895m. Expert guides, all-inclusive packages. Machame, Lemosho, Marangu, Rongai, Umbwe, Londorossi.",
};

function DifficultyBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    Moderate: "bg-green-500/20 text-green-400 border-green-500/30",
    Challenging: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Moderate to Challenging": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Very Challenging": "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return (
    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${colors[level] || "bg-white/10 text-light border-white/20"}`}>
      {level}
    </span>
  );
}

function SceneryRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-secondary" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function KilimanjaroPage() {
  return (
    <>
      <Hero
        title="Mount Kilimanjaro"
        subtitle="Africa's highest peak at 5,895m. Six unique routes to the summit — each offering its own character, challenges, and rewards."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        backgroundImage="/images/summit-glaciers.jpg"
        compact
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
            Choose Your Route to the Summit
          </h2>
          <p className="text-light/70 leading-relaxed">
            Kilimanjaro offers six official routes, each with its own personality. Whether you prefer the comfort of hut accommodation on Marangu, the stunning scenery of Lemosho, or the remote western approach of Londorossi — we&apos;ll help you find the perfect path to the Roof of Africa.
          </p>
        </div>

        {/* Route Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KILIMANJARO_ROUTES.map((route) => (
            <div
              key={route.name}
              className="bg-dark-lighter rounded-2xl border border-white/10 overflow-hidden hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Route header */}
              <div className="bg-gradient-to-r from-primary to-primary-light p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-light">{route.name}</h3>
                  <DifficultyBadge level={route.difficulty} />
                </div>
                <p className="text-secondary text-sm font-medium italic">
                  {route.nickname}
                </p>
              </div>

              <div className="p-6">
                <p className="text-light/70 text-sm leading-relaxed mb-6">
                  {route.description}
                </p>

                {/* Duration/Price options */}
                <div className="space-y-2 mb-6">
                  {route.durations.map((opt) => (
                    <div key={opt.days} className="flex items-center justify-between bg-dark rounded-lg px-4 py-2">
                      <span className="text-light font-medium text-sm">{opt.days}</span>
                      <span className="text-secondary font-bold text-sm">{opt.price}</span>
                    </div>
                  ))}
                </div>

                {/* Scenery */}
                <div className="mb-6">
                  <p className="text-light/40 text-xs uppercase tracking-wider mb-1">Scenery</p>
                  <SceneryRating rating={route.scenery} />
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {route.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-light/60">
                      <svg className="w-4 h-4 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included / Excluded */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-light text-center mb-12">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">Included in Your Package</h3>
              <ul className="space-y-3">
                {PACKAGE_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-light/70 text-sm">
                    <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Not Included</h3>
              <ul className="space-y-3">
                {PACKAGE_EXCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-light/70 text-sm">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Climb Kilimanjaro?"
        subtitle="Tell us your preferred route, dates, and group size — we'll create a personalized expedition plan just for you."
        ctaText="Get Your Free Quote"
      />
    </>
  );
}
