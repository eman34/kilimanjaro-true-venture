"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
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
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setToursOpen(true)}
                  onMouseLeave={() => setToursOpen(false)}
                >
                  <button
                    onClick={() => setToursOpen((v) => !v)}
                    className="text-light hover:text-secondary transition-colors font-medium py-2"
                  >
                    {link.label}
                    <svg
                      className={`inline-block w-4 h-4 ml-1 transition-transform ${toursOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {toursOpen && (
                    <div className="absolute top-full left-0 pt-2 w-56">
                      <div className="bg-dark-lighter rounded-lg shadow-xl border border-white/10 overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setToursOpen(false)}
                            className="block px-4 py-3 text-light hover:bg-primary hover:text-secondary transition-colors text-sm"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-light hover:text-secondary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-light p-2"
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
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-4 py-2 text-secondary font-semibold text-sm uppercase tracking-wider">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-8 py-2 text-light hover:text-secondary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-light hover:text-secondary transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="px-4 mt-4">
              <Link
                href="/contact"
                className="btn-primary block text-center"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
