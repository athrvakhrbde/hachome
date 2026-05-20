import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-accent text-background hover:opacity-90",
  secondary:
    "border border-border text-foreground hover:border-white/25 hover:bg-white/[0.03]",
  ghost: "text-accent hover:opacity-80",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`font-clash inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all ${variants[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
