import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Get in touch with Kilimanjaro True Venture. Send an inquiry for Kilimanjaro climbs, Mount Meru treks, wildlife safaris, Zanzibar holidays, or cultural experiences — and choose to hear back by email or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-paper pt-14 pb-8">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-olive mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-olive/80">
            Tell us what you&apos;re planning — a Kilimanjaro climb, a safari, or
            both. Send us a message on WhatsApp or by email.
          </p>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto" id="inquiry">
          <h2 className="text-2xl font-bold text-olive mb-2">
            Send a detailed inquiry
          </h2>
          <p className="text-olive/70 mb-6">
            The more you tell us — routes, dates, group size — the better the
            itinerary we can put together for you.
          </p>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
