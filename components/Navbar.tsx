"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import SearchModal from "@/components/SearchModal";

const CTA_LABEL = "Get in Touch";
const CTA_HREF = "/contact";

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const normalize = (path: string) => path.replace(/\/+$/, "") || "/";
  const isActive = (href: string) =>
    pathname !== null && normalize(pathname) === normalize(href);

  return (
    <nav className="sticky top-0 z-50 bg-paper border-b border-taupe">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/brand/logo-nav.png"
              alt={COMPANY.name}
              width={575}
              height={263}
              priority
              className="h-12 md:h-14 w-auto mix-blend-multiply"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-gold-deep font-semibold"
                    : "text-olive hover:text-gold-deep"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="p-2 text-olive hover:text-gold-deep transition-colors"
            >
              <SearchIcon />
            </button>
            <Link href={CTA_HREF} className="btn-primary text-sm">
              {CTA_LABEL}
            </Link>
          </div>

          {/* Mobile cluster: search + menu toggle */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="p-2.5 text-olive"
            >
              <SearchIcon />
            </button>
            <button
              className="text-olive p-2.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-taupe mt-2 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block px-4 py-3 transition-colors font-medium ${
                  isActive(link.href)
                    ? "text-gold-deep font-semibold"
                    : "text-olive hover:text-gold-deep"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 mt-4">
              <Link
                href={CTA_HREF}
                className="btn-primary block text-center"
                onClick={() => setMobileOpen(false)}
              >
                {CTA_LABEL}
              </Link>
            </div>
          </div>
        )}
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  );
}
