"use client";

import { AnimatedSection } from "./AnimatedSection";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const friction = [
  "cooking",
  "cleaning",
  "commuting",
  "loneliness",
  "context-switching",
  "living with people who don't get it",
];

export function Problem() {
  return (
    <AnimatedSection id="problem" className="border-b border-border py-28 md:py-40">
      <PageContainer>
        <SectionHeader
          eyebrow="02 — The Problem"
          headline="Talent is rarely the bottleneck. Environment is."
        />

        <p className="font-clash mt-10 max-w-2xl text-lg leading-relaxed text-muted md:mt-12 md:text-xl">
          Most builders don&apos;t stall because the idea is wrong. They stall because
          daily life drains the hours that matter.
        </p>

        <ul className="mt-14 space-y-3 border-l border-border pl-6 md:mt-16 md:pl-8">
          {friction.map((item) => (
            <li key={item} className="font-clash text-lg text-muted md:text-xl">
              — {item}
            </li>
          ))}
        </ul>

        <p className="font-tektur mt-16 text-xl font-semibold text-accent md:mt-24 md:text-2xl">
          HackHome removes all of it.
        </p>
      </PageContainer>
    </AnimatedSection>
  );
}
