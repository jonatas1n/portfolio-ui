import { Resume, ResumeResponse } from "../types";
import { makePath } from "./utils";

export const RESUME_ROUTE = "resume";

export const makeResumePath = () => makePath(`${RESUME_ROUTE}/`);

export const makeResumeDownloadPath = () =>
  makePath(`${RESUME_ROUTE}/download`);

const UNAVAILABLE_RESUME: Resume = {
  available: false,
  filename: null,
  updatedAt: null,
};

export const getResume = async (url: string): Promise<Resume> => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return UNAVAILABLE_RESUME;
    }

    const data = (await response.json()) as ResumeResponse;

    if (data?.available !== true) {
      return UNAVAILABLE_RESUME;
    }

    return {
      available: true,
      filename: data.filename ?? null,
      updatedAt: data.updated_at ?? null,
    };
  } catch (error) {
    console.error("Error fetching the resume", error);
    return UNAVAILABLE_RESUME;
  }
};
