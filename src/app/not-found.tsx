import { createPageMetadata } from "@/lib/metadata";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ButtonLink } from "@/components/ButtonLink";
import { PageContainer } from "@/components/PageContainer";

export const metadata = createPageMetadata({
  title: "Page not found",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main>
      <Nav />
      <section className="section-pad border-b border-border bg-background pt-24">
        <PageContainer className="max-w-xl">
          <p className="eyebrow">404</p>
          <h1 className="font-tektur mt-6 text-3xl font-bold tracking-tight md:text-4xl">
            Page not found
          </h1>
          <p className="font-clash mt-6 leading-relaxed text-muted">
            This page does not exist. Head back to the home page or apply directly.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/apply" variant="secondary">
              Apply
            </ButtonLink>
          </div>
        </PageContainer>
      </section>
      <Footer />
    </main>
  );
}
