import Hero from "@/components/Hero";
import AdventureSplit from "@/components/AdventureSplit";
import TrustStrip from "@/components/TrustStrip";
import CTABanner from "@/components/CTABanner";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SectionDivider from "@/components/SectionDivider";
import { COMPANY, VALUES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  compass: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  users: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  heart: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      <Hero
        title={COMPANY.tagline}
        tagline="One Team. One Adventure."
        backgroundImage="/images/hero-sunset.jpg"
      />

      {/* Values */}
      <section className="py-6 md:py-7 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-olive">
              One Team. One Adventure.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {VALUES.map((item) => (
              <div key={item.text} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-olive/70 text-olive flex items-center justify-center">
                  {ICONS[item.icon]}
                </div>
                <p className="text-olive/95 text-base md:text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="parchment" to="paper" />

      <TrustStrip />

      <AdventureSplit />

      <SectionDivider from="paper" to="parchment" />

      <TestimonialCarousel />

      <CTABanner seamFrom="parchment" />
    </>
  );
}
