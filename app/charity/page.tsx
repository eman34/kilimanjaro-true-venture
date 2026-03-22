import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Charity Climbs & Community Impact",
  description:
    "Learn about Abu Hope Foundation and how Kilimanjaro True Venture supports local communities in Tanzania through charity climbs and community initiatives.",
};

export default function CharityPage() {
  return (
    <>
      <Hero
        title="Charity Climbs & Community Impact"
        subtitle="Adventure with purpose. Support communities while experiencing the beauty of Mount Kilimanjaro."
        ctaText="Learn More"
        ctaHref="#impact"
        backgroundImage="/images/summit-panorama.jpg"
        compact
      />

      {/* Giving Back Through Adventure */}
      <section id="impact" className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-8 text-center">
            Giving Back Through Adventure
          </h2>
          <div className="space-y-6 text-light/70 leading-relaxed">
            <p>
              At Kilimanjaro True Venture, adventure is not only about reaching the summit. It is also about creating a positive impact in the communities that make these journeys possible. Through our community initiative, Abu Hope Foundation, we aim to connect travel with meaningful change and social responsibility.
            </p>
            <p>
              Founded in 2019 by Abdallah Athumani (Abu), Abu Hope Foundation works to support local communities in Tanzania through initiatives focused on health, education, and environmental awareness. The foundation was created from a deep desire to give back to the communities surrounding the mountains and national parks that are at the heart of Tanzania's tourism industry.
            </p>
            <p>
              Many of the people who live near Mount Kilimanjaro and the tourism regions of northern Tanzania face challenges in accessing basic resources such as education opportunities, health services, and environmental support. Through Abu Hope Foundation, we aim to contribute to small but meaningful improvements that help empower communities and create long-term positive change.
            </p>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-12 text-center">
            How You Can Help
          </h2>
          <div className="space-y-8">
            {/* Participate in Community */}
            <div className="bg-dark rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Participate in Community Activities
              </h3>
              <p className="text-light/70 leading-relaxed">
                Guests traveling with Kilimanjaro True Venture are welcome to become part of these efforts. Visitors who are interested in learning more about the foundation or participating in community activities can inform us in advance, and we will gladly organize opportunities for them to meet the local community and see the work of the foundation firsthand.
              </p>
            </div>

            {/* Adventure for Charity */}
            <div className="bg-dark rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Adventure for Charity Climbs
              </h3>
              <p className="text-light/70 leading-relaxed">
                We encourage what we call Adventure for Charity—special climbing experiences where travelers can combine their journey with a purpose by supporting community initiatives through fundraising or direct involvement. These charity climbs allow guests not only to experience the challenge and beauty of climbing Mount Kilimanjaro but also to contribute to projects that help local communities thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-8 text-center">
            Our Mission
          </h2>
          <div className="space-y-6 text-light/70 leading-relaxed">
            <p className="text-light text-lg text-center font-semibold">
              To empower communities and inspire hope.
            </p>
            <p>
              We believe that tourism can be a force for good, bringing people from around the world together while creating opportunities that benefit the communities that make these adventures possible. Through Abu Hope Foundation, our mission is simple but powerful: to create lasting positive change in the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Abu's Words */}
      <section className="section-padding bg-gradient-to-b from-dark to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-light italic leading-relaxed mb-6">
            "I started as a porter because I had no choice. I became a guide because I wanted to. I built this company because I believed tourism could be fair. The mountain taught me that. The people taught me that. Abu Hope Foundation is my way of saying thank you—and making sure the next generation of Tanzanian kids don't have to start where I started."
          </blockquote>
          <p className="text-secondary font-semibold">
            — Abdallah Athumani (Abu)
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
