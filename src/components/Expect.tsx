import { Section } from "./Section";
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
    <Section id="expect" className="section-pad section-alt border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="What to expect"
          headline="Full-time building, with everything else handled."
          subhead="Think of it as a house that runs like infrastructure, not a program you attend between other obligations."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {expectations.map((item, i) => (
            <article key={item.title} className="card group">
              <span className="font-tektur text-sm text-accent/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-tektur mt-4 text-xl font-semibold group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="font-clash mt-4 leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
