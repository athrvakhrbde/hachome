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
    <Section id="problem" className="border-b border-border py-28 md:py-40">
      <PageContainer>
        <SectionHeader
          eyebrow="02. The Problem"
          headline="Talent is rarely the bottleneck. Environment is."
          subhead="Ambitious builders rarely fail on ideas. They fail because school, work, and daily life fragment the hours that compound."
        />

        <p className="font-clash mt-10 max-w-3xl text-lg leading-relaxed text-muted md:mt-12 md:text-xl">
          HackHome exists to remove that friction so you can go full-time on what you
          are building, surrounded by people doing the same.
        </p>

        <ul className="mt-14 space-y-3 border-l border-border pl-6 md:mt-16 md:pl-8">
          {friction.map((item) => (
            <li key={item} className="font-clash text-lg text-muted md:text-xl">
              {item}
            </li>
          ))}
        </ul>

        <p className="font-tektur mt-16 text-xl font-semibold text-accent md:mt-24 md:text-2xl">
          HackHome removes all of it.
        </p>
      </PageContainer>
    </Section>
  );
}
