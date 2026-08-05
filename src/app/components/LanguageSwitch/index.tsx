"use client";

import * as motion from "motion/react-client";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageSwitch = () => {
  const { translation, toggleLanguage } = useLanguage();
  const { label, flag, ariaLabel } = translation.languageSwitch;

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      aria-label={ariaLabel}
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.125 }}
      className="flex items-center justify-center gap-2 bg-light text-center text-dark py-1 px-4 hover:text-light hover:bg-accent rounded-xl font-semibold text-lg"
    >
      <span aria-hidden="true" className="text-xl leading-none">
        {flag}
      </span>
      <span>{label}</span>
    </motion.button>
  );
};
