import React, { useState } from "react";
import { menu, happyHour } from "@/data/menu";
import { Flame, Star, Leaf, Users, Sparkles, AlertCircle, ArrowRight } from "lucide-react";

// Featured images per category
import dish1 from "@/assets/instagram/pratos/prato-1.jpg"; // tacos
import dish3 from "@/assets/instagram/pratos/prato-3.jpg"; // fajitas
import dish4 from "@/assets/instagram/pratos/prato-7.jpg"; // sobremesas
import drinkFeatured from "@/assets/instagram/drinks/drink-1.jpg"; // coqueteis
import entradasFeatured from "@/assets/instagram/pratos/prato-5.jpg"; // entradas
import veggieFeatured from "@/assets/instagram/pratos/prato-8.jpg"; // veggie

const featuredMap: Record<string, { img: string; tag: string }> = {
  "tacos-tradicionais": { img: dish1, tag: "Nossa Especialidade" },
  fajitas: { img: dish3, tag: "Para compartilhar em grupo" },
  sobremesas: { img: dish4, tag: "O final mais doce" },
  cocteles: { img: drinkFeatured, tag: "Drinks Elaborados" },
  entradas: { img: entradasFeatured, tag: "Para abrir o apetite" },
  vegetariano: { img: veggieFeatured, tag: "Opções Verdes e Leves" },
};

export function Menu() {
  const [active, setActive] = useState("tacos-tradicionais");
  const current = menu.find((c) => c.id === active)!;
  const featured = featuredMap[active];

  const renderTags = (
    tags?: ("pimenta" | "mais-vendido" | "vegetariano" | "compartilhavel" | "chef")[],
  ) => {
    if (!tags || tags.length === 0) return null;
    return (
      <div className="flex flex-wrap gap-1.5 mt-2">
        {tags.map((tag) => {
          if (tag === "pimenta") {
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/30 border border-rose-900/40 px-2.5 py-1 rounded"
              >
                <Flame className="h-3 w-3 text-rose-500 animate-pulse fill-rose-500/20" /> Picante
              </span>
            );
          }
          if (tag === "mais-vendido") {
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/30 border border-amber-900/40 px-2.5 py-1 rounded"
              >
                <Star className="h-3 w-3 text-amber-400 fill-amber-400" /> Mais Pedido
              </span>
            );
          }
          if (tag === "vegetariano") {
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-2.5 py-1 rounded"
              >
                <Leaf className="h-3 w-3 text-emerald-400" /> Veggie
              </span>
            );
          }
          if (tag === "compartilhavel") {
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/30 border border-sky-900/40 px-2.5 py-1 rounded"
              >
                <Users className="h-3 w-3 text-sky-400" /> Compartilhar
              </span>
            );
          }
          if (tag === "chef") {
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-violet-400 bg-violet-950/30 border border-violet-900/40 px-2.5 py-1 rounded"
              >
                <Sparkles className="h-3 w-3 text-violet-400 fill-violet-400/20" /> Especial do Chef
              </span>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <section
      id="cardapio"
      className="relative bg-background py-24 md:py-32 border-b border-border/40"
    >
      <div className="container mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr] mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                El menú
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-cream">
              Taco não é
              <br />
              <span className="text-fiesta">tudo igual.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Mais de 80 opções entre entradas irresistíveis, tacos artesanais, quesadillas recheadas,
            burritos generosos e sobremesas divinas — tudo preparado na casa todos os dias.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-10 md:grid-cols-[240px_1fr] min-w-0 w-full overflow-hidden md:overflow-visible">
          {/* Sidebar categories / Horizontal Scroll on Mobile */}
          <aside className="w-full min-w-0 md:sticky md:top-28 md:self-start z-30">
            <ul className="flex overflow-x-auto md:flex-col gap-2 pb-3 md:pb-0 scrollbar-none whitespace-nowrap md:whitespace-normal w-full">
              {menu.map((c) => {
                const isActive = active === c.id;
                return (
                  <li key={c.id} className="shrink-0 md:shrink">
                    <button
                      onClick={() => setActive(c.id)}
                      className={`group flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-xs uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-accent text-accent-foreground shadow-md shadow-accent/15 scale-105"
                          : "border border-border/50 hover:border-accent/40 bg-card/40 hover:bg-card text-muted-foreground hover:text-cream"
                      }`}
                    >
                      <span>{c.title}</span>
                      <span
                        className={`hidden md:inline text-xs transition-transform group-hover:translate-x-1 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Menu Items Container */}
          <div className="space-y-8 min-w-0 w-full">
            {/* Banner Dinâmico */}
            {featured && (
              <div className="relative overflow-hidden rounded-2xl border border-border/60 h-40 sm:h-48 shadow-lg">
                <img
                  src={featured.img}
                  alt={current.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                    {featured.tag}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-cream mt-1.5 leading-tight">
                    {current.title}
                  </h3>
                </div>
              </div>
            )}

            {!featured && (
              <div className="border-b border-border/60 pb-4">
                <h3 className="font-display text-4xl text-cream">{current.title}</h3>
              </div>
            )}

            {current.subtitle && (
              <p className="font-serif text-lg italic text-accent -mt-4">{current.subtitle}</p>
            )}

            {/* Premium Grid layout for Items */}
            <div className="grid gap-4 sm:grid-cols-2">
              {current.items.map((item) => {
                const isBestSeller = item.tags?.includes("mais-vendido");
                return (
                  <div
                    key={item.name}
                    className={`group rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between ${
                      isBestSeller
                        ? "bg-card/80 border-accent/30 hover:border-accent shadow-md shadow-accent/2"
                        : "bg-card/45 border-border/70 hover:border-accent/40"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-display text-lg tracking-wide text-cream group-hover:text-accent transition-colors flex-1 min-w-0 break-words leading-tight">
                          {item.name}
                        </h4>
                        <span className="font-display text-lg text-accent shrink-0 ml-auto whitespace-nowrap">
                          R$ {item.price}
                        </span>
                      </div>

                      {item.desc && (
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      )}
                    </div>

                    {/* Tags indicators */}
                    {item.tags && renderTags(item.tags)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Happy Hour Redesigned */}
        <div className="mx-auto mt-24 max-w-6xl overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card/70 to-card shadow-2xl">
          <div className="grid gap-0 md:grid-cols-[1fr_1.4fr]">
            <div className="border-b border-primary/20 p-6 sm:p-8 md:border-b-0 md:border-r md:p-12 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 border border-accent/30 px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
                ¡Salud!
              </div>
              <h3 className="font-display text-5xl md:text-6xl leading-none text-fiesta tracking-wide">
                {happyHour.title}
              </h3>
              <p className="font-serif text-lg italic text-cream leading-relaxed">
                {happyHour.subtitle}
              </p>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground/80 uppercase tracking-widest font-semibold pt-2">
                <AlertCircle className="h-4 w-4 text-accent animate-pulse" /> {happyHour.note}
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-12 space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent border-b border-border/40 pb-2">
                Preços Promocionais do Happy Hour
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {happyHour.highlights.map((h) => (
                  <div
                    key={h.name}
                    className="flex justify-between items-start gap-4 border-b border-border/40 pb-1.5 hover:border-accent/40 transition-colors"
                  >
                    <span className="text-xs text-muted-foreground font-semibold hover:text-cream transition-colors break-words leading-snug flex-1 min-w-0">
                      {h.name}
                    </span>
                    <span className="font-display text-base text-accent shrink-0 ml-auto whitespace-nowrap pt-0.5">
                      R$ {h.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
