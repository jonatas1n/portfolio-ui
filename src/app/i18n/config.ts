export const LANGUAGES = ["en", "pt"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_STORAGE_KEY = "portfolio:language";

export const isLanguage = (value: unknown): value is Language =>
  typeof value === "string" && LANGUAGES.includes(value as Language);
