import { makePath } from "@/app/services/utils";
import { SkillGroupType, SkillGroupTypeResponse } from "../types";

export const SKILLS_ROUTE = "skills";

export const getSkills = async (): Promise<SkillGroupType> => {
  try {
    const path = makePath(SKILLS_ROUTE);
    const response = await fetch(path);
    const skillsResponse: SkillGroupTypeResponse = await response.json();
    console.log(skillsResponse);
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
