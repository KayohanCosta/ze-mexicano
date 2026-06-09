import hero from "@/assets/hero.jpg";
import people1 from "@/assets/people-1.jpg";
import people2 from "@/assets/people-2.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <div className="container relative mx-auto grid gap-10 px-5 pb-16 md:grid-cols-[1.15fr_1fr] md:px-8 md:pb-24">
        {/* LEFT — typography */}
        <div className="relative flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Fortaleza · desde 2017
            </span>
          </div>

          <h1 className="font-display leading-[0.82]">
            <span className="block text-[18vw] text-cream md:text-[9.5rem]">EL REY</span>
            <span className="-mt-2 block font-serif text-[8vw] italic text-accent md:text-[4rem]">
              de los
            </span>
            <span className="block text-[22vw] text-fiesta md:text-[12rem]">TACOS</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Cantina mexicana de bairro, com alma cearense. Tortilha feita à mão,
            tequila boa, música alta e mesa que não acaba mais.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cardapio"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-fiesta)] transition-transform hover:scale-105"
            >
              Ver o cardápio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5585989261352"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-[0.18em] text-cream underline decoration-accent decoration-2 underline-offset-8 hover:text-accent"
            >
              Reservar mesa
            </a>
          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            <Mini label="Aberto hoje" value="17h — 00h" />
            <Mini label="Bairro" value="Cocó · CE" />
            <Mini label="Reservas" value="(85) 98926-1352" />
          </div>
        </div>

        {/* RIGHT — image collage */}
        <div className="relative h-[520px] md:h-[640px]">
          {/* main image */}
          <div className="absolute right-0 top-0 h-[78%] w-[82%] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img src={hero} alt="Tacos do Zé" width={1200} height={1200} className="h-full w-full object-cover" />
          </div>

          {/* secondary */}
          <div className="absolute bottom-0 left-0 h-[44%] w-[55%] overflow-hidden rounded-2xl border-4 border-background shadow-[var(--shadow-card)]">
            <img src={people1} alt="Cliente com margarita" width={800} height={800} loading="lazy" className="h-full w-full object-cover" />
          </div>

          {/* tertiary */}
          <div className="absolute -right-2 bottom-6 hidden h-[34%] w-[38%] overflow-hidden rounded-2xl border-4 border-background shadow-[var(--shadow-card)] md:block">
            <img src={people2} alt="Cheers de margaritas" width={800} height={800} loading="lazy" className="h-full w-full object-cover" />
          </div>

          {/* sticker badge */}
          <div className="sticker animate-wiggle absolute -left-2 top-4 z-10 max-w-[160px] rotate-[-8deg] text-center md:-left-6 md:top-10">
            <p className="font-script text-xl leading-tight text-ink">¡muy</p>
            <p className="font-display text-3xl leading-tight text-ink">picante!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-accent">{label}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}
