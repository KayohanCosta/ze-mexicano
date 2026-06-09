import React, { useState } from "react";
import { Flame, Instagram, Phone, Mail, MapPin, Send } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative bg-background pb-10 pt-20 overflow-hidden">
      {/* Top thin aesthetic gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Glowing background light */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          {/* Column 1: Brand & Newsletter */}
          <div className="space-y-6">
            <div>
              <img src="/logo.svg" className="h-20 w-auto" alt="Zé Mexicano Logo" />
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              O melhor da gastronomia mexicana com aquele toque especial da culinária cearense.
              Música alta, tequila boa e sorrisos garantidos.
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-2.5">
              <p className="text-xs uppercase tracking-widest text-accent font-bold">
                Fique por dentro de eventos
              </p>
              {subscribed ? (
                <div className="text-xs font-semibold text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-xl animate-in fade-in duration-300">
                  ¡Gracias! Inscrição realizada com sucesso.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm group">
                  <input
                    type="email"
                    required
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-card/50 border border-border/80 border-r-0 rounded-l-xl px-4 py-2.5 text-xs text-cream focus:outline-none focus:border-accent/50 focus:bg-card/85 transition-all placeholder:text-muted-foreground/45"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground border border-primary px-4 rounded-r-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center cursor-pointer hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-accent font-bold">Navegue</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-semibold">
              <li>
                <a
                  href="#sobre"
                  className="group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden">
                    ›
                  </span>
                  Nossa História
                </a>
              </li>
              <li>
                <a
                  href="#cardapio"
                  className="group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden">
                    ›
                  </span>
                  Cardápio Interativo
                </a>
              </li>
              <li>
                <a
                  href="#eventos"
                  className="group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden">
                    ›
                  </span>
                  Agenda de Eventos
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden">
                    ›
                  </span>
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1 cursor-pointer text-left uppercase text-[11px]"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden">
                    ›
                  </span>
                  Reservar Mesa
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-accent font-bold">Fale Conosco</p>
            <ul className="space-y-3 text-xs text-muted-foreground font-medium">
              <li className="flex items-center gap-3 group">
                <div className="h-8 w-8 rounded-lg bg-card/60 border border-border group-hover:border-accent/40 group-hover:text-accent flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                  <Instagram className="h-3.5 w-3.5" />
                </div>
                <a
                  href="https://www.instagram.com/zemexicano1/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  @zemexicano1
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="h-8 w-8 rounded-lg bg-card/60 border border-border group-hover:border-accent/40 group-hover:text-accent flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <a
                  href="https://api.whatsapp.com/send/?phone=5585989261352"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  (85) 98926-1352 · Reservas
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="h-8 w-8 rounded-lg bg-card/60 border border-border group-hover:border-accent/40 group-hover:text-accent flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <a href="tel:+5585984651070" className="hover:text-cream transition-colors">
                  (85) 98465-1070 · Info
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="h-8 w-8 rounded-lg bg-card/60 border border-border group-hover:border-accent/40 group-hover:text-accent flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <a
                  href="mailto:zemexicanocurriculos@gmail.com"
                  className="hover:text-cream transition-colors truncate max-w-[180px] sm:max-w-none"
                >
                  zemexicanocurriculos@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Mini Map */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-accent font-bold font-sans">
              Endereço &amp; Mapa
            </p>

            <div className="text-xs text-muted-foreground leading-relaxed space-y-1">
              <p className="font-semibold text-cream">Cocó, Fortaleza</p>
              <p>Rua Manuel Queirós, 511</p>
              <p>CEP: 60192-220</p>
            </div>

            {/* Embedded Mini Map */}
            <div className="relative h-24 w-full rounded-xl overflow-hidden border border-border/80 shadow-md group">
              <iframe
                title="Mini Mapa Rodapé"
                src="https://www.google.com/maps?q=Rua+Manuel+Queir%C3%B3s,+511+-+Coc%C3%B3,+Fortaleza+-+CE,+60192-220&output=embed"
                className="absolute inset-0 h-full w-full grayscale contrast-[1.15] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="mt-16 pt-8 border-t border-border/60 space-y-4 text-[10px] text-muted-foreground/85">
          {/* Primeira Linha (Estilo original) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p>
              © 2026 Zé Mexicano Bar &amp; Restaurante. Todos os direitos reservados.
            </p>
            <p className="text-center md:text-right font-medium max-w-xs leading-normal">
              Beba com moderação. Proibida a venda de bebidas alcoólicas para menores de 18 anos.
            </p>
          </div>

          {/* Segunda Linha */}
          <div className="border-t border-border/30 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-semibold tracking-wide text-cream/80">
              Design &amp; Desenvolvimento por <span className="text-accent">Kayohan Costa</span>
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/kayohancostadev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent font-semibold transition-colors flex items-center gap-1 border border-border/50 hover:border-accent/30 bg-card/45 px-3 py-1 rounded-full text-[9px]"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/KayohanCosta"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent font-semibold transition-colors flex items-center gap-1 border border-border/50 hover:border-accent/30 bg-card/45 px-3 py-1 rounded-full text-[9px]"
              >
                GitHub
              </a>
              <a
                href="https://kayohancostadev.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent font-semibold transition-colors flex items-center gap-1 border border-border/50 hover:border-accent/30 bg-card/45 px-3 py-1 rounded-full text-[9px]"
              >
                Portfólio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
