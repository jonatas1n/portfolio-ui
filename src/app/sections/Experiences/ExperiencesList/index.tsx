"use client"

import { useState, useEffect } from "react";
import useSWR from "swr";
import { Experience } from "@/types";
import { Spinner } from "@/components/Spinner";
import { Filter } from "@/components/Filter";
import { ExperiencesTimeline } from "../ExperiencesTimeline";
import {
  getExperiences,
  makePath,
  getExperiencesFilters,
  EXPERIENCES_ROUTE,
} from "@/services";

export const ExperienceList = () => {
  const [filtersList, setFiltersList] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const swrPath = makePath(EXPERIENCES_ROUTE, { technologies });
  const {
    data: experiencesList,
    error,
    isLoading,
  } = useSWR<Experience[]>(swrPath, getExperiences);

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

  if (isLoading) return <Spinner />

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
      <ExperiencesTimeline experiencesList={experiencesList} />
    </div>
  );
};
