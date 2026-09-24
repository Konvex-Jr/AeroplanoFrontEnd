"use client";

import { useState } from "react";
import Nav from "../ui/Nav";
import { portfolioProjects, type PortfolioProject } from "@/app/lib/portfolio";
import PortfolioCard from "./portfolioCard";
import PortfolioModal from "./portfolioModal";
import Footer from "../ui/Footer";

export default function Page() {
  const [openProject, setOpenProject] = useState<PortfolioProject | null>(null);

  return (
    <div>
      <Nav className="relative" />

      <section className="w-full bg-[#e6eef9] px-4 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:max-w-352 lg:gap-8 lg:px-8">
          {portfolioProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onOpen={() => setOpenProject(project)}
            />
          ))}
        </div>
      </section>

      {openProject && (
        <PortfolioModal project={openProject} onClose={() => setOpenProject(null)} />
      )}

      <Footer id="#footer" />
    </div>
  );
}