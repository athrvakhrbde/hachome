import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ButtonLink } from "@/components/ButtonLink";
import { PageContainer } from "@/components/PageContainer";

export const metadata = createPageMetadata({
  title: "Apply",
  description: `Apply to ${site.displayName}. Live together for 3 to 6 months in ${site.location}.`,
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <main>
      <Nav />
      <section className="section-pad border-b border-border bg-background pt-24">
        <PageContainer className="max-w-xl">
          <p className="eyebrow">Apply</p>
          <h1 className="font-tektur mt-6 text-3xl font-bold tracking-tight md:text-4xl">
            Application
          </h1>
          <p className="font-clash mt-6 leading-relaxed text-muted">
            Complete the Google Form to apply. It opens in a new tab.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={site.applyUrl}>Open application</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Back to home
            </ButtonLink>
          </div>
        </PageContainer>
      </section>
      <Footer />
    </main>
  );
}
