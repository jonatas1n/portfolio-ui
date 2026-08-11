"use client";

import {
  createContext,
  PropsWithChildren,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";
import {
  buildLanguageHref,
  DEFAULT_LANGUAGE,
  getTranslation,
  Language,
  parseLanguageParam,
  Translation,
} from "@/i18n";

type LanguageContextValue = {
  language: Language;
  translation: Translation;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const writeLanguageToUrl = (language: Language) => {
  if (typeof window === "undefined") {
    return;
  }

  const href = buildLanguageHref(window.location, language);
  window.history.replaceState(window.history.state, "", href);
};

type LanguageUrlListenerProps = {
  onLanguageFromUrl: (language: Language) => void;
};

const LanguageUrlListener = ({
  onLanguageFromUrl,
}: LanguageUrlListenerProps) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    onLanguageFromUrl(parseLanguageParam(searchParams));
  }, [searchParams, onLanguageFromUrl]);

  return null;
};

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    writeLanguageToUrl(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "pt" : "en");
  }, [language, setLanguage]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      translation: getTranslation(language),
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      <Suspense fallback={null}>
        <LanguageUrlListener onLanguageFromUrl={setLanguageState} />
      </Suspense>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
