import type { PortfolioProject } from "@/app/lib/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
  onOpen: () => void;
}

export default function PortfolioCard({ project, onOpen }: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex w-full flex-col overflow-hidden rounded-xl bg-white text-left shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100">
        <img
          src={project.thumbnail}
          alt=""
          className={`h-full w-full ${project.fit === "contain" ? "object-contain" : "object-cover"}`}
          style={{
            objectPosition: project.imagePosition ?? "center",
            transform: `scale(${project.imagemZoom ?? 1})`,
          }}
        />
      </div>

      <div className="bg-slate-100 py-2 text-center text-sm text-slate-600">
        Saiba Mais
      </div>
    </button>
  );
}