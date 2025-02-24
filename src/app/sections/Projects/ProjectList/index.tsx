"use client"

import useSWR from "swr";

import { Spinner } from "@/components/Spinner";
import { makePath } from "@/services";
import { PROJECTS_ROUTE } from "@/constants";
import { Project } from "@/types";
import { Carousel } from "@/components/Carousel";
import { ProjectCard } from "../ProjectCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const ProjectList = () => {
  const swrPath = makePath(PROJECTS_ROUTE, {});
  const {
    data: projectsList,
    error,
    isLoading,
  } = useSWR<Project[]>(swrPath, fetcher);

  if (isLoading) {
    return <Spinner />;
  }

  if (!projectsList) {
    return (
      <div className="text-red-500 font-bold">
        No projects found
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 font-bold">
        Something went wrong: {error.message}
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <div className="flex gap-6 text-accent-dark items-center min-h-[50vh]">
        <Carousel
          items={projectsList.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        />
      </div>
    </div>
  );
};
