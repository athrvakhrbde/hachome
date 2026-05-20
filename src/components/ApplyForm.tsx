import Link from "next/link";
import { site } from "@/lib/site";
import { Section } from "./Section";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";

const inputClass =
  "w-full border border-border bg-white/[0.02] px-4 py-3 font-clash text-sm text-foreground backdrop-blur-sm";

export function ApplyForm() {
  return (
    <Section className="py-28 md:py-40">
      <PageContainer>
        <SectionHeader
          eyebrow="07. Apply"
          headline="Rolling admissions."
          subhead="We read every application. Short answers. No pitch deck required."
        />

        <form
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
          className="mt-12 max-w-xl space-y-6"
        >
          <div>
            <label htmlFor="name" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Name
            </label>
            <input id="name" name="name" type="text" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="email" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Email
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="social" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Twitter / LinkedIn
            </label>
            <input id="social" name="social" type="url" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="shipped" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              What have you shipped in the last 90 days?
            </label>
            <textarea id="shipped" name="shipped" rows={4} required className={`${inputClass} resize-y`} />
          </div>

          <div>
            <label htmlFor="why" className="font-clash mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
              Why HackHome, why now?
            </label>
            <textarea id="why" name="why" rows={4} required className={`${inputClass} resize-y`} />
          </div>

          <button
            type="submit"
            className="font-clash w-full bg-accent px-8 py-4 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
          >
            Submit Application
          </button>

          <div className="font-clash space-y-2 text-sm text-muted">
            <p>Rolling admissions. Decisions within two weeks.</p>
            <p>Some spots available via volunteer labor in lieu of fees.</p>
            <p>We reply to everyone who applies.</p>
          </div>

          <p className="font-clash text-sm text-muted">
            <Link href="/" className="text-accent transition-opacity hover:opacity-80">
              Back to home
            </Link>
          </p>
        </form>
      </PageContainer>
    </Section>
  );
}
