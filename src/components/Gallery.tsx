import React, { useState, useEffect, useCallback } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

// Import photos
import drink1 from "@/assets/instagram/drinks/drink-1.jpg";
import drink2 from "@/assets/instagram/drinks/drink-2.jpg";
import drink3 from "@/assets/instagram/drinks/drink-3.jpg";
import drink4 from "@/assets/instagram/drinks/drink-4.jpg";
import drink5 from "@/assets/instagram/drinks/drink-5.jpg";
import drink6 from "@/assets/instagram/drinks/drink-6.jpg";
import drink7 from "@/assets/instagram/drinks/drink-7.jpg";

import espaco1 from "@/assets/instagram/espaco/espaco-1.jpg";
import espaco2 from "@/assets/instagram/espaco/espaco-2.jpg";
import espaco3 from "@/assets/instagram/espaco/espaco-3.jpg";
import espaco4 from "@/assets/instagram/espaco/espaco-4.jpg";
import espaco5 from "@/assets/instagram/espaco/espaco-5.jpg";

import prato1 from "@/assets/instagram/pratos/prato-1.jpg";
import prato2 from "@/assets/instagram/pratos/prato-2.jpg";
import prato3 from "@/assets/instagram/pratos/prato-3.jpg";
import prato4 from "@/assets/instagram/pratos/prato-4.jpg";
import prato5 from "@/assets/instagram/pratos/prato-5.jpg";
import prato6 from "@/assets/instagram/pratos/prato-6.jpg";
import prato7 from "@/assets/instagram/pratos/prato-7.jpg";
import prato8 from "@/assets/instagram/pratos/prato-8.jpg";

interface Photo {
  src: string;
  label: string;
  category: "ambiente" | "gastronomia" | "drinks" | "eventos";
}

const photos: Photo[] = [
  { src: prato1, label: "Tacos Artesanais de Milho", category: "gastronomia" },
  { src: drink1, label: "Margarita Clássica Cuervo", category: "drinks" },
  { src: espaco1, label: "Nossa Fachada Temática", category: "ambiente" },
  { src: espaco5, label: "Apresentação de Mariachi ao Vivo", category: "eventos" },
  { src: prato2, label: "Quesadilla Especial de File", category: "gastronomia" },
  { src: drink2, label: "Shots de Tequila Prata", category: "drinks" },
  { src: espaco2, label: "Ambiente Interno Acolhedor", category: "ambiente" },
  { src: prato3, label: "Fajitas na Chapa Quente", category: "gastronomia" },
  { src: drink3, label: "Coquetel Frida Kahlo", category: "drinks" },
  { src: espaco3, label: "Decoração Rústica Mexicana", category: "ambiente" },
  { src: drink5, label: "Moscow Mule Refrescante", category: "drinks" },
  { src: prato4, label: "Tacos Especiais do Chef", category: "gastronomia" },
  { src: espaco4, label: "Mesas Amplas para Grupos", category: "ambiente" },
  { src: prato5, label: "Chimichanga Frita e Crocante", category: "gastronomia" },
  { src: drink4, label: "Margarita de Morango", category: "drinks" },
  { src: prato6, label: "Enchiladas Gratinadas", category: "gastronomia" },
  { src: drink6, label: "Coquetel Tijuana Autoral", category: "drinks" },
  { src: prato7, label: "Churros do Chaves com Doce de Leite", category: "gastronomia" },
  { src: drink7, label: "Frozen Azulito Tropical", category: "drinks" },
  { src: prato8, label: "Sobremesa Especial do Zé", category: "gastronomia" },
];

export function Gallery() {
  const [filter, setFilter] = useState<"todos" | "ambiente" | "gastronomia" | "drinks" | "eventos">(
    "todos",
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered photos list
  const filteredPhotos = filter === "todos" ? photos : photos.filter((p) => p.category === filter);

  const handlePrevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null || prev === 0 ? filteredPhotos.length - 1 : prev - 1,
    );
  }, [lightboxIndex, filteredPhotos.length]);

  const handleNextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null || prev === filteredPhotos.length - 1 ? 0 : prev + 1,
    );
  }, [lightboxIndex, filteredPhotos.length]);

  // Handle keyboard events for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNextLightbox, handlePrevLightbox]);

  return (
    <section
      id="galeria"
      className="relative bg-background py-24 md:py-32 border-b border-border/40"
    >
      <div className="container mx-auto px-5 md:px-8">
        {/* Header Grid */}
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                Momento Zé
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-cream">
              Galeria de
              <br />
              <span className="text-fiesta">experiências.</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/zemexicano1/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 self-end rounded-full border border-cream/40 bg-background/50 hover:bg-card px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-cream hover:border-accent hover:text-accent transition-all cursor-pointer"
          >
            @zemexicano1 ↗
          </a>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border/40 pb-6">
          {(["todos", "ambiente", "gastronomia", "drinks", "eventos"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] border transition-all cursor-pointer ${
                filter === cat
                  ? "bg-accent border-accent text-accent-foreground shadow-md shadow-accent/15 scale-105"
                  : "border-border/60 hover:border-accent/40 bg-card/40 hover:bg-card text-muted-foreground hover:text-cream"
              }`}
            >
              {cat === "todos" ? "Todos" : cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredPhotos.map((p, idx) => (
            <div
              key={p.src}
              onClick={() => setLightboxIndex(idx)}
              className="break-inside-avoid relative overflow-hidden rounded-2xl border border-border/85 bg-card/20 group cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                    {p.category}
                  </span>
                  <h3 className="font-display text-lg tracking-wide text-cream">{p.label}</h3>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Maximize2 className="h-3 w-3" /> Ampliar imagem
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-in fade-in duration-300">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-background/60 hover:bg-card border border-border text-cream flex items-center justify-center transition-colors cursor-pointer z-55"
            aria-label="Fechar galeria"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation left */}
          <button
            onClick={handlePrevLightbox}
            className="absolute left-6 h-14 w-14 rounded-full bg-background/60 hover:bg-card border border-border text-cream flex items-center justify-center transition-all hover:scale-105 cursor-pointer z-55"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Navigation right */}
          <button
            onClick={handleNextLightbox}
            className="absolute right-6 h-14 w-14 rounded-full bg-background/60 hover:bg-card border border-border text-cream flex items-center justify-center transition-all hover:scale-105 cursor-pointer z-55"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Centered Image Container */}
          <div className="max-w-[85vw] max-h-[80vh] flex flex-col items-center justify-center relative select-none">
            <img
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].label}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-border/30 animate-in zoom-in-95 duration-200"
            />

            {/* Description overlay */}
            <div className="mt-4 text-center space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                {filteredPhotos[lightboxIndex].category}
              </span>
              <p className="font-display text-xl text-cream tracking-wide">
                {filteredPhotos[lightboxIndex].label}
              </p>
              <p className="text-[10px] text-muted-foreground/60">
                Imagem {lightboxIndex + 1} de {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
