"use client";

import * as motion from "motion/react-client";
import { useLanguage } from "@/context/LanguageContext";
import { Translation } from "@/i18n";

type SectionHeadingProps = {
  section: keyof Translation["sections"];
};

export const SectionHeading = ({ section }: SectionHeadingProps) => {
  const { translation } = useLanguage();

  return (
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      className="text-4xl font-display font-bold text-dark"
    >
      {translation.sections[section]}
    </motion.h3>
  );
};
