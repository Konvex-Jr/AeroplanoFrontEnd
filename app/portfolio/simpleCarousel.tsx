"use client"

import { useState, useRef, useEffect } from "react";
import CarouselDots from "@/app/ui/carousel/CarouselDots";

interface SimpleCarouselProps {
  images: string[];
  imagePosition?: string;
  imagemZoom?: number;
  fit?: "cover" | "contain";
}

export default function SimpleCarousel({
  images,
  imagePosition = "center",
  imagemZoom = 1,
  fit = "cover",
}: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = images.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.children[currentIndex + 1] as HTMLElement;
    if (!slide) return;

    const target =
      slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2;

    track.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      <div className="relative w-full">
        <style>{`.simple-carousel-track::-webkit-scrollbar { display: none; }`}</style>

        <div
          ref={trackRef}
          className="simple-carousel-track flex py-6"
          style={{ overflowX: "scroll", scrollbarWidth: "none" } as React.CSSProperties}
        >
          <div className="w-[7.5%] md:w-[10%] shrink-0" />

          {images.map((src, index) => {
            const isActive = index === currentIndex;
            return (
              <div key={src + index} className="w-[85%] md:w-[80%] shrink-0">
                <div
                  onClick={() => {
                    if (!isActive) goToSlide(index);
                  }}
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.95)",
                    opacity: isActive ? 1 : 0.5,
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
                    cursor: isActive ? "default" : "pointer",
                  }}
                  className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-white shadow-xl"
                >
                  <img
                    src={src}
                    alt=""
                    className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
                    style={{
                      objectPosition: imagePosition,
                      transform: `scale(${imagemZoom})`,
                    }}
                  />
                </div>
              </div>
            );
          })}

          <div className="w-[7.5%] md:w-[10%] shrink-0" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-slate-700"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <CarouselDots total={total} currentIndex={currentIndex} onDotClick={goToSlide} />

        <button
          type="button"
          onClick={goToNext}
          aria-label="Próximo"
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-slate-700"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}