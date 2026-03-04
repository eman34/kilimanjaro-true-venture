import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Plan Your Adventure",
  ctaHref = "/contact",
  backgroundImage,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center ${
        compact ? "min-h-[60vh]" : "min-h-screen"
      }`}
    >
      {/* Background */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark to-primary" />
      )}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-dark/50" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-light mb-6 leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-light/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          {subtitle}
        </p>
        {ctaText && (
          <Link href={ctaHref} className="btn-primary text-lg">
            {ctaText}
          </Link>
        )}
      </div>
      {/* Scroll indicator */}
      {!compact && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
