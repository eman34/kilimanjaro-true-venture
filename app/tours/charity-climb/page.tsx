import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export const metadata: Metadata = {
  title: "Charity Climb — Summit Kilimanjaro with Purpose",
  description:
    "Climb Kilimanjaro while raising funds for the communities around the mountain. Group charity climbs organized by Kilimanjaro True Venture.",
};

export default function CharityClimbPage() {
  return (
    <>
      <Hero
        title="Charity Climb"
        tagline="Summit Africa's highest peak while raising funds for the communities around the mountain."
        backgroundImage="/images/summit-celebration.jpg"
      />

      <section className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-olive">
          Climb with purpose.
        </h2>
        <div className="mt-8 space-y-5">
          <p className="text-olive/95 leading-relaxed">
            A charity climb turns your summit into something bigger: a
            group expedition where the journey raises funds for schools
            and community projects around Kilimanjaro. You train together,
            climb together, and leave something lasting behind in the
            place that made the experience possible.
          </p>
          <p className="text-olive/95 leading-relaxed">
            Dates, fundraising details, and itineraries are being
            finalized — get in touch and we&apos;ll help you plan one. In
            the meantime, you can read about{" "}
            <Link
              href="/charity"
              className="text-gold-deep underline-offset-4 hover:underline"
            >
              the community work we support
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner
        title="Plan a charity climb"
        subtitle="Tell us your group, cause, and rough dates. Abu will reply within 4 hours on WhatsApp."
      />

      <StickyWhatsApp />
    </>
  );
}
