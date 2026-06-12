import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export const metadata: Metadata = {
  title: "Gorilla Trekking — Rwanda Collaboration",
  description:
    "Track mountain gorillas in Rwanda's Volcanoes National Park. Organized through our trusted Rwandan partners, combined with your Tanzania adventure.",
};

export default function GorillaTrekkingPage() {
  return (
    <>
      <Hero
        title="Gorilla Trekking"
        tagline="Mountain gorillas in Rwanda's Volcanoes National Park — through our trusted Rwandan partners."
        backgroundImage="/images/ngorongoro-wildlife.jpg"
      />

      <section className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-olive">
          A once-in-a-lifetime encounter.
        </h2>
        <div className="mt-8 space-y-5">
          <p className="text-olive/95 leading-relaxed">
            Spending an hour with a mountain gorilla family in the bamboo
            forests of the Virunga volcanoes is one of the most powerful
            wildlife experiences on the continent. We organize gorilla
            trekking in Rwanda in collaboration with our trusted local
            partners, and it pairs naturally with a Kilimanjaro climb or a
            Tanzanian safari.
          </p>
          <p className="text-olive/95 leading-relaxed">
            Full itineraries, permits, and pricing are being finalized —
            get in touch and we&apos;ll put together a trip around your
            dates.
          </p>
        </div>
      </section>

      <CTABanner
        title="Interested in gorilla trekking?"
        subtitle="Tell us your dates and group size. Abu will reply within 4 hours on WhatsApp."
      />

      <StickyWhatsApp />
    </>
  );
}
