import Image from "next/image";
import type { PortfolioProject } from "@/app/lib/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
  onOpen: () => void;
  // Cards acima da dobra: carrega cedo (evita LCP com imagem lazy)
  eager?: boolean;
}

export default function PortfolioCard({ project, onOpen, eager = false }: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Saiba Mais sobre o projeto ${project.id}`}
      className="flex w-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white text-left shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Image
          src={project.thumbnail}
          alt=""
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className={project.fit === "contain" ? "object-contain" : "object-cover"}
          style={{
            objectPosition: project.imagePosition ?? "center",
            transform: `scale(${project.imagemZoom ?? 1})`,
          }}
        />
      </div>

      <div className="bg-slate-100 py-2 text-center text-sm text-slate-600 lg:py-3 lg:text-base">
        Saiba Mais
      </div>
    </button>
  );
}