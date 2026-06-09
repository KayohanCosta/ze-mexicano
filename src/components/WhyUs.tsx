import React from "react";
import { Utensils, GlassWater, Music, Camera, Users, Sparkles } from "lucide-react";

interface WhyUsItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  tag: string;
  glowColor: string;
}

export function WhyUs() {
  const items: WhyUsItem[] = [
    {
      icon: Utensils,
      title: "Gastronomia Mexicana Autêntica",
      desc: "Tortilhas feitas à mão diariamente e molhos frescos com aquele tempero especial que une a tradição mexicana à alma cearense.",
      tag: "RECEITA",
      glowColor: "from-accent/25 to-fiesta/0",
    },
    {
      icon: GlassWater,
      title: "Drinks Exclusivos & Margaritas",
      desc: "Margaritas clássicas e receitas autorais exclusivas como o Sombrero e o Tijuana, elaboradas com as melhores tequilas importadas.",
      tag: "MIXOLOGIA",
      glowColor: "from-fiesta/25 to-accent/0",
    },
    {
      icon: Music,
      title: "Música Ao Vivo & Latin Vibe",
      desc: "Apresentações contagiantes com banda de Mariachi nas quintas e DJs comandando ritmos latinos e reggaeton nas sextas e sábados.",
      tag: "RITMO",
      glowColor: "from-primary/25 to-accent/0",
    },
    {
      icon: Camera,
      title: "Ambiente Instagramável",
      desc: "Uma decoração temática premium cheia de cores vibrantes, letreiros neon marcantes e cantinhos perfeitos para suas fotos.",
      tag: "ESTILO",
      glowColor: "from-accent/25 to-primary/0",
    },
    {
      icon: Users,
      title: "Ideal para Amigos e Família",
      desc: "Mesas amplas e pratos perfeitos para compartilhar, como nossas fajitas e porções de nachos, criados para celebrar bons momentos juntos.",
      tag: "UNIÃO",
      glowColor: "from-fiesta/25 to-primary/0",
    },
    {
      icon: Sparkles,
      title: "Experiência Temática Completa",
      desc: "Do momento em que você passa pela porta à saideira, criamos uma imersão cultural festiva, alegre e inesquecível.",
      tag: "CULTURA",
      glowColor: "from-primary/25 to-fiesta/0",
    },
  ];

  return (
    <section
      id="manifesto"
      className="relative py-24 md:py-32 bg-background/50 border-y border-border/40 overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-fiesta/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Diferenciais
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-cream">
            Por que viver a
            <br />
            <span className="text-fiesta font-serif italic lowercase font-normal">
              experiência
            </span>{" "}
            do Zé?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Muito mais do que um restaurante, criamos um pedaço do México vibrante e acolhedor no
            Cocó.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-border/40 bg-gradient-to-b from-card/35 to-card/10 backdrop-blur-md p-6 sm:p-8 hover:border-accent/30 hover:bg-card/45 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]"
              >
                {/* Glassy border light effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-white/5 rounded-3xl transition-colors duration-500 pointer-events-none" />

                {/* Corner Gradient Glow */}
                <div
                  className={`absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-gradient-to-br ${item.glowColor} opacity-0 group-hover:opacity-100 blur-[30px] transition-all duration-700 pointer-events-none`}
                />

                {/* Card Number / Index */}
                <div className="absolute top-6 right-8 pointer-events-none select-none text-right">
                  <span className="block font-serif text-5xl md:text-6xl text-cream/[0.04] group-hover:text-accent/[0.08] transition-all duration-500 font-bold leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-accent/35 group-hover:text-accent/60 mt-1 transition-colors duration-500">
                    {item.tag}
                  </span>
                </div>

                <div className="flex flex-col h-full justify-between space-y-6">
                  {/* Icon container */}
                  <div className="h-14 w-14 rounded-2xl bg-background/60 border border-border/80 text-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-accent/5 group-hover:bg-card transition-all duration-500 relative">
                    {/* Ring glow */}
                    <div className="absolute inset-0 rounded-2xl bg-accent/20 opacity-0 group-hover:opacity-100 blur-sm scale-110 transition-opacity duration-500 pointer-events-none" />
                    <Icon className="h-6 w-6 relative z-10" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-xl md:text-2xl text-cream tracking-wide group-hover:text-accent transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed text-muted-foreground group-hover:text-cream/90 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
