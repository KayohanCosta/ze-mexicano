import ambient from "@/assets/ambient.jpg";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden py-24 md:py-32">
      <div className="container relative mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Nuestra Esencia
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>

          <p className="text-balance text-center font-serif text-3xl leading-[1.15] italic text-cream md:text-6xl">
            <span className="text-fiesta">"O Zé respeita o México</span> mas serve com sotaque
            cearense. <span className="text-accent">Tortilha na mão,</span> queijo coalho na
            cobertura, tequila no copo e samba na trilha."
          </p>

          <p className="mt-10 text-center font-script text-3xl text-accent">— a casa</p>
        </div>

        {/* picture row */}
        <div className="relative mx-auto mt-20 grid max-w-6xl gap-4 md:grid-cols-[2fr_1fr]">
          <figure className="relative overflow-hidden rounded-2xl">
            <img
              src={ambient}
              alt="Ambiente do Zé Mexicano"
              width={1600}
              height={900}
              loading="lazy"
              className="h-[260px] w-full object-cover md:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <figcaption className="absolute bottom-5 left-6 font-script text-2xl text-cream md:text-3xl">
              toda noite é festa
            </figcaption>
          </figure>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            <Pill big="80+" small="Pratos no menu" />
            <Pill big="3×" small="Eventos por semana" />
            <Pill big="100%" small="Tortilha artesanal" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ big, small }: { big: string; small: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center md:items-start md:text-left">
      <p className="font-display text-5xl text-accent md:text-6xl">{big}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{small}</p>
    </div>
  );
}
