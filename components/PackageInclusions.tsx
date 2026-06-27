import {
  PACKAGE_INCLUDES,
  PACKAGE_EXCLUDES,
  type PackageItem,
} from "@/lib/constants";

/* "What's included" / "Not included" for Kilimanjaro route pages.
   Altezza-style accordion rows: scan the titles, expand for the detail.
   Color codes the glance — warm gold icons for included, muted olive for
   not included. Native <details>, no JS. */

const ICONS: Record<string, React.ReactNode> = {
  plane: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5"
    />
  ),
  tent: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 20h17L12 4.5 3.5 20z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l2-4 2 4" />
    </>
  ),
  table: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 10v9M19 10v9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 10l1.5-4h7L17 10" />
    </>
  ),
  guide: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  ),
  ticket: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
    />
  ),
  fire: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
      />
    </>
  ),
  sparkles: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  ),
  heart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  ),
  pulse: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
  ),
  mug: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h12v7a4 4 0 01-4 4H9a4 4 0 01-4-4V8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9h1.5a2.5 2.5 0 010 5H17" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.5v2m3.5-2v2" />
    </>
  ),
  globe: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  ),
  passport: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8a3 3 0 110 6 3 3 0 010-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.5h6" />
    </>
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  backpack: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V6a4 4 0 118 0v1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6v4H9z" />
    </>
  ),
  cash: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  ),
  bag: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  ),
  bed: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6v12M3 13h18v5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 13V9h8a3 3 0 013 3v1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </>
  ),
  droplet: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z"
    />
  ),
  truck: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1"
    />
  ),
  award: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a5 5 0 110 10 5 5 0 010-10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12.5L8 21l4-2.5L16 21l-1.5-8.5" />
    </>
  ),
};

function AccordionRow({
  item,
  tone,
}: {
  item: PackageItem;
  tone: "include" | "exclude";
}) {
  const circle =
    tone === "include"
      ? "bg-gold/20 text-gold-deep"
      : "bg-olive/10 text-olive/60";
  return (
    <details className="group bg-parchment rounded-2xl border border-taupe/40 transition-colors hover:border-gold/30">
      <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center gap-4 p-5 md:px-6">
        <span
          className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${circle}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden
          >
            {ICONS[item.icon]}
          </svg>
        </span>
        <h3 className="flex-1 text-olive font-bold text-base md:text-lg leading-snug">
          {item.title}
        </h3>
        <svg
          className="w-5 h-5 text-olive/40 shrink-0 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-5 md:px-6 pb-5 md:pb-6">
        <p className="text-olive/80 text-sm md:text-base leading-relaxed md:pl-[60px]">
          {item.detail}
        </p>
      </div>
    </details>
  );
}

export default function PackageInclusions({
  includes = PACKAGE_INCLUDES,
  excludes = PACKAGE_EXCLUDES,
  subline = "The same package on every Kilimanjaro route, every departure.",
}: {
  includes?: PackageItem[];
  excludes?: PackageItem[];
  subline?: string;
}) {
  return (
    <section className="section-padding">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-olive mb-2">
          What&apos;s included
        </h2>
        <p className="text-olive/85 leading-relaxed">{subline}</p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {includes.map((item) => (
          <AccordionRow key={item.title} item={item} tone="include" />
        ))}
      </div>

      <div className="mt-12 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-olive">
          Not included
        </h2>
      </div>

      <div className="space-y-3 md:space-y-4">
        {excludes.map((item) => (
          <AccordionRow key={item.title} item={item} tone="exclude" />
        ))}
      </div>
    </section>
  );
}
