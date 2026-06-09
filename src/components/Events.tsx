import React, { useState, useEffect } from "react";
import { Clock, Calendar, Music, Flame, Sparkles } from "lucide-react";
import mariachiImg from "@/assets/instagram/espaco/espaco-5.jpg";
import djImg from "@/assets/instagram/drinks/drink-5.jpg";
import texmexImg from "@/assets/instagram/pratos/prato-6.jpg";

interface EventItem {
  day: string;
  dayNum: number; // 4 = Thu, 5 = Fri, 6 = Sat
  hour: number; // 20 = 20h, 21 = 21h
  title: string;
  tag: string;
  desc: string;
  image: string;
  themeClass: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface EventsProps {
  onOpenBooking: () => void;
}

const events: EventItem[] = [
  {
    day: "QUINTA",
    dayNum: 4,
    hour: 20,
    title: "Noche del Mariachi",
    tag: "Música ao vivo",
    desc: "Banda Mariachi ao vivo tocando o melhor das rancheras tradicionais e clássicos mexicanos. Rodada dupla de cerveja e margaritas selecionadas.",
    image: mariachiImg,
    themeClass: "from-amber-950/40 border-amber-500/20 text-amber-400 hover:border-amber-500/50",
    icon: Music,
  },
  {
    day: "SEXTA",
    dayNum: 5,
    hour: 21,
    title: "Festa Loca · DJ Set",
    tag: "DJ Residente",
    desc: "DJ tocando o melhor do latin house, reggaeton, carimbó e brasilidades dançantes. Rodadas de shots de tequila cortesia da casa ao longo da noite.",
    image: djImg,
    themeClass:
      "from-purple-950/40 border-purple-500/20 text-purple-400 hover:border-purple-500/50",
    icon: Sparkles,
  },
  {
    day: "SÁBADO",
    dayNum: 6,
    hour: 21,
    title: "Sabadão Tex-Mex",
    tag: "Noite Temática",
    desc: "Cardápio temático estendido, tacos especiais criados pelo chef para o dia e double shot de tequila na entrada para clientes fantasiados ou com adereços.",
    image: texmexImg,
    themeClass: "from-rose-950/40 border-rose-500/20 text-rose-400 hover:border-rose-500/50",
    icon: Flame,
  },
];

export function Events({ onOpenBooking }: EventsProps) {
  const [nextEventText, setNextEventText] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function getNextEvent() {
      const now = new Date();
      const currentDay = now.getDay(); // 0 = Sun, 1 = Mon, etc.
      const currentHour = now.getHours();

      // Find which event is next in chronological order
      // Thursday event: day 4, 20h
      // Friday event: day 5, 21h
      // Saturday event: day 6, 21h

      let nextEv = events[0]; // Default to Mariachi next week
      const targetDate = new Date();

      if (currentDay < 4 || (currentDay === 4 && currentHour < 20)) {
        // Thursday is next
        nextEv = events[0];
        const offset = 4 - currentDay;
        targetDate.setDate(now.getDate() + offset);
        targetDate.setHours(20, 0, 0, 0);
      } else if (currentDay < 5 || (currentDay === 5 && currentHour < 21)) {
        // Friday is next
        nextEv = events[1];
        const offset = 5 - currentDay;
        targetDate.setDate(now.getDate() + offset);
        targetDate.setHours(21, 0, 0, 0);
      } else if (currentDay < 6 || (currentDay === 6 && currentHour < 21)) {
        // Saturday is next
        nextEv = events[2];
        const offset = 6 - currentDay;
        targetDate.setDate(now.getDate() + offset);
        targetDate.setHours(21, 0, 0, 0);
      } else {
        // Thursday next week is next
        nextEv = events[0];
        const offset = 7 - currentDay + 4;
        targetDate.setDate(now.getDate() + offset);
        targetDate.setHours(20, 0, 0, 0);
      }

      return { event: nextEv, targetDate };
    }

    const interval = setInterval(() => {
      const { event, targetDate } = getNextEvent();
      setNextEventText(event.title);

      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Acontecendo Agora!");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const dStr = days > 0 ? `${days}d ` : "";
        const hStr = String(hours).padStart(2, "0");
        const mStr = String(minutes).padStart(2, "0");
        const sStr = String(seconds).padStart(2, "0");

        setTimeLeft(`${dStr}${hStr}h ${mStr}m ${sStr}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="eventos"
      className="relative py-24 md:py-32 bg-background border-b border-border/40"
    >
      <div className="container mx-auto px-5 md:px-8">
        {/* Header Grid */}
        <div className="grid items-end gap-8 md:grid-cols-[1.3fr_1fr] mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                La fiesta no para
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-cream">
              Toda semana
              <br />
              <span className="font-serif italic text-accent">tem motivo</span>{" "}
              <span className="text-fiesta">pra vir.</span>
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              DJs renomados, mariachis ao vivo e noites temáticas exclusivas de quinta a sábado.
              Garanta sua mesa com antecedência pelo nosso sistema de reservas.
            </p>

            {/* Live Countdown Banner */}
            <div className="flex flex-row justify-between items-center bg-card border border-border rounded-2xl p-4 shadow-lg gap-2">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Clock className="h-4 w-4 animate-spin-slow" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                    Próxima Atração
                  </p>
                  <p className="text-xs text-cream font-semibold truncate">
                    {nextEventText || "Carregando..."}
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[9px] text-accent uppercase tracking-widest font-bold animate-pulse">
                  Inicia em
                </p>
                <p className="font-mono text-xs font-bold text-cream bg-background/50 border border-border/60 px-2 py-0.5 rounded mt-0.5 whitespace-nowrap">
                  {timeLeft || "Calculando..."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 pt-6">
          {events.map((e, idx) => {
            const Icon = e.icon;
            return (
              <article
                key={e.title}
                className={`group relative overflow-hidden rounded-3xl border bg-card/40 hover:bg-card/70 hover:shadow-xl hover:shadow-primary/2 transition-all duration-500 flex flex-col justify-between ${e.themeClass}`}
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/5] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Day Badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cream">
                    {e.day}
                  </div>

                  {/* Icon floating badge */}
                  <div className="absolute right-4 top-4 h-10 w-10 rounded-xl bg-background/80 backdrop-blur-sm border border-border/40 text-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Category tag */}
                  <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                    {e.tag}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl md:text-3xl text-cream tracking-wide group-hover:text-accent transition-colors">
                      {e.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{e.desc}</p>
                  </div>

                  <div className="border-t border-border/40 pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-accent" /> Início{" "}
                      {e.dayNum === 4 ? "20h" : "21h"}
                    </span>
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent hover:text-cream transition-colors cursor-pointer"
                    >
                      Reservar Mesa →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
