import dish1 from "@/assets/dish-1.jpg";

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container mx-auto grid gap-12 px-5 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={dish1} alt="Chimichanga crocante" width={800} height={800} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden h-32 w-32 rotate-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-glow)] md:flex">
            <div className="text-center">
              <p className="font-display text-3xl leading-none">+8</p>
              <p className="text-[10px] uppercase tracking-widest">anos de festa</p>
            </div>
          </div>
        </div>

        <div>
          <span className="font-script text-2xl text-accent">Quem somos</span>
          <h2 className="mt-2 font-display text-5xl md:text-6xl">
            Uma cantina <span className="text-fiesta">mexicana</span> com alma cearense
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              O Zé Mexicano nasceu pra trazer pra Fortaleza aquele clima de cantina
              de bairro do México — música alta, copo cheio e mesa que não acaba mais.
            </p>
            <p>
              Tudo aqui é feito em casa: tortilhas artesanais, molhos preparados todo dia
              e cortes selecionados de carne, frango e frutos do mar. Misturamos o melhor
              da cozinha mexicana com ingredientes do Ceará — tem carne de sol no taco,
              tem queijo coalho na cobertura.
            </p>
            <p className="font-script text-2xl text-cream">
              Vem provar. Vem ficar. Vem fazer barulho.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat n="80+" l="Pratos no menu" />
            <Stat n="3×" l="Eventos por semana" />
            <Stat n="100%" l="Tortilha artesanal" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="font-display text-3xl text-accent md:text-4xl">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{l}</p>
    </div>
  );
}
