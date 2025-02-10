import { getSkills } from "@/app/services/skills";
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
      </div>
    </SectionCard>
  );
};