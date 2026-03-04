import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTABanner({
  title = "Ready for the Adventure of a Lifetime?",
  subtitle = "Let us help you plan the perfect Tanzanian experience. Whether it's conquering Kilimanjaro, exploring the Serengeti, or immersing in local culture — your journey starts here.",
  ctaText = "Start Planning",
  ctaHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--color-secondary)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--color-accent)_0%,_transparent_50%)]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-light mb-6">
          {title}
        </h2>
        <p className="text-lg text-light/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Link href={ctaHref} className="btn-primary text-lg">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
