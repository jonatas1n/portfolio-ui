"use client";

import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { translation } = useLanguage();

  return (
    <footer className="col-span-6 rounded-t-2xl p-16 bg-accent text-light font-bold font-display">
      {translation.misc.footer}
    </footer>
  );
};
