import React from "react";
import heroFallback from "@/assets/instagram/pratos/prato-4.jpg";
import { Flame, MapPin, Clock, Phone } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="top"
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32"
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

      {/* Cinematic Overlays: Linear gradient, base dimming, and radial vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-black/45" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(13,13,13,0.75)_100%)]" />

      {/* Hero Content Container */}
      <div className="hero-container container relative z-20 mx-auto px-5 md:px-8 pt-28 pb-16 md:pt-36 md:pb-16 lg:pt-40 lg:pb-16 flex flex-col justify-between min-h-[calc(100vh-80px)]">
        {/* Empty spacer to push content down slightly on large screens */}
        <div className="hero-spacer hidden md:block h-10" />

        {/* Middle content: Headings and CTAs */}
        <div className="hero-content max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
            <Flame className="h-4 w-4 animate-pulse" /> Fortaleza · Desde 2017
          </div>

          <div className="space-y-4">
            <h1 className="hero-title font-display leading-[0.85] text-cream">
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
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_0_20px_rgba(204,39,46,0.25)] hover:shadow-[0_0_30px_rgba(204,39,46,0.5)] hover:scale-105 active:scale-98 transition-all duration-300 ease-out cursor-pointer"
            >
              Explorar Cardápio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4.5 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-[0_0_20px_rgba(245,217,85,0.25)] hover:shadow-[0_0_30px_rgba(245,217,85,0.5)] hover:scale-105 active:scale-98 transition-all duration-300 ease-out cursor-pointer"
            >
              Reservar Mesa
              <span className="transition-transform group-hover:scale-110">★</span>
            </button>
          </div>
        </div>

        {/* Bottom content: Premium Invite Info Grid */}
        <div className="hero-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full pt-8 border-t border-border/30 mt-12 animate-in fade-in duration-1000">
          <InfoCard
            icon={MapPin}
            title="VISITE O ZÉ"
            line1="Rua Manuel Queirós, 511"
            line2="Cocó • Fortaleza"
            href="https://www.google.com/maps?q=Rua+Manuel+Queir%C3%B3s,+511+-+Coc%C3%B3,+Fortaleza+-+CE,+60192-220"
          />
          <InfoCard
            icon={Clock}
            title="ABERTO HOJE"
            line1="17h — 00h"
            line2="Sex e Sáb até 01h"
          />
          <InfoCard
            icon={Phone}
            title="RESERVE SUA MESA"
            line1="(85) 98926-1352"
            line2="WhatsApp Oficial"
            href="https://api.whatsapp.com/send/?phone=5585989261352"
            isHighlight
          />
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  line1: string;
  line2: string;
  href?: string;
  isHighlight?: boolean;
}

function InfoCard({ icon: Icon, title, line1, line2, href, isHighlight = false }: InfoCardProps) {
  const cardContent = (
    <div
      className={`hero-info-card flex flex-col items-center justify-center text-center h-full p-7 sm:p-8 rounded-xl backdrop-blur-xl border transition-all duration-300 group select-none ${
        isHighlight
          ? "border-accent/45 bg-accent/[0.03] shadow-[0_0_15px_rgba(245,217,85,0.04)] hover:border-accent hover:bg-accent/[0.07] hover:shadow-[0_0_30px_rgba(245,217,85,0.18)] hover:-translate-y-1 hover:scale-[1.02]"
          : "border-white/5 bg-card/8 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:border-accent/30 hover:bg-card/12 hover:-translate-y-1"
      }`}
    >
      {/* Icon */}
      <Icon className="h-4 w-4 text-accent/90 mb-2.5 transition-transform duration-300 group-hover:scale-110" />
      
      {/* Title */}
      <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent/80 font-sans group-hover:text-cream transition-colors duration-300">
        {title}
      </h3>
      
      {/* Main Info */}
      <p className="mt-3 text-base sm:text-lg font-serif italic text-cream leading-snug">
        {line1}
      </p>
      
      {/* Secondary Info */}
      <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground/75 font-medium tracking-wide">
        {line2}
      </p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block h-full">
        {cardContent}
      </a>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}
