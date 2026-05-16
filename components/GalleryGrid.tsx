"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES } from "@/lib/constants";

const CATEGORIES = ["All", "Kilimanjaro", "Safari"];

const CATEGORY_TOUR_LINKS: Record<string, { href: string; label: string }> = {
  Kilimanjaro: { href: "/tours/kilimanjaro", label: "See Kilimanjaro tours" },
  Safari: { href: "/tours/safaris", label: "See safari tours" },
};

type GalleryImage = (typeof GALLERY_IMAGES)[0];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const filteredImages: GalleryImage[] =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  // Keyboard navigation + focus trap inside the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex(Math.max(0, lightboxIndex - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex(Math.min(filteredImages.length - 1, lightboxIndex + 1));
      } else if (e.key === "Tab") {
        const focusables = lightboxRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  // Body scroll lock while lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [lightboxIndex]);

  // Move focus into the modal on open; restore to the opening tile on close
  useEffect(() => {
    if (lightboxIndex !== null) {
      closeButtonRef.current?.focus();
    } else if (lastTriggerRef.current) {
      const trigger = lastTriggerRef.current;
      lastTriggerRef.current = null;
      queueMicrotask(() => trigger.focus());
    }
  }, [lightboxIndex]);

  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setLightboxIndex(null);
            }}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-secondary text-dark"
                : "border border-white/20 text-light/70 hover:border-secondary/50 hover:text-light"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-7xl mx-auto">
        {filteredImages.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={(e) => {
              lastTriggerRef.current = e.currentTarget;
              setLightboxIndex(index);
            }}
            aria-label={`Open photo: ${img.alt}`}
            className="block w-full text-left relative rounded-2xl overflow-hidden border border-white/10 bg-dark-lighter cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary break-inside-avoid mb-4"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentImage && lightboxIndex !== null && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 text-light hover:text-secondary transition-colors z-10"
            aria-label="Close photo viewer"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Main Image — wrapper sized to image aspect ratio, capped at source resolution */}
          <div
            style={{
              width: `min(95vw, ${currentImage.width}px, calc(85vh * ${currentImage.width / currentImage.height}))`,
              aspectRatio: `${currentImage.width} / ${currentImage.height}`,
            }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="95vw"
              className="object-contain"
            />
          </div>

          {/* Navigation Arrows */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-light hover:text-secondary transition-colors z-10"
              aria-label="Previous image"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {lightboxIndex < filteredImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex + 1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-light hover:text-secondary transition-colors z-10"
              aria-label="Next image"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Tour link + counter */}
          <div
            className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {CATEGORY_TOUR_LINKS[currentImage.category] && (
              <Link
                href={CATEGORY_TOUR_LINKS[currentImage.category].href}
                className="text-secondary hover:text-secondary/80 transition-colors text-sm font-semibold inline-flex items-center gap-1"
              >
                {CATEGORY_TOUR_LINKS[currentImage.category].label} →
              </Link>
            )}
            <p className="text-light/60 text-xs">
              {lightboxIndex + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
