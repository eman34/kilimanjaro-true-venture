import Image from "next/image";
import Link from "next/link";
import type { Safari } from "@/lib/constants";

interface SafariSpreadProps {
  safari: Safari;
  reverse?: boolean;
}

export default function SafariSpread({ safari, reverse }: SafariSpreadProps) {
  const daysLabel = safari.days === 1 ? "Day trip" : `${safari.days} days`;

  const photo = (
    <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-6 lg:min-h-[320px]">
      <Image
        src={safari.image}
        alt={safari.name}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );

  const content = (
    <div className="lg:col-span-6 p-6 flex flex-col">
      <h3 className="text-2xl md:text-3xl font-bold text-olive leading-tight">
        {safari.name}
      </h3>

      <dl className="grid grid-cols-3 gap-4 mt-4 border-y border-taupe/30 py-2.5">
        <div>
          <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
            From
          </dt>
          <dd className="text-olive font-bold text-base mt-1">
            {safari.priceFrom}
          </dd>
        </div>
        <div>
          <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
            Duration
          </dt>
          <dd className="text-olive font-medium text-sm mt-1">{daysLabel}</dd>
        </div>
        <div>
          <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
            Parks
          </dt>
          <dd className="text-olive font-medium text-sm mt-1">
            {safari.parks.length}
          </dd>
        </div>
      </dl>

      <p className="text-olive/95 text-sm leading-relaxed mt-3 line-clamp-2">
        {safari.summary}
      </p>

      <div className="mt-auto pt-3">
        <Link href={`/tours/safaris/${safari.slug}`} className="btn-primary">
          View details
        </Link>
      </div>
    </div>
  );

  return (
    <article className="bg-parchment rounded-2xl border border-taupe/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      {reverse ? (
        <>
          {content}
          {photo}
        </>
      ) : (
        <>
          {photo}
          {content}
        </>
      )}
    </article>
  );
}
