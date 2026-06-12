import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import RouteSpread from "@/components/RouteSpread";
import SectionDivider from "@/components/SectionDivider";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import {
  KILIMANJARO_ROUTES,
  PACKAGE_INCLUDES,
  PACKAGE_EXCLUDES,
  MOUNTAIN_INTRO,
  ECOLOGICAL_ZONES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mount Kilimanjaro Climbing Routes & Expeditions",
  description:
    "Choose from 6 unique routes to summit Africa's highest peak at 5,895m. Expert guides, all-inclusive packages. Machame, Lemosho, Marangu, Rongai, Umbwe, Londorossi.",
};

export default function KilimanjaroPage() {
  const routeOrder = ["Lemosho", "Machame", "Rongai", "Marangu", "Umbwe", "Londorossi"];
  const routes = routeOrder
    .map((name) => KILIMANJARO_ROUTES.find((r) => r.name === name))
    .filter((r): r is NonNullable<typeof r> => r !== undefined);

  return (
    <>
      <Hero
        title="Mount Kilimanjaro"
        tagline="Africa's highest mountain. Six routes to the summit. Pick the one that matches your fitness and time."
        backgroundImage="/images/summit-glaciers.jpg"
      />

      {/* Routes — stacked editorial spread */}
      <section className="section-padding">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            Six routes to the summit
          </h2>
          <p className="text-olive/85 mt-3 leading-relaxed">
            Each route has a different character. Tell us how you want to
            experience the mountain and we&apos;ll match you to a route.
          </p>
        </div>

        <div className="space-y-6">
          {routes.map((route, i) => (
            <RouteSpread key={route.name} route={route} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <SectionDivider from="paper" to="parchment" />

      {/* When to climb */}
      <section className="bg-parchment py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive">
            When to climb.
          </h2>
          <p className="text-olive/85 mt-4 leading-relaxed">
            Kilimanjaro has two dry windows and two rainy ones. Climbing
            is possible year-round, but trail conditions, visibility, and
            crowds shift. The northern-side routes (Rongai, Londorossi)
            sit in Kibo&apos;s rain shadow and stay drier than the
            southern routes when the rains do come — useful if your dates
            are inflexible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-paper border border-taupe rounded-xl p-5">
              <p className="text-gold-deep text-[11px] uppercase tracking-[0.18em] font-semibold">
                Dry season
              </p>
              <p className="text-olive font-bold mt-2">
                January – early March
              </p>
              <p className="text-olive/85 text-sm mt-2 leading-relaxed">
                Cool, clear days; snow on the crater rim is common. Smaller
                crowds than mid-year and some of the best summit-day
                photographs.
              </p>
            </div>
            <div className="bg-paper border border-taupe rounded-xl p-5">
              <p className="text-gold-deep text-[11px] uppercase tracking-[0.18em] font-semibold">
                Long rains
              </p>
              <p className="text-olive font-bold mt-2">April – May</p>
              <p className="text-olive/85 text-sm mt-2 leading-relaxed">
                Heaviest rainfall on the southern approaches. Climbs
                continue but trails are slick and views often clouded.
                Rongai and Londorossi (northern side) stay relatively
                drier.
              </p>
            </div>
            <div className="bg-paper border border-taupe rounded-xl p-5">
              <p className="text-gold-deep text-[11px] uppercase tracking-[0.18em] font-semibold">
                Dry season (peak)
              </p>
              <p className="text-olive font-bold mt-2">June – October</p>
              <p className="text-olive/85 text-sm mt-2 leading-relaxed">
                The long high-season window. Stable weather, busier camps
                and gates. Book early for July and August — the most
                popular months on the mountain.
              </p>
            </div>
            <div className="bg-paper border border-taupe rounded-xl p-5">
              <p className="text-gold-deep text-[11px] uppercase tracking-[0.18em] font-semibold">
                Short rains
              </p>
              <p className="text-olive font-bold mt-2">November</p>
              <p className="text-olive/85 text-sm mt-2 leading-relaxed">
                Brief afternoon storms, fewer climbers, lush forest.
                Mornings are typically clear. A quiet shoulder month for
                travellers who want the trail to themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="parchment" to="olive" />

      {/* Ecological zones band */}
      <section className="bg-olive text-paper py-6 md:py-7">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-gold-deep text-xs uppercase tracking-[0.18em] font-semibold mb-3">
            On the mountain
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-paper leading-tight">
            Five ecological zones in five days
          </h2>
          <p className="text-paper/90 mt-4 leading-relaxed">
            {MOUNTAIN_INTRO}
          </p>

          <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-10">
            {ECOLOGICAL_ZONES.map((zone, idx) => (
              <li
                key={zone.name}
                className="border-l-2 border-gold/40 pl-4"
              >
                <p className="text-gold-deep text-[11px] uppercase tracking-wider font-semibold">
                  Zone {idx + 1}
                </p>
                <p className="text-paper font-bold mt-1">{zone.name}</p>
                <p className="text-paper/75 text-xs mt-0.5">{zone.altitude}</p>
                <p className="text-paper/85 text-sm mt-2 leading-relaxed">
                  {zone.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SectionDivider from="olive" to="paper" />

      {/* How we operate */}
      <section className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-olive">
          How we run a climb.
        </h2>
        <div className="mt-8 space-y-5">
          <p className="text-olive/95 leading-relaxed">
            Most climbers worry about fitness. The real risk on Kilimanjaro
            is altitude — about 10 deaths a year out of 35,000 to 50,000
            climbers, almost all from acute mountain sickness, and almost
            all preventable. The principle is simple: climb high during the
            day, sleep lower at night, give your body time. We check
            pulse-ox and symptoms with you every day, carry oxygen and a
            first-aid kit on every climb, and the moment something looks
            acute we go down.
          </p>
          <p className="text-olive/95 leading-relaxed">
            The crew that gets you up the mountain matters just as much.
            KPAP — the Kilimanjaro Porters Assistance Project — audits
            operators on porter welfare; it&apos;s the closest thing the
            mountain has to a B-Corp standard. KPAP-aligned operators agree
            to a 20kg load cap per porter, wages at or above the
            KPAP-monitored floor, three meals per porter per day, and
            weather-appropriate gear. We work to those numbers on every
            climb, with a typical 3:1 porter-to-climber ratio — the crew
            carries water, food, tents, and the cooking kit; you carry a
            day pack.
          </p>
          <p className="text-olive/95 leading-relaxed">
            Senior Mountain Guide Ivan Ismail Kaaya leads many of our
            climbs, with 15–20 years on Kilimanjaro. Assistant Guide Amdani
            Mputa supports pace and health monitoring throughout.{" "}
            <Link
              href="/about"
              className="text-gold-deep underline-offset-4 hover:underline"
            >
              Meet the full crew
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Training and acclimatization */}
      <section className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-olive">
          Training and acclimatization.
        </h2>
        <div className="mt-8 space-y-5">
          <p className="text-olive/95 leading-relaxed">
            Kilimanjaro is a fitness walk, not an endurance event. The
            summit question is rarely &ldquo;am I fit enough.&rdquo; It is
            &ldquo;will my body acclimatize.&rdquo; That is why longer
            routes (7–9 days) post better summit rates than shorter ones:
            more nights between 3,500m and 4,500m before summit night, more
            hours under &ldquo;climb high, sleep low.&rdquo; Pace is the
            work. Fitness lets you enjoy it.
          </p>
          <p className="text-olive/95 leading-relaxed">
            For fitness, build a slow base over 8–12 weeks. You are
            training to walk 5–7 hours a day, on uneven ground, in light
            layers, with a daypack. Not to set personal bests. If you can
            hike a full day, sleep, and hike again the next morning, you
            are ready.
          </p>
          <p className="text-olive/95 leading-relaxed">
            In practice that means a longer walk most weeks — a couple of
            hours, on hills if you have them — plus whatever steady cardio
            you already enjoy, like walking, cycling, or swimming. Take the
            odd hike with your daypack on so the weight feels familiar,
            and if you can, fit in one back-to-back hike weekend before you
            fly. That&apos;s it — no gym program required. We&apos;ll talk
            through your fitness on the call and recommend a route that
            matches it.
          </p>
        </div>
      </section>

      <SectionDivider from="paper" to="parchment" />

      {/* What's Included / Excluded */}
      <section className="py-6 md:py-7 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive text-center mb-12">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gold-deep mb-4">
                Included in Your Package
              </h3>
              <ul className="space-y-3">
                {PACKAGE_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-olive/85 text-sm"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold-deep mb-4">Not Included</h3>
              <ul className="space-y-3">
                {PACKAGE_EXCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-olive/85 text-sm"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan your Kilimanjaro climb"
        subtitle="Tell us your dates, group size, and route interest. Abu will reply within 4 hours on WhatsApp."
        seamFrom="parchment"
      />

      <StickyWhatsApp />
    </>
  );
}
