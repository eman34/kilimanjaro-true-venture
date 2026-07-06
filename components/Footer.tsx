import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const whatsappDigits = COMPANY.whatsapp.replace(/[^0-9]/g, "");

const COLUMNS = [
  {
    title: "Climbing",
    links: [
      { label: "Lemosho", href: "/tours/kilimanjaro/lemosho" },
      { label: "Machame", href: "/tours/kilimanjaro/machame" },
      { label: "All Kilimanjaro routes", href: "/tours/kilimanjaro" },
      { label: "Mount Meru", href: "/tours/meru" },
    ],
  },
  {
    title: "Safari",
    links: [
      { label: "Serengeti Migration", href: "/tours/safaris/serengeti-migration" },
      { label: "Tarangire & Manyara", href: "/tours/safaris/tarangire-ngorongoro-manyara" },
      { label: "Serengeti & Ngorongoro", href: "/tours/safaris/serengeti-ngorongoro" },
      { label: "All safaris", href: "/tours/safaris" },
    ],
  },
  {
    title: "Other Adventures",
    links: [
      { label: "Zanzibar", href: "/tours/zanzibar" },
      { label: "Cultural Experiences", href: "/tours/cultural" },
      { label: "Gorilla Trekking", href: "/tours/gorilla-trekking" },
      { label: "Charity Climb", href: "/tours/charity-climb" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-olive">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-gold font-bold mb-4 uppercase text-sm tracking-wider underline underline-offset-4 decoration-gold/40">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={`${link.label}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-paper/75 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-gold font-bold mb-4 uppercase text-sm tracking-wider underline underline-offset-4 decoration-gold/40">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-paper/75">
              <li>
                <a
                  href={`https://wa.me/${whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-gold transition-colors"
                >
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {COMPANY.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2 hover:text-gold transition-colors"
                >
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {COMPANY.address}
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-paper/75 hover:text-gold transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-gold hover:text-paper transition-colors font-medium"
                >
                  Send a message
                  <span aria-hidden>→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-paper/15 text-center text-paper/60 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
