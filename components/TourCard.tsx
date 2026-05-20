import Image from "next/image";
import Link from "next/link";
import type { TourCategory } from "@/lib/constants";

interface TourCardProps {
  title: string;
  image: string;
  href: string;
  duration: string;
  priceFrom: string;
  category: TourCategory;
}

export default function TourCard({
  title,
  image,
  href,
  duration,
  priceFrom,
}: TourCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="bg-parchment rounded-2xl overflow-hidden border border-taupe/10 hover:border-emerald/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald/10 flex flex-col h-full">
        <div className="relative h-44 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="p-5 flex flex-col min-h-[160px]">
          <p className="text-wine/60 text-xs uppercase tracking-wide mb-3">
            {duration}
          </p>
          <h3 className="text-xl font-bold text-wine leading-snug group-hover:text-emerald transition-colors">
            {title}
          </h3>
          <p className="mt-auto text-wine text-base font-bold leading-tight text-right">
            USD {priceFrom}
          </p>
        </div>
      </div>
    </Link>
  );
}
