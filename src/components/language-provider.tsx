"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { content, type Copy, type Locale } from "@/lib/content";

const STORAGE_KEY = "fahm-lang";

type LanguageContextValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  t: Copy;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = locale;
  document.documentElement.dir = dir;
  document.documentElement.style.colorScheme = "light";
  document.title = content[locale].meta.title;
}

function isLocale(value: string | null): value is Locale {
  return value === "ar" || value === "en";
}

function readStoredLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : "ar";
}

let currentLocale: Locale = "ar";
let didHydrate = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  if (!didHydrate) {
    didHydrate = true;
    const stored = readStoredLocale();
    if (stored !== currentLocale) {
      currentLocale = stored;
      applyDocumentLocale(stored);
      queueMicrotask(emit);
    } else {
      applyDocumentLocale(stored);
    }
  }

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return currentLocale;
}

function getServerSnapshot() {
  return "ar" as const;
}

function writeLocale(next: Locale) {
  currentLocale = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  applyDocumentLocale(next);
  emit();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  const toggleLocale = useCallback(() => {
    writeLocale(currentLocale === "ar" ? "en" : "ar");
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      t: content[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
