import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const forYou = [
  "Early-stage founders shipping weekly",
  "Solo hackers with real traction",
  "Builders between roles who need a runway",
  "Anyone who has shipped something in the last 90 days",
];

const notFor = [
  "Still ideating, nothing in production",
  "Tourists looking for a vibe",
  "Co-working seekers who want a desk by day",
  "People waiting for permission to start",
];

export function WhoItsFor() {
  return (
    <Section id="who" className="border-b border-border py-28 md:py-40">
      <PageContainer>
        <SectionHeader
          eyebrow="05. Who It's For"
          headline="Built for people already in motion."
        />

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-clash text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              Apply if
            </p>
            <ul className="mt-6 space-y-3">
              {forYou.map((item) => (
                <li key={item} className="font-clash text-base text-foreground md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border bg-white/[0.02] p-8 backdrop-blur-sm md:p-10">
            <p className="font-clash text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              Not for
            </p>
            <ul className="mt-6 space-y-3">
              {notFor.map((item) => (
                <li key={item} className="font-clash text-base text-muted md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="font-clash mt-16 max-w-2xl border-l-2 border-accent pl-6 text-lg leading-relaxed text-muted md:mt-20 md:text-xl">
          &ldquo;You should apply if you&apos;ve shipped in the last 90 days and want to
          live with others doing the same.&rdquo;
        </blockquote>
      </PageContainer>
    </Section>
  );
}
