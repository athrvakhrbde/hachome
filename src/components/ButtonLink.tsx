import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-accent text-background shadow-glow hover:brightness-110 active:scale-[0.98]",
  secondary:
    "border border-border-strong bg-surface-raised/50 text-foreground hover:border-accent/55 hover:bg-accent-dim",
  ghost: "text-accent hover:brightness-125",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonLinkProps) {
  const isExternal = external ?? href.startsWith("http");

  return (
    <a
      href={href}
      className={`font-clash inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-200 ${variants[variant]} ${className}`.trim()}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
