import { SkillGroupType, SkillGroupTypeResponse } from "../types";

export const SKILLS_ROUTE = "skills";

export const getSkills = async (url: string): Promise<SkillGroupType> => {
  try {
    const response = await fetch(url);
    const groupsResponse: SkillGroupTypeResponse = await response.json();

    return groupsResponse.map((group) => ({
      name: group.name,
      namePt: group.name_pt,
      skills: group.skills.map((skill) => ({
        id: skill.id,
        title: skill.title,
      })),
    }));
  } catch (error) {
    console.log("Error fetching the skills", error);
    return [];
  }
};
