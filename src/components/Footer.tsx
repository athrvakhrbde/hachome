import Link from "next/link";
import Image from "next/image";
import { PageContainer } from "./PageContainer";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30 py-20 md:py-28">
      <PageContainer>
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="font-tektur mt-8 max-w-md text-xl font-medium leading-snug text-foreground/90">
              {site.name} is not a hotel. It is where your best year of work happens.
            </p>
            <p className="font-clash mt-4 text-sm text-muted">
              A home for ambitious founders, hackers, and builders in {site.location}.
            </p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-nav">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/apply" className="font-clash text-sm font-medium text-accent">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 font-clash text-sm">
              <li className="text-muted">{site.location}</li>
              <li>
                <a href={`mailto:${site.email}`} className="link-nav">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nav"
                >
                  {site.twitterHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="font-clash mt-16 border-t border-border pt-8 text-xs text-muted/50">
          © {new Date().getFullYear()} {site.name}
        </p>
      </PageContainer>
    </footer>
  );
}
