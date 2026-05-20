import { Section } from "./Section";
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
    <Section id="problem" className="section-pad border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="02. The Problem"
          headline="Talent is rarely the bottleneck. Environment is."
          subhead="Ambitious builders rarely fail on ideas. They fail because school, work, and daily life fragment the hours that compound."
        />

        <p className="font-clash mt-12 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
          HackHome exists to remove that friction so you can go full-time on what you
          are building, surrounded by people doing the same.
        </p>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2 md:mt-20">
          {friction.map((item) => (
            <li
              key={item}
              className="font-clash border-l-2 border-accent/40 py-2 pl-5 text-lg text-foreground/90 md:text-xl"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="font-tektur mt-16 border border-accent/30 bg-accent-dim px-8 py-6 text-xl font-semibold text-accent md:mt-24 md:text-2xl">
          HackHome removes all of it.
        </p>
      </PageContainer>
    </Section>
  );
}
