import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Gorilla Trekking — Rwanda Collaboration",
  description:
    "Track mountain gorillas in Rwanda's Volcanoes National Park. Organized through our trusted Rwandan partners, combined with your Tanzania adventure.",
};

export default function GorillaTrekkingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative aspect-[2/1] sm:aspect-[5/2] md:aspect-[16/5] min-h-[280px] w-full">
        <Image
          src="/images/kili-rainforest-trail.jpg"
          alt="A rainforest trail"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-10 md:pb-14">
            <h1 className="text-4xl md:text-6xl font-bold text-paper leading-tight">
              Gorilla trekking
            </h1>
          </div>
        </div>
      </section>

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
            <li className="text-olive/45 font-medium">Gorilla trekking</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            A once-in-a-lifetime encounter
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-olive/95 leading-relaxed">
              Spending an hour with a mountain gorilla family in the bamboo
              forests of the Virunga volcanoes is one of the most powerful
              wildlife experiences on the continent. We organize gorilla
              trekking in Rwanda in collaboration with our trusted local
              partners, and it pairs naturally with a Kilimanjaro climb or a
              Tanzanian safari.
            </p>
            <p className="text-olive/95 leading-relaxed">
              Full itineraries, permits, and pricing are being finalized — get
              in touch and we&apos;ll put together a trip around your dates.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in gorilla trekking?"
        subtitle="Tell us your dates and group size, and we'll help you plan the rest."
      />
    </>
  );
}
