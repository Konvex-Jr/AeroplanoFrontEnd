import { useState, useRef, useEffect } from "react";
import { projects } from "../../data/projects";
import CarouselCard from "./CarouselCard";
import CarouselDots from "./CarouselDots";

// Active card occupies 82% of the container; 9% peek on each side.
const CARD_PCT = 82;
const PEEK_PCT = (100 - CARD_PCT) / 2; // 9

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = projects.length;

  // Scroll to center the active card whenever currentIndex changes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // children[0] = leading spacer, children[1..N] = slides
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
    <section className="w-full bg-[#69696B] py-10 sm:py-14 md:py-16">
      <div className="relative">
        <style>{`.carousel-track::-webkit-scrollbar { display: none; }`}</style>

        <div
          ref={trackRef}
          className="carousel-track flex"
          style={{ overflowX: "scroll", scrollbarWidth: "none" } as React.CSSProperties}
        >
          {/* Leading spacer — allows card 0 to be centered */}
          <div className="flex-shrink-0" style={{ width: `${PEEK_PCT}%` }} />

          {projects.map((project, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={project.id ?? index}
                className="flex-shrink-0 px-2 sm:px-3"
                style={{ width: `${CARD_PCT}%` }}
              >
                <div
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.93)",
                    opacity: isActive ? 1 : 0.55,
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

          {/* Trailing spacer — allows last card to be centered */}
          <div className="flex-shrink-0" style={{ width: `${PEEK_PCT}%` }} />
        </div>

        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Projeto anterior"
          className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-white sm:left-2 sm:h-11 sm:w-11"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Próximo projeto"
          className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-white sm:right-2 sm:h-11 sm:w-11"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-slate-400 sm:mt-6">
        Clique na imagem para ver os detalhes do projeto
      </p>

      <CarouselDots total={total} currentIndex={currentIndex} onDotClick={goToSlide} />
    </section>
  );
}