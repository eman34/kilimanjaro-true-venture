import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTABanner({
  title = "Plan your Tanzania trip",
  subtitle = "Tell us your dates and what you want to see. Abu will reply within 4 hours on WhatsApp.",
  ctaText = "Start Planning",
  ctaHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-wine via-wine-deep to-wine" />
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--color-emerald)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--color-emerald)_0%,_transparent_55%)]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-paper mb-6">
          {title}
        </h2>
        <p className="text-lg text-paper/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Link href={ctaHref} className="btn-primary text-lg">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
