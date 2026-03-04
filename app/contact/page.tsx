import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kilimanjaro True Venture. Send us your inquiry for Kilimanjaro climbs, Mount Meru treks, wildlife safaris, Zanzibar holidays, or cultural experiences. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/20 to-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            Ready to plan your Tanzanian adventure? Send us your details and
            our team will create a personalized itinerary within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-light mb-6">
              Send Us an Inquiry
            </h2>
            <InquiryForm />
          </div>

          {/* Contact Details Sidebar */}
          <div>
            <h2 className="text-2xl font-bold text-light mb-6">
              Contact Details
            </h2>
            <div className="space-y-6">
              <div className="bg-dark-lighter rounded-xl p-6 border border-white/10">
                <h3 className="text-secondary font-bold mb-3">Email</h3>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-light/70 hover:text-secondary transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="bg-dark-lighter rounded-xl p-6 border border-white/10">
                <h3 className="text-secondary font-bold mb-3">Phone</h3>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="text-light/70 hover:text-secondary transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div className="bg-dark-lighter rounded-xl p-6 border border-white/10">
                <h3 className="text-secondary font-bold mb-3">WhatsApp</h3>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/70 hover:text-secondary transition-colors"
                >
                  {COMPANY.whatsapp}
                </a>
                <p className="text-light/40 text-xs mt-1">
                  Click to chat with us on WhatsApp
                </p>
              </div>

              <div className="bg-dark-lighter rounded-xl p-6 border border-white/10">
                <h3 className="text-secondary font-bold mb-3">Office</h3>
                <p className="text-light/70">{COMPANY.address}</p>
              </div>

              <div className="bg-dark-lighter rounded-xl p-6 border border-white/10">
                <h3 className="text-secondary font-bold mb-3">Response Time</h3>
                <p className="text-light/70">
                  We typically respond within <strong className="text-light">24 hours</strong>.
                  For urgent inquiries, reach out via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
