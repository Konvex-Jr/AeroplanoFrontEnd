"use client";

import { useState } from "react";
import { portfolioProjects, type PortfolioProject } from "@/app/lib/portfolio";
import PortfolioCard from "./portfolioCard";
import PortfolioModal from "./portfolioModal";

// Único trecho interativo (estado do modal). O resto da página é Server Component.
export default function PortfolioGrid() {
  const [openProject, setOpenProject] = useState<PortfolioProject | null>(null);

  return (
    <>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:max-w-352 lg:gap-8 lg:px-8">
        {portfolioProjects.map((project, index) => (
          <PortfolioCard
            key={project.id}
            project={project}
            eager={index < 3}
            onOpen={() => setOpenProject(project)}
          />
        ))}
      </div>

      {openProject && (
        <PortfolioModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </>
  );
}
