import dish5 from "@/assets/dish-5.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish6 from "@/assets/dish-6.jpg";

export type EventItem = {
  date: string;     // "SEX 14 JUN"
  day: string;      // "14"
  month: string;    // "JUN"
  weekday: string;  // "Sexta"
  title: string;
  desc: string;
  tag: string;
  image: string;
};

export const events: EventItem[] = [
  {
    date: "Toda quinta",
    day: "QUI",
    month: "·",
    weekday: "Quinta",
    title: "Noite do Mariachi",
    desc: "Banda ao vivo tocando o melhor da música mexicana, das rancheras aos clássicos da banda. Cerveja em dose dupla até 21h.",
    tag: "Música ao vivo",
    image: dish5,
  },
  {
    date: "Toda sexta",
    day: "SEX",
    month: "·",
    weekday: "Sexta",
    title: "Festa Loca · DJ Set",
    desc: "DJ residente comandando o set com latin house, reggaeton e brasilidades. Tequila promocional a noite inteira.",
    tag: "DJ",
    image: dish2,
  },
  {
    date: "Todo sábado",
    day: "SÁB",
    month: "·",
    weekday: "Sábado",
    title: "Sabadão Tex-Mex",
    desc: "Night especial com card\u00e1pio temático, tacos do chef e shots de tequila cortesia para quem aparecer fantasiado.",
    tag: "Temática",
    image: dish6,
  },
];
