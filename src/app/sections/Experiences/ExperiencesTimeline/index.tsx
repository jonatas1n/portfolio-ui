import { Experience } from "@/app/types";
import { ExperienceCard } from "../ExperienceCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

type ExperiencesTimelineProps = {
  experiencesList: Experience[];
};

export const ExperiencesTimeline = ({
  experiencesList,
}: ExperiencesTimelineProps) => {
  return (
    <VerticalTimeline layout="1-column-left" lineColor="#E5D9C0">
      {experiencesList?.map((experience) => (
        <VerticalTimelineElement
          position="right"
          iconStyle={{
            background: "#1E1E1E",
            width: 24,
            height: 24,
            marginLeft: 8,
            marginTop: 16,
          }}
          contentStyle={{
            background: "#E5D9C0",
            borderRadius: ".5rem",
            boxShadow: "0 0",
          }}
          dateClassName="opacity-full"
          contentArrowStyle={{ borderRightColor: "#E5D9C0" }}
          key={experience.id}
        >
          <ExperienceCard {...experience} />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
