type SectionHeaderProps = {
  eyebrow: string;
  headline: string;
  subhead?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  headline,
  subhead,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={className}>
      <p className="font-clash text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {eyebrow}
      </p>
      <h2 className="font-tektur mt-4 max-w-4xl text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {headline}
      </h2>
      {subhead && (
        <p className="font-clash mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {subhead}
        </p>
      )}
    </header>
  );
}
