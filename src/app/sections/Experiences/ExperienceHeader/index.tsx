import { Experience } from "@/app/types";
import { Tag } from "@/app/components/Tag";

type ExperienceHeaderProps = Omit<Experience, "description">;

export const ExperienceHeader = ({
  position,
  companyName,
  startDate,
  endDate,
  technologies,
}: ExperienceHeaderProps) => {
  return (
    <div className="grid gap-3 mx-4">
      <div className="grid gap-1">
        <h4 className="text-2xl font-display font-bold">{position}</h4>
        <div>
          at <strong>{companyName}</strong>
        </div>
        <div>
          {startDate} ~ {endDate ?? "Actually"}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        {technologies.map((technology: string) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
    </div>
  );
};
