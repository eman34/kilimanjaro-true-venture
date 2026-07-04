import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PackageInclusions from "@/components/PackageInclusions";
import RouteItinerary from "@/components/RouteItinerary";
import SectionDivider from "@/components/SectionDivider";
import AscentProfile, { type ElevationProfileConfig } from "@/components/AscentProfile";
import type { KilimanjaroRouteDay, PackageItem } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mount Meru Trek — Tanzania's Second Summit",
  description:
    "Trek Mount Meru (4,566m) in Arusha National Park — wildlife with an armed ranger, a dramatic knife-edge summit ridge, and views across to Kilimanjaro. A 4-day climb from $950, ideal acclimatization before Kilimanjaro.",
};

const MERU_DAYS: KilimanjaroRouteDay[] = [
  {
    day: 1,
    title: "Momella Gate to Miriakamba Hut",
    elevation: "1,500m → 2,514m",
    distance: "10 km",
    time: "4–5 hours",
    terrain: "Rainforest",
    description:
      "Your guide collects you from your hotel for the short drive to Momella Gate in Arusha National Park. Unlike Kilimanjaro, Mount Meru treks are accompanied by an armed ranger — the park is home to buffalo, elephant, giraffe, and leopard. The trail winds through lush montane forest, crossing streams and passing a beautiful waterfall. Giraffes often graze unconcerned just meters from the trail. You arrive at Miriakamba Hut, a comfortable camp set in a forest clearing with views into the volcanic crater.",
  },
  {
    day: 2,
    title: "Miriakamba Hut to Saddle Hut",
    elevation: "2,514m → 3,566m",
    distance: "7 km",
    time: "4–5 hours",
    terrain: "Heather & moorland",
    description:
      "The trail steepens as you climb through the heather zone, with giant heather trees draped in old man's beard moss creating an enchanting atmosphere. The forest thins and views begin to open up — on clear days, Kilimanjaro's snow-capped summit is visible to the east. You pass through Topela Mbogo (\"Buffalo Swamp\") before arriving at Saddle Hut, perched between Meru's summit and the dramatic ash cone. Early dinner and rest — your alarm is set for 1 AM.",
  },
  {
    day: 3,
    title: "Summit — Socialist Peak, descend to Miriakamba",
    elevation: "3,566m → 4,566m → 2,514m",
    distance: "14 km",
    time: "10–12 hours",
    terrain: "Knife-edge ridge & scree",
    description:
      "Rising at 1 AM, you climb by headlamp along Meru's spectacular knife-edge ridge — a sheer drop into the volcanic crater on one side and the forested slopes on the other. It's one of the most dramatic summit approaches in East Africa. As dawn breaks, the sky turns pink and Kilimanjaro emerges from the clouds like an island in the sky. At Socialist Peak (4,566m) you're rewarded with 360-degree views of the Rift Valley, the Serengeti plains, and mighty Kilimanjaro. You then descend all the way to Miriakamba Hut for the night.",
  },
  {
    day: 4,
    title: "Miriakamba Hut to Momella Gate",
    elevation: "2,514m → 1,500m",
    distance: "5 km",
    time: "2–3 hours",
    terrain: "Rainforest",
    description:
      "A gentle final descent back through the rainforest, with more chances to spot wildlife. Colobus monkeys are common in the canopy, and you may encounter giraffe and warthog near the lower trails. At Momella Gate your transfer awaits. Back at your hotel you'll have time to reflect on an extraordinary four days — and if Kilimanjaro is next, you'll feel confident and well acclimatized for the bigger challenge ahead.",
  },
];

const MERU_PROFILE: ElevationProfileConfig = {
  summitAlt: 4566,
  summitLabel: "Socialist Peak · 4,566m",
  peakName: "Socialist Peak, 4,566 meters",
  minAlt: 1300,
  maxAlt: 4800,
  zones: [
    { top: 4800, bottom: 3500, label: "Ash cone & summit", cls: "fill-taupe", opacity: 0.4 },
    { top: 3500, bottom: 2500, label: "Heather & moorland", cls: "fill-khaki", opacity: 0.12 },
    { top: 2500, bottom: 1300, label: "Montane forest", cls: "fill-olive", opacity: 0.09 },
  ],
};

const MERU_INCLUDES: PackageItem[] = [
  {
    icon: "shield",
    title: "Armed park ranger",
    detail:
      "Arusha National Park requires every trekking group to climb with an armed ranger. The park is home to buffalo, elephant, and giraffe, and the ranger keeps the group safe around wildlife.",
  },
  {
    icon: "guide",
    title: "Professional mountain guide",
    detail:
      "Experienced, English-speaking guides who know Meru's forest, the high saddle, and the knife-edge summit ridge.",
  },
  {
    icon: "bed",
    title: "Hut accommodation",
    detail:
      "You sleep in the park's wooden huts at Miriakamba and Saddle — bunks and mattresses, no tents to pitch — plus a hotel night before and after the trek.",
  },
  {
    icon: "ticket",
    title: "All park & hut fees",
    detail:
      "Arusha National Park entry, hut, and rescue fees are all covered in the price.",
  },
  {
    icon: "fire",
    title: "All meals on the trek",
    detail:
      "Our mountain cook prepares hot, balanced meals at each hut, portioned for long days on the trail.",
  },
  {
    icon: "backpack",
    title: "Porters for group gear",
    detail:
      "Porters carry the group's equipment and supplies, so you climb with just a daypack.",
  },
  {
    icon: "plane",
    title: "Airport & park transfers",
    detail:
      "We meet you at Kilimanjaro International Airport and handle the drive to Arusha National Park and back.",
  },
  {
    icon: "droplet",
    title: "Drinking water",
    detail:
      "Safe drinking water provided and refilled each day on the mountain.",
  },
  {
    icon: "heart",
    title: "Fair crew wages",
    detail:
      "Fair pay for the guide, ranger, porters, and cook — the same ethical standard we hold on every climb.",
  },
];

