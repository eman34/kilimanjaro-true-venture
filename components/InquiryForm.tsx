"use client";

import { useRef, useState } from "react";
import { TOUR_INTERESTS } from "@/lib/constants";

interface InquiryFormProps {
  defaultTour?: string;
  compact?: boolean;
}

const MAX_MESSAGE_LENGTH = 2000;

function validate(data: Record<string, string>): Record<string, string> {
  const errs: Record<string, string> = {};

  if (!data.name) {
    errs.name = "Please enter your name.";
  }

  if (!data.email) {
    errs.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
    errs.email = "Please enter a valid email address.";
  }

  if (!data.tour) {
    errs.tour = "Please select a tour.";
  }

  if (data.groupSize) {
    if (!/^\d+$/.test(data.groupSize)) {
      errs.groupSize = "Group size must be a whole number between 1 and 50.";
    } else {
      const n = Number(data.groupSize);
      if (n < 1 || n > 50) {
        errs.groupSize = "Group size must be a whole number between 1 and 50.";
      }
    }
  }

  if (data.message && data.message.length > MAX_MESSAGE_LENGTH) {
    errs.message = `Message is too long. Please keep it under ${MAX_MESSAGE_LENGTH} characters.`;
  }

  return errs;
}

export default function InquiryForm({
  defaultTour = "",
  compact = false,
}: InquiryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function clearFieldError(name: string) {
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit() {
    if (!formRef.current || status === "sending") return;

    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        data[key] = value.trim();
      }
    }

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-parchment rounded-2xl p-8 md:p-12 border border-gold-deep/30 text-center">
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gold-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-olive mb-2">Thank You!</h3>
        <p className="text-olive/85">
          Your inquiry has been sent. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-gold-deep hover:text-gold-deep transition-colors font-medium"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      noValidate
      className="bg-parchment rounded-2xl p-8 md:p-12 border border-taupe"
    >
      <div className={`grid gap-6 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="block text-olive text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={() => clearFieldError("name")}
            className="w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive placeholder-olive/40 focus:border-gold-deep focus:outline-none transition-colors"
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-2 text-gold-deep text-sm">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-olive text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={() => clearFieldError("email")}
            className="w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive placeholder-olive/40 focus:border-gold-deep focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-2 text-gold-deep text-sm">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="country" className="block text-olive text-sm font-medium mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            onChange={() => clearFieldError("country")}
            className="w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive placeholder-olive/40 focus:border-gold-deep focus:outline-none transition-colors"
            placeholder="Your country"
          />
        </div>
        <div>
          <label htmlFor="tour" className="block text-olive text-sm font-medium mb-2">
            Tour Interest *
          </label>
          <select
            id="tour"
            name="tour"
            defaultValue={defaultTour}
            onChange={() => clearFieldError("tour")}
            className="w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive focus:border-gold-deep focus:outline-none transition-colors"
          >
            <option value="">Select a tour</option>
            {TOUR_INTERESTS.map((tour) => (
              <option key={tour} value={tour}>
                {tour}
              </option>
            ))}
          </select>
          {errors.tour && <p className="mt-2 text-gold-deep text-sm">{errors.tour}</p>}
        </div>
        <div>
          <label htmlFor="dates" className="block text-olive text-sm font-medium mb-2">
            Preferred Dates
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            onChange={() => clearFieldError("dates")}
            className="w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive placeholder-olive/40 focus:border-gold-deep focus:outline-none transition-colors"
            placeholder="e.g. June 2026"
          />
        </div>
        <div>
          <label htmlFor="groupSize" className="block text-olive text-sm font-medium mb-2">
            Group Size
          </label>
          <input
            type="number"
            id="groupSize"
            name="groupSize"
            min="1"
            max="50"
            step="1"
            onChange={() => clearFieldError("groupSize")}
            className="w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive placeholder-olive/40 focus:border-gold-deep focus:outline-none transition-colors"
            placeholder="Number of people"
          />
          {errors.groupSize && <p className="mt-2 text-gold-deep text-sm">{errors.groupSize}</p>}
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <label htmlFor="message" className="block text-olive text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={MAX_MESSAGE_LENGTH}
            onChange={() => clearFieldError("message")}
            className="w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive placeholder-olive/40 focus:border-gold-deep focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your dream adventure..."
          />
          {errors.message && <p className="mt-2 text-gold-deep text-sm">{errors.message}</p>}
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
          <p className="mt-3 text-gold-deep text-sm">
            Something went wrong. Please try again or get in touch directly.
          </p>
        )}
      </div>
    </form>
  );
}
