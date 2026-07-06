import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Kilimanjaro & Safari FAQs",
  description:
    "Straight answers about climbing Kilimanjaro and Tanzania safaris with a local operator in Arusha — best months, route choice, altitude and safety, what's included and how booking works.",
};

/* Answers draw only on facts already published elsewhere on the site.
   Anything on docs/VERIFY-WITH-ABU.md stays out until confirmed. */
const FAQS = [
  {
    q: "Is Kilimanjaro True Venture really a local company?",
    a: "Yes. The company is owned and run in Arusha, Tanzania, founded by a former porter who worked his way up to mountain guide. The guides and crews on every trip grew up around these mountains, and the money you pay stays here — wages, food, park fees and fuel are all spent in Tanzania.",
  },
  {
    q: "When is the best time to climb Kilimanjaro?",
    a: "There are two dry windows: January to early March, and June to October. June to October is the busiest season; January to March is quieter, often with snow on the crater rim. April and May bring the long rains, November brings short afternoon storms. Climbs run year-round, and the northern routes stay drier when the rains come — useful if your dates are fixed.",
  },
  {
    q: "Which route should I choose?",
    a: "Machame and Lemosho are the most popular first climbs — scenic, with good time to acclimatize. Marangu is the only route with hut accommodation instead of tents. Rongai approaches from the quieter, drier northern side. Tell us how you want to experience the mountain and we'll match you to a route.",
  },
  {
    q: "How many days do I need for the climb?",
    a: "Six to eight days is typical, depending on the route. More days means more time to acclimatize — and on Kilimanjaro, altitude matters more than fitness.",
  },
  {
    q: "How dangerous is Kilimanjaro? What about altitude sickness?",
    a: "About 10 climbers die each year out of 35,000 to 50,000 — roughly 0.02% — and almost all cases are altitude-related and preventable. The principle is simple: climb high during the day, sleep lower at night, give your body time. We watch your symptoms every day, and if something looks acute we go down.",
  },
  {
    q: "What's included in the price?",
    a: "Park fees — the single largest cost of a climb — plus camping equipment, hot meals and drinking water on the mountain, transport to and from the gate and the full mountain crew. Flights and crew tips are not included. Every route page lists the full breakdown.",
  },
  {
    q: "How are your porters and crew treated?",
    a: "Guides, porters and cooks are hired locally and paid fairly, with sensible load limits and proper gear for the cold. The founder started as a porter himself — crew welfare is where this company began. You can read more on our community page.",
  },
  {
    q: "Can I combine a climb with a safari or Zanzibar?",
    a: "Yes — many travelers do. A climb pairs naturally with a few days in the Serengeti or a Zanzibar beach stay; we run 5-day Zanzibar packages and safaris from day trips to a week. Send one message with everything you're hoping to do and we'll plan it as a single trip.",
  },
  {
    q: "How does booking work?",
    a: "Start with a message — WhatsApp or the contact form — with your rough dates, group size and what you want to do. We reply with a suggested itinerary and a full quote, then keep refining it with you until it fits. You'll always know the price and what it covers before you commit.",
  },
  {
    q: "What currency are your prices in?",
    a: "All prices on the site are in US dollars, which is the standard for Tanzania — park fees, the largest single cost of any trip, are set in US dollars by the national parks. Your quote will be in US dollars too, and we'll walk you through how to pay when you're ready to book.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* Header */}
      <section className="bg-paper pt-14 pb-8">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-olive mb-4">
            Questions & Answers
          </h1>
          <p className="text-lg text-olive/80">
            The things people ask before they book — answered straight.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-paper pb-14">
        <div className="max-w-3xl mx-auto px-4 md:px-8 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group bg-parchment rounded-xl border border-taupe/40 transition-colors hover:border-gold/30"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-4">
                <span className="text-olive font-semibold">{f.q}</span>
                <svg
                  className="w-4 h-4 text-gold-deep shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="px-6 pb-5 text-olive/85 leading-relaxed">{f.a}</p>
            </details>
          ))}

          <p className="text-olive/75 text-center pt-6">
            Something we haven&apos;t covered?{" "}
            <Link
              href="/contact"
              className="text-gold-deep font-semibold hover:text-olive transition-colors"
            >
              Ask us directly
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
