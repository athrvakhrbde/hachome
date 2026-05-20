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
      <h2 className="font-tektur mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        {headline}
      </h2>
      {subhead && (
        <p className="font-clash mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {subhead}
        </p>
      )}
    </header>
  );
}
