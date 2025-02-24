"use server";

import { Project } from "@/types";
import { PROJECTS_ROUTE } from "@/constants";
import { makePath } from "@/services";

export async function getProjects(): Promise<Project[]> {
  const path = makePath(PROJECTS_ROUTE);
  const res = await fetch(path, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}
