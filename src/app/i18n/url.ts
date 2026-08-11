import {
  DEFAULT_LANGUAGE,
  isLanguage,
  Language,
  LANGUAGE_QUERY_PARAM,
} from "./config";

type ReadonlySearchParams = Pick<URLSearchParams, "get" | "toString">;

export const parseLanguageParam = (
  searchParams: ReadonlySearchParams
): Language => {
  const value = searchParams.get(LANGUAGE_QUERY_PARAM);
  return isLanguage(value) ? value : DEFAULT_LANGUAGE;
};

export const buildLanguageHref = (
  location: Pick<Location, "pathname" | "search" | "hash">,
  language: Language
): string => {
  const searchParams = new URLSearchParams(location.search);

  if (language === DEFAULT_LANGUAGE) {
    searchParams.delete(LANGUAGE_QUERY_PARAM);
  } else {
    searchParams.set(LANGUAGE_QUERY_PARAM, language);
  }

  const query = searchParams.toString();
  return `${location.pathname}${query ? `?${query}` : ""}${location.hash}`;
};
