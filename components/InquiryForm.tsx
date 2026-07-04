"use client";

import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/lib/constants";

const MAX_MESSAGE_LENGTH = 2000;

const WHATSAPP_DIGITS = COMPANY.whatsapp.replace(/[^0-9]/g, "");
// Where "email" inquiries are sent until the custom domain is live. Swap this
// for a working inbox (e.g. a Gmail) — the email button opens a pre-filled
// message to this address in the visitor's mail app.
const CONTACT_EMAIL = COMPANY.email;

type ContactMethod = "email" | "whatsapp";

const ICON = "w-[18px] h-[18px] shrink-0";

const TRIPS = [
  {
    id: "kilimanjaro",
    label: "Kilimanjaro",
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 20l6-11 4 6 3-5 5 10z" />
      </svg>
    ),
  },
  {
    id: "safari",
    label: "Safari",
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <ellipse cx="12" cy="15.5" rx="3.4" ry="3" />
        <circle cx="6.6" cy="11" r="1.7" />
        <circle cx="10" cy="8" r="1.8" />
        <circle cx="14" cy="8" r="1.8" />
        <circle cx="17.4" cy="11" r="1.7" />
      </svg>
    ),
  },
  {
    id: "zanzibar",
    label: "Zanzibar",
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.1 5.1l1.4 1.4M17.5 17.5l1.4 1.4M18.9 5.1l-1.4 1.4M6.5 17.5l-1.4 1.4" />
      </svg>
    ),
  },
  {
    id: "meru",
    label: "Mount Meru",
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 20L12 7l8 13z" />
      </svg>
    ),
  },
  {
    id: "cultural",
    label: "Cultural",
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2.8 19.5c0-3.4 2.8-5.7 6.2-5.7s6.2 2.3 6.2 5.7" />
        <path d="M16.5 5.3a3 3 0 010 5.5" />
        <path d="M17.6 13.9c2.3.5 3.6 2.4 3.6 5.1" />
      </svg>
    ),
  },
  {
    id: "unsure",
    label: "Not sure yet",
    icon: (
      <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.6 9.2a2.5 2.5 0 014.9.7c0 1.7-2.5 2.1-2.5 3.6" />
        <path d="M12 17.2h.01" />
      </svg>
    ),
  },
];

// Map a ?trip= or ?route= value passed from a tour page onto a trip id.
const TRIP_PARAM_MAP: Record<string, string> = {
  kilimanjaro: "kilimanjaro",
  kili: "kilimanjaro",
  safari: "safari",
  safaris: "safari",
  zanzibar: "zanzibar",
  meru: "meru",
  "mount-meru": "meru",
  cultural: "cultural",
  culture: "cultural",
};

function validate(
  data: Record<string, string>,
  method: ContactMethod,
): Record<string, string> {
  const errs: Record<string, string> = {};

  if (!data.name) {
    errs.name = "Please enter your name.";
  }

  if (method === "email") {
    if (!data.email) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
      errs.email = "Please enter a valid email address.";
    }
  } else {
    const digits = (data.phone || "").replace(/[^0-9]/g, "");
    if (!data.phone) {
      errs.phone = "Please enter your WhatsApp number.";
    } else if (digits.length < 8 || digits.length > 15) {
      errs.phone = "Please include your country code, e.g. +255 791 137 698.";
    }
  }

  return errs;
}

const FIELD =
  "w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive placeholder-olive/40 focus:border-gold-deep focus:outline-none transition-colors";
const LABEL = "block text-olive text-sm font-medium mb-2";

