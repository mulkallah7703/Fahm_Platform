"use client";

import { BrandLockup } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-cream text-ink">
      <div className="section-shell py-12">
        <BrandLockup wordmark={t.hero.brandAr} latin={t.hero.brandEn} />
        <p className="mt-4 max-w-md text-ink-soft">{t.footer.blurb}</p>
      </div>
    </footer>
  );
}
