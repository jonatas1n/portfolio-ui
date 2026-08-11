export const LANGUAGES = ["en", "pt"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_QUERY_PARAM = "lang";

export const isLanguage = (value: unknown): value is Language =>
  typeof value === "string" && LANGUAGES.includes(value as Language);
