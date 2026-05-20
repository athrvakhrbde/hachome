import { site } from "@/lib/site";
import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const included = ["Stay", "Laundry", "Food"] as const;

export function About() {
  return (
    <Section id="about" className="section-pad border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="About"
          headline="A live-in house for builders."
          subhead={`${site.name} is a hacker house in ${site.location}. Apply to get in touch.`}
        />

        <div className="mt-16 md:mt-20">
          <p className="eyebrow">What&apos;s included</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {included.map((item) => (
              <li
                key={item}
                className="card-accent-top font-tektur text-xl font-semibold uppercase tracking-wide text-accent md:text-2xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </Section>
  );
}
