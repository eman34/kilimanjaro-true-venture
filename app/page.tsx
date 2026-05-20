import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import TrustStrip from "@/components/TrustStrip";
import CTABanner from "@/components/CTABanner";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { VALUES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  compass: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  users: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  heart: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      <Hero
        title="Conquer the Roof of Africa"
        tagline="Tanzanian-owned. Tanzanian-guided."
        backgroundImage="/images/hero-sunset.jpg"
      />

      {/* Values */}
      <section className="py-16 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wine">
              Tanzanian-owned. Tanzanian-guided. Tanzanian-built.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {VALUES.map((item) => (
              <div key={item.text} className="flex items-start gap-4">
                <div className="flex-shrink-0 text-emerald">
                  {ICONS[item.icon]}
                </div>
                <p className="text-wine/80 text-base md:text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      <FeaturedTours />

      <TestimonialCarousel />

      <CTABanner />
    </>
  );
}
