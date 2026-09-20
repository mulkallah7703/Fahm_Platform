"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  AboutSection,
  AudiencesSection,
  BusinessSection,
  DifferenceSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  HumanValueSection,
  ImpactSection,
  InnovationSection,
  MetricsSection,
  MvpSection,
  PrivacySection,
  ProblemSection,
  RoadmapSection,
  SolutionSection,
  TechSection,
  VisionSection,
} from "@/components/sections";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProblemSection />
        <SolutionSection />
        <AudiencesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TechSection />
        <DifferenceSection />
        <InnovationSection />
        <ImpactSection />
        <MvpSection />
        <BusinessSection />
        <RoadmapSection />
        <MetricsSection />
        <PrivacySection />
        <VisionSection />
        <HumanValueSection />
      </main>
      <SiteFooter />
    </>
  );
}
