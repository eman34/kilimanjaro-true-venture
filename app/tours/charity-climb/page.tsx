import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Charity Climb — Summit Kilimanjaro with Purpose",
  description:
    "Climb Kilimanjaro while raising funds for the communities around the mountain. Group charity climbs organized by Kilimanjaro True Venture.",
};

export default function CharityClimbPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative aspect-[2/1] sm:aspect-[5/2] md:aspect-[16/5] min-h-[280px] w-full">
        <Image
          src="/images/summit-celebration.jpg"
          alt="Climbers celebrating at the summit"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-10 md:pb-14">
            <h1 className="text-4xl md:text-6xl font-bold text-paper leading-tight">
              Charity climb
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
            <li className="text-olive/45 font-medium">Charity climb</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Climb with purpose
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-olive/95 leading-relaxed">
              A charity climb turns your summit into something bigger: a group
              expedition where the journey raises funds for schools and community
              projects around Kilimanjaro. You train together, climb together,
              and leave something lasting behind in the place that made the
              experience possible.
            </p>
            <p className="text-olive/95 leading-relaxed">
              Dates, fundraising details, and itineraries are being finalized —
              get in touch and we&apos;ll help you plan one. In the meantime, you
              can read about{" "}
              <Link
                href="/charity"
                className="text-gold-deep underline-offset-4 hover:underline"
              >
                the community work we support
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan a charity climb"
        subtitle="Tell us your group, cause, and rough dates, and we'll help you plan the rest."
      />
    </>
  );
}
