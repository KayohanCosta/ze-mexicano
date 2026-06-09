import React, { useState, useEffect } from "react";
import { Flame, Star, Gift, Clock, Sparkles } from "lucide-react";
import promo1 from "@/assets/instagram/drinks/drink-1.jpg";
import promo2 from "@/assets/instagram/drinks/drink-2.jpg";

export function Promotions() {
  const [tuesdayTimeLeft, setTuesdayTimeLeft] = useState("");
  const [hhTimeLeft, setHhTimeLeft] = useState("");

  useEffect(() => {
    function getNextTuesday() {
      const now = new Date();
      const result = new Date();
      // Tuesday is day 2. Calculate offset.
      const dayOffset = (7 + 2 - now.getDay()) % 7;
      result.setDate(now.getDate() + (dayOffset === 0 && now.getHours() >= 23 ? 7 : dayOffset));
      result.setHours(17, 0, 0, 0);
      return result;
    }

    function getNextHappyHour() {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
      const hour = now.getHours();

      // If today is Sun-Thu (0-4) and it's before 17:00
      if (day >= 0 && day <= 4 && hour < 17) {
        const result = new Date();
        result.setHours(17, 0, 0, 0);
        return result;
      }

      // Find the next Sun-Thu day
      const result = new Date();
      let daysToAdd = 1;
      let nextDay = (day + 1) % 7;
      while (nextDay > 4) {
        daysToAdd++;
        nextDay = (nextDay + 1) % 7;
      }
      result.setDate(now.getDate() + daysToAdd);
      result.setHours(17, 0, 0, 0);
      return result;
    }

    function formatTimeDifference(targetDate: Date) {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) return "Ativo Agora!";

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const dStr = days > 0 ? `${days}d ` : "";
      const hStr = String(hours).padStart(2, "0");
      const mStr = String(minutes).padStart(2, "0");
      const sStr = String(seconds).padStart(2, "0");

      return `${dStr}${hStr}h ${mStr}m ${sStr}s`;
    }

    const interval = setInterval(() => {
      setTuesdayTimeLeft(formatTimeDifference(getNextTuesday()));
      setHhTimeLeft(formatTimeDifference(getNextHappyHour()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-card/25 border-b border-border/40 overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Ofertas Especiales
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-cream">
            Promoções em
            <br />
            <span className="text-fiesta">destaque.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
            Aproveite nossos dias temáticos com descontos imperdíveis nos melhores pratos e drinks
            de Fortaleza.
          </p>
        </div>

        {/* Promo Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Margarita em Dobro */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card hover:border-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={promo1}
                alt="Margarita em Dobro"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

              {/* Badge */}
              <div className="absolute left-4 top-4 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] shadow-md flex items-center gap-1.5">
                <Gift className="h-3.5 w-3.5" /> Ganhe Outra
              </div>

              {/* Countdown overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-background/80 backdrop-blur border border-border/40 rounded-xl p-3">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Clock className="h-4 w-4 text-accent animate-pulse shrink-0" />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold truncate">
                    Começa em:
                  </span>
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-cream bg-card px-2 py-0.5 rounded border border-border/60 shrink-0">
                  {tuesdayTimeLeft || "Carregando..."}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  Terça-Feira Margarita
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-cream tracking-wide">
                  Margarita em Dobro
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Compre qualquer Margarita da casa (Margarita Clássica Cuervo ou versões autorais
                  de Tangerina, Morango, Abacaxi, Cajá e Caju) por R$ 38,90 e ganhe outra idêntica
                  de graça! Válido a noite inteira.
                </p>
              </div>

              <div className="border-t border-border/60 pt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    Valor do par
                  </p>
                  <p className="font-display text-2xl text-cream">R$ 38,90</p>
                </div>
                <a
                  href="#cardapio"
                  className="rounded-full bg-primary/10 border border-primary/20 text-cream px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all cursor-pointer"
                >
                  Ver Drinks
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Happy Hour */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card hover:border-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={promo2}
                alt="Tiempo Feliz Happy Hour"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

              {/* Badge */}
              <div className="absolute left-4 top-4 rounded-full bg-fiesta text-cream px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] shadow-md flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-cream" /> Tiempo Feliz
              </div>

              {/* Countdown overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-background/80 backdrop-blur border border-border/40 rounded-xl p-3">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Clock className="h-4 w-4 text-accent animate-pulse shrink-0" />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold truncate">
                    <span className="hidden sm:inline">Próximo Happy Hour</span>
                    <span className="sm:hidden">Próximo HH</span>
                  </span>
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-cream bg-card px-2 py-0.5 rounded border border-border/60 shrink-0">
                  {hhTimeLeft || "Carregando..."}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  Domingo a Quinta · 17h às 20h
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-cream tracking-wide">
                  Happy Hour do Zé
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Descontos exclusivos nos pratos e bebidas mais queridos! Caipirinhas, Cozumel e
                  Micheladas por R$ 12,99. Cervejas Long Neck selecionadas (Spaten, Heineken,
                  Stella) por R$ 14,99, além de Tacos individuais por R$ 14,99.
                </p>
              </div>

              <div className="border-t border-border/60 pt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    Bebidas a partir de
                  </p>
                  <p className="font-display text-2xl text-cream">R$ 12,99</p>
                </div>
                <a
                  href="#cardapio"
                  className="rounded-full bg-primary/10 border border-primary/20 text-cream px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all cursor-pointer"
                >
                  Ver Promoções
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
