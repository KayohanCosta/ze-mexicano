import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Manifesto } from "@/components/Manifesto";
import { Menu } from "@/components/Menu";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zé Mexicano · El Rey de los Tacos · Fortaleza" },
      {
        name: "description",
        content:
          "Cantina mexicana com alma cearense em Fortaleza. Tacos artesanais, fajitas, burritos, drinks e festa toda semana no Cocó. Reserve pelo WhatsApp.",
      },
      { property: "og:title", content: "Zé Mexicano · Bar & Restaurante" },
      {
        property: "og:description",
        content:
          "Tortilha na mão, tequila no copo, festa toda noite. Rua Manuel Queirós, 511 — Cocó, Fortaleza.",
      },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Marquee
        items={[
          { label: "Tacos", accent: true },
          { label: "Margaritas" },
          { label: "Tequila", accent: true },
          { label: "Fiesta" },
          { label: "Mariachi", accent: true },
          { label: "Burritos" },
          { label: "Picante", accent: true },
          { label: "Cocó · Fortaleza" },
        ]}
      />
      <Manifesto />
      <Menu />
      <Marquee
        reverse
        fast
        items={[
          { label: "¡Ándale!", accent: true },
          { label: "Tiempo Feliz" },
          { label: "DJ · Sextas", accent: true },
          { label: "Mariachi · Quintas" },
          { label: "Sabadão Tex-Mex", accent: true },
          { label: "¡Vámonos!" },
        ]}
      />
      <Events />
      <Gallery />
      <Location />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
