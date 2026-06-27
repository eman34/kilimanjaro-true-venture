import Link from "next/link";
import SectionDivider from "./SectionDivider";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  /* Background color of the section directly above, so the seam
     tessellates instead of always being cream. */
  seamFrom?: "paper" | "parchment";
}

export default function CTABanner({
  title = "Plan your Tanzania trip",
  subtitle = "Tell us your dates and what you want to see, and we'll help you plan the rest.",
  ctaText = "Start Planning",
  ctaHref = "/contact",
  seamFrom = "paper",
}: CTABannerProps) {
  return (
    <section className="bg-parchment pb-20">
      <div className="mb-20">
        <SectionDivider from={seamFrom} to="parchment" />
      </div>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-olive mb-6">
          {title}
        </h2>
        <p className="text-lg text-olive/85 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Link href={ctaHref} className="btn-primary text-lg">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
