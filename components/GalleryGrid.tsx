"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

const CATEGORIES = ["All", "Summit", "Wildlife", "Guides", "Landscape"];

type GalleryImage = (typeof GALLERY_IMAGES)[0];

function getGridClasses(span: string): string {
  switch (span) {
    case "large":
      return "lg:col-span-2 lg:row-span-2";
    case "wide":
      return "lg:col-span-2 lg:row-span-1";
    default:
      return "lg:col-span-1 lg:row-span-1";
  }
}

function getAspectRatio(span: string): string {
  switch (span) {
    case "large":
      return "lg:aspect-square aspect-[4/3]";
    case "wide":
      return "lg:aspect-[2/1] aspect-[4/3]";
    default:
      return "aspect-[4/3]";
  }
}

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages: GalleryImage[] =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex(Math.max(0, lightboxIndex - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex(Math.min(filteredImages.length - 1, lightboxIndex + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

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

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-max lg:auto-rows-fr">
        {filteredImages.map((img, index) => (
          <figure
            key={img.src}
            onClick={() => setLightboxIndex(index)}
            className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-dark-lighter cursor-pointer transition-transform duration-300 hover:scale-105 ${getGridClasses(img.span)} ${getAspectRatio(img.span)}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark to-transparent p-4 pt-12">
              <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                {img.category}
              </span>
              <p className="text-light text-sm font-medium mt-1">{img.alt}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentImage && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 text-light hover:text-secondary transition-colors z-10"
            aria-label="Close lightbox"
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

          {/* Main Image Container */}
          <div
            className="relative w-full h-[70vh] max-w-5xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 80vw"
              priority
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

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-center">
            <p className="text-secondary text-sm font-semibold uppercase tracking-wider">
              {currentImage.category}
            </p>
            <p className="text-light text-lg mt-2">{currentImage.alt}</p>
            <p className="text-light/60 text-sm mt-2">
              {lightboxIndex + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