export default function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [contactMethod, setContactMethod] = useState<ContactMethod>("email");
  const [sentMethod, setSentMethod] = useState<ContactMethod>("email");
  const [trips, setTrips] = useState<string[]>([]);
  const [travellers, setTravellers] = useState(2);

  // Prefill the trip when arriving from a tour page (e.g. /contact?route=machame
  // or /contact?trip=safari). Read on the client so we avoid a Suspense boundary.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preset: string[] = [];
    if (params.get("route")) preset.push("kilimanjaro");
    const trip = params.get("trip");
    if (trip) {
      const id = TRIP_PARAM_MAP[trip.toLowerCase()];
      if (id) preset.push(id);
    }
    if (preset.length) setTrips([...new Set(preset)]);
  }, []);

  function clearFieldError(name: string) {
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function chooseMethod(method: ContactMethod) {
    setContactMethod(method);
    // The other channel's field is about to unmount — drop any stale errors.
    setErrors((prev) => {
      const next = { ...prev };
      delete next.email;
      delete next.phone;
      return next;
    });
  }

  function toggleTrip(id: string) {
    setTrips((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  }

  function handleSubmit() {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        data[key] = value.trim();
      }
    }

    const validationErrors = validate(data, contactMethod);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // No backend: build a pre-filled message and hand off to WhatsApp or the
    // visitor's mail app. The inquiry is delivered by the app they send it from.
    const chosenTrips = trips
      .map((id) => TRIPS.find((t) => t.id === id)?.label)
      .filter(Boolean);

    const lines = [`Name: ${data.name}`];
    if (chosenTrips.length) lines.push(`Trip: ${chosenTrips.join(", ")}`);
    lines.push(`Travellers: ${travellers}`);
    if (data.when) lines.push(`When: ${data.when}`);
    if (data.email) lines.push(`Email: ${data.email}`);
    if (data.phone) lines.push(`WhatsApp: ${data.phone}`);
    if (data.message) lines.push("", data.message);
    const body = lines.join("\n");

    try {
      if (contactMethod === "whatsapp") {
        window.open(
          `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(body)}`,
          "_blank",
          "noopener,noreferrer",
        );
      } else {
        const subject = `Trip inquiry from ${data.name}`;
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
      }
      setSentMethod(contactMethod);
      setStatus("sent");
      formRef.current.reset();
      setTrips([]);
      setTravellers(2);
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
        <h3 className="text-2xl font-bold text-olive mb-2">Almost there!</h3>
        <p className="text-olive/85">
          {sentMethod === "whatsapp"
            ? "We've opened WhatsApp with your message ready to go — just tap send and it reaches us."
            : "We've opened your email app with your message ready to go — just hit send and it reaches us."}
        </p>
        <p className="text-olive/60 text-sm mt-3">
          {sentMethod === "whatsapp" ? (
            <>
              Nothing opened?{" "}
              <a
                href={`https://wa.me/${WHATSAPP_DIGITS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-deep font-medium hover:text-olive transition-colors"
              >
                Message us on WhatsApp
              </a>
              .
            </>
          ) : (
            <>
              Nothing opened? Email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold-deep font-medium hover:text-olive transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </>
          )}
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
      className="bg-parchment rounded-2xl p-6 sm:p-8 md:p-10 border border-taupe"
    >
      <div className="space-y-7">
        {/* Trip — elevated icon chips */}
        <div>
          <span className={LABEL}>
            Which trip?{" "}
            <span className="text-olive/50 font-normal">pick any</span>
          </span>
          <div className="flex flex-wrap gap-2.5">
            {TRIPS.map((t) => {
              const active = trips.includes(t.id);
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => toggleTrip(t.id)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all ${
                    active
                      ? "border-gold bg-gold text-olive-deep font-semibold shadow-[0_4px_12px_-3px_rgba(133,93,13,0.4)]"
                      : "border-taupe bg-paper text-olive hover:border-gold/60 hover:shadow-sm"
                  }`}
                >
                  <span className={active ? "" : "text-gold-deep"}>{t.icon}</span>
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Travellers + When */}
        <div className="flex flex-wrap gap-x-8 gap-y-6">
          <div>
            <span className={LABEL}>Travellers</span>
            <div className="inline-flex items-center gap-4 bg-paper border border-taupe rounded-lg px-4 py-2.5">
              <button
                type="button"
                aria-label="Fewer travellers"
                onClick={() => setTravellers((n) => Math.max(1, n - 1))}
                className="text-gold-deep hover:text-olive transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="text-olive font-bold w-6 text-center">{travellers}</span>
              <button
                type="button"
                aria-label="More travellers"
                onClick={() => setTravellers((n) => Math.min(20, n + 1))}
                className="text-gold-deep hover:text-olive transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 min-w-[180px]">
            <label htmlFor="when" className={LABEL}>
              When?
            </label>
            <input
              type="text"
              id="when"
              name="when"
              className={FIELD}
              placeholder="e.g. June 2026, or flexible"
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className={LABEL}>
            Full name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={() => clearFieldError("name")}
            className={FIELD}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-2 text-gold-deep text-sm">{errors.name}</p>}
        </div>

        {/* Reach us */}
        <div>
          <span className={LABEL}>How would you like to reach us? *</span>
          <div className="flex w-full bg-paper border border-taupe rounded-lg p-1">
            {([
              {
                value: "email" as const,
                label: "Email",
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                value: "whatsapp" as const,
                label: "WhatsApp",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
              },
            ]).map((opt) => {
              const active = contactMethod === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => chooseMethod(opt.value)}
                  aria-pressed={active}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active ? "bg-olive text-paper" : "text-olive/70 hover:text-olive"
                  }`}
                >
                  {opt.icon}
                  {opt.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4">
            {contactMethod === "email" ? (
              <>
                <label htmlFor="email" className={LABEL}>
                  Email address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={() => clearFieldError("email")}
                  className={FIELD}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-2 text-gold-deep text-sm">{errors.email}</p>}
              </>
            ) : (
              <>
                <label htmlFor="phone" className={LABEL}>
                  WhatsApp number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={() => clearFieldError("phone")}
                  className={FIELD}
                  placeholder="+1 555 123 4567"
                />
                {errors.phone && <p className="mt-2 text-gold-deep text-sm">{errors.phone}</p>}
              </>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={LABEL}>
            Anything else?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={MAX_MESSAGE_LENGTH}
            className={`${FIELD} resize-none`}
            placeholder="Rough plans, questions, must-sees, mobility needs…"
          />
        </div>
      </div>

      <div className="mt-8">
        <button type="submit" className="btn-primary w-full md:w-auto">
          {contactMethod === "whatsapp" ? "Send on WhatsApp" : "Send by email"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-gold-deep text-sm">
            Something went wrong opening your app. Please try again or reach us
            directly.
          </p>
        )}
      </div>
    </form>
  );
}
