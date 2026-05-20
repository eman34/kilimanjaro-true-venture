"use client";

import { useEffect, useRef, useState } from "react";
import TourCard from "./TourCard";
import { FEATURED_TOURS } from "@/lib/constants";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "kilimanjaro", label: "Kilimanjaro" },
  { id: "safari", label: "Safari" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const arrowBase =
  "w-10 h-10 rounded-full border flex-shrink-0 items-center justify-center transition-colors";
const arrowEnabled =
  "border-taupe/15 bg-parchment text-wine hover:border-emerald/50 hover:text-emerald";
const arrowDisabled =
  "border-taupe/5 bg-parchment/40 text-wine/20 cursor-not-allowed";

export default function FeaturedTours() {
  const [filter, setFilter] = useState<FilterId>("all");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const tours =
    filter === "all"
      ? FEATURED_TOURS
      : FEATURED_TOURS.filter((t) => t.category === filter);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      setCanLeft(el.scrollLeft > 1);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [filter]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement | null;
    const step = firstChild ? firstChild.clientWidth + 24 : 320;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-wine mb-4">
          Our Adventures
        </h2>
        <p className="text-wine/60 max-w-2xl mx-auto">
          From the summit of Kilimanjaro to the plains of the Serengeti. Pick your next trip.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={
                "px-5 py-2 rounded-full text-sm font-semibold border transition-colors " +
                (active
                  ? "bg-emerald border-emerald text-wine"
                  : "border-taupe/15 text-wine/70 hover:border-emerald/50 hover:text-wine")
              }
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <button
          type="button"
          aria-label="Previous tours"
          onClick={() => scrollByCard(-1)}
          disabled={!canLeft}
          className={
            "hidden md:flex " +
            arrowBase +
            " " +
            (canLeft ? arrowEnabled : arrowDisabled)
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
          ref={scrollerRef}
          role="region"
          aria-label="Featured tours"
          tabIndex={0}
          className="flex-1 min-w-0 flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="flex-shrink-0 snap-start w-[240px] sm:w-[270px] md:w-[290px]"
            >
              <TourCard {...tour} />
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label="Next tours"
          onClick={() => scrollByCard(1)}
          disabled={!canRight}
          className={
            "hidden md:flex " +
            arrowBase +
            " " +
            (canRight ? arrowEnabled : arrowDisabled)
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
