"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES, GALLERY_FEATURED } from "@/lib/constants";

const CATEGORIES = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

type GalleryImage = (typeof GALLERY_IMAGES)[0];

const SHUFFLE_SEED = 0x5ea50fed;

/* Deterministic shuffle so the non-featured photos feel mixed instead of grouped
   by category. A fixed seed keeps the order identical on the server and client —
   a live Math.random() would reshuffle every render and break hydration. */
function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const arr = [...items];
  let s = seed >>> 0;
  const rand = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* Resolve GALLERY_FEATURED (file names) to real photos, in listed order.
   Unknown names are dropped so a typo or removed photo can't break the grid. */
const IMAGES_BY_SRC = new Map(GALLERY_IMAGES.map((img) => [img.src, img]));
const FEATURED: GalleryImage[] = GALLERY_FEATURED.map(
  (name) => IMAGES_BY_SRC.get(`/images/${name}`)
).filter((img): img is GalleryImage => Boolean(img));
const FEATURED_SRCS = new Set(FEATURED.map((img) => img.src));

if (process.env.NODE_ENV !== "production") {
  const missing = GALLERY_FEATURED.filter((name) => !IMAGES_BY_SRC.has(`/images/${name}`));
  if (missing.length) {
    console.warn("[gallery] GALLERY_FEATURED names not found in GALLERY_IMAGES:", missing);
  }
}

/* Featured photos first (in GALLERY_FEATURED order), then the rest. The rest are
   shuffled on the "All" view for variety, or kept in natural order per category. */
function withFeaturedFirst(list: GalleryImage[], shuffleRest: boolean): GalleryImage[] {
  const listSrcs = new Set(list.map((img) => img.src));
  const featured = FEATURED.filter((img) => listSrcs.has(img.src));
  const rest = list.filter((img) => !FEATURED_SRCS.has(img.src));
  return [...featured, ...(shuffleRest ? seededShuffle(rest, SHUFFLE_SEED) : rest)];
}

const ALL_IMAGES = withFeaturedFirst(GALLERY_IMAGES, true);

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const filteredImages: GalleryImage[] =
    activeCategory === "All"
      ? ALL_IMAGES
      : withFeaturedFirst(
          GALLERY_IMAGES.filter((img) => img.category === activeCategory),
          false
        );

  // Keyboard navigation + focus trap inside the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setLightboxIndex(Math.max(0, lightboxIndex - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
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

  function handleTouchStart(clientX: number, clientY: number) {
    touchStartRef.current = { x: clientX, y: clientY };
  }

  function handleTouchEnd(clientX: number, clientY: number) {
    if (!touchStartRef.current || lightboxIndex === null) return;
    const dx = clientX - touchStartRef.current.x;
    const dy = clientY - touchStartRef.current.y;
    touchStartRef.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dy) < 50) {
      if (dx > 0 && lightboxIndex > 0) {
        setLightboxIndex(lightboxIndex - 1);
      } else if (dx < 0 && lightboxIndex < filteredImages.length - 1) {
        setLightboxIndex(lightboxIndex + 1);
      }
    }
  }

  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] ?? null : null;

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
                ? "bg-gold text-olive-deep"
                : "border border-taupe text-olive/85 hover:border-gold/50 hover:text-olive"
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
            className="block w-full text-left relative rounded-2xl overflow-hidden border border-taupe/10 bg-parchment cursor-pointer motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-deep break-inside-avoid mb-4"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              priority={index < 2}
              placeholder="blur"
              blurDataURL={img.blurDataURL}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
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
          onTouchStart={(e) => handleTouchStart(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY)}
        >
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 text-paper hover:text-gold transition-colors z-10"
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
              placeholder="blur"
              blurDataURL={currentImage.blurDataURL}
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-paper hover:text-gold transition-colors z-10 p-3"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 text-paper hover:text-gold transition-colors z-10 p-3"
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

          {/* Counter */}
          <div
            className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-paper/75 text-xs">
              {lightboxIndex + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
