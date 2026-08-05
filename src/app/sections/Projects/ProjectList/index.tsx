"use client"

import useSWR from "swr";

import { Spinner } from "@/components/Spinner";
import { makePath } from "@/services";
import { PROJECTS_ROUTE } from "@/constants";
import { Project } from "@/types";
import { ProjectCard } from "../ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const ProjectList = () => {
  const { language } = useLanguage();
  const swrPath = makePath(PROJECTS_ROUTE, { lang: language });
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
      <div className="grid gap-6 h-[95vh] overflow-y-auto rounded-lg p-4">
        {projectsList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
