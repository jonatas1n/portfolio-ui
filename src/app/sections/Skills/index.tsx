"use server";

import { SectionCard } from "@/components/SectionCard";

import * as motion from "motion/react-client";
import { SkillList } from "./SkillList";

export const Skills = async () => {
  return (
    <SectionCard id="skills">
      <div className="grid gap-6">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-display font-bold"
        >
          Skills
        </motion.h3>
        <SkillList />
      </div>
    </SectionCard>
  );
};
