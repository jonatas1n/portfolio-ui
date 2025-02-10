import { makePath } from "@/app/services/utils";
import { Experience } from "../types";

const EXPERIENCES_ROUTE = "experiences";

export const getExperiences = async (): Promise<Experience[]> => {
  try {
    const path = makePath(EXPERIENCES_ROUTE);
    const response = await fetch(path);
    const experiences: Experience[] = await response.json();
    return experiences;
  } catch (error) {
    console.error("Error fetching the experiences", error);
    return [];
  }
};
