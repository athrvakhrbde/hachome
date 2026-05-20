"use client";

import { AnimatedSection } from "./AnimatedSection";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const residents = [
  {
    name: "Arjun M.",
    chapter: "Cohort 01",
    focus: "Fintech infra",
    story:
      "Shipped a payments API used by three startups in Bangalore. Moved in to escape a two-hour commute and a flatmate who thought \"deploy Friday\" was a joke.",
  },
  {
    name: "Priya S.",
    chapter: "Cohort 01",
    focus: "ML tooling",
    story:
      "Solo hacker with traction on a devtools product. Needed a room, meals, and people who would read her changelog at dinner.",
  },
  {
    name: "Dev K.",
    chapter: "Rolling",
    focus: "Hardware + software",
    story:
      "Between roles after acqui-hire. Used HackHome as a runway to prototype full-time — demo night led to a pre-seed conversation.",
  },
];

export function Residents() {
  return (
    <AnimatedSection id="residents" className="border-b border-border py-28 md:py-40">
      <PageContainer>
        <SectionHeader
          eyebrow="Our residents"
          headline="Builders who chose full-time."
          subhead="Rolling admissions. No fixed cohort theater — people arrive when they are ready to ship."
        />

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
          {residents.map((r) => (
            <article
              key={r.name}
              className="flex flex-col border-t-2 border-accent pt-8"
            >
              <p className="font-clash text-xs font-medium uppercase tracking-[0.15em] text-accent">
                {r.chapter}
              </p>
              <h3 className="font-tektur mt-4 text-2xl font-semibold">{r.name}</h3>
              <p className="font-clash mt-1 text-sm text-muted">{r.focus}</p>
              <p className="font-clash mt-6 flex-1 leading-relaxed text-muted">
                {r.story}
              </p>
            </article>
          ))}
        </div>
      </PageContainer>
    </AnimatedSection>
  );
}
