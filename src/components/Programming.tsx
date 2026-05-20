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
    <Section id="programming" className="section-pad section-alt border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="06. Programming"
          headline="Structure without surveillance."
          subhead="Rhythm that compounds. No mandatory fun."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {schedule.map((block) => (
            <article key={block.cadence} className="card">
              <h3 className="font-tektur text-lg font-semibold uppercase tracking-wide text-accent">
                {block.cadence}
              </h3>
              <p className="font-clash mt-4 text-sm leading-relaxed text-muted">{block.desc}</p>
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="font-clash flex items-center gap-3 text-sm text-foreground/90"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
