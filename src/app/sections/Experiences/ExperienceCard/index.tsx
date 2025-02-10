import { Card } from "@/app/components/Card";
import { Tag } from "@/app/components/Tag";
import { Experience } from "@/app/types";

export const ExperienceCard = ({
  position,
  companyName,
  startDate,
  endDate,
  technologies,
  description,
}: Experience) => {
  return (
    <Card>
      <div className="grid gap-3">
        <div className="grid">
          <h4 className="text-2xl font-display font-bold">{position}</h4>
          <p>
            {companyName} - {startDate} ~ {endDate ?? "Actually"}
          </p>
        </div>
        <div className="flex gap-4">
          {technologies.map((technology: string) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
        <div className="font-body font-medium">{description}</div>
      </div>
    </Card>
  );
};
