"use client";

import { useState } from "react";
import { TOUR_INTERESTS } from "@/lib/constants";

interface InquiryFormProps {
  defaultTour?: string;
  compact?: boolean;
}

export default function InquiryForm({
  defaultTour = "",
  compact = false,
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-dark-lighter rounded-2xl p-8 md:p-12 border border-secondary/30 text-center">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-light mb-2">Thank You!</h3>
        <p className="text-light/70">
          Your inquiry has been sent. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-secondary hover:text-yellow-400 transition-colors font-medium"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark-lighter rounded-2xl p-8 md:p-12 border border-white/10"
    >
      <div className={`grid gap-6 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="block text-light text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-dark border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:border-secondary focus:outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-light text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-dark border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:border-secondary focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-light text-sm font-medium mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="w-full bg-dark border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:border-secondary focus:outline-none transition-colors"
            placeholder="Your country"
          />
        </div>
        <div>
          <label htmlFor="tour" className="block text-light text-sm font-medium mb-2">
            Tour Interest *
          </label>
          <select
            id="tour"
            name="tour"
            required
            defaultValue={defaultTour}
            className="w-full bg-dark border border-white/20 rounded-lg px-4 py-3 text-light focus:border-secondary focus:outline-none transition-colors"
          >
            <option value="">Select a tour</option>
            {TOUR_INTERESTS.map((tour) => (
              <option key={tour} value={tour}>
                {tour}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="dates" className="block text-light text-sm font-medium mb-2">
            Preferred Dates
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            className="w-full bg-dark border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:border-secondary focus:outline-none transition-colors"
            placeholder="e.g. June 2026"
          />
        </div>
        <div>
          <label htmlFor="groupSize" className="block text-light text-sm font-medium mb-2">
            Group Size
          </label>
          <input
            type="number"
            id="groupSize"
            name="groupSize"
            min="1"
            max="50"
            className="w-full bg-dark border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:border-secondary focus:outline-none transition-colors"
            placeholder="Number of people"
          />
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <label htmlFor="message" className="block text-light text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-dark border border-white/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:border-secondary focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your dream adventure..."
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-accent text-sm">
            Something went wrong. Please try again or contact us directly.
          </p>
        )}
      </div>
    </form>
  );
}
