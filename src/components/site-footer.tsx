"use client";

import { BrandLockup } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-cream text-ink">
      <div className="section-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <BrandLockup wordmark={t.hero.brandAr} latin={t.hero.brandEn} />
          <p className="mt-4 max-w-md text-ink-soft">{t.footer.blurb}</p>
        </div>
        <p className="text-sm text-muted">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
