import { events } from "@/data/events";

export function Events() {
  return (
    <section id="eventos" className="relative py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-script text-2xl text-accent">La fiesta no para</span>
            <h2 className="mt-2 font-display text-5xl md:text-7xl">
              Próximos <span className="text-fiesta">Eventos</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            DJ, banda ao vivo e noites temáticas toda semana.
            Garanta sua mesa pelo WhatsApp pra não ficar de fora.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-fiesta)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  {e.tag}
                </span>
                <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-3 py-2 text-center backdrop-blur">
                  <p className="font-display text-2xl leading-none text-accent">{e.day}</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{e.month}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-accent">{e.date}</p>
                <h3 className="mt-1 font-display text-2xl text-cream">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
