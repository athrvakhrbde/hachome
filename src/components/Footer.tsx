import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 md:py-20">
      <PageContainer>
        <p className="font-tektur max-w-lg text-lg font-medium leading-snug text-muted md:text-xl">
          HackHome is not a hotel. It is where your best year of work happens.
        </p>

        <div className="mt-12 flex flex-col gap-4 font-clash text-sm text-muted sm:flex-row sm:gap-10">
          <span>Bangalore, India</span>
          <a
            href="mailto:hello@hackhome.in"
            className="transition-colors hover:text-foreground"
          >
            hello@hackhome.in
          </a>
          <a
            href="https://x.com/hackhome"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            @hackhome
          </a>
        </div>

        <p className="font-clash mt-16 text-xs text-muted/60">
          © {new Date().getFullYear()} HackHome
        </p>
      </PageContainer>
    </footer>
  );
}
