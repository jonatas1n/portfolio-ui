"use client";

import { useState } from "react";
import { SectionCard } from "@/app/components/SectionCard";
import { ProjectCard } from "./ProjectCard";
import { Tag } from "@/app/components/Tag";

export const Projects = () => {
  const technologies = ["Python", "React", "Docker", "PostgreSQL"];
  const filters = ["Most recent", "Python", "React", "Docker", "PostgreSQL"];
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  return (
    <SectionCard>
      <div className="grid gap-6">
        <div className="text-4xl font-bold font-display">Projects</div>
        <div className="flex gap-4">
          {filters.map((filter) => (
            <Tag
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              active={selectedFilter === filter}
            >
              {filter}
            </Tag>
          ))}
        </div>
        <div className="grid gap-6">
          <ProjectCard
            technologies={technologies}
            title="Project X"
            link="www.google.com"
          />
          <ProjectCard
            technologies={technologies}
            title="Project X"
            link="www.google.com"
          />
          <ProjectCard
            technologies={technologies}
            title="Project X"
            link="www.google.com"
          />
        </div>
      </div>
    </SectionCard>
  );
};
