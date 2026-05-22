import { bundled, copy, site } from "@/lib/site";
import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <Section id="about" className="section-pad border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="02. About"
          headline={copy.aboutHeadline}
          subhead={copy.aboutLead}
        />

        <p className="font-clash mt-12 max-w-3xl text-lg leading-relaxed text-muted md:mt-16 md:text-xl">
          {copy.residentPerks}
        </p>

        <div className="mt-16 md:mt-20">
          <p className="eyebrow">Bundled in</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bundled.map((item) => (
              <li
                key={item}
                className="card-accent-top font-tektur text-lg font-semibold uppercase tracking-wide text-accent md:text-xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="font-clash mt-16 max-w-3xl text-base leading-relaxed text-muted md:mt-20 md:text-lg">
          {site.displayName} is a hacker house in {site.location}.
        </p>
      </PageContainer>
    </Section>
  );
}
