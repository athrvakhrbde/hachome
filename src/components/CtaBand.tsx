import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { ButtonLink } from "./ButtonLink";

export function CtaBand() {
  return (
    <Section className="section-pad border-b border-border">
      <PageContainer>
        <div className="cta-panel">
          <div className="cta-panel-inner text-center md:text-left">
            <p className="eyebrow justify-center md:justify-start">Join the house</p>
            <h2 className="font-tektur tektur-flush mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Apply like builders who take this seriously.
            </h2>
            <p className="font-clash mx-auto mt-6 max-w-xl text-lg text-muted md:mx-0">
              Rolling admissions. Read every application. If you have shipped in the last
              90 days, you belong in the conversation.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <ButtonLink href="/apply">Apply now</ButtonLink>
              <ButtonLink href="mailto:hello@hackhome.in" variant="secondary">
                Email us
              </ButtonLink>
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
