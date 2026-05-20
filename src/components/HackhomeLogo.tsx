import { site } from "@/lib/site";

type HackhomeLogoProps = {
  className?: string;
  priority?: boolean;
};

/** Scalable logo (SVG). */
export function HackhomeLogo({ className = "h-9 w-auto md:h-10", priority }: HackhomeLogoProps) {
  return (
    <img
      src={site.logo}
      alt={site.name}
      width={54}
      height={40}
      className={className}
      {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
    />
  );
}
