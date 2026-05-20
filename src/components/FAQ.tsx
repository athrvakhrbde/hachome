import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "Do I need to be a founder?",
    a: "No. We want inventors, people who bring novel work into the world. That usually means a founder or a hacker with something live, not someone still sketching on a whiteboard.",
  },
  {
    q: "How long can I stay?",
    a: "Month-to-month. No cohort end date. Stay as long as you are building something real and contributing to the house.",
  },
  {
    q: "Can I keep my job or stay enrolled in school?",
    a: "HackHome is for people going full-time on their build. Part-time side projects belong elsewhere.",
  },
  {
    q: "Do I get my own room?",
    a: "Yes. Private rooms are standard. Shared options exist if you want to reduce cost.",
  },
  {
    q: "What about food?",
    a: "All meals are included. You eat with other residents. Less delivery apps, more momentum.",
  },
  {
    q: "Is this remote?",
    a: "No. The value is in-person: deep work beside people who understand the grind, at 2am and at demo night.",
  },
  {
    q: "Are there spots without full fees?",
    a: "Some residents contribute volunteer labor in lieu of fees. Mention it in your application if that applies to you.",
  },
  {
    q: "How fast do you decide?",
    a: "Rolling admissions. We aim to respond within two weeks. We reply to everyone who applies.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" className="section-pad border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="Questions"
          headline="Straight answers."
          subhead="No sales call required to understand how this works."
        />

        <div className="mt-16 divide-y divide-border border border-border bg-surface-raised/40">
          {faqs.map((item) => (
            <details key={item.q} className="group px-6 md:px-8">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 marker:content-none transition-colors group-hover:text-accent">
                <span className="font-tektur text-lg font-medium md:text-xl">{item.q}</span>
                <span className="font-clash mt-1 shrink-0 text-accent group-open:hidden">+</span>
                <span className="font-clash mt-1 hidden shrink-0 text-accent group-open:inline">−</span>
              </summary>
              <p className="font-clash max-w-3xl pb-7 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
