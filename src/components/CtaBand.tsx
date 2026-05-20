"use client";

import { AnimatedSection } from "./AnimatedSection";
import { PageContainer } from "./PageContainer";
import { ButtonLink } from "./ButtonLink";

export function CtaBand() {
  return (
    <AnimatedSection className="border-b border-border bg-white/[0.02] py-24 md:py-32">
      <PageContainer className="text-center md:text-left">
        <p className="font-clash text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Join the house
        </p>
        <h2 className="font-tektur tektur-flush mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Apply like builders who take this seriously.
        </h2>
        <p className="font-clash mx-auto mt-6 max-w-xl text-lg text-muted md:mx-0">
          Rolling admissions. Read every application. If you have shipped in the last
          90 days, you belong in the conversation.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
          <ButtonLink href="/apply">Apply now</ButtonLink>
          <ButtonLink href="mailto:hello@hackhome.in" variant="secondary">
            Email us
          </ButtonLink>
        </div>
      </PageContainer>
    </AnimatedSection>
  );
}
