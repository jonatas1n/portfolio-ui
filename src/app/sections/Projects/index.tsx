"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import { SectionCard } from "@/app/components/SectionCard";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/app/components/Button";
import { Project } from "@/app/types";
import { getProjectFilters, makePath, PROJECTS_ROUTE } from "@/app/services";
import { Filter } from "@/app/components/Filter";

import * as motion from "motion/react-client";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const PROJECTS_TITLE = "Creations";

export const Projects = () => {
  const [filtersList, setFiltersList] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const swrPath = makePath(PROJECTS_ROUTE, { technologies });
  const { data: projectsList, error } = useSWR<Project[]>(swrPath, fetcher);

  const handleChangeFilters = (filter: string) => {
    if (technologies.includes(filter)) {
      setTechnologies((prevFilters) => prevFilters.filter((f) => f !== filter));
      return;
    }
    setTechnologies((prevFilters) => [...prevFilters, filter]);
  };

  useEffect(() => {
    getProjectFilters().then((fetchedFilters) => {
      setFiltersList(fetchedFilters);
    });
  }, []);

  const clearFilters = () => setTechnologies([]);

  if (projectsList?.length === 0) {
    return null;
  }

  return (
    <SectionCard id="projects">
      <div className="grid gap-4">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-display font-bold"
        >
          {PROJECTS_TITLE}
        </motion.h3>
        {projectsList?.length ? (
          <div className="grid gap-6">
            <Filter
              filtersList={filtersList}
              onClear={clearFilters}
              onChange={handleChangeFilters}
              technologies={technologies}
            />
            <div className="grid gap-6">
              {projectsList?.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
              <div className="grid sm:justify-end justify-center">
                <Button>See all projects</Button>
              </div>
            </div>
          </div>
        ) : (
          error && "An Error occurred"
        )}
      </div>
    </SectionCard>
  );
};
