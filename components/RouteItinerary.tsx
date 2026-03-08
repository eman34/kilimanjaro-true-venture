"use client";

import { useState } from "react";

type DayDetail = {
  day: number;
  title: string;
  elevation: string;
  distance: string;
  time: string;
  terrain: string;
  description: string;
};

type RouteItineraryProps = {
  routeName: string;
  detailedItinerary: DayDetail[];
};

function DayCard({ detail, isOpen, onToggle }: { detail: DayDetail; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden transition-colors hover:border-secondary/30">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-4 md:p-5 text-left"
      >
        <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/20 text-secondary font-bold flex items-center justify-center text-sm">
          D{detail.day}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-light font-semibold text-sm md:text-base truncate">
            {detail.title}
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
            <span className="text-light/50 text-xs">{detail.elevation}</span>
            <span className="text-light/50 text-xs">{detail.distance}</span>
            <span className="text-light/50 text-xs">{detail.time}</span>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-light/40 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 md:px-5 pb-5 pt-0">
            <div className="border-t border-white/5 pt-4">
              <div className="inline-block bg-primary/50 text-secondary text-xs font-medium px-3 py-1 rounded-full mb-3">
                {detail.terrain}
              </div>
              <p className="text-light/70 text-sm leading-relaxed">
                {detail.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RouteItinerary({ routeName, detailedItinerary }: RouteItineraryProps) {
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-2 py-3 text-secondary text-sm font-semibold hover:text-secondary/80 transition-colors"
      >
        {isExpanded ? "Hide" : "View"} Day-by-Day Itinerary
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 pt-3">
            {detailedItinerary.map((detail) => (
              <DayCard
                key={detail.day}
                detail={detail}
                isOpen={openDay === detail.day}
                onToggle={() => setOpenDay(openDay === detail.day ? null : detail.day)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
