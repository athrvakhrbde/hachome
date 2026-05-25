import { PageContainer } from "./PageContainer";
import { HackhomeLogo } from "./HackhomeLogo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30 py-20 md:py-28">
      <PageContainer>
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block">
              <HackhomeLogo />
            </a>
            <p className="font-tektur mt-8 max-w-md text-xl font-medium leading-snug text-foreground">
              {site.tagline}
            </p>
            <p className="font-clash mt-4 text-sm text-muted">
              Live together for 3 to 6 months in {site.location}.
            </p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={site.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-clash text-sm font-medium text-accent"
                >
                  Apply
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 font-clash text-sm">
              <li className="text-muted">{site.location}</li>
              <li>
                <a
                  href={site.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nav inline-flex items-center gap-2.5"
                  aria-label={`${site.name} on X (${site.twitterHandle})`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="h-4 w-4 shrink-0 fill-current"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  {site.twitterHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="font-clash mt-16 border-t border-border pt-8 text-xs text-muted-subtle">
          © {new Date().getFullYear()} {site.name}
        </p>
      </PageContainer>
    </footer>
  );
}
