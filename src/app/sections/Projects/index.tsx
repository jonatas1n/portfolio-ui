"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import { SectionCard } from "@/app/components/SectionCard";
import { ProjectCard } from "./ProjectCard";
import { Tag } from "@/app/components/Tag";
import { Button } from "@/app/components/Button";
import { Project } from "@/app/types";
import { getFilters, makePath, PROJECTS_ROUTE } from "@/app/services";
import { X } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Projects = () => {
  const [filtersList, setFiltersList] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const swrPath = makePath(PROJECTS_ROUTE, { technologies });
  const { data: projectsList, error } = useSWR<Project[]>(swrPath, fetcher);

  const handleChangeFilters = (filter: string) => {
    if (technologies.includes(filter)) {
      setTechnologies((prevFilters) =>
        prevFilters.filter((f) => f !== filter)
      );
      return;
    }
    setTechnologies((prevFilters) => [...prevFilters, filter]);
  };

  useEffect(() => {
    getFilters().then((fetchedFilters) => {
      setFiltersList(fetchedFilters);
    });
  }, []);

  const clearFilters = () => setTechnologies([]);

  return (
    <SectionCard id="projects">
      {error ? (
        "An Error ocurred"
      ) : (
        <div className="grid gap-6">
          <div className="text-4xl font-bold font-display">Projects</div>
          {projectsList?.length ? (
            <div className="grid gap-6">
              {filtersList.length > 0 && (
                <div className="flex gap-4 items-center font-body">
                  <p className="text-accent">Filters by technology:</p>
                  {filtersList?.map((filter) => (
                    <Tag
                      key={filter}
                      onClick={() => handleChangeFilters(filter)}
                      active={technologies.includes(filter)}
                    >
                      {filter}
                    </Tag>
                  ))}
                  {technologies.length !== 0 && (
                    <p
                      onClick={clearFilters}
                      className="flex gap-1 hover:cursor-pointer text-sm items-center uppercase text-accent"
                    >
                      <X size="16" /> Clear
                    </p>
                  )}
                </div>
              )}
              <div className="grid gap-6">
                {projectsList?.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
                <div className="grid justify-end">
                  <Button>See all projects</Button>
                </div>
              </div>
            </div>
          ) : null}
          {projectsList?.length === 0 && (
            <p className="text-lg">No projects found</p>
          )}
        </div>
      )}
    </SectionCard>
  );
};
