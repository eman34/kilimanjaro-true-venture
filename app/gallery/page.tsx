import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Kilimanjaro climbs, wildlife safaris, cultural experiences, and Zanzibar — a glimpse of the adventures we create with Kilimanjaro True Venture.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Gallery"
        subtitle="A visual taste of Kilimanjaro summits, safari plains, local culture, and coastal beauty — the experiences we are proud to share with our guests."
        ctaText="Plan Your Trip"
        ctaHref="/contact"
        backgroundImage="/images/summit-panorama.jpg"
        compact
      />

      <section className="section-padding">
        <GalleryGrid />
      </section>

      <CTABanner
        title="Ready to Create Your Own Memories?"
        subtitle="Get in touch for Kilimanjaro, safari, culture, or Zanzibar — we will help you build the right itinerary."
        ctaText="Get in Touch"
      />
    </>
  );
}
