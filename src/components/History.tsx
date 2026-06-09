import React, { useState } from "react";
import historyImage from "@/assets/instagram/espaco/espaco-3.jpg";
import { Award, Compass, Heart, Star } from "lucide-react";

interface Milestone {
  year: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}

export function History() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones: Milestone[] = [
    {
      year: "2017",
      icon: Compass,
      title: "O Início da Viagem",
      desc: "O sonho de trazer a verdadeira essência das cantinas de bairro mexicanas para Fortaleza se materializa. Começamos pequenos, com receitas familiares, tortilhas feitas à mão e muito amor pela culinária asteca.",
    },
    {
      year: "2020",
      icon: Award,
      title: "Fusão de Culturas (Tex-Mex & CE)",
      desc: "Período de aperfeiçoamento culinário. Nossos chefs misturam clássicos mexicanos com a rica gastronomia cearense. Nasce o icônico taco de carne de sol com molho de queijo coalho na manteiga da terra.",
    },
    {
      year: "2024",
      icon: Star,
      title: "A Cantina no Cocó",
      desc: "Inauguramos nossa casa moderna e estilizada no coração do Cocó. Criamos um espaço amplo, com decorações instagramáveis exclusivas, bar premium focado em tequilas importadas e noites temáticas com shows semanais.",
    },
  ];

  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32 bg-background border-b border-border/40 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-fiesta/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column: Image with decoration */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <img
                src={historyImage}
                alt="História do Zé Mexicano"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Experience badge overlay */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 h-24 w-24 sm:h-32 sm:w-32 rotate-6 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-glow)] flex transition-all duration-300">
              <div className="text-center">
                <p className="font-display text-2xl sm:text-4xl leading-none">9+</p>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-widest font-semibold mt-1">
                  Anos de Festa
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Timeline */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Nuestra Historia
                </span>
              </div>

              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.9] text-cream">
                Uma trajetória
                <br />
                <span className="text-fiesta">de puro sabor.</span>
              </h2>

              <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                O Zé Mexicano nasceu com a missão de proporcionar diversão, cores e sabores
                autênticos. Fundada por amigos apaixonados pela gastronomia mexicana e pela
                hospitalidade acolhedora do Ceará, nossa cantina é hoje ponto de encontro de
                gerações.
              </p>
            </div>

            {/* Vertical Interactive Timeline */}
            <div className="space-y-6 relative border-l-2 border-border/80 pl-6 ml-3">
              {milestones.map((m, idx) => {
                const Icon = m.icon;
                const isActive = activeMilestone === idx;
                return (
                  <div
                    key={m.year}
                    onClick={() => setActiveMilestone(idx)}
                    className="relative cursor-pointer group transition-all"
                  >
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-[35px] top-1 h-5 w-5 rounded-full border-2 transition-all flex items-center justify-center ${
                        isActive
                          ? "bg-accent border-accent scale-110 shadow-md shadow-accent/40"
                          : "bg-background border-border group-hover:border-accent"
                      }`}
                    >
                      {isActive && (
                        <div className="h-1.5 w-1.5 rounded-full bg-accent-foreground" />
                      )}
                    </div>

                    <div className="space-y-2">
                      <span
                        className={`font-display text-xl tracking-wider transition-colors ${
                          isActive ? "text-accent" : "text-muted-foreground group-hover:text-cream"
                        }`}
                      >
                        {m.year} · {m.title}
                      </span>

                      {isActive && (
                        <p className="text-sm leading-relaxed text-muted-foreground animate-in fade-in duration-300">
                          {m.desc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
