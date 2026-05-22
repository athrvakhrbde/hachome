import { communityPillars, copy, programming } from "@/lib/site";
import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

type CommunityCardProps = {
  label: string;
  title: string;
  description: string;
};

function CommunityCard({ label, title, description }: CommunityCardProps) {
  return (
    <li className="community-pillar">
      <span className="font-tektur text-sm font-bold text-accent/50">{label}</span>
      <div>
        <h3 className="font-tektur text-lg font-semibold text-foreground md:text-xl">{title}</h3>
        <p className="font-clash mt-2 text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      </div>
    </li>
  );
}

export function Community() {
  return (
    <Section id="community" className="section-pad section-alt border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="03. Community"
          headline="No cohort. No end date."
          subhead={copy.communityIntro}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-5">
          <div className="flex flex-col">
            <p className="eyebrow">The model</p>
            <ul className="mt-6 flex flex-1 flex-col gap-4">
              {communityPillars.map((pillar, index) => (
                <CommunityCard
                  key={pillar.title}
                  label={String(index + 1).padStart(2, "0")}
                  title={pillar.title}
                  description={pillar.description}
                />
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <p className="eyebrow">Programming</p>
            <ul className="mt-6 flex flex-1 flex-col gap-4">
              {programming.map((item, index) => (
                <CommunityCard
                  key={item.name}
                  label={String(index + 4).padStart(2, "0")}
                  title={item.name}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
        </div>

        <p className="community-callout font-clash mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-muted md:mt-16 md:text-lg">
          {copy.communityStay} {copy.communityFluid}
        </p>
      </PageContainer>
    </Section>
  );
}
