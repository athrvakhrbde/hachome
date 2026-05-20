import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    title: "Live",
    items: ["Private room", "All meals", "Laundry", "Utilities"],
  },
  {
    title: "Work",
    items: ["24/7 deep-focus workspace", "High-speed internet", "Quiet hours"],
  },
  {
    title: "Grow",
    items: [
      "Weekly 1:1 mentorship",
      "Demo nights",
      "Investor dinners",
      "Founder walks",
      "Access to top founders and investors",
    ],
  },
];

export function Included() {
  return (
    <Section id="included" className="section-pad border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="03. What's Included"
          headline="Everything handled. Nothing in your way."
          subhead="Live, work, and grow under one roof. No nickel-and-diming. No admin tax."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="card-accent-top flex flex-col">
              <h3 className="font-tektur text-xl font-semibold uppercase tracking-wide text-accent">
                {group.title}
              </h3>
              <ul className="mt-8 flex-1 space-y-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-clash flex items-start gap-3 text-sm leading-snug text-foreground/90 md:text-base"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
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
