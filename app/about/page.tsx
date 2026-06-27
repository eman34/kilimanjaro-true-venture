import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import SectionDivider from "@/components/SectionDivider";
import { TEAM_MEMBERS, MOUNTAIN_CREW, SAFARI_CREW } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kilimanjaro True Venture — a locally owned and operated adventure company based in Arusha, Tanzania. Founded by Abdallah Athumani (Abu), a former porter turned professional mountain guide.",
};

const VALUES = [
  {
    title: "Safety, Respect, Hard Work & Integrity",
    description:
      "These are the core values shaped by our founder's journey from porter to professional guide. Every expedition is built on these principles.",
  },
  {
    title: "Ethical Porter Treatment",
    description:
      "Our founder's experience as a former porter ensures fair wages, proper equipment, safe working conditions, proper meals, reasonable load limits, and respectful treatment for all crew.",
  },
  {
    title: "Community Empowerment",
    description:
      "A portion of our profits supports community initiatives: education initiatives, health awareness, and environmental conservation. Adventure should uplift everyone involved.",
  },
  {
    title: "Personalized Experiences",
    description:
      "No two adventurers are the same. We tailor every trip to your fitness level, interests, and preferences — because the best adventures are personal.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Story"
        backgroundImage="/images/kili-group-celebration.jpg"
      />

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-8 text-center">
            Abu&apos;s Story
          </h2>
          <div className="space-y-6 text-olive/85 leading-relaxed">
            <p>
              Kilimanjaro True Venture was founded by <strong className="text-gold-deep">Abdallah Athumani</strong>, widely known as Abu, a passionate mountain guide born and raised in the small village of Lokoro in Tarakea, located on the slopes of Mount Kilimanjaro in northern Tanzania. Growing up in the shadow of Africa&apos;s highest mountain shaped Abu&apos;s early dreams and curiosity about the world of adventure and exploration.
            </p>
            <p>
              As a child, Abu would wake up every morning and look up at the majestic mountain rising above his village. The sight of Kilimanjaro was both inspiring and mysterious to him. His father, who also worked on the mountain, often shared stories about climbers, guides, and porters who traveled from around the world to attempt the summit. These stories deeply inspired Abu and planted the first seeds of his passion for tourism and mountain guiding. He was especially fascinated by the climbers&apos; equipment and imagined himself one day becoming part of those expeditions.
            </p>
            <p>
              In 2021, Abu began his own journey on Mount Kilimanjaro, starting from the very foundation of mountain expeditions as a porter. Through dedication, determination, and a strong work ethic, he gradually progressed through several roles on the mountain. He worked as a porter, later as a camp waiter, then as a camp manager responsible for organizing daily camp operations. With experience and training, he advanced to assistant guide and eventually became a professional mountain guide.
            </p>
            <p>
              Each step of this journey gave Abu a deep understanding of the mountain, the needs of international travelers, and the importance of teamwork during a successful expedition. Over the years, he has climbed Mount Kilimanjaro many times and gained extensive experience guiding climbers from around the world.
            </p>
            <p>
              The idea to establish Kilimanjaro True Venture came from Abu&apos;s personal experiences on the mountain, especially the challenges faced by porters and crew members. Having once worked in those roles himself, he understands their struggles and believes strongly in treating every team member with respect and dignity. His vision is to build a company that not only offers unforgettable adventures to travelers but also supports local communities and improves opportunities for the people who work on the mountain.
            </p>
            <p>
              Today, Abu leads Kilimanjaro True Venture with a commitment to professionalism, safety, authenticity, and genuine Tanzanian hospitality. His goal is to build a trusted and respected company that provides life-changing adventures across Tanzania, from climbing Mount Kilimanjaro to exploring wildlife safaris and the beautiful island of Zanzibar.
            </p>
          </div>
        </div>
      </section>

      {/* Team & Crew narrative */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-8 text-center">
            Our Team &amp; Crew
          </h2>
          <div className="space-y-6 text-olive/85 leading-relaxed">
            <p>
              At Kilimanjaro True Venture, we believe that every successful adventure is made possible by a dedicated and experienced team. Our mountain and safari crews are the heart of every expedition we organize. Many members of our team have spent years working in the mountains and national parks of Tanzania, bringing deep local knowledge, professionalism, and genuine hospitality to every journey.
            </p>
            <p>
              Most of our team members come from communities surrounding Mount Kilimanjaro and Arusha, where mountain guiding and safari operations are part of everyday life. Their experience, teamwork, and passion ensure that every guest enjoys a safe, well-organized, and unforgettable adventure.
            </p>
            <p>
              Depending on the size of the group, each expedition includes a carefully selected crew made up of experienced mountain guides, assistant guides, professional cooks, camp staff, and porters. Together they work as one team with a shared mission: to help every climber reach their goal while creating an atmosphere of encouragement, safety, and positive energy throughout the journey.
            </p>
            <p>
              Our guides have extensive experience on Mount Kilimanjaro, with many having worked on the mountain for over 15 to 20 years. They are professionally trained in mountain safety, first aid, and high-altitude awareness, ensuring that every climb is conducted with the highest level of safety and care.
            </p>
            <p>
              Beyond experience, what makes our team special is their character. Our crew is known for their friendliness, motivation, and dedication to supporting climbers every step of the way. They celebrate every achievement with our guests and take pride in helping travelers experience the true spirit of adventure in Africa.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      {/* Team */}
      <section id="team" className="py-6 md:py-7 bg-paper">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive text-center mb-12">
            Meet Our Team
          </h2>
          <div className="max-w-3xl mx-auto divide-y divide-white/10">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="flex items-start gap-6 sm:gap-8 py-8 first:pt-0 last:pb-0"
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-olive">
                    {member.name}
                  </h3>
                  <p className="text-gold-deep text-xs font-semibold uppercase tracking-wider mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-base text-olive/85 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Crew */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-20">
            <div className="bg-paper rounded-xl p-8 border border-taupe/10">
              <h3 className="text-xl font-bold text-gold-deep mb-4">Mountain Crew</h3>
              <p className="text-olive/65 text-sm mb-4">Every expedition is supported by:</p>
              <ul className="space-y-3">
                {MOUNTAIN_CREW.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-olive/85">
                    <svg className="w-5 h-5 text-gold-deep shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper rounded-xl p-8 border border-taupe/10">
              <h3 className="text-xl font-bold text-gold-deep mb-4">Safari Crew</h3>
              <p className="text-olive/65 text-sm mb-4">Our safari team includes:</p>
              <ul className="space-y-3">
                {SAFARI_CREW.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-olive/85">
                    <svg className="w-5 h-5 text-gold-deep shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {role}
                  </li>
                ))}
              </ul>
              <p className="text-olive/65 text-sm mt-4">
                We operate custom 4x4 safari vehicles designed for comfort and optimal wildlife viewing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      {/* Safety & Ethics */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-olive text-center mb-4">
            Safety & Ethics
          </h2>
          <p className="text-center text-olive/75 mb-12">
            Climbing Mount Kilimanjaro requires serious preparation. Your safety is our top priority.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Certified and experienced guides",
              "Daily health checks & oxygen monitoring",
              "Emergency oxygen cylinders",
              "First aid kits",
              "Proper acclimatization schedules",
              "Clear evacuation procedures",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-parchment rounded-lg p-4 border border-taupe/10">
                <svg className="w-5 h-5 text-gold-deep shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-olive/85 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="paper" to="paper" />

      {/* Values */}
      <section className="py-6 md:py-7 bg-paper">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className="bg-paper rounded-xl p-8 border border-taupe/10"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold-deep font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-olive mb-3">{value.title}</h3>
                <p className="text-olive/75 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner seamFrom="paper" />
    </>
  );
}
