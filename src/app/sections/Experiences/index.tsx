"use client";

import {
  getExperiences,
  makePath,
  getExperiencesFilters,
  EXPERIENCES_ROUTE,
} from "@/app/services";
import { SectionCard } from "@/app/components/SectionCard";

import { useState, useEffect } from "react";
import useSWR from "swr";
import { Experience } from "@/app/types";
import { Filter } from "@/app/components/Filter";
import { ExperiencesTimeline } from "./ExperiencesTimeline";

import * as motion from "motion/react-client";
import { Spinner } from "@/app/components/Spinner";

const EXPERIENCES_TITLE = "Journey";

export const Experiences = () => {
  const [filtersList, setFiltersList] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const swrPath = makePath(EXPERIENCES_ROUTE, { technologies });
  const { data: experiencesList, error, isLoading } = useSWR<Experience[]>(
    swrPath,
    getExperiences
  );

  const handleChangeFilters = (filter: string) => {
    if (technologies.includes(filter)) {
      setTechnologies((prevFilters) => prevFilters.filter((f) => f !== filter));
      return;
    }
    setTechnologies((prevFilters) => [...prevFilters, filter]);
  };

  useEffect(() => {
    getExperiencesFilters().then((fetchedFilters) => {
      setFiltersList(fetchedFilters);
    });
  }, []);

  const clearFilters = () => setTechnologies([]);

  return (
    <SectionCard id="experiences">
      <div className="grid gap-4">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-display font-bold"
        >
          {EXPERIENCES_TITLE}
        </motion.h3>
        {isLoading && <Spinner />}
        {experiencesList?.length ? (
          <div className="grid gap-6">
            <Filter
              filtersList={filtersList}
              onClear={clearFilters}
              onChange={handleChangeFilters}
              technologies={technologies}
            />
            <ExperiencesTimeline experiencesList={experiencesList} />
          </div>
        ) : (
          error && "An error occurred"
        )}
        {experiencesList?.length === 0 && !isLoading && (
          <p className="text-lg">No experiences found</p>
        )}
      </div>
    </SectionCard>
  );
};
