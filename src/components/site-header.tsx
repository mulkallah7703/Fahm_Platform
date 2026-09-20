"use client";

import { useEffect, useState } from "react";
import { BrandLockup } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const { t, locale, toggleLocale } = useLanguage();
  const [open, setOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/85 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
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
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-semibold text-olive transition-colors hover:border-olive-mid hover:bg-olive-soft"
            aria-label={t.lang.switchAria}
          >
            <span className="sr-only">{t.lang.switchAria}</span>
            <span aria-hidden="true">
              {locale === "ar" ? "EN" : "ع"}
              <span className="mx-1 text-muted">·</span>
              {t.lang.switchTo}
            </span>
          </button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-paper text-olive lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? t.nav.close : t.nav.open}</span>
            {open ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-cream lg:hidden"
        >
          <nav className="section-shell flex flex-col gap-1 py-4" aria-label={t.nav.menu}>
            {t.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-olive-soft/70"
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
    </header>
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
