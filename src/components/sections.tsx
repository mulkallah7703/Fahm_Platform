"use client";

import { useLanguage } from "@/components/language-provider";
import { Kicker, Lead, Section, SectionTitle } from "@/components/ui";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      tabIndex={-1}
      className="relative overflow-hidden surface-grid pattern-fade outline-none"
    >
      <div className="section-shell relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-3 py-1 text-sm font-semibold text-olive-mid">
            <span className="size-1.5 rounded-full bg-terra" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-6xl font-bold leading-none text-olive sm:text-7xl lg:text-8xl">
            {t.hero.brandAr}
            <span className="mt-3 block font-sans text-xl font-semibold tracking-[0.28em] text-terra sm:text-2xl">
              {t.hero.brandEn}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium text-ink-soft sm:text-2xl">
            {t.hero.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {t.hero.slogan}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-olive px-6 py-3 text-base font-semibold text-cream transition-colors hover:bg-olive-mid"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#business"
              className="inline-flex items-center justify-center rounded-full border border-olive/20 bg-paper px-6 py-3 text-base font-semibold text-olive transition-colors hover:bg-olive-soft"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="reveal">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const { t } = useLanguage();
  const nodes = t.solution.steps;

  return (
    <div className="relative rounded-[2rem] border border-line bg-paper/80 p-5 shadow-[0_24px_60px_-32px_rgba(36,56,45,0.45)] sm:p-7">
      <p className="mb-4 text-sm font-semibold tracking-[0.12em] text-terra">
        {t.solution.kicker}
      </p>
      <ol className="space-y-3">
        {nodes.map((step, index) => (
          <li
            key={step.title}
            className="flex items-start gap-3 rounded-2xl border border-line/80 bg-cream px-4 py-3"
          >
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-olive text-sm font-bold text-cream">
              {index + 1}
            </span>
            <span>
              <span className="block font-semibold text-ink">{step.title}</span>
              <span className="block text-sm text-muted">{step.hint}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <Section id="about" tone="paper">
      <Kicker>{t.about.kicker}</Kicker>
      <SectionTitle>{t.about.title}</SectionTitle>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {[t.about.p1, t.about.p2, t.about.p3].map((paragraph) => (
          <p
            key={paragraph}
            className="rounded-3xl border border-line bg-cream p-6 text-lg text-ink-soft"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

export function ProblemSection() {
  const { t } = useLanguage();

  return (
    <Section id="problem">
      <Kicker>{t.problem.kicker}</Kicker>
      <SectionTitle>{t.problem.title}</SectionTitle>
      <Lead>{t.problem.lead}</Lead>
      <p className="mt-8 font-semibold text-ink">{t.problem.intro}</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {t.problem.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-line bg-paper px-5 py-4 text-ink-soft"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl rounded-3xl bg-olive px-6 py-5 text-lg font-medium text-cream">
        {t.problem.closer}
      </p>
    </Section>
  );
}

export function SolutionSection() {
  const { t } = useLanguage();

  return (
    <Section id="solution" tone="paper">
      <Kicker>{t.solution.kicker}</Kicker>
      <SectionTitle>{t.solution.title}</SectionTitle>
      <Lead>{t.solution.lead}</Lead>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {t.solution.steps.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-3xl border border-line bg-cream p-5"
          >
            <span className="font-display text-3xl text-gold">{index + 1}</span>
            <p className="mt-3 text-lg font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-sm text-muted">{step.hint}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-lg text-ink-soft">{t.solution.note}</p>
    </Section>
  );
}

export function AudiencesSection() {
  const { t } = useLanguage();

  return (
    <Section id="audiences">
      <Kicker>{t.audiences.kicker}</Kicker>
      <SectionTitle>{t.audiences.title}</SectionTitle>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {t.audiences.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-3xl border border-line bg-paper p-5 text-lg text-ink-soft"
          >
            <span
              className="mt-2 size-2 shrink-0 rounded-full bg-terra"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-muted">{t.audiences.note}</p>
    </Section>
  );
}

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <Section id="features" tone="paper">
      <Kicker>{t.features.kicker}</Kicker>
      <SectionTitle>{t.features.title}</SectionTitle>
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((feature, index) => (
          <li
            key={feature.num}
            className={`rounded-3xl border border-line bg-cream p-6 ${
              index === t.features.items.length - 1 ? "lg:col-span-3" : ""
            }`}
          >
            <p className="font-display text-2xl text-gold">{feature.num}</p>
            <h3 className="mt-2 text-xl font-bold text-ink">{feature.title}</h3>
            <p className="mt-3 text-ink-soft">{feature.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <Section id="how-it-works">
      <Kicker>{t.how.kicker}</Kicker>
      <SectionTitle>{t.how.title}</SectionTitle>
      <ol className="mt-10 space-y-4">
        {t.how.steps.map((step, index) => (
          <li
            key={step}
            className="grid gap-4 rounded-3xl border border-line bg-paper p-5 sm:grid-cols-[auto_1fr] sm:items-center"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-olive font-display text-2xl text-cream">
              {index + 1}
            </span>
            <p className="text-lg text-ink-soft">{step}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function TechSection() {
  const { t } = useLanguage();

  return (
    <Section id="tech" tone="paper">
      <Kicker>{t.tech.kicker}</Kicker>
      <SectionTitle>{t.tech.title}</SectionTitle>
      <ul className="mt-8 flex flex-wrap gap-3">
        {t.tech.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-semibold text-olive"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl bg-olive px-6 py-5 text-cream">
        <p className="text-sm font-semibold tracking-[0.14em] text-gold">
          {t.tech.stackLabel}
        </p>
        <p className="mt-2 text-lg">{t.tech.stack}</p>
      </div>
    </Section>
  );
}

export function DifferenceSection() {
  const { t } = useLanguage();

  return (
    <Section id="difference">
      <Kicker>{t.difference.kicker}</Kicker>
      <SectionTitle>{t.difference.title}</SectionTitle>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-line bg-paper p-6">
          <p className="text-sm font-semibold tracking-[0.12em] text-muted">
            {t.difference.traditionalLabel}
          </p>
          <p className="mt-4 text-lg text-ink-soft">
            {t.difference.traditionalLead}
          </p>
          <p className="mt-6 text-sm font-semibold text-muted">
            {t.difference.instead}
          </p>
          <p className="mt-2 font-display text-3xl text-ink-soft">
            {t.difference.traditionalPath.join(" → ")}
          </p>
        </article>
        <article className="rounded-3xl border border-olive/20 bg-olive p-6 text-cream">
          <p className="text-sm font-semibold tracking-[0.12em] text-gold">
            {t.difference.fahmLabel}
          </p>
          <p className="mt-4 text-lg text-olive-soft">{t.difference.fahmLead}</p>
          <p className="mt-6 text-sm font-semibold text-gold">
            {t.difference.offers}
          </p>
          <p className="mt-2 font-display text-3xl text-cream">
            {t.difference.fahmPath.join(" → ")}
          </p>
        </article>
      </div>
      <p className="mt-8 max-w-3xl text-lg text-ink-soft">
        {t.difference.closer}
      </p>
    </Section>
  );
}

export function InnovationSection() {
  const { t } = useLanguage();

  return (
    <Section id="innovation" tone="paper">
      <Kicker>{t.innovation.kicker}</Kicker>
      <SectionTitle>{t.innovation.title}</SectionTitle>
      <Lead>{t.innovation.lead}</Lead>
      <ul className="mt-8 flex flex-wrap gap-3">
        {t.innovation.parts.map((part) => (
          <li
            key={part}
            className="rounded-full bg-olive px-4 py-2 font-semibold text-cream"
          >
            {part}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-lg text-ink-soft">{t.innovation.join}</p>
      <p className="mt-3 text-lg font-medium text-olive">{t.innovation.closer}</p>
    </Section>
  );
}

export function ImpactSection() {
  const { t } = useLanguage();

  return (
    <Section id="impact">
      <Kicker>{t.impact.kicker}</Kicker>
      <SectionTitle>{t.impact.title}</SectionTitle>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {t.impact.items.map((item) => (
          <li
            key={item}
            className="rounded-3xl border border-line bg-paper px-5 py-4 text-lg text-ink-soft"
          >
            {item}
          </li>
        ))}
      </ul>
      <blockquote className="mt-8 rounded-3xl border-s-4 border-terra bg-cream px-6 py-5">
        <p className="text-sm font-semibold tracking-[0.12em] text-terra">
          {t.impact.resultLabel}
        </p>
        <p className="mt-2 text-xl font-medium text-ink">{t.impact.result}</p>
      </blockquote>
    </Section>
  );
}

export function MvpSection() {
  const { t } = useLanguage();

  return (
    <Section id="mvp" tone="paper">
      <Kicker>{t.mvp.kicker}</Kicker>
      <SectionTitle>{t.mvp.title}</SectionTitle>
      <Lead>{t.mvp.lead}</Lead>
      <p className="mt-8 font-semibold text-ink">{t.mvp.includes}</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {t.mvp.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-line bg-cream px-5 py-4 text-ink-soft"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-lg text-ink-soft">{t.mvp.closer}</p>
    </Section>
  );
}

export function BusinessSection() {
  const { t } = useLanguage();

  return (
    <Section id="business">
      <Kicker>{t.business.kicker}</Kicker>
      <SectionTitle>{t.business.title}</SectionTitle>
      <p className="mt-6 inline-flex rounded-full bg-olive px-5 py-2 text-lg font-semibold text-cream">
        {t.business.primary}
      </p>
      <p className="mt-8 font-semibold text-ink">{t.business.expand}</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {t.business.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-line bg-paper px-5 py-4 text-ink-soft"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function RoadmapSection() {
  const { t } = useLanguage();

  return (
    <Section id="roadmap" tone="paper">
      <Kicker>{t.roadmap.kicker}</Kicker>
      <SectionTitle>{t.roadmap.title}</SectionTitle>
      <ol className="relative mt-10 space-y-4">
        {t.roadmap.stages.map((stage, index) => (
          <li
            key={stage}
            className="grid gap-4 rounded-3xl border border-line bg-cream p-5 sm:grid-cols-[auto_1fr] sm:items-center"
          >
            <span className="flex size-12 items-center justify-center rounded-full border border-gold/40 bg-olive text-lg font-bold text-cream">
              {index + 1}
            </span>
            <p className="text-lg text-ink-soft">{stage}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function MetricsSection() {
  const { t } = useLanguage();

  return (
    <Section id="metrics">
      <Kicker>{t.metrics.kicker}</Kicker>
      <SectionTitle>{t.metrics.title}</SectionTitle>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.metrics.items.map((item) => (
          <li
            key={item}
            className="rounded-3xl border border-line bg-paper px-5 py-6 text-lg font-medium text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function PrivacySection() {
  const { t } = useLanguage();

  return (
    <Section id="privacy" tone="paper">
      <Kicker>{t.privacy.kicker}</Kicker>
      <SectionTitle>{t.privacy.title}</SectionTitle>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {t.privacy.items.map((item) => (
          <li
            key={item}
            className="rounded-3xl border border-line bg-cream px-5 py-5 text-lg text-ink-soft"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function VisionSection() {
  const { t } = useLanguage();

  return (
    <Section id="vision" tone="olive">
      <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-gold">
        {t.vision.kicker}
      </p>
      <h2 className="max-w-3xl font-display text-3xl leading-[1.4] text-cream sm:text-5xl">
        {t.vision.title}
      </h2>
      <p className="mt-6 max-w-3xl text-lg text-olive-soft">{t.vision.p1}</p>
      <p className="mt-3 max-w-3xl text-lg text-olive-soft">{t.vision.p2}</p>
      <p className="mt-8 max-w-3xl text-2xl font-medium text-cream">
        {t.vision.line}
      </p>
    </Section>
  );
}

export function HumanValueSection() {
  const { t } = useLanguage();

  return (
    <Section id="human-value" className="pb-24">
      <Kicker>{t.human.kicker}</Kicker>
      <SectionTitle>{t.human.title}</SectionTitle>
      <div className="mt-8 max-w-3xl space-y-4 text-lg text-ink-soft">
        <p>{t.human.p1}</p>
        <p>{t.human.p2}</p>
        <p>{t.human.p3}</p>
      </div>
      <p className="mt-8 max-w-3xl font-display text-2xl leading-relaxed text-olive sm:text-3xl">
        {t.human.closer}
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="#how-it-works"
          className="inline-flex items-center justify-center rounded-full bg-olive px-6 py-3 font-semibold text-cream transition-colors hover:bg-olive-mid"
        >
          {t.human.cta}
        </a>
        <a
          href="#business"
          className="inline-flex items-center justify-center rounded-full border border-olive/20 bg-paper px-6 py-3 font-semibold text-olive transition-colors hover:bg-olive-soft"
        >
          {t.human.ctaSecondary}
        </a>
      </div>
    </Section>
  );
}
