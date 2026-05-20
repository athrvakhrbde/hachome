import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Tell us what you've shipped in the last 90 days and why you need to be here now. We read every application. No pitch deck.",
  },
  {
    num: "02",
    title: "Move In",
    desc: "Room, meals, workspace, internet. Live on day one. Set up once. Stop negotiating with your calendar for basic survival.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Ship alongside people who understand the grind. Demo what you make. Stay as long as you're building something real.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="section-pad section-alt border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="04. How It Works"
          headline="Three steps. No ceremony."
          subhead="Month-to-month. No cohorts. No fixed end date."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.num} className="card">
              <span className="font-tektur text-5xl font-bold leading-none text-accent/25">
                {step.num}
              </span>
              <h3 className="font-tektur mt-6 text-2xl font-semibold">{step.title}</h3>
              <p className="font-clash mt-4 leading-relaxed text-muted">{step.desc}</p>
            </article>
          ))}
        </div>

        <p className="font-clash mt-12 max-w-2xl text-sm text-muted md:mt-16">
          Some spots available through volunteer labor in lieu of fees.
        </p>
      </PageContainer>
    </Section>
  );
}
