"use server"

import { SectionCard } from "@/components/SectionCard";
import * as motion from "motion/react-client";
import { ExperienceList } from "./ExperiencesList";

const EXPERIENCES_TITLE = "Journey";

export const Experiences = async () => {
  return (
    <SectionCard id="experiences">
      <div className="grid gap-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-display font-bold"
        >
          {EXPERIENCES_TITLE}
        </motion.h3>
        <ExperienceList />
      </div>
    </SectionCard>
  );
};
