import { makePath } from "./utils";
import { Project } from "../types";

export const PROJECTS_ROUTE = "projects";

export const getFilters = async (): Promise<Project["technologies"]> => {
  try {
    const path = makePath(PROJECTS_ROUTE);
    const response = await fetch(path, { method: 'GET' });
    const data = await response.json();
    return data.technologies || [];
  } catch (error) {
    console.error("Error fetching the project filters", error);
    return [];
  }
}