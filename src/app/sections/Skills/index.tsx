"use server";

import { SectionCard } from "@/components/SectionCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillList } from "./SkillList";

export const Skills = async () => {
  return (
    <SectionCard id="skills">
      <div className="grid gap-6">
        <SectionHeading section="skills" />
        <SkillList />
      </div>
    </SectionCard>
  );
};
