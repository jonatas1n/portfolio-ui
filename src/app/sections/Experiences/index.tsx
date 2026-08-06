"use server"

import { SectionCard } from "@/components/SectionCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceList } from "./ExperiencesList";

export const Experiences = async () => {
  return (
    <SectionCard id="experiences">
      <div className="grid gap-4">
        <SectionHeading section="journey" />
        <ExperienceList />
      </div>
    </SectionCard>
  );
};
