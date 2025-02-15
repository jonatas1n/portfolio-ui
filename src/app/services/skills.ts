import { makePath } from "@/app/services/utils";
import { Skill } from "../types";

const SKILLS_ROUTE = "skills";

export const getSkills = async (): Promise<Skill[]> => {
  try {
    const path = makePath(SKILLS_ROUTE);
    const response = await fetch(path);
    const skills: Skill[] = await response.json();
    return skills;
  } catch (error) {
    console.log("Error fetching the skills", error);
    return [];
  }
};
