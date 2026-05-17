"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

const CTA_LABEL = "Get in Touch";
const CTA_HREF = "/contact";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-secondary">
              KTV
            </span>
            <span className="hidden sm:block text-light font-semibold text-sm leading-tight">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-secondary"
                    : "text-light hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href={CTA_HREF} className="btn-primary text-sm">
              {CTA_LABEL}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-light p-2.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-white/10 mt-2 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block px-4 py-3 transition-colors font-medium ${
                  isActive(link.href)
                    ? "text-secondary"
                    : "text-light hover:text-secondary"
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
    </nav>
  );
}
