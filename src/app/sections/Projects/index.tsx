"use server";

import { SectionCard } from "@/components/SectionCard";

import * as motion from "motion/react-client";
import { PROJECTS_TITLE } from "@/constants";
import { ProjectList } from "./ProjectList";

export const Projects = async () => {
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

        <ProjectList />
      </div>
    </SectionCard>
  );
};
