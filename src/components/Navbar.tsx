import { useEffect, useState } from "react";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#manifesto", label: "Nuestra Esencia" },
  { href: "#eventos", label: "La Fiesta" },
  { href: "#galeria", label: "Momentos" },
  { href: "#visite", label: "Visite" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-18 items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wider text-cream">ZÉ</span>
          <span className="font-serif text-xl italic text-accent">mexicano</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send/?phone=5585989261352"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cream px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-105"
          >
            Reservar
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wide text-muted-foreground hover:bg-card hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=5585989261352"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-cream px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-ink"
            >
              Reservar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
