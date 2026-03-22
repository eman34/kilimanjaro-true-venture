'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/lib/constants';

// Exclude Abu (shown separately as founder in Leadership section)
const CAROUSEL_MEMBERS = TEAM_MEMBERS.slice(1);

export default function TeamCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();
  const resetPointRef = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Calculate reset point: where the second set of items begins
    const measureResetPoint = () => {
      const items = Array.from(container.children).filter(
        (child) => child.classList.contains('flex-shrink-0')
      ) as HTMLElement[];

      const firstDuplicateItem = items[CAROUSEL_MEMBERS.length];
      if (!firstDuplicateItem) return null;

      const resetPoint = firstDuplicateItem.offsetLeft;
      if (resetPoint <= container.clientWidth) return null;

      return resetPoint;
    };

    // Measure on next frame after layout settles
    const measureTimer = setTimeout(() => {
      const resetPoint = measureResetPoint();
      if (resetPoint === null) return;

      resetPointRef.current = resetPoint;

      // Start animation
      const animate = () => {
        container.scrollLeft += 0.5; // 30px per second at 60fps

        // Reset to beginning when reaching duplicate set
        if (resetPointRef.current !== null && container.scrollLeft >= resetPointRef.current) {
          container.scrollLeft = 0;
        }

        animationIdRef.current = requestAnimationFrame(animate);
      };

      animationIdRef.current = requestAnimationFrame(animate);
    }, 100);

    // Prevent manual interaction
    const preventScroll = (e: WheelEvent) => e.preventDefault();
    const preventPointer = (e: PointerEvent) => e.preventDefault();

    container.addEventListener('wheel', preventScroll as EventListener, { passive: false });
    container.addEventListener('pointerdown', preventPointer as EventListener, { passive: false });

    return () => {
      clearTimeout(measureTimer);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      container.removeEventListener('wheel', preventScroll);
      container.removeEventListener('pointerdown', preventPointer);
    };
  }, []);

  return (
    <div className="py-16">
      <h3 className="text-3xl md:text-4xl font-bold text-light mb-10 text-center">
        Meet Our Team
      </h3>

      {/* Scrollable carousel container */}
      <style jsx>{`
        .carousel-container::-webkit-scrollbar {
          display: none;
        }
        .carousel-container {
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
      <div
        ref={scrollContainerRef}
        className="carousel-container flex gap-6 overflow-x-hidden px-8 md:px-12 pb-2 cursor-default select-none"
      >
        {/* Duplicate team members for infinite loop */}
        {[...CAROUSEL_MEMBERS, ...CAROUSEL_MEMBERS].map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
            style={{
              minWidth: 'clamp(280px, 100%, 400px)',
            }}
          >
            <div className="bg-dark-lighter rounded-xl overflow-hidden border border-white/10 h-full flex flex-col">
              {/* Image */}
              <div className="h-48 relative flex-shrink-0">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 text-center -mt-6 relative flex-1 flex flex-col justify-center">
                <h4 className="text-lg font-bold text-light mb-1">
                  {member.name}
                </h4>
                <p className="text-secondary font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-light/60 text-sm leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
