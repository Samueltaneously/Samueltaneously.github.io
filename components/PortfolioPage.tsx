
"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { Projects } from "./Projects";
import { Engineering } from "./Engineering";

type Project = (typeof portfolio.projects)[number];

export function PortfolioPage() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const handleArchitectureClick = (project: Project) => {
    setSelectedProject(project);

    // Navigate to the engineering section.
    document.getElementById("engineering")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Default to the first project with architecture data.
  const defaultProject =
    portfolio.projects.find((project) => project.Architecture) ??
    null;

  const activeProject = selectedProject ?? defaultProject;

  return (
    <>
      <Projects
        projects={portfolio.projects}
        onArchitectureClick={handleArchitectureClick}
      />

      <Engineering
        projectTitle={activeProject?.title}
        architecture={activeProject?.Architecture}
      />
    </>
  );
}
