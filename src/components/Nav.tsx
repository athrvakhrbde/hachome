import { site } from "@/lib/site";
import { HackhomeLogo } from "./HackhomeLogo";
import { PageContainer } from "./PageContainer";
import { ButtonLink } from "./ButtonLink";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <PageContainer className="flex items-center justify-between py-4 md:py-5">
        <a href="/" className="block shrink-0 leading-none">
          <HackhomeLogo priority />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <ButtonLink href={site.applyUrl} className="px-6 py-2.5 text-xs">
            Apply
          </ButtonLink>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <ButtonLink href={site.applyUrl} className="px-5 py-2.5 text-xs">
            Apply
          </ButtonLink>
        </div>
      </PageContainer>
    </nav>
  );
}
