import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WhyUs } from "@/components/WhyUs";
import { Menu } from "@/components/Menu";
import { Promotions } from "@/components/Promotions";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { History } from "@/components/History";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { BookingModal } from "@/components/BookingModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zé Mexicano · El Rey de los Tacos · Cocó, Fortaleza" },
      {
        name: "description",
        content:
          "A autêntica experiência mexicana em Fortaleza com alma cearense. Tacos artesanais, fajitas na chapa, drinks exclusivos e música ao vivo toda semana no Cocó.",
      },
      { property: "og:title", content: "Zé Mexicano · Cantina & Bar em Fortaleza" },
      {
        property: "og:description",
        content:
          "Sabores marcantes, drinks exclusivos e noites inesquecíveis no coração do Cocó. Faça sua reserva online e veja o cardápio.",
      },
      { property: "og:type", content: "restaurant" },
      {
        property: "og:image",
        content: "https://zemexicano.site/assets/instagram/pratos/prato-4.jpg",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  // Structured Schema.org JSON-LD LocalBusiness data
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "BarOrRestaurant",
    name: "Zé Mexicano",
    image: "https://zemexicano.site/assets/instagram/pratos/prato-4.jpg",
    url: "https://zemexicano.site",
    telephone: "+55-85-98926-1352",
    priceRange: "$$",
    menu: "https://zemexicano.site#cardapio",
    servesCuisine: "Mexicana, Tex-Mex",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Manuel Queirós, 511",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      postalCode: "60192-220",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -3.746098,
      longitude: -38.481354,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Sunday"],
        opens: "17:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "17:00",
        closes: "01:00",
      },
    ],
    sameAs: ["https://www.instagram.com/zemexicano1/"],
  };

  return (
    <main className="relative overflow-hidden bg-background min-h-screen">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />

      <Navbar onOpenBooking={handleOpenBooking} />

      <Hero onOpenBooking={handleOpenBooking} />

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

      <WhyUs />

      <Menu />

      <Promotions />

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

      <Events onOpenBooking={handleOpenBooking} />

      <Gallery />

      <History />

      <Testimonials />

      <Location />

      <Footer onOpenBooking={handleOpenBooking} />

      <WhatsAppFab />

      {/* Reservation Dialog Modal */}
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </main>
  );
}
