import Link from "next/link";

export default function TrustStrip() {
  return (
    <section className="bg-paper border-y border-taupe/10 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-forest text-lg font-semibold">
            Tanzanian-owned. Tanzanian-guided.
          </p>
          <p className="text-forest/60 text-sm mt-1">
            Every guide grew up on these mountains. Every porter is paid fairly.
          </p>
        </div>
        <Link
          href="/about"
          className="text-emerald font-semibold inline-flex items-center gap-1 group whitespace-nowrap"
        >
          Meet the team
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
        </Link>
      </div>
    </section>
  );
}
