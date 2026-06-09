import d1 from "@/assets/dish-1.jpg";
import d2 from "@/assets/dish-2.jpg";
import d3 from "@/assets/dish-3.jpg";
import d4 from "@/assets/dish-4.jpg";
import d6 from "@/assets/dish-6.jpg";
import p1 from "@/assets/people-1.jpg";
import p2 from "@/assets/people-2.jpg";
import p3 from "@/assets/people-3.jpg";
import amb from "@/assets/ambient.jpg";

const photos = [
  { src: p1, label: "muy bonita", className: "md:col-span-2 md:row-span-2" },
  { src: d3, label: "fajitas" },
  { src: d2, label: "skull glass" },
  { src: amb, label: "noche loca", className: "md:col-span-2" },
  { src: d6, label: "tacos tacos tacos" },
  { src: p3, label: "tequila pour", className: "md:row-span-2" },
  { src: d1, label: "chimichanga" },
  { src: p2, label: "salud" },
  { src: d4, label: "churros" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative bg-background py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Momentos</span>
            </div>
            <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">
              Da nossa
              <br />
              <span className="font-serif italic text-cream">cantina</span>{" "}
              <span className="text-fiesta">pra você.</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/zemexicano1/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-end rounded-full border border-cream/40 bg-background px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-cream hover:border-accent hover:text-accent"
          >
            @zemexicano1 ↗
          </a>
        </div>

        <div className="grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {photos.map((p, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-xl ${p.className ?? ""}`}>
              <img
                src={p.src}
                alt={p.label}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-3 left-4 font-script text-xl text-cream md:text-2xl">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
