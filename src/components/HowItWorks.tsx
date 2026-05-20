"use client";

import { AnimatedSection } from "./AnimatedSection";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Tell us what you've shipped in the last 90 days and why you need to be here now. We read every application. No pitch deck.",
  },
  {
    num: "02",
    title: "Move In",
    desc: "Room, meals, workspace, internet — live on day one. Set up once. Stop negotiating with your calendar for basic survival.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Ship alongside people who understand the grind. Demo what you make. Stay as long as you're building something real.",
  },
];

export function HowItWorks() {
  return (
    <AnimatedSection
      id="how-it-works"
      className="border-b border-border py-28 md:py-40"
    >
      <PageContainer>
        <SectionHeader
          eyebrow="04 — How It Works"
          headline="Three steps. No ceremony."
          subhead="Month-to-month. No cohorts. No fixed end date."
        />

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-border pt-8">
              <span className="font-tektur text-sm font-medium text-accent">
                {step.num}
              </span>
              <h3 className="font-tektur mt-4 text-2xl font-semibold">{step.title}</h3>
              <p className="font-clash mt-3 leading-relaxed text-muted">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="font-clash mt-16 max-w-2xl text-sm text-muted md:mt-20">
          Some spots available through volunteer labor in lieu of fees.
        </p>
      </PageContainer>
    </AnimatedSection>
  );
}
