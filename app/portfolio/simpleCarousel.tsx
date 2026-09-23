"use client"

import { useState } from "react";
import Image from "next/image";
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
  const total = images.length;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const imgClass = fit === "contain" ? "object-contain" : "object-cover";
  const imgStyle = {
    objectPosition: imagePosition,
    transform: `scale(${imagemZoom})`,
  };

  return (
    <div className="w-full">
      <style>{`
        @keyframes carousel-fade-in {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="relative mx-auto w-full max-w-3xl px-[8%] py-4 sm:px-[10%]">
        <div className="relative aspect-[3/2] w-full">
          {/* card anterior — menor, atrás, parcialmente coberto à esquerda */}
          {total > 1 && (
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Imagem anterior"
              className="absolute left-0 top-1/2 z-10 w-[45%] -translate-x-[30%] -translate-y-1/2 cursor-pointer overflow-hidden rounded-xl bg-white opacity-60 shadow-lg transition-all duration-500"
            >
              <div
                key={`prev-${prevIndex}`}
                className="relative aspect-[3/2] w-full"
                style={{ animation: "carousel-fade-in 0.4s ease" }}
              >
                <Image
                  src={images[prevIndex]}
                  alt=""
                  fill
                  sizes="35vw"
                  className={imgClass}
                  style={imgStyle}
                />
              </div>
            </button>
          )}

          {/* card seguinte — menor, atrás, parcialmente coberto à direita */}
          {total > 1 && (
            <button
              type="button"
              onClick={goToNext}
              aria-label="Próxima imagem"
              className="absolute right-0 top-1/2 z-10 w-[45%] -translate-y-1/2 translate-x-[30%] cursor-pointer overflow-hidden rounded-xl bg-white opacity-60 shadow-lg transition-all duration-500"
            >
              <div
                key={`next-${nextIndex}`}
                className="relative aspect-[3/2] w-full"
                style={{ animation: "carousel-fade-in 0.4s ease" }}
              >
                <Image
                  src={images[nextIndex]}
                  alt=""
                  fill
                  sizes="35vw"
                  className={imgClass}
                  style={imgStyle}
                />
              </div>
            </button>
          )}

          {/* card ativo — em destaque, por cima, tamanho cheio */}
          <div
            key={`active-${currentIndex}`}
            className="absolute inset-0 z-20 overflow-hidden rounded-2xl bg-white shadow-2xl"
            style={{ animation: "carousel-fade-in 0.4s ease" }}
          >
            <Image
              src={images[currentIndex]}
              alt=""
              fill
              sizes="(max-width: 768px) 85vw, 700px"
              priority
              className={imgClass}
              style={imgStyle}
            />
          </div>
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