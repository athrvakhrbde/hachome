import { site } from "@/lib/site";
import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { ButtonLink } from "./ButtonLink";

export function CtaBand() {
  return (
    <Section className="section-pad border-b border-border">
      <PageContainer>
        <div className="cta-panel">
          <div className="cta-panel-inner text-center md:text-left">
            <p className="eyebrow normal-case justify-center md:justify-start">
              If you&apos;re a builder
            </p>
            <h2 className="font-tektur tektur-flush mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Interested in {site.name}?
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <ButtonLink href={site.applyUrl}>Apply</ButtonLink>
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
