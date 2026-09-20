"use client";

import { BrandLockup } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-olive/20 bg-olive text-cream">
      <div className="section-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="[&_span.font-display]:text-cream [&_span.text-olive-mid]:text-olive-soft [&_span.text-olive]:text-cream">
            <BrandLockup wordmark={t.hero.brandAr} latin={t.hero.brandEn} />
          </div>
          <p className="mt-4 max-w-md text-olive-soft">{t.footer.blurb}</p>
        </div>
        <p className="text-sm text-olive-soft">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
