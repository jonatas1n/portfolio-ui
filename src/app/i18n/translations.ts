import { Language } from "./config";

type LanguageSwitchCopy = {
  label: string;
  flag: string;
  ariaLabel: string;
};

type MenuCopy = {
  creations: string;
  skills: string;
  journey: string;
  getInTouch: string;
};

export type Translation = {
  languageSwitch: LanguageSwitchCopy;
  menu: MenuCopy;
};

/**
 * Static UI copy keyed by the CURRENTLY active language.
 *
 * Note on `languageSwitch`: the button always advertises the OTHER language it
 * will switch to, so the copy stored under `en` is written in Portuguese (it is
 * shown while the UI is in English) and vice-versa.
 */
export const translations: Record<Language, Translation> = {
  en: {
    languageSwitch: {
      label: "Mudar para Português",
      flag: "🇧🇷",
      ariaLabel: "Mudar para Português",
    },
    menu: {
      creations: "Creations",
      skills: "Skills",
      journey: "Journey",
      getInTouch: "Get in touch",
    },
  },
  pt: {
    languageSwitch: {
      label: "Switch to english",
      flag: "🇺🇸",
      ariaLabel: "Switch to english",
    },
    menu: {
      creations: "Criações",
      skills: "Habilidades",
      journey: "Jornada",
      getInTouch: "Entre em contato",
    },
  },
};

export const getTranslation = (language: Language): Translation =>
  translations[language];
