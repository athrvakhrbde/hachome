import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Single horizontal rhythm: aligns nav, hero, and all sections to the same left edge + 50px grid */
export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-[var(--page-gutter)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
