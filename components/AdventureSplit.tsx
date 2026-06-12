import Image from "next/image";
import Link from "next/link";

const ADVENTURES = [
  {
    title: "Climb Kilimanjaro",
    subtitle: "Six routes to Uhuru Peak, 5,895m",
    cta: "See routes & prices",
    href: "/tours/kilimanjaro",
    image: "/images/kilimanjaro-peak.jpg",
    alt: "The snow-capped peak of Mount Kilimanjaro",
  },
  {
    title: "Tanzania Safari",
    subtitle: "Serengeti, Ngorongoro and the Great Migration",
    cta: "See safaris & prices",
    href: "/tours/safaris",
    image: "/images/zebra-herd.jpg",
    alt: "A herd of zebra on the Tanzanian plains",
  },
];

export default function AdventureSplit() {
  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-olive mb-4">
          Our Adventures
        </h2>
        <p className="text-olive/75 max-w-2xl mx-auto">
          From the summit of Kilimanjaro to the plains of the Serengeti. Pick your next trip.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {ADVENTURES.map((adventure) => (
          <Link
            key={adventure.href}
            href={adventure.href}
            className="group relative block h-[380px] md:h-[460px] rounded-2xl overflow-hidden"
          >
            <Image
              src={adventure.image}
              alt={adventure.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/85 via-olive-deep/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-paper mb-2">
                {adventure.title}
              </h3>
              <p className="text-paper/90 text-base md:text-lg mb-5">
                {adventure.subtitle}
              </p>
              <span className="inline-flex items-center gap-2 text-paper font-semibold border border-paper/40 rounded-lg px-5 py-2.5 transition-colors group-hover:bg-gold group-hover:border-gold group-hover:text-olive-deep">
                {adventure.cta}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
