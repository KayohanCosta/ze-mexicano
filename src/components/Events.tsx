import people3 from "@/assets/people-3.jpg";
import people2 from "@/assets/people-2.jpg";
import dish5 from "@/assets/dish-5.jpg";

const events = [
  {
    day: "QUI",
    title: "Noche del Mariachi",
    tag: "Música ao vivo",
    desc: "Banda ao vivo tocando o melhor das rancheras e clássicos mexicanos. Cerveja em dose dupla até 21h.",
    image: dish5,
  },
  {
    day: "SEX",
    title: "Festa Loca · DJ Set",
    tag: "DJ residente",
    desc: "Latin house, reggaeton e brasilidades comandando a noite. Tequila promocional a noite inteira.",
    image: people3,
  },
  {
    day: "SÁB",
    title: "Sabadão Tex-Mex",
    tag: "Noite temática",
    desc: "Cardápio temático, tacos especiais do chef e shots cortesia pra quem aparecer fantasiado.",
    image: people2,
  },
];

export function Events() {
  return (
    <section id="eventos" className="relative py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">La fiesta no para</span>
            </div>
            <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">
              Toda semana
              <br />
              <span className="font-serif italic text-accent">tem motivo</span>
              <br />
              <span className="text-fiesta">pra vir.</span>
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            DJ, banda ao vivo e noites temáticas três vezes por semana.
            Garanta sua mesa pelo WhatsApp — sextas e sábados costumam lotar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {events.map((e, i) => (
            <article
              key={e.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-2 hover:border-accent/60 hover:shadow-[var(--shadow-fiesta)] ${
                i === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                {/* Day badge */}
                <div className="absolute left-4 top-4 rounded-full border border-cream/40 bg-background/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cream backdrop-blur">
                  {e.day}
                </div>

                {/* Sticker tag */}
                <div className="sticker absolute right-3 top-3 rotate-[8deg] !p-3 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink">{e.tag}</p>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-3xl leading-none text-cream md:text-4xl">
                    {e.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                <a
                  href="https://api.whatsapp.com/send/?phone=5585989261352"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent hover:text-cream"
                >
                  Reservar mesa →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
