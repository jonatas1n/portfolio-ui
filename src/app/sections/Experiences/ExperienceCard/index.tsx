import { Card } from "@/app/components/Card";
import { Tag } from "@/app/components/Tag";

type ExperienceCardProps = {
  position: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
  description: string;
};

export const ExperienceCard = ({
  position,
  companyName,
  startDate,
  endDate,
  technologies,
  description,
}: ExperienceCardProps) => {
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
