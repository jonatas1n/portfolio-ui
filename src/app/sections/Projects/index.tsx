"use server";

import { SectionCard } from "@/components/SectionCard";
import { ProjectList } from "./ProjectList";

export const Projects = async () => {
  return (
    <SectionCard id="projects">
      <ProjectList />
    </SectionCard>
  );
};
