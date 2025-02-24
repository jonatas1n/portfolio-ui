import { Experience } from "@/types";
import { ExperienceCard } from "../ExperienceCard";
import * as motion from "motion/react-client";

type ExperiencesTimelineProps = {
  experiencesList: Experience[];
};

export const ExperiencesTimeline = ({
  experiencesList,
}: ExperiencesTimelineProps) => {
  return (
    <div className="grid grid-flow-col gap-6 relative">
      <div className="border-r-4 border-card absolute h-full w-1 z-0" />
      <div className="grid gap-10 pt-6">
        {experiencesList.map((experience) => (
          <div key={experience.id} className="grid grid-flow-col md:gap-4 z-10">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="rounded-full md:w-6 md:h-6 w-4 h-4 bg-dark border-accent border-2 mt-4 md:-translate-x-[.65rem] -translate-x-[.35rem]"
            />
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </div>
  );
};
