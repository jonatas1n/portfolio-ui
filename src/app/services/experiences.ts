import { ExperienceResponse } from "../types";
import { makePath } from "./utils";

export const EXPERIENCES_ROUTE = "experiences";

export const getExperiences = (url: string) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((experienceList: ExperienceResponse[]) =>
      experienceList.map((experience) => {
        const {
          company_name: companyName,
          start_date: startDate,
          end_date: endDate,
          technologies,
          ...rest
        } = experience;
        const formattedExperience = {
          ...rest,
          companyName,
          startDate,
          endDate,
          technologies,
        };
        return formattedExperience;
      })
    );

export const getExperiencesFilters = async (): Promise<string[]> => {
  try {
    const path = makePath(EXPERIENCES_ROUTE + "/technologies");
    const response = await fetch(path);
    const data = await response.json();
    return data.technologies || [];
  } catch (error) {
    console.log("Error fetch the experiences filters", error);
    return [];
  }
};