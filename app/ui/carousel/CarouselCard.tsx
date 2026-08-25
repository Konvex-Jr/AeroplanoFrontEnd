import type { Project } from "@/app/lib/projects";

interface CarouselCardProps {
  project: Project;
  isFlipped: boolean;
  onToggle: () => void;
}

export default function CarouselCard({ project, isFlipped, onToggle }: CarouselCardProps) {
  return (
    <div className="w-full" style={{ perspective: "1500px" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={isFlipped}
        aria-label={isFlipped ? "Fechar detalhes do projeto" : "Ver detalhes do projeto"}
        className="relative block aspect-[16/10] w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* frente */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt=""
              className={`h-full w-full ${project.fit === "contain" ? "object-contain" : "object-cover"}`}
              style={{
                objectPosition: project.imagePosition ?? "center",
                transform: `scale(${project.imagemZoom ?? 1})`,
              }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
              Imagem do projeto
            </div>
          )}
        </div>

        {/* verso */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {project.backImage ? (
            <img
              src={project.backImage}
              alt=""
              className={`h-full w-full ${project.fit === "contain" ? "object-contain" : "object-cover"}`}
              style={{
                objectPosition: project.imagePosition ?? "center",
                transform: `scale(${project.imagemZoom ?? 1})`,
              }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
              Detalhes do projeto
            </div>
          )}
        </div>
      </button>
    </div>
  );
}