"use client";

import { useEffect, useId, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { Project } from "@/types";
import { Tag } from "@/components/Tag";
import { useLanguage } from "@/context/LanguageContext";

type ProjectsSummaryProps = {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onClose: VoidFunction;
};

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

export const ProjectsSummary = ({
  projects,
  activeIndex,
  onSelect,
  onClose,
}: ProjectsSummaryProps) => {
  const { translation } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;

    const getFocusable = () =>
      dialog
        ? Array.from(
            dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
          )
        : [];

    getFocusable()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = getFocusable();
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 backdrop-brightness-50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl bg-light p-6 text-dark shadow-xl"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 id={titleId} className="text-2xl font-display font-bold">
            {translation.projects.summaryTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={translation.projects.closeSummary}
            className="rounded-full p-2 text-dark transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="mt-4 grid gap-3">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className={`rounded-lg border p-4 transition-colors ${
                index === activeIndex
                  ? "border-accent bg-card"
                  : "border-transparent bg-card/40 hover:bg-card"
              }`}
            >
              <button
                type="button"
                onClick={() => onSelect(index)}
                aria-current={index === activeIndex ? "true" : undefined}
                className="flex w-full items-center justify-between gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="font-display text-lg font-bold">
                  {project.title}
                </span>
                <span className="shrink-0 text-xs font-body text-accent">
                  {translation.projects.projectLabel} {index + 1}{" "}
                  {translation.carousel.of} {projects.length}
                </span>
              </button>
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
