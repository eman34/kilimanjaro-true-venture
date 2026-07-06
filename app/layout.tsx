import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { COMPANY } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kilimanjaro True Venture — Local Tour Operator in Tanzania",
    template: "%s | Kilimanjaro True Venture",
  },
  description:
    "Climb Kilimanjaro and safari the Serengeti with a tour operator that's locally owned and run in Arusha, Tanzania. Local guides and crews on every trip. Plan directly with us on WhatsApp.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kilimanjaro True Venture",
    url: "/",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Trekkers on the trail toward Kilimanjaro's snow-capped summit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: COMPANY.name,
            url: SITE_URL,
            logo: `${SITE_URL}/images/brand/logo.png`,
            email: COMPANY.email,
            telephone: COMPANY.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Sekei",
              addressLocality: "Arusha",
              addressCountry: "TZ",
            },
            areaServed: "Tanzania",
          }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
