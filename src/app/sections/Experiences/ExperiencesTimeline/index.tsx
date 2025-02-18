import { Experience } from "@/app/types";
import { ExperienceCard } from "../ExperienceCard";
import * as motion from "motion/react-client";

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
          <motion.div
            whileInView={{ opacity: 1, x: -38 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            key={experience.id}
            className="grid grid-flow-col gap-6 -translate-x-[2.375rem]"
          >
            <div className="rounded-full w-6 h-6 bg-dark border-accent border-2 mt-4" />
            <ExperienceCard {...experience} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
