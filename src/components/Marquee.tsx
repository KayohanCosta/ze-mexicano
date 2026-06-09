type Item = { label: string; accent?: boolean };

export function Marquee({
  items,
  reverse = false,
  fast = false,
}: {
  items: Item[];
  reverse?: boolean;
  fast?: boolean;
}) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-background py-5">
      <div
        className={`flex shrink-0 items-center gap-10 whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer ${
          fast ? "animate-marquee-fast" : "animate-marquee"
        }`}
        style={{ 
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: fast ? "30s" : "75s"
        }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className={`font-display text-4xl uppercase tracking-wider md:text-6xl ${
                item.accent ? "text-fiesta" : "text-cream"
              }`}
            >
              {item.label}
            </span>
            <span className="text-3xl text-accent">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
