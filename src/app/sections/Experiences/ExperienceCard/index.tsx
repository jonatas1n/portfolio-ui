import { Experience } from "@/app/types";
import { Tag } from "@/app/components/Tag";
import DOMPurify from "dompurify";

export const ExperienceCard = ({
  position,
  companyName,
  startDate,
  endDate,
  technologies,
  description,
}: Experience) => {
  return (
    <div className="grid gap-3 mx-4">
      <div className="grid gap-1">
        <h4 className="text-2xl font-display font-bold">{position}</h4>
        <div className="text-xl">
          at <strong>{companyName}</strong>
        </div>
        <div className="text-lg">
          {startDate} ~ {endDate ?? "Actually"}
        </div>
      </div>
      <div className="flex flex-wrap gap-4 pb-4 border-b border-b-accent">
        {technologies.map((technology: string) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description),
        }}
      />
    </div>
  );
};
