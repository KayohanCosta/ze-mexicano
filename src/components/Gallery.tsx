import d1 from "@/assets/dish-1.jpg";
import d2 from "@/assets/dish-2.jpg";
import d3 from "@/assets/dish-3.jpg";
import d4 from "@/assets/dish-4.jpg";
import d5 from "@/assets/dish-5.jpg";
import d6 from "@/assets/dish-6.jpg";

const photos = [
  { src: d3, label: "Fajita de Picanha", span: "md:col-span-2 md:row-span-2" },
  { src: d1, label: "Chimichanga" },
  { src: d2, label: "Drinks da casa" },
  { src: d6, label: "Tacos da casa" },
  { src: d5, label: "Noite no Zé" },
  { src: d4, label: "Churros do Chaves" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative bg-background py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-script text-2xl text-accent">Momentos</span>
            <h2 className="mt-2 font-display text-5xl md:text-7xl">
              Da nossa <span className="text-fiesta">cantina</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/zemexicano1/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-accent hover:text-accent"
          >
            @zemexicano1 ↗
          </a>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-xl ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.label}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent opacity-90" />
              <figcaption className="absolute bottom-3 left-3 font-script text-lg text-cream">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
