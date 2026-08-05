import { SkillGroupType, SkillGroupTypeResponse } from "../types";

export const SKILLS_ROUTE = "skills";

export const getSkills = async (url: string): Promise<SkillGroupType> => {
  try {
    const response = await fetch(url);
    const skillsResponse: SkillGroupTypeResponse = await response.json();
    const skills: SkillGroupType = Object.fromEntries(
      Object.entries(skillsResponse).map(([title, skills]) => [
        title,
        skills.map(({skill_type, ...skill}) => ({
          ...skill,
          skillType: skill_type,
        })),
      ])
    );
    return skills;
  } catch (error) {
    console.log("Error fetching the skills", error);
    return {};
  }
};
