import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kilimanjaro True Venture | Mount Kilimanjaro Tours & Tanzania Safaris",
    template: "%s | Kilimanjaro True Venture",
  },
  description:
    "Expert-guided Mount Kilimanjaro expeditions, Mount Meru treks, wildlife safaris, and cultural experiences in Tanzania. 95% summit success rate. Book your adventure today.",
  keywords: [
    "Kilimanjaro",
    "Mount Kilimanjaro",
    "Tanzania safari",
    "Mount Meru",
    "Kilimanjaro climbing",
    "Africa trekking",
    "Serengeti safari",
    "Tanzania tours",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kilimanjaro True Venture",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
