import { PageContainer } from "./PageContainer";
import { ButtonLink } from "./ButtonLink";

const stats = [
  { label: "Location", value: "Bangalore" },
  { label: "Stay", value: "Month-to-month" },
  { label: "Admissions", value: "Rolling" },
];

export function Hero() {
  return (
    <section className="grain relative flex min-h-screen flex-col justify-end overflow-hidden border-b border-border bg-background pb-24 pt-32 md:pb-36">
      <div className="hero-grid-scroll" aria-hidden />
      <div className="hero-glow" aria-hidden />
      <div className="hero-grid-fade" aria-hidden />
      <PageContainer className="relative z-10">
        <p className="font-clash mb-10 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          Live-in workspace for builders
        </p>

        <h1 className="font-tektur tektur-flush m-0 block max-w-5xl text-balance text-6xl font-normal leading-[0.92] tracking-tight md:text-8xl lg:text-[7.5rem]">
          build.
          <br />
          live.
          <br />
          <span className="text-accent text-glow">ship.</span>
        </h1>

        <p className="font-clash mt-10 max-w-xl text-lg leading-relaxed text-muted md:mt-12 md:text-xl">
          HackHome exists so ambitious founders and hackers can go full-time on what
          they are building, with housing, meals, workspace, and peers who get it.
        </p>

        <ul className="mt-10 flex flex-wrap gap-3 md:mt-12">
          {stats.map((s) => (
            <li key={s.label} className="pill">
              <span className="text-foreground/90">{s.value}</span>
              <span className="mx-2 text-border-strong">/</span>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-16">
          <ButtonLink href="/apply">Apply</ButtonLink>
          <ButtonLink href="/#problem" variant="secondary">
            About
          </ButtonLink>
        </div>
      </PageContainer>
    </section>
  );
}
