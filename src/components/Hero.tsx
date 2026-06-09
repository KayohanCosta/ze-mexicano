import React from "react";
import heroFallback from "@/assets/instagram/pratos/prato-4.jpg";
import { Flame, Calendar, Clock, MapPin, Phone } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover scale-[1.02] filter brightness-[0.8] contrast-[1.05]"
          poster={heroFallback}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-mexican-food-tacos-on-grill-42358-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay with radial gradient for contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-black/60" />

      {/* Hero Content Container */}
      <div className="container relative z-20 mx-auto px-5 md:px-8 py-20 flex flex-col justify-between min-h-[calc(100vh-80px)]">
        {/* Empty spacer to push content down slightly on large screens */}
        <div className="hidden md:block h-10" />

        {/* Middle content: Headings and CTAs */}
        <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
            <Flame className="h-4 w-4 animate-pulse" /> Fortaleza · Desde 2017
          </div>

          <div className="space-y-4">
            <h1 className="font-display leading-[0.85] text-cream">
              <span className="block text-[10vw] md:text-[6.5rem] tracking-tight">A AUTÊNTICA</span>
              <span className="block text-[8vw] md:text-[5.5rem] font-serif italic text-accent font-normal mt-1 leading-none">
                experiência mexicana
              </span>
              <span className="block text-[13vw] md:text-[8rem] text-fiesta tracking-wide leading-none mt-2">
                EM FORTALEZA.
              </span>
            </h1>

            <p className="max-w-2xl text-base md:text-xl text-cream/90 leading-relaxed drop-shadow-md">
              Sabores marcantes, drinks exclusivos e noites inesquecíveis no coração do Cocó. Tudo
              feito em casa diariamente para você.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#cardapio"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-fiesta)] hover:scale-105 transition-all cursor-pointer"
            >
              Explorar Cardápio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 rounded-full border border-cream/50 bg-background/30 backdrop-blur-sm px-8 py-4.5 text-xs font-bold uppercase tracking-[0.18em] text-cream hover:border-accent hover:text-accent hover:bg-background/60 transition-all cursor-pointer"
            >
              Reservar Mesa
              <span className="transition-transform group-hover:scale-110">★</span>
            </button>
          </div>
        </div>

        {/* Bottom content: Indicators Quick-Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border/40 pt-8 mt-12 animate-in fade-in duration-1000">
          <Indicator
            icon={Clock}
            label="Horário de Funcionamento"
            value="Terça a Dom: 17h — 00h (Fim de semana até 01h)"
          />
          <Indicator
            icon={MapPin}
            label="Localização"
            value="Rua Manuel Queirós, 511 — Cocó, Fortaleza"
          />
          <Indicator
            icon={Phone}
            label="Reservas e Contato"
            value="(85) 98926-1352 / (85) 98465-1070"
          />
        </div>
      </div>
    </section>
  );
}

interface IndicatorProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}

function Indicator({ icon: Icon, label, value }: IndicatorProps) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-card/25 backdrop-blur-xs border border-border/30 hover:border-accent/30 transition-colors">
      <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">{label}</p>
        <p className="mt-1 text-sm font-medium text-cream/90 leading-tight">{value}</p>
      </div>
    </div>
  );
}
