"use client"

import { useState, useRef, useEffect } from "react";
import { projects } from "@/app/lib/projects";
import CarouselCard from "./CarouselCard";
import CarouselDots from "./CarouselDots";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = projects.length;

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
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setIsFlipped(false);
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-[#DEEBF6] py-14 sm:py-20 md:py-7">
      <div className="relative w-full">
        <style>{`.carousel-track::-webkit-scrollbar { display: none; }`}</style>

        <div
          ref={trackRef}
          className="carousel-track flex py-9"
          style={{ overflowX: "scroll", scrollbarWidth: "none" } as React.CSSProperties}
        >
          {/* Espaçador inicial — acompanha a largura do card em cada breakpoint pra permitir centralizar as pontas */}
          <div className="w-[20%] md:w-[27.5%] shrink-0" />

          {projects.map((project, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={project.id ?? index}
                /* Card com 60% de largura no mobile e 45% a partir de telas md */
                className="w-[60%] md:w-[45%] shrink-0"
              >
                <div
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.97)",
                    opacity: isActive ? 1 : 0.5,
                    transition:
                      "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <CarouselCard
                    project={project}
                    isFlipped={isFlipped && isActive}
                    onToggle={() => isActive && setIsFlipped((prev) => !prev)}
                  />
                </div>
              </div>
            );
          })}

          {/* Espaçador final */}
          <div className="w-[20%] md:w-[27.5%] shrink-0" />
        </div>
      </div>

      <p className="mt-4 text-center text-s text-slate-400 sm:mt-6">
        Clique na imagem para ver os detalhes do projeto
      </p>

      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Projeto anterior"
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
          aria-label="Próximo projeto"
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-slate-700"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}