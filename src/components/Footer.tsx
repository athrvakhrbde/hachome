import Link from "next/link";
import Image from "next/image";
import { PageContainer } from "./PageContainer";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="py-16 md:py-24">
      <PageContainer>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/hackhome-logo.png"
                alt="HackHome"
                width={120}
                height={48}
                className="h-9 w-auto"
              />
            </Link>
            <p className="font-tektur mt-8 max-w-md text-lg font-medium leading-snug text-muted">
              {site.name} is not a hotel. It is where your best year of work happens.
            </p>
            <p className="font-clash mt-4 text-sm text-muted">
              A home for ambitious founders, hackers, and builders in {site.location}.
            </p>
          </div>

          <div>
            <p className="font-clash text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-clash text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/apply"
                  className="font-clash text-sm text-accent transition-opacity hover:opacity-80"
                >
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-clash text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-2 font-clash text-sm text-foreground/80">
              <li>{site.location}</li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {site.twitterHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="font-clash mt-16 border-t border-border pt-8 text-xs text-muted/60">
          © {new Date().getFullYear()} {site.name}
        </p>
      </PageContainer>
    </footer>
  );
}
