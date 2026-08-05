"use client"

import { useState, useEffect } from "react";
import useSWR from "swr";
import { Experience } from "@/types";
import { Spinner } from "@/components/Spinner";
import { Filter } from "@/components/Filter";
import { ExperiencesTimeline } from "../ExperiencesTimeline";
import * as motion from "motion/react-client";
import {
  getExperiences,
  makePath,
  getExperiencesFilters,
  EXPERIENCES_ROUTE,
} from "@/services";
import { useLanguage } from "@/context/LanguageContext";

export const ExperienceList = () => {
  const [filtersList, setFiltersList] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const { language } = useLanguage();

  const swrPath = makePath(EXPERIENCES_ROUTE, { technologies, lang: language });

  const {
    data: experiencesList,
    error,
    isLoading,
  } = useSWR<Experience[]>(swrPath, getExperiences, { keepPreviousData: true });

  const handleChangeFilters = (filter: string) => {
    if (technologies.includes(filter)) {
      setTechnologies((prevFilters) => prevFilters.filter((f) => f !== filter));
      return;
    }
    setTechnologies((prevFilters) => [...prevFilters, filter]);
  };

  const clearFilters = () => setTechnologies([]);

  useEffect(() => {
    getExperiencesFilters().then((fetchedFilters) => {
      setFiltersList(fetchedFilters);
    });
  }, []);

  if (error) {
    return "error";
  }

  if (isLoading && !experiencesList) return <Spinner />

  if (!experiencesList) {
    return (
      <p className="text-lg">No experiences found</p>
    )
  }

  return (
    <div className="grid gap-6">
      {filtersList.length > 1 && (
        <Filter
          filtersList={filtersList}
          onClear={clearFilters}
          onChange={handleChangeFilters}
          technologies={technologies}
        />
      )}

      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center h-full"
        >
          <Spinner />
        </motion.div>
      )}
      <ExperiencesTimeline experiencesList={experiencesList} />
    </div>
  );
};