const MERU_EXCLUDES: PackageItem[] = [
  {
    icon: "globe",
    title: "Flights",
    detail:
      "International and domestic flights are not included. Most trekkers fly into Kilimanjaro International Airport (JRO), about an hour from Arusha, and we meet you there.",
  },
  {
    icon: "cash",
    title: "Crew tips",
    detail:
      "Tips are never mandatory, but if your crew looks after you well they are encouraged and shared across the guide, ranger, porters, and cook. For a 4-day Meru trek, a common range is USD 120 to 180 per trekker.",
  },
  {
    icon: "passport",
    title: "Tanzanian visa",
    detail:
      "Most nationalities can get a tourist visa online before travel or on arrival. Budget around $50, or $100 for US passport holders.",
  },
  {
    icon: "shield",
    title: "Travel insurance",
    detail:
      "Mandatory for trekkers. Make sure your policy covers trekking up to 5,000m and emergency evacuation.",
  },
  {
    icon: "backpack",
    title: "Sleeping bag & personal gear",
    detail:
      "Bring your own or rent locally before the trek. We send a full packing list when you book.",
  },
  {
    icon: "bag",
    title: "Personal expenses",
    detail:
      "Drinks, snacks, laundry, souvenirs, and anything else you pick up along the way.",
  },
];

const HIGHLIGHTS = [
  "Wildlife on the trail, with an armed ranger",
  "A dramatic knife-edge summit ridge",
  "Sunrise views across to Kilimanjaro",
  "Ideal acclimatization before Kilimanjaro",
  "Hut accommodation — no tents to pitch",
  "Far fewer crowds than Kilimanjaro",
];

const SUMMARY = [
  { label: "Duration", value: "4 days" },
  { label: "From", value: "$950" },
  { label: "Difficulty", value: "Moderate" },
  { label: "Summit", value: "4,566m" },
];

export default function MeruPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative aspect-[2/1] sm:aspect-[5/2] md:aspect-[16/5] min-h-[280px] w-full">
        <Image
          src="/images/safari-giraffe-landscape.jpg"
          alt="A giraffe in Arusha National Park, on the lower slopes of Mount Meru"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-10 md:pb-14">
            <h1 className="text-4xl md:text-6xl font-bold text-paper leading-tight">
              Mount Meru
            </h1>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding">
        <div>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/tours/other-adventures"
                  className="inline-flex items-center gap-1.5 text-olive/60 hover:text-gold-deep transition-colors font-medium"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Other Adventures
                </Link>
              </li>
              <li aria-hidden className="text-olive/30">/</li>
              <li className="text-olive/45 font-medium">Mount Meru</li>
            </ol>
          </nav>

          <p className="text-gold-deep italic text-lg md:text-xl mb-5">
            Tanzania&apos;s second-highest peak
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-taupe/30 py-5 mb-8">
            {SUMMARY.map((item) => (
              <div key={item.label}>
                <dt className="text-olive/65 text-[10px] uppercase tracking-wider font-semibold">
                  {item.label}
                </dt>
                <dd className="text-olive font-bold text-lg mt-1">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mb-8">
            <AscentProfile days={MERU_DAYS} config={MERU_PROFILE} />
          </div>

          <p className="text-olive/95 text-base md:text-lg leading-relaxed">
            Mount Meru is Tanzania&apos;s second-highest peak and one of East
            Africa&apos;s most rewarding climbs — yet it sees a fraction of
            Kilimanjaro&apos;s crowds. The four-day trek starts in Arusha
            National Park, where an armed ranger leads you past grazing giraffe
            and buffalo, climbs through moss-draped heather to a high saddle,
            and finishes along a dramatic knife-edge ridge to Socialist Peak.
            From the summit, Kilimanjaro rises out of the clouds to the east.
            Many climbers trek Meru first as ideal acclimatization before taking
            on Kilimanjaro.
          </p>

          <ul className="mt-6 space-y-2">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-olive/95 text-base"
              >
                <svg
                  className="w-5 h-5 text-gold-deep shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Day by day */}
      <SectionDivider from="paper" to="paper" />
      <section className="bg-paper py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-2">
            Day by day
          </h2>
          <p className="text-olive/85 leading-relaxed mb-8">
            From the rainforest gate to the knife-edge summit and back, in four
            days.
          </p>
          <RouteItinerary detailedItinerary={MERU_DAYS} />
        </div>
      </section>
      <SectionDivider from="paper" to="paper" />

      <PackageInclusions
        includes={MERU_INCLUDES}
        excludes={MERU_EXCLUDES}
        subline="Everything in a Mount Meru trek, from the armed ranger to the hut bunks."
      />

      <SectionDivider from="paper" to="parchment" />

      {/* CTA */}
      <section className="bg-parchment py-6 md:py-7">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Ready to climb Mount Meru?
          </h2>
          <p className="text-olive/85 mt-4 leading-relaxed">
            Trek it on its own or as acclimatization before Kilimanjaro. Tell us
            your dates and group size and we&apos;ll put together a quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Plan your Meru trek
            </Link>
            <Link
              href="/tours/kilimanjaro"
              className="text-olive/70 hover:text-olive font-semibold self-center underline underline-offset-4"
            >
              See Kilimanjaro climbs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
