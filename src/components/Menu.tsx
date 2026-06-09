import { useState } from "react";
import { menu, happyHour } from "@/data/menu";

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active)!;

  return (
    <section id="cardapio" className="relative bg-background py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-script text-2xl text-accent">El menú</span>
          <h2 className="mt-2 font-display text-5xl md:text-7xl">
            O Cardápio <span className="text-fiesta">Do Zé</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mais de 80 pratos entre entradas, tacos, burritos, fajitas e sobremesas — tudo preparado na casa.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all md:text-sm ${
                active === c.id
                  ? "border-accent bg-accent text-accent-foreground shadow-[var(--shadow-glow)]"
                  : "border-border bg-card text-muted-foreground hover:border-accent/60 hover:text-foreground"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Active category */}
        <div className="mx-auto mt-12 max-w-4xl">
          {current.subtitle && (
            <p className="mb-6 text-center font-script text-xl text-accent">{current.subtitle}</p>
          )}
          <div className="divide-y divide-border/70 rounded-2xl border border-border bg-card/60 p-2 md:p-6">
            {current.items.map((item) => (
              <div key={item.name} className="flex gap-4 px-3 py-5 md:px-4">
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl tracking-wide text-cream md:text-2xl">
                      {item.name}
                    </h3>
                    <div className="hidden flex-1 translate-y-1 border-b border-dashed border-border md:block" />
                    <span className="font-display text-xl text-accent md:text-2xl">
                      R$ {item.price}
                    </span>
                  </div>
                  {item.desc && (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:max-w-2xl md:text-base">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Happy hour */}
        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card to-card">
          <div className="grid gap-0 md:grid-cols-[1fr_1.4fr]">
            <div className="border-b border-primary/30 p-8 md:border-b-0 md:border-r">
              <span className="font-script text-2xl text-accent">¡Salud!</span>
              <h3 className="mt-1 font-display text-5xl text-fiesta md:text-6xl">
                {happyHour.title}
              </h3>
              <p className="mt-3 text-lg text-foreground">{happyHour.subtitle}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {happyHour.note}
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-3">
                {happyHour.highlights.map((h) => (
                  <li key={h.name} className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2">
                    <span className="text-sm text-foreground md:text-base">{h.name}</span>
                    <span className="font-display text-lg text-accent">R$ {h.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
