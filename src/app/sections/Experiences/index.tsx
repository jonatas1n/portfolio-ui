import { SectionCard } from "@/app/components/SectionCard";
import { ExperienceCard } from "./ExperienceCard";

export const Experiences = () => {
  const technologies = ["React", "Typescript", "Python"];
  const description =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque molestiae beatae magni nobis aperiam odit aspernatur corrupti commodi. Doloribus similique vel iure sunt atque voluptatum!";

  return (
    <SectionCard>
      <div className="grid gap-6">
        <h3 className="text-4xl font-display font-bold">Experience</h3>
        <ExperienceCard
          position="Frontend Developer"
          companyName="Jusbrasil"
          startDate="january 2023"
          technologies={technologies}
          description={description}
        />
        <ExperienceCard
          position="Frontend Developer"
          companyName="Jusbrasil"
          startDate="january 2023"
          technologies={technologies}
          description={description}
        />
        <ExperienceCard
          position="Frontend Developer"
          companyName="Jusbrasil"
          startDate="january 2023"
          technologies={technologies}
          description={description}
        />
      </div>
    </SectionCard>
  );
};
