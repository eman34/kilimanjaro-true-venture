"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light mb-4">
          What Our Adventurers Say
        </h2>
        <p className="text-center text-light/60 mb-12">
          Real stories from real travelers
        </p>

        <div className="relative">
          <div className="bg-dark rounded-2xl p-8 md:p-12 border border-white/10">
            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-light/90 text-center leading-relaxed mb-8">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="text-secondary font-bold">{testimonial.name}</p>
              <p className="text-light/50 text-sm">{testimonial.location}</p>
              <p className="text-light/40 text-xs mt-1">{testimonial.tour}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary hover:text-dark transition-all flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? "bg-secondary w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary hover:text-dark transition-all flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
