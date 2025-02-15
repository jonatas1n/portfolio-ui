"use client";

import {
  getExperiences,
  makePath,
  getExperiencesFilters,
  EXPERIENCES_ROUTE,
} from "@/app/services";
import { SectionCard } from "@/app/components/SectionCard";
import { ExperienceHeader } from "./ExperienceHeader";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { Experience } from "@/app/types";
import { Filter } from "@/app/components/Filter";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Experiences = () => {
  const [filtersList, setFiltersList] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const swrPath = makePath(EXPERIENCES_ROUTE, { technologies });
  const { data: experiencesList, error } = useSWR<Experience[]>(
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
        <h3 className="text-4xl font-display font-bold">My Journey</h3>
        {experiencesList?.length ? (
          <div className="grid gap-6">
            <Filter
              filtersList={filtersList}
              onClear={clearFilters}
              onChange={handleChangeFilters}
              technologies={technologies}
            />
            <div className="grid gap-6">
              <VerticalTimeline lineColor="#E5D9C0">
                {experiencesList?.map(({ description, ...experience }) => (
                  <VerticalTimelineElement
                  iconStyle={{background: "#1E1E1E", width: 24, height: 24, marginLeft: -12, marginTop: 16}}
                    contentStyle={{
                      background: "#E5D9C0",
                      borderRadius: ".5rem",
                      boxShadow: "0 0",
                    }}
                    contentArrowStyle={{borderRightColor: "#E5D9C0"}}
                    key={experience.id}
                    date={<ExperienceHeader {...experience} />}
                  >
                    {description}
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        ) : (
          error && "An error occurred"
        )}
        {experiencesList?.length === 0 && (
          <p className="text-lg">No experiences found</p>
        )}
      </div>
    </SectionCard>
  );
};
