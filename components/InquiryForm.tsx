"use client";

import { useRef, useState } from "react";
import { COMPANY } from "@/lib/constants";

const MAX_MESSAGE_LENGTH = 2000;

const WHATSAPP_DIGITS = COMPANY.whatsapp.replace(/[^0-9]/g, "");
// Where "email" inquiries are sent until the custom domain is live. Swap this
// for a working inbox (e.g. a Gmail) — the email button opens a pre-filled
// message to this address in the visitor's mail app.
const CONTACT_EMAIL = COMPANY.email;

type ContactMethod = "email" | "whatsapp";

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

  if (!data.message) {
    errs.message = "Please tell us a little about your trip.";
  } else if (data.message.length > MAX_MESSAGE_LENGTH) {
    errs.message = `Message is too long. Please keep it under ${MAX_MESSAGE_LENGTH} characters.`;
  }

  return errs;
}

export default function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [contactMethod, setContactMethod] = useState<ContactMethod>("email");
  const [sentMethod, setSentMethod] = useState<ContactMethod>("email");

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

  function handleSubmit() {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data: Record<string, string> = { contactMethod };
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
    const lines = [`Name: ${data.name}`];
    if (data.email) lines.push(`Email: ${data.email}`);
    if (data.phone) lines.push(`WhatsApp: ${data.phone}`);
    lines.push("", data.message);
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
      className="bg-parchment rounded-2xl p-8 md:p-12 border border-taupe"
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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
          <span className="block text-olive text-sm font-medium mb-2">
            How would you like to reach us? *
          </span>
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
        </div>

        {contactMethod === "email" ? (
          <div className="md:col-span-2">
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
        ) : (
          <div className="md:col-span-2">
            <label htmlFor="phone" className="block text-olive text-sm font-medium mb-2">
              WhatsApp Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={() => clearFieldError("phone")}
              className="w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive placeholder-olive/40 focus:border-gold-deep focus:outline-none transition-colors"
              placeholder="+1 555 123 4567"
            />
            <p className="mt-2 text-olive/60 text-xs">
              Include your country code so we can reach you on WhatsApp.
            </p>
            {errors.phone && <p className="mt-2 text-gold-deep text-sm">{errors.phone}</p>}
          </div>
        )}

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-olive text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={MAX_MESSAGE_LENGTH}
            onChange={() => clearFieldError("message")}
            className="w-full bg-paper border border-taupe rounded-lg px-4 py-3 text-olive placeholder-olive/40 focus:border-gold-deep focus:outline-none transition-colors resize-none"
            placeholder="Which trip you're interested in, rough dates, how many of you, and anything you'd like to know."
          />
          {errors.message && <p className="mt-2 text-gold-deep text-sm">{errors.message}</p>}
        </div>
      </div>
      <div className="mt-6">
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
