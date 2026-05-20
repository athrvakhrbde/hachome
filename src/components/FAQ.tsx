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
    <Section id="faq" className="border-b border-border py-28 md:py-40">
      <PageContainer>
        <SectionHeader
          eyebrow="Questions"
          headline="Straight answers."
          subhead="No sales call required to understand how this works."
        />

        <div className="mt-14 space-y-0 border-t border-border md:mt-16">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 marker:content-none">
                <span className="font-tektur text-lg font-medium md:text-xl">{item.q}</span>
                <span className="font-clash shrink-0 text-accent group-open:hidden">+</span>
                <span className="font-clash hidden shrink-0 text-accent group-open:inline">−</span>
              </summary>
              <p className="font-clash pb-6 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
