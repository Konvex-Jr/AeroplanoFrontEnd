import { useState } from "react";
import { projects } from "../../data/projects";
import CarouselCard from "./CarouselCard";
import CarouselDots from "./CarouselDots";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const total = projects.length;
  const currentProject = projects[currentIndex];

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
    <section className="w-full bg-slate-800 px-4 py-10 sm:px-8 sm:py-14 md:py-16">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 sm:gap-6">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Projeto anterior"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-white sm:h-11 sm:w-11"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <CarouselCard
          project={currentProject}
          isFlipped={isFlipped}
          onToggle={() => setIsFlipped((prev) => !prev)}
        />

        <button
          type="button"
          onClick={goToNext}
          aria-label="Próximo projeto"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-white sm:h-11 sm:w-11"
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