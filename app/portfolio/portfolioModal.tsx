"use client";

import { useEffect } from "react";
import SimpleCarousel from "./simpleCarousel";
import type { PortfolioProject } from "@/app/lib/portfolio";

interface PortfolioModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[min(80rem,150vh)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-white hover:text-slate-300"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        </button>

        <SimpleCarousel images={project.images} />
      </div>
    </div>
  );
}