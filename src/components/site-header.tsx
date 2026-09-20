"use client";

import { useEffect, useId, useState } from "react";
import { BrandLockup } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const { t, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function go(href: string) {
    setOpen(false);
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
        <a href="#top" className="rounded-xl" onClick={() => setOpen(false)}>
          <BrandLockup
            compact
            wordmark={t.hero.brandAr}
            latin={t.hero.brandEn}
          />
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={t.nav.menu}
        >
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-olive-soft/70 hover:text-olive"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="inline-flex rounded-full border border-line bg-paper p-0.5"
            role="group"
            aria-label={t.lang.switchAria}
          >
            <button
              id="lang-ar"
              type="button"
              onClick={() => setLocale("ar")}
              aria-pressed={locale === "ar"}
              className={`rounded-full px-2.5 py-1 text-sm font-semibold transition-colors ${
                locale === "ar"
                  ? "bg-olive text-cream"
                  : "text-olive hover:bg-olive-soft"
              }`}
            >
              عربي
            </button>
            <button
              id="lang-en"
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={`rounded-full px-2.5 py-1 text-sm font-semibold transition-colors ${
                locale === "en"
                  ? "bg-olive text-cream"
                  : "text-olive hover:bg-olive-soft"
              }`}
            >
              EN
            </button>
          </div>

          <button
            id="mobile-menu-toggle"
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-paper text-olive lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? t.nav.close : t.nav.open}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

    </header>
    {open ? (
      <div
        id={menuId}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-cream sm:top-[4.5rem] lg:hidden"
      >
        <nav className="section-shell flex flex-col gap-1 py-5" aria-label={t.nav.menu}>
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-lg font-medium text-ink hover:bg-olive-soft/70"
              onClick={(event) => {
                event.preventDefault();
                go(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    ) : null}
    </>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
