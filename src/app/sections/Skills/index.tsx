import { getSkills } from "@/app/services";
import { SkillCard } from "./SkillCard";
import { SectionCard } from "@/app/components/SectionCard";

export const Skills = async () => {
  const skills = await getSkills();
  
  return (
    <SectionCard id="skills">
      <div className="grid gap-8">
        <h3 className="text-4xl font-display font-bold">Skills</h3>
        {skills?.map(skill => (
          <SkillCard key={skill.id} {...skill} />
        ))}
        {skills?.length === 0 && <p className="text-lg">No skills found</p>}
      </div>
    </SectionCard>
  );
};