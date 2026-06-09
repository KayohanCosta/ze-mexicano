import React, { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Mariana Vasconcelos",
      role: "Guia Local Google",
      rating: 5,
      text: "Sem dúvidas o melhor restaurante mexicano de Fortaleza! A carne de sol no taco com molho de queijo coalho é uma mistura genial que só o Zé sabe fazer. As margaritas são incríveis e a música de mariachi ao vivo na quinta-feira cria um clima único.",
      date: "Há 2 semanas",
    },
    {
      name: "Rodrigo Alencar",
      role: "Cliente Fiel",
      rating: 5,
      text: "Fui comemorar meu aniversário e a experiência foi nota 10. Ganhamos shots de tequila da casa e a equipe é extremamente animada e atenciosa. O Milho do Zé e as fajitas completas de picanha são obrigatórios!",
      date: "Há 1 mês",
    },
    {
      name: "Beatriz Mota",
      role: "Food Blogger",
      rating: 5,
      text: "Ambiente lindo e instagramável! O cardápio temático tem excelentes opções vegetarianas (o Taco de Shitake é sensacional). Os drinks autorais como o Frida Kahlo são deliciosos e muito bem apresentados. Recomendo reservar pelo WhatsApp!",
      date: "Há 3 semanas",
    },
    {
      name: "Carlos Eduardo",
      role: "Guia Local Google",
      rating: 5,
      text: "O Happy Hour de domingo a quinta vale muito a pena! Preços excelentes, tacos deliciosos e cerveja sempre trincando de gelada. A cantina tem uma energia contagiante. Voltarei com certeza muitas vezes.",
      date: "Há 2 meses",
    },
  ];

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  // Auto scroll testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-center">
          {/* Left Column: Google Ratings summary */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                Feedback
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl leading-[0.9] text-cream">
              Quem visita,
              <br />
              <span className="text-fiesta">recomenda.</span>
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              Nossos clientes expressam a paixão pelo Zé Mexicano. Confira as notas oficiais do
              Google Places.
            </p>

            {/* Google Rating Stats Card */}
            <div className="inline-flex flex-col items-center lg:items-start p-6 bg-card border border-border rounded-2xl space-y-2 shadow-lg shadow-black/10">
              <div className="flex items-center gap-2">
                <span className="font-display text-4xl text-cream">4.8</span>
                <div className="flex text-accent">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 fill-accent stroke-accent" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Baseado em mais de{" "}
                <strong className="text-cream font-semibold">1.200 avaliações</strong> no Google.
              </p>
            </div>
          </div>

          {/* Right Column: Testimonials Slider */}
          <div className="relative">
            {/* Quote decoration */}
            <Quote className="absolute -top-10 -left-6 h-24 w-24 text-primary/5 -rotate-12 pointer-events-none select-none" />

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-6 sm:p-8 md:p-12 shadow-lg">
              {/* Carousel Track */}
              <div className="min-h-[180px] flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Testimonial Stars */}
                  <div className="flex text-accent">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent stroke-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base md:text-lg italic text-cream leading-relaxed font-serif">
                    "{testimonials[activeIndex].text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-border/60 pt-4">
                  <div>
                    <h4 className="font-display text-lg tracking-wide text-cream">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground/60 font-medium">
                    {testimonials[activeIndex].date}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center lg:justify-end gap-3 mt-6">
              <button
                onClick={handlePrev}
                aria-label="Avaliação anterior"
                className="h-11 w-11 rounded-full border border-border bg-background hover:border-accent hover:text-accent flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Próxima avaliação"
                className="h-11 w-11 rounded-full border border-border bg-background hover:border-accent hover:text-accent flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
