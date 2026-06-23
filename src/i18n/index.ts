import en from "./en.json";
import es from "./es.json";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

export function normalizeLocale(locale?: string): Locale {
  return locale?.toLowerCase().startsWith("es") ? "es" : "en";
}

export function getDictionary(locale?: string): Dictionary {
  return normalizeLocale(locale) === "es" ? (es as Dictionary) : en;
}