import Image from "next/image";
import Link from "next/link";

/* Menu card for the Other Adventures hub. A whole-card-clickable editorial
   spread (no button, no "learn more" arrow). The third stat — "What's
   inside" — signals whether the adventure is a single thing or a set of
   sub-tours, the one fact that resolves this heterogeneous menu. */

export interface Adventure {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  priceFrom: string;
  duration: string;
  inside: string;
  summary: string;
}

export default function AdventureSpread({
  adventure,
  reverse,
}: {
  adventure: Adventure;
  reverse?: boolean;
}) {
  const photo = (
    <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-6 lg:min-h-[300px]">
      <Image
        src={adventure.image}
        alt={adventure.imageAlt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );

  const content = (
    <div className="lg:col-span-6 p-6 flex flex-col">
      <h2 className="text-2xl md:text-3xl font-bold text-olive leading-tight group-hover:text-gold-deep transition-colors">
        {adventure.title}
      </h2>

      <dl className="grid grid-cols-3 gap-4 mt-4 border-y border-taupe/30 py-2.5">
        <div>
          <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
            From
          </dt>
          <dd className="text-olive font-bold text-base mt-1">
            {adventure.priceFrom}
          </dd>
        </div>
        <div>
          <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
            Duration
          </dt>
          <dd className="text-olive font-medium text-sm mt-1">
            {adventure.duration}
          </dd>
        </div>
        <div>
          <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
            What&apos;s inside
          </dt>
          <dd className="text-gold-deep font-semibold text-sm mt-1">
            {adventure.inside}
          </dd>
        </div>
      </dl>

      <p className="text-olive/95 text-sm md:text-base leading-relaxed mt-3">
        {adventure.summary}
      </p>
    </div>
  );

  return (
    <Link
      href={adventure.href}
      className="group block bg-parchment rounded-2xl border border-taupe/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-gold/40 transition-colors"
    >
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
    </Link>
  );
}
