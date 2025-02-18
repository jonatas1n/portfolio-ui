import { Experience } from "@/app/types";
import { ExperienceCard } from "../ExperienceCard";

type ExperiencesTimelineProps = {
  experiencesList: Experience[];
};

export const ExperiencesTimeline = ({
  experiencesList,
}: ExperiencesTimelineProps) => {
  return (
    <div className="grid grid-flow-col gap-6">
      <div className="border-r-4 border-card pl-4" />
      <div className="grid gap-10 pt-6">
        {experiencesList.map((experience) => (
          <div key={experience.id} className="grid grid-flow-col gap-6 -translate-x-[2.375rem]">
            <div className="rounded-full w-6 h-6 bg-dark border-accent border-2 mt-4"/>
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </div>
  );
};
