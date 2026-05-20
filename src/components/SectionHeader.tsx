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
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-tektur mt-6 max-w-4xl text-balance text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl lg:text-[2.75rem]">
        {headline}
      </h2>
      {subhead && (
        <p className="font-clash mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {subhead}
        </p>
      )}
    </header>
  );
}
