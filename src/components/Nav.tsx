import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/site";
import { PageContainer } from "./PageContainer";
import { ButtonLink } from "./ButtonLink";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <PageContainer className="flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="block shrink-0 leading-none">
          <Image
            src="/hackhome-logo.png"
            alt="HackHome"
            width={140}
            height={56}
            className="h-9 w-auto md:h-10"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-clash text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href="/apply" className="px-6 py-2.5 text-xs">
            Apply
          </ButtonLink>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <ButtonLink href="/apply" className="px-5 py-2.5 text-xs">
            Apply
          </ButtonLink>
          <details className="relative">
            <summary className="font-clash cursor-pointer list-none text-sm text-muted marker:content-none">
              Menu
            </summary>
            <div className="absolute right-0 top-full z-50 mt-4 min-w-[12rem] border border-border bg-background py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-clash block px-6 py-2 text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </PageContainer>
    </nav>
  );
}
