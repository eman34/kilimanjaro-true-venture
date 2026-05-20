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
        tagline="Summits, plains, coast. Captured."
        backgroundImage="/images/summit-panorama.jpg"
      />

      <section className="section-padding">
        <GalleryGrid />
      </section>

      <CTABanner
        title="Ready to Create Your Own Memories?"
        subtitle="Get in touch for Kilimanjaro, safari, culture, or Zanzibar — we will help you build the right itinerary."
      />
    </>
  );
}
