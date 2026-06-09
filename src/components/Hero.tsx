import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={hero}
        alt="Tacos mexicanos servidos no Zé Mexicano"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 bg-papel opacity-60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="font-script text-2xl text-accent">Bienvenidos, amigos</span>
        </div>

        <h1 className="font-display text-[15vw] leading-[0.85] text-cream md:text-[10rem]">
          ZÉ
          <span className="block text-fiesta">MEXICANO</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
          O melhor da culinária mexicana com aquele toque brasileiro.
          Tacos artesanais, tequila boa e festa toda noite em Fortaleza.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#cardapio"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-fiesta)] transition-transform hover:scale-105"
          >
            Ver cardápio
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5585989261352"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent/70 bg-background/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent backdrop-blur hover:bg-accent hover:text-accent-foreground"
          >
            Reservar mesa
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
          <Info label="Aberto hoje" value="17h — 00h" />
          <Info label="Cocó, Fortaleza" value="Rua Manuel Queirós, 511" />
          <Info label="Reservas" value="(85) 98926-1352" />
        </div>
      </div>

      <div className="divider-papel absolute bottom-0 left-0 right-0" />
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-accent/80">{label}</p>
      <p className="mt-1 font-medium text-foreground">{value}</p>
    </div>
  );
}
