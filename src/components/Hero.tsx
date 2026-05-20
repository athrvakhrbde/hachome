import { site } from "@/lib/site";
import { PageContainer } from "./PageContainer";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section className="grain relative flex min-h-screen flex-col justify-end overflow-hidden border-b border-border bg-background pb-24 pt-32 md:pb-36">
      <div className="hero-grid-scroll" aria-hidden />
      <div className="hero-grid-fade" aria-hidden />
      <div className="hero-aurora-slot" aria-hidden>
        <PageContainer className="hero-aurora-rail relative h-full">
          <div className="hero-aurora">
            <div className="hero-aurora-halo" />
            <div className="hero-aurora-core" />
          </div>
        </PageContainer>
      </div>
      <PageContainer className="relative z-10">
        <p className="font-clash mb-10 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          Live-in hacker house for builders
        </p>

        <h1 className="font-tektur tektur-flush m-0 block max-w-5xl text-balance text-6xl font-normal leading-[0.92] tracking-tight md:text-8xl lg:text-[7.5rem]">
          build.
          <br />
          live.
          <br />
          <span className="text-accent text-glow">ship.</span>
        </h1>

        <p className="font-clash mt-10 max-w-xl text-lg leading-relaxed text-muted md:mt-12 md:text-xl">
          {site.heroSubhead}
        </p>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-12">
          <ButtonLink href={site.applyUrl}>Apply</ButtonLink>
          <ButtonLink href="/#about" variant="secondary">
            About
          </ButtonLink>
        </div>
      </PageContainer>
    </section>
  );
}
