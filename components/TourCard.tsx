import Image from "next/image";
import Link from "next/link";

interface TourCardProps {
  title: string;
  description: string;
  href: string;
  tag?: string;
  image?: string;
}

export default function TourCard({
  title,
  description,
  href,
  tag,
  image,
}: TourCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative bg-dark-lighter rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-secondary/10">
        {/* Image */}
        <div className="h-56 relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter/80 to-transparent" />
          {tag && (
            <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              {tag}
            </span>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-light mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-light/70 text-sm leading-relaxed mb-4">
            {description}
          </p>
          <span className="text-secondary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
