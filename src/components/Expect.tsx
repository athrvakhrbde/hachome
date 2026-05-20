"use client";

import { AnimatedSection } from "./AnimatedSection";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const expectations = [
  {
    title: "Demo what you ship",
    body: "Present work to operators and investors who actually fund builders. Not a theater stage. A room that matters.",
  },
  {
    title: "Stay accountable",
    body: "Weekly syncs and 1:1s keep you honest. Deep work hours protect the calendar everyone else tries to steal.",
  },
  {
    title: "Meet people ahead of you",
    body: "Founder dinners, guest residencies, office hours. Access to people who have already done the hard version of your problem.",
  },
  {
    title: "Live like a human",
    body: "Shared meals, late-night walks, the hacker wall. Momentum without burning out alone in a studio apartment.",
  },
];

export function Expect() {
  return (
    <AnimatedSection id="expect" className="border-b border-border py-28 md:py-40">
      <PageContainer>
        <SectionHeader
          eyebrow="What to expect"
          headline="Full-time building, with everything else handled."
          subhead="Think of it as a house that runs like infrastructure, not a program you attend between other obligations."
        />

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2">
          {expectations.map((item) => (
            <article
              key={item.title}
              className="border border-border bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:border-white/15 md:p-10"
            >
              <h3 className="font-tektur text-xl font-semibold">{item.title}</h3>
              <p className="font-clash mt-4 leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </AnimatedSection>
  );
}
