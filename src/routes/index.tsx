import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zé Mexicano · Bar & Restaurante Mexicano em Fortaleza" },
      {
        name: "description",
        content:
          "Tacos, burritos, fajitas e drinks no melhor bar mexicano de Fortaleza. Cardápio completo, DJs, música ao vivo e eventos toda semana no Cocó.",
      },
      { property: "og:title", content: "Zé Mexicano · Bar & Restaurante" },
      {
        property: "og:description",
        content:
          "O melhor da culinária mexicana com toque brasileiro. Rua Manuel Queirós, 511 — Cocó, Fortaleza.",
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
      <About />
      <Menu />
      <Events />
      <Gallery />
      <Location />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
