"use client";

import useSWR from "swr";
import { KeyboardEvent, useCallback, useRef, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { HiOutlineViewList } from "react-icons/hi";

import { Spinner } from "@/components/Spinner";
import { SectionHeading } from "@/components/SectionHeading";
import { makePath } from "@/services";
import { PROJECTS_ROUTE } from "@/constants";
import { Project } from "@/types";
import { ProjectCard } from "../ProjectCard";
import { ProjectsSummary } from "../ProjectsSummary";
import { useLanguage } from "@/context/LanguageContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const ProjectList = () => {
  const { language, translation } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  const swrPath = makePath(PROJECTS_ROUTE, { lang: language });
  const {
    data: projectsList,
    error,
    isLoading,
  } = useSWR<Project[]>(swrPath, fetcher);

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const total = projectsList?.length ?? 0;

  const goToProject = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      const clamped = Math.max(0, Math.min(index, track.children.length - 1));
      track.scrollTo({
        left: clamped * track.clientWidth,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      setActiveIndex(clamped);
    },
    [prefersReducedMotion]
  );

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) {
      return;
    }
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToProject(activeIndex + 1);
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToProject(activeIndex - 1);
    }
  };

  const closeSummary = useCallback(() => setIsSummaryOpen(false), []);

  const handleSummarySelect = useCallback(
    (index: number) => {
      setIsSummaryOpen(false);
      goToProject(index);
    },
    [goToProject]
  );

  const header = (
    <div className="flex items-center justify-between gap-4">
      <SectionHeading section="creations" />
      <button
        type="button"
        onClick={() => setIsSummaryOpen(true)}
        disabled={total === 0}
        aria-haspopup="dialog"
        aria-label={translation.projects.viewSummary}
        className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-display font-semibold text-light shadow transition-opacity hover:opacity-90 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
      >
        <HiOutlineViewList aria-hidden="true" />
        <span className="hidden sm:inline">
          {translation.projects.viewSummary}
        </span>
      </button>
    </div>
  );

  const renderBody = () => {
    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return (
        <div className="text-red-500 font-bold">
          {translation.states.somethingWrong} {error.message}
        </div>
      );
    }

    if (!projectsList || total === 0) {
      return <div className="text-dark font-bold">{translation.states.noProjects}</div>;
    }

    return (
      <div className="grid gap-4">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label={translation.sections.creations}
          className="no-scrollbar flex snap-x snap-mandatory items-start gap-4 overflow-x-auto rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {projectsList.map((project, index) => (
            <div
              key={project.id}
              className="w-full shrink-0 basis-full snap-center"
              role="group"
              aria-roledescription="slide"
              aria-label={`${translation.projects.projectLabel} ${index + 1} ${translation.carousel.of} ${total}`}
              // Non-active slides are hidden from AT and keyboard focus.
              inert={index !== activeIndex ? true : undefined}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {total > 1 && (
          <div className="flex items-center justify-between gap-4 font-display text-dark">
            <button
              type="button"
              onClick={() => goToProject(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label={translation.projects.previousProject}
              className="flex items-center gap-2 disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-1"
            >
              <FaRegArrowAltCircleLeft size={24} />
              <span className="hidden sm:inline">
                {translation.carousel.previous}
              </span>
            </button>

            <p role="status" aria-live="polite" className="text-center">
              {translation.projects.projectLabel} {activeIndex + 1}{" "}
              {translation.carousel.of} {total}
            </p>

            <button
              type="button"
              onClick={() => goToProject(activeIndex + 1)}
              disabled={activeIndex === total - 1}
              aria-label={translation.projects.nextProject}
              className="flex items-center gap-2 disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-1"
            >
              <span className="hidden sm:inline">
                {translation.carousel.next}
              </span>
              <FaRegArrowAltCircleRight size={24} />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid gap-4">
      {header}
      {renderBody()}
      {isSummaryOpen && projectsList && (
        <ProjectsSummary
          projects={projectsList}
          activeIndex={activeIndex}
          onSelect={handleSummarySelect}
          onClose={closeSummary}
        />
      )}
    </div>
  );
};
