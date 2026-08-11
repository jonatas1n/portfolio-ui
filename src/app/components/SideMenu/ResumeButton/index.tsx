"use client";

import * as motion from "motion/react-client";
import { FaFileDownload } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { useResume } from "@/hooks/useResume";
import { makeResumeDownloadPath } from "@/services";

export const ResumeButton = () => {
  const { translation } = useLanguage();
  const { data: resume } = useResume();

  if (!resume?.available) {
    return null;
  }

  return (
    <motion.a
      href={makeResumeDownloadPath()}
      download={resume.filename ?? ""}
      aria-label={translation.resume.ariaLabel}
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.125 }}
      className="flex items-center justify-center gap-2 bg-light text-center text-dark py-1 px-4 hover:text-light hover:bg-accent rounded-xl font-semibold text-lg"
    >
      <FaFileDownload aria-hidden="true" />
      <span>{translation.resume.label}</span>
    </motion.a>
  );
};
