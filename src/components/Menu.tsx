import { useState } from "react";
import { menu, happyHour } from "@/data/menu";
import dish3 from "@/assets/dish-3.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish4 from "@/assets/dish-4.jpg";

const featuredMap: Record<string, { img: string; tag: string }> = {
  "tacos-tradicionais": { img: dish1, tag: "Mais pedido" },
  "fajitas": { img: dish3, tag: "Para compartilhar" },
  "sobremesas": { img: dish4, tag: "Doce final" },
};

export function Menu() {
  const [active, setActive] = useState(menu[2].id); // start at tacos
  const current = menu.find((c) => c.id === active)!;
  const featured = featuredMap[active];

  return (
    <section id="cardapio" className="relative bg-background py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">El menú</span>
            </div>
            <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">
              Taco não é
              <br />
              <span className="text-fiesta">tudo igual.</span>
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            Mais de 80 pratos entre entradas, tacos, burritos, fajitas, frutos do mar
            e sobremesas — tudo preparado na casa, todos os dias.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-14 grid gap-10 md:grid-cols-[260px_1fr]">
          {/* Sidebar categories */}
          <aside className="md:sticky md:top-28 md:self-start">
            <ul className="grid grid-cols-2 gap-1 md:grid-cols-1">
              {menu.map((c) => {
                const isActive = active === c.id;
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => setActive(c.id)}
                      className={`group flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-card hover:text-cream"
                      }`}
                    >
                      <span className={isActive ? "font-display tracking-wider" : "font-medium"}>
                        {c.title}
                      </span>
                      <span className={`text-xs ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}>→</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Content */}
          <div>
            {featured && (
              <div className="relative mb-8 overflow-hidden rounded-2xl border border-border">
                <img src={featured.img} alt={current.title} className="h-56 w-full object-cover md:h-72" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-accent">{featured.tag}</p>
                    <h3 className="font-display text-4xl leading-none text-cream md:text-5xl">
                      {current.title}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            {!featured && (
              <div className="mb-6">
                <h3 className="font-display text-4xl text-cream md:text-5xl">{current.title}</h3>
              </div>
            )}

            {current.subtitle && (
              <p className="-mt-2 mb-6 font-serif text-lg italic text-accent">{current.subtitle}</p>
            )}

            <div className="divide-y divide-border/60">
              {current.items.map((item) => (
                <div key={item.name} className="flex gap-4 py-5">
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-display text-xl tracking-wide text-cream md:text-2xl">
                        {item.name}
                      </h4>
                      <div className="hidden flex-1 translate-y-1 border-b border-dashed border-border md:block" />
                      <span className="font-display text-xl text-accent md:text-2xl">
                        R$ {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:max-w-2xl md:text-[15px]">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Happy Hour */}
        <div className="mx-auto mt-24 max-w-6xl overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-card to-card">
          <div className="grid gap-0 md:grid-cols-[1fr_1.5fr]">
            <div className="border-b border-primary/30 p-8 md:border-b-0 md:border-r md:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">¡Salud!</span>
              <h3 className="mt-2 font-display text-6xl leading-none text-fiesta md:text-7xl">
                {happyHour.title}
              </h3>
              <p className="mt-4 font-serif text-xl italic text-cream">{happyHour.subtitle}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {happyHour.note}
              </p>
            </div>
            <div className="p-8 md:p-10">
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
