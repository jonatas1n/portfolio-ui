"use client";

import { useState } from "react";
import useSWR from "swr";
import { SectionCard } from "@/app/components/SectionCard";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/app/types";
import { makePath, PROJECTS_ROUTE } from "@/app/services";
import { Carousel } from "@/app/components/Carousel";

import * as motion from "motion/react-client";
import { Spinner } from "@/app/components/Spinner";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const PROJECTS_TITLE = "Creations";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const swrPath = makePath(PROJECTS_ROUTE, {});
  const {
    data: projectsList,
    error,
    isLoading,
  } = useSWR<Project[]>(swrPath, fetcher);

  const nextProject = () => {
    if (selectedProject + 1 == projectsList?.length) return;
    setSelectedProject(selectedProject + 1);
  };

  const prevProject = () => {
    if (selectedProject == 0) return;
    setSelectedProject(selectedProject - 1);
  };

  if (projectsList?.length === 0 && !isLoading) {
    return null;
  }

  return (
    <SectionCard id="projects">
      <div className="grid gap-4">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-display text-dark font-bold"
        >
          {PROJECTS_TITLE}
        </motion.h3>
        {isLoading && <Spinner />}
        {projectsList?.length ? (
          <div className="grid gap-6">
            <div className="flex gap-6 text-accent-dark items-center min-h-[50vh]">
              <Carousel
                items={projectsList.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
                itemIndex={selectedProject}
                nextItem={nextProject}
                prevItem={prevProject}
              />
            </div>
          </div>
        ) : (
          error && "An Error occurred"
        )}
      </div>
    </SectionCard>
  );
};
