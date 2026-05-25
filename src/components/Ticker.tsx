const phrase = (
  <>
    we don&apos;t take <span className="text-accent">(equity)</span>, we just give{" "}
    <span className="text-accent">(opportunities)</span>
  </>
);

function TickerItem() {
  return (
    <span className="font-tektur shrink-0 text-lg font-medium uppercase tracking-wide text-foreground md:text-xl">
      {phrase}
      <span className="mx-10 text-accent/70" aria-hidden>
        ·
      </span>
    </span>
  );
}

export function Ticker() {
  return (
    <section className="ticker border-b border-border bg-surface/60" aria-label="hackhome ethos">
      <div className="ticker-viewport">
        <div className="ticker-track">
          <TickerItem />
          <TickerItem />
          <TickerItem />
          <TickerItem />
        </div>
      </div>
    </section>
  );
}
