import { Experience } from "@/app/types";
import { ExperienceHeader } from "../ExperienceHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

type ExperiencesTimelineProps = {
  experiencesList: Experience[];
}

export const ExperiencesTimeline = ({ experiencesList }: ExperiencesTimelineProps) => {
  return (
    <VerticalTimeline lineColor="#E5D9C0">
      {experiencesList?.map(({ description, ...experience }) => (
        <VerticalTimelineElement
          iconStyle={{
            background: "#1E1E1E",
            width: 24,
            height: 24,
            marginLeft: -12,
            marginTop: 16,
          }}
          contentStyle={{
            background: "#E5D9C0",
            borderRadius: ".5rem",
            boxShadow: "0 0",
          }}
          contentArrowStyle={{ borderRightColor: "#E5D9C0" }}
          key={experience.id}
          date={<ExperienceHeader {...experience} />}
        >
          {description}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
