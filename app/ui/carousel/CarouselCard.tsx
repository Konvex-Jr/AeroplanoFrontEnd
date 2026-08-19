import type { Project } from "@/app/lib/projects";
import Image from "next/image";

interface CarouselCardProps {
  project: Project;
  isFlipped: boolean;
  onToggle: () => void;
}

export default function CarouselCard({ project, isFlipped, onToggle }: CarouselCardProps) {
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl" style={{ perspective: "1500px" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={isFlipped}
        aria-label={isFlipped ? "Fechar descrição do projeto" : "Ver descrição do projeto"}
        className="relative block h-64 w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left transition-transform duration-500 sm:h-80 md:h-96"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Frente do card: imagem do projeto (2ª print que você mandou) */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          {project.image ? (
            <Image src={project.image} alt={project.title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
              Imagem do projeto
            </div>
          )}
          <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{project.title}</h3>
            <p className="text-sm text-slate-600">{project.client}</p>
          </div>
        </div>

        {/* Verso do card: descrição (1ª print que você mandou) */}
        <div
          className="absolute inset-0 flex flex-col justify-center overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-10"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{project.title}</h3>
          <p className="mb-4 text-sm text-slate-500">{project.client}</p>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{project.description}</p>
        </div>
      </button>
    </div>
  );
}