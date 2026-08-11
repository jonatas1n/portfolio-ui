"use client";

import useSWR from "swr";
import { getResume, makeResumePath } from "@/services";
import { Resume } from "@/types";

export const useResume = () => {
  const { data, error, isLoading } = useSWR<Resume>(
    makeResumePath(),
    getResume
  );

  return { data, error, isLoading };
};
