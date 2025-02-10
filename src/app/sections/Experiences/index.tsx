import { SectionCard } from "@/app/components/SectionCard";
import { getExperiences } from "@/app/services";
import { ExperienceCard } from "./ExperienceCard";

export const Experiences = async () => {
  const experiences = await getExperiences();

  return (
    <SectionCard id="experiences">
      <div className="grid gap-6">
        <h3 className="text-4xl font-display font-bold">Experiences</h3>
        {experiences?.map(experience => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
        {experiences.length === 0 && <p className="text-lg">No experiences found</p>}
      </div>
    </SectionCard>
  );
};
