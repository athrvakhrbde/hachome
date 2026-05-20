import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const schedule = [
  {
    cadence: "Weekly",
    desc: "Rhythm that keeps you accountable without eating your calendar.",
    items: ["Demo nights", "1:1s", "Investor office hours"],
  },
  {
    cadence: "Monthly",
    desc: "Depth over frequency. Rooms full of people who have actually built.",
    items: ["Founder dinners", "Guest residencies"],
  },
  {
    cadence: "Always On",
    desc: "The default state is heads-down. Everything else is optional.",
    items: ["Deep work hours", "Peer accountability", "The hacker wall"],
  },
];

export function Programming() {
  return (
    <Section id="programming" className="border-b border-border py-28 md:py-40">
      <PageContainer>
        <SectionHeader
          eyebrow="06. Programming"
          headline="Structure without surveillance."
          subhead="Rhythm that compounds. No mandatory fun."
        />

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-8">
          {schedule.map((block) => (
            <div key={block.cadence}>
              <h3 className="font-tektur text-lg font-semibold uppercase tracking-wide text-accent">
                {block.cadence}
              </h3>
              <p className="font-clash mt-3 text-sm leading-relaxed text-muted">{block.desc}</p>
              <ul className="mt-6 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="font-clash text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
