"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Kicker, Lead, Section, SectionTitle } from "@/components/ui";

export function GlassesSection() {
  const { t } = useLanguage();
  const copy = t.glasses;

  return (
    <Section id="glasses">
      <Kicker>{copy.kicker}</Kicker>
      <SectionTitle>{copy.title}</SectionTitle>
      <Lead>{copy.lead}</Lead>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-line bg-[#f4f2fb] image-glow">
        <Image
          src="/images/glasses-hero.jpg"
          alt={copy.heroAlt}
          width={1280}
          height={720}
          className="h-auto w-full"
          sizes="(max-width: 1120px) 100vw, 1120px"
          priority
        />
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h3 className="text-2xl font-bold text-ink">{copy.featuresTitle}</h3>
          <ul className="mt-5 space-y-3">
            {copy.features.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-line bg-paper px-4 py-3 text-ink-soft"
              >
                <span
                  className="mt-2 size-2 shrink-0 rounded-full bg-olive"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <figure className="overflow-hidden rounded-[2rem] border border-line bg-paper">
          <Image
            src="/images/glasses-exploded.jpg"
            alt={copy.explodedAlt}
            width={1280}
            height={720}
            className="h-auto w-full"
            sizes="(max-width: 1120px) 100vw, 560px"
          />
          <figcaption className="px-5 py-4 text-sm text-muted">
            {copy.explodedCaption}
          </figcaption>
        </figure>
      </div>

      <p className="mt-14 text-sm font-semibold tracking-[0.14em] text-terra">
        {copy.flowKicker}
      </p>
      <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
        {copy.flowTitle}
      </h3>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {copy.flow.map((step) => (
          <li
            key={step.num}
            className="rounded-3xl border border-line bg-paper p-5"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-terra">
              {step.num}
            </p>
            <p className="mt-2 text-xl font-bold text-ink">{step.title}</p>
            <p className="mt-1 text-sm text-muted">{step.hint}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 overflow-hidden rounded-[2rem] border border-line bg-paper">
        <Image
          src="/images/glasses-scan.jpg"
          alt={copy.scanAlt}
          width={1280}
          height={720}
          className="h-auto w-full"
          sizes="(max-width: 1120px) 100vw, 1120px"
        />
      </div>

      <p className="mt-14 text-sm font-semibold tracking-[0.14em] text-terra">
        {copy.waysKicker}
      </p>
      <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
        {copy.waysTitle}
      </h3>
      <div className="mt-6 overflow-hidden rounded-[2rem] border border-line bg-paper image-glow">
        <Image
          src="/images/glasses-two-ways.jpg"
          alt={copy.waysAlt}
          width={1800}
          height={594}
          className="h-auto w-full"
          sizes="(max-width: 1120px) 100vw, 1120px"
        />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="overflow-hidden rounded-3xl border border-olive/35 bg-olive-soft">
          <Image
            src="/images/glasses-alt.jpg"
            alt={copy.heroAlt}
            width={1280}
            height={720}
            className="h-auto w-full bg-[#f4f2fb]"
            sizes="(max-width: 768px) 100vw, 540px"
          />
          <div className="p-6">
            <h4 className="text-xl font-bold text-ink">{copy.glassesWay.title}</h4>
            <p className="mt-3 text-ink-soft">{copy.glassesWay.body}</p>
          </div>
        </article>
        <article className="overflow-hidden rounded-3xl border border-line bg-paper">
          <Image
            src="/images/student-phone.jpg"
            alt={copy.phoneAlt}
            width={1280}
            height={720}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 540px"
          />
          <div className="p-6">
            <h4 className="text-xl font-bold text-ink">{copy.phoneWay.title}</h4>
            <p className="mt-3 text-ink-soft">{copy.phoneWay.body}</p>
          </div>
        </article>
      </div>
    </Section>
  );
}

export function PlatformSection() {
  const { t } = useLanguage();
  const copy = t.platform;

  return (
    <Section id="platform" tone="paper">
      <Kicker>{copy.kicker}</Kicker>
      <SectionTitle>{copy.title}</SectionTitle>
      <Lead>{copy.lead}</Lead>

      <div className="mt-10 overflow-hidden rounded-[1.6rem] border border-line bg-sand image-glow">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ms-3 truncate text-xs font-medium tracking-[0.12em] text-muted">
            فَهْم | FAHM
          </span>
        </div>
        <Image
          src="/images/platform-dashboard.jpg"
          alt={copy.imageAlt}
          width={1800}
          height={840}
          className="h-auto w-full"
          sizes="(max-width: 1120px) 100vw, 1120px"
        />
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {copy.capabilities.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-line bg-cream px-5 py-4 text-ink-soft"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
