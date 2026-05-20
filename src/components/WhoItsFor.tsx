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
    <Section id="who" className="section-pad border-b border-border">
      <PageContainer>
        <SectionHeader
          eyebrow="05. Who It's For"
          headline="Built for people already in motion."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="card border-l-4 border-l-accent">
            <p className="eyebrow mb-0">Apply if</p>
            <ul className="mt-8 space-y-4">
              {forYou.map((item) => (
                <li
                  key={item}
                  className="font-clash flex items-start gap-3 text-base text-foreground md:text-lg"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card bg-surface/80">
            <p className="font-clash text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              Not for
            </p>
            <ul className="mt-8 space-y-4">
              {notFor.map((item) => (
                <li key={item} className="font-clash text-base text-muted md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="font-clash mt-16 max-w-2xl border-l-4 border-accent bg-accent-dim px-8 py-6 text-lg leading-relaxed text-foreground/90 md:mt-20 md:text-xl">
          &ldquo;You should apply if you&apos;ve shipped in the last 90 days and want to
          live with others doing the same.&rdquo;
        </blockquote>
      </PageContainer>
    </Section>
  );
}
