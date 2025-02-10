import { makePath } from "@/app/services/utils";
import { Experience, ExperienceResponse } from "../types";

const EXPERIENCES_ROUTE = "experiences";

export const getExperiences = async (): Promise<Experience[]> => {
  try {
    const path = makePath(EXPERIENCES_ROUTE);
    const response = await fetch(path);
    const experiencesResponse: ExperienceResponse[] = await response.json();
    const experiences: Experience[] = experiencesResponse.map((experience) => {
      const {
        company_name: companyName,
        start_date: startDate,
        end_date: endDate,
        title: position,
        technologies,
        ...rest
      } = experience;
      const formattedExperience = {
        ...rest,
        companyName,
        startDate,
        endDate,
        position,
        technologies: JSON.parse(technologies),
      };
      return formattedExperience;
    });
    return experiences;
  } catch (error) {
    console.error("Error fetching the experiences", error);
    return [];
  }
};
