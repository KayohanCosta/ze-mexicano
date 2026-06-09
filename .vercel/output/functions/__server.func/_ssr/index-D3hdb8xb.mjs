import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { F as Flame, C as Clock, M as MapPin, P as Phone, U as Utensils, G as GlassWater, a as Music, b as Camera, c as Users, S as Sparkles, d as CircleAlert, e as Gift, f as Star, g as Maximize2, X, h as ChevronLeft, i as ChevronRight, j as Compass, A as Award, Q as Quote, k as Send, I as Instagram, l as Mail, m as Check, n as User, o as Calendar, p as ArrowRight, L as Leaf } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const links = [
  { href: "#sobre", label: "História" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#visite", label: "Visite-nos" }
];
function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 z-40 w-full transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-18 items-center justify-between px-5 py-3 md:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.svg", className: "h-16 w-auto", alt: "Zé Mexicano Logo" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-7 md:flex", children: [
            links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent font-sans",
                children: l.label
              },
              l.href
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onOpenBooking,
                className: "rounded-full bg-cream px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-105 cursor-pointer",
                children: "Reservar"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Abrir menu",
              onClick: () => setOpen((o) => !o),
              className: "flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden cursor-pointer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`
                  }
                )
              ] })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background/95 backdrop-blur md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container mx-auto flex flex-col gap-1 px-5 py-4", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wide text-muted-foreground hover:bg-card hover:text-accent font-sans",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setOpen(false);
                onOpenBooking();
              },
              className: "mt-2 rounded-full bg-cream px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-ink cursor-pointer",
              children: "Reservar Mesa"
            }
          )
        ] }) })
      ]
    }
  );
}
const prato4 = "/assets/prato-4-BNRIKEAV.jpg";
function Hero({ onOpenBooking }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 select-none pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "video",
          {
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            className: "h-full w-full object-cover scale-[1.02] filter brightness-[0.8] contrast-[1.05]",
            poster: prato4,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "source",
                {
                  src: "https://assets.mixkit.co/videos/preview/mixkit-mexican-food-tacos-on-grill-42358-large.mp4",
                  type: "video/mp4"
                }
              ),
              "Your browser does not support the video tag."
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-black/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative z-20 mx-auto px-5 md:px-8 py-20 flex flex-col justify-between min-h-[calc(100vh-80px)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block h-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4 animate-pulse" }),
              " Fortaleza · Desde 2017"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display leading-[0.85] text-cream", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10vw] md:text-[6.5rem] tracking-tight", children: "A AUTÊNTICA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8vw] md:text-[5.5rem] font-serif italic text-accent font-normal mt-1 leading-none", children: "experiência mexicana" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[13vw] md:text-[8rem] text-fiesta tracking-wide leading-none mt-2", children: "EM FORTALEZA." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-base md:text-xl text-cream/90 leading-relaxed drop-shadow-md", children: "Sabores marcantes, drinks exclusivos e noites inesquecíveis no coração do Cocó. Tudo feito em casa diariamente para você." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#cardapio",
                  className: "group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-fiesta)] hover:scale-105 transition-all cursor-pointer",
                  children: [
                    "Explorar Cardápio",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: onOpenBooking,
                  className: "group inline-flex items-center gap-3 rounded-full border border-cream/50 bg-background/30 backdrop-blur-sm px-8 py-4.5 text-xs font-bold uppercase tracking-[0.18em] text-cream hover:border-accent hover:text-accent hover:bg-background/60 transition-all cursor-pointer",
                  children: [
                    "Reservar Mesa",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:scale-110", children: "★" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border/40 pt-8 mt-12 animate-in fade-in duration-1000", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Indicator,
              {
                icon: Clock,
                label: "Horário de Funcionamento",
                value: "Terça a Dom: 17h — 00h (Fim de semana até 01h)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Indicator,
              {
                icon: MapPin,
                label: "Localização",
                value: "Rua Manuel Queirós, 511 — Cocó, Fortaleza"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Indicator,
              {
                icon: Phone,
                label: "Reservas e Contato",
                value: "(85) 98926-1352 / (85) 98465-1070"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Indicator({ icon: Icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl bg-card/25 backdrop-blur-xs border border-border/30 hover:border-accent/30 transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.18em] text-accent font-bold", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-cream/90 leading-tight", children: value })
    ] })
  ] });
}
function Marquee({
  items,
  reverse = false,
  fast = false
}) {
  const row = [...items, ...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex overflow-hidden border-y border-border bg-background py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `flex shrink-0 items-center gap-10 whitespace-nowrap ${fast ? "animate-marquee-fast" : "animate-marquee"}`,
      style: { animationDirection: reverse ? "reverse" : "normal" },
      children: row.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `font-display text-4xl uppercase tracking-wider md:text-6xl ${item.accent ? "text-fiesta" : "text-cream"}`,
            children: item.label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl text-accent", children: "✺" })
      ] }, i))
    }
  ) });
}
function WhyUs() {
  const items = [
    {
      icon: Utensils,
      title: "Gastronomia Mexicana Autêntica",
      desc: "Tortilhas feitas à mão diariamente e molhos frescos com aquele tempero especial que une a tradição mexicana à alma cearense.",
      tag: "RECEITA",
      glowColor: "from-accent/25 to-fiesta/0"
    },
    {
      icon: GlassWater,
      title: "Drinks Exclusivos & Margaritas",
      desc: "Margaritas clássicas e receitas autorais exclusivas como o Sombrero e o Tijuana, elaboradas com as melhores tequilas importadas.",
      tag: "MIXOLOGIA",
      glowColor: "from-fiesta/25 to-accent/0"
    },
    {
      icon: Music,
      title: "Música Ao Vivo & Latin Vibe",
      desc: "Apresentações contagiantes com banda de Mariachi nas quintas e DJs comandando ritmos latinos e reggaeton nas sextas e sábados.",
      tag: "RITMO",
      glowColor: "from-primary/25 to-accent/0"
    },
    {
      icon: Camera,
      title: "Ambiente Instagramável",
      desc: "Uma decoração temática premium cheia de cores vibrantes, letreiros neon marcantes e cantinhos perfeitos para suas fotos.",
      tag: "ESTILO",
      glowColor: "from-accent/25 to-primary/0"
    },
    {
      icon: Users,
      title: "Ideal para Amigos e Família",
      desc: "Mesas amplas e pratos perfeitos para compartilhar, como nossas fajitas e porções de nachos, criados para celebrar bons momentos juntos.",
      tag: "UNIÃO",
      glowColor: "from-fiesta/25 to-primary/0"
    },
    {
      icon: Sparkles,
      title: "Experiência Temática Completa",
      desc: "Do momento em que você passa pela porta à saideira, criamos uma imersão cultural festiva, alegre e inesquecível.",
      tag: "CULTURA",
      glowColor: "from-primary/25 to-fiesta/0"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "manifesto",
      className: "relative py-24 md:py-32 bg-background/50 border-y border-border/40 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-fiesta/5 blur-[120px] pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-5 md:px-8 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-accent", children: "Diferenciais" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-accent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl leading-[0.9] text-cream", children: [
              "Por que viver a",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fiesta font-serif italic lowercase font-normal", children: "experiência" }),
              " ",
              "do Zé?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed", children: "Muito mais do que um restaurante, criamos um pedaço do México vibrante e acolhedor no Cocó." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: items.map((item, index) => {
            const Icon = item.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "group relative rounded-3xl border border-border/40 bg-gradient-to-b from-card/35 to-card/10 backdrop-blur-md p-6 sm:p-8 hover:border-accent/30 hover:bg-card/45 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 border border-transparent group-hover:border-white/5 rounded-3xl transition-colors duration-500 pointer-events-none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-gradient-to-br ${item.glowColor} opacity-0 group-hover:opacity-100 blur-[30px] transition-all duration-700 pointer-events-none`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-6 right-8 pointer-events-none select-none text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-serif text-5xl md:text-6xl text-cream/[0.04] group-hover:text-accent/[0.08] transition-all duration-500 font-bold leading-none", children: String(index + 1).padStart(2, "0") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[9px] font-semibold uppercase tracking-[0.25em] text-accent/35 group-hover:text-accent/60 mt-1 transition-colors duration-500", children: item.tag })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full justify-between space-y-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-14 w-14 rounded-2xl bg-background/60 border border-border/80 text-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-accent/5 group-hover:bg-card transition-all duration-500 relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-accent/20 opacity-0 group-hover:opacity-100 blur-sm scale-110 transition-opacity duration-500 pointer-events-none" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 relative z-10" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-2xl text-cream tracking-wide group-hover:text-accent transition-colors duration-300 leading-tight", children: item.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm leading-relaxed text-muted-foreground group-hover:text-cream/90 transition-colors duration-300", children: item.desc })
                    ] })
                  ] })
                ]
              },
              index
            );
          }) })
        ] })
      ]
    }
  );
}
const menu = [
  {
    id: "entradas",
    title: "Entradas",
    items: [
      {
        name: "O Milho do Zé",
        desc: "Milho doce assado envolvido na manteiga de ervas e sour cream. Finalizado com queijo parmesão.",
        price: "44,90",
        tags: ["chef", "mais-vendido"]
      },
      {
        name: "Porção de Guacamole com Nachos",
        desc: "Nachos crocantes acompanhados de guacamole fresca.",
        price: "27,90",
        tags: ["vegetariano", "compartilhavel"]
      },
      {
        name: "Nachos 5 Molhos",
        desc: "Nachos acompanhados de guacamole, molho de salsa, sour cream, molho artesanal picante e maionese da casa.",
        price: "31,90",
        tags: ["compartilhavel", "pimenta"]
      },
      {
        name: "Nachos 3 Molhos",
        desc: "Nachos acompanhados de guacamole, sour cream e maionese da casa.",
        price: "22,90",
        tags: ["compartilhavel"]
      },
      {
        name: "Abacaxi Embriagado",
        desc: "Abacaxi embebedado na tequila prata e limão. Finalizado com pimenta calabresa e limão.",
        price: "33,90",
        tags: ["chef", "pimenta"]
      }
    ]
  },
  {
    id: "especialidades",
    title: "Especialidades",
    items: [
      {
        name: "Chilli Beans",
        desc: "Feijão, suculento molho de tomate caseiro e carne moída. Finalizado com queijo gratinado. Acompanha Nachos.",
        price: "35,90",
        tags: ["pimenta", "mais-vendido"]
      },
      {
        name: "Frango do Zé",
        desc: "Frango empanado crocante envolvido no molho levemente apimentado. Acompanha Nachos.",
        price: "34,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Camarão do Zé",
        desc: "Camarão empanado crocante envolvido no molho levemente apimentado. Acompanha Nachos.",
        price: "47,90",
        tags: ["chef", "mais-vendido"]
      },
      {
        name: "Aguachile de Peixe Branco",
        desc: "Peixe branco marinado no limão com temperos especiais. Servido com nachos crocantes.",
        price: "45,90",
        tags: ["chef"]
      },
      {
        name: "Aguachile de Camarão",
        desc: "Camarão marinado no limão com temperos especiais. Servido com nachos crocantes.",
        price: "47,90",
        tags: ["chef"]
      }
    ]
  },
  {
    id: "flautas",
    title: "Flautas Mexicanas",
    subtitle: "Servidas com sour cream e molho da casa",
    items: [
      {
        name: "Frango Defumado",
        desc: "Com toque de coentro e queijo muçarela.",
        price: "26,90",
        tags: ["mais-vendido"]
      },
      { name: "Pernil Defumado", desc: "Com toque de coentro e queijo muçarela.", price: "28,90" },
      { name: "Cupim Defumado", desc: "Com toque de coentro e queijo muçarela.", price: "28,90" },
      { name: "Costela Defumada", desc: "Com toque de coentro e queijo muçarela.", price: "31,90" },
      {
        name: "Camarão",
        desc: "Camarão refogado com cebola roxa, coentro, levemente defumado, molho de tomate pelato e catupiry original.",
        price: "35,90",
        tags: ["chef"]
      }
    ]
  },
  {
    id: "tacos-tradicionais",
    title: "Tacos Tradicionais",
    subtitle: "Feitos na massa de milho crocante",
    items: [
      {
        name: "Frango",
        desc: "Frango grelhado no tempero Tex-Mex. Servido com pasta de feijão, pico de galo, milho, guacamole, sour cream e finalizado com queijo muçarela.",
        price: "17,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Pernil",
        desc: "Pernil desfiado e marinado no tempero especial do chef. Servido com pasta de feijão, pico de galo, guacamole, sour cream, molho barbecue e acompanha molho barbecue picante. Finalizado com queijo muçarela.",
        price: "19,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Cupim",
        desc: "Cupim desfiado e marinado no tempero especial do chef. Servido com pasta de feijão, pico de galo, guacamole, sour cream e finalizado com queijo muçarela.",
        price: "19,90"
      },
      {
        name: "Carne de Sol",
        desc: "Carne de sol desfiada, refogada na manteiga da terra, cebola roxa e pico de galo. Finalizado com molho de queijo coalho e cheiro verde.",
        price: "21,90",
        tags: ["chef", "mais-vendido"]
      },
      {
        name: "Costela",
        desc: "Costela desfiada. Servida com pasta de feijão, pico de galo, guacamole e sour cream. Finalizada com queijo muçarela.",
        price: "23,90",
        tags: ["mais-vendido"]
      }
    ]
  },
  {
    id: "tacos-especiais",
    title: "Tacos Especiais",
    subtitle: "Feitos na massa de trigo",
    items: [
      {
        name: "Filé Mignon",
        desc: "Filé mignon grelhado, pico de galo e molho da casa especial. Finalizado com queijo muçarela gratinada.",
        price: "27,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Ancho",
        desc: "Ancho grelhado, pico de galo e molho da casa especial. Finalizado com queijo muçarela gratinada.",
        price: "26,90"
      },
      {
        name: "Picanha",
        desc: "Picanha grelhada, pico de galo e molho da casa especial. Finalizado com queijo muçarela gratinada.",
        price: "27,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Sobrepaleta Suína",
        desc: "Sobrepaleta suína com coleslaw, molho da casa especial, abacaxi grelhado. Acompanha molho barbecue picante.",
        price: "21,90",
        tags: ["pimenta"]
      }
    ]
  },
  {
    id: "tacos-mar",
    title: "Tacos do Mar",
    subtitle: "Massa artesanal de trigo à base de salsa",
    items: [
      {
        name: "Atum",
        desc: "Atum selado com gergelim e maionese wasabi.",
        price: "24,90",
        tags: ["chef"]
      },
      {
        name: "Filé de Peixe Crocante",
        desc: "Peixe branco crocante, salada coleslaw, sour cream e molho de salsa da casa.",
        price: "23,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Camarão Grelhado",
        desc: "Camarões grelhados, salada coleslaw, sour cream e molho de salsa da casa.",
        price: "26,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Polvo Grelhado",
        desc: "Polvo grelhado, salada coleslaw, sour cream e molho de salsa da casa.",
        price: "32,90",
        tags: ["chef"]
      },
      {
        name: "Lagosta Grelhada",
        desc: "Lagosta grelhada, salada coleslaw, sour cream e molho de salsa da casa.",
        price: "34,90",
        tags: ["chef"]
      },
      {
        name: "Frutos do Mar",
        desc: "Lagosta, camarão, polvo, refogados com cebola roxa, tomate, coentro, finalizado com sour cream e molho verde da casa.",
        price: "33,90",
        tags: ["compartilhavel"]
      }
    ]
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    subtitle: "Tortilhas grelhadas com queijo derretido, pico de galo e sour cream",
    items: [
      {
        name: "Frango",
        desc: "Queijo muçarela, pico de galo, sour cream e frango grelhado.",
        price: "49,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Pernil",
        desc: "Queijo muçarela, pico de galo, sour cream e pernil desfiado.",
        price: "51,90"
      },
      {
        name: "Cupim",
        desc: "Queijo muçarela, pico de galo, sour cream e cupim marinado.",
        price: "51,90"
      },
      {
        name: "Costela Bovina",
        desc: "Queijo muçarela, pico de galo, sour cream e costela desfiada.",
        price: "59,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Filé Mignon",
        desc: "Queijo muçarela, pico de galo, sour cream e filé mignon.",
        price: "61,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Ancho",
        desc: "Queijo muçarela, pico de galo, sour cream e bife ancho.",
        price: "61,90"
      },
      {
        name: "Picanha",
        desc: "Queijo muçarela, pico de galo, sour cream e picanha grelhada.",
        price: "61,90"
      },
      {
        name: "Camarão Grelhado",
        desc: "Queijo muçarela, pico de galo, sour cream e camarões grelhados.",
        price: "61,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Camarão Empanado",
        desc: "Queijo muçarela, pico de galo, sour cream e camarões crocantes.",
        price: "61,90"
      }
    ]
  },
  {
    id: "burgers",
    title: "Burgers do Zé",
    subtitle: "Acompanha molho do Zé, batatas fritas ou nachos",
    items: [
      {
        name: "Guadalajara",
        desc: "Sobrecoxa de frango (120g) empanada à moda do Zé, queijo cheddar, salada coleslaw e maionese da casa.",
        price: "32,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Monterrey",
        desc: "Blend da casa (120g) ao ponto, queijo cheddar, geleia de cebola caramelizada com bacon e maionese da casa.",
        price: "39,90",
        tags: ["chef", "mais-vendido"]
      },
      {
        name: "Cancún",
        desc: "Blend da casa (120g) ao ponto, queijo cheddar, alface, molho da casa à base de picles. Finalizado com farofa de bacon.",
        price: "39,90"
      }
    ]
  },
  {
    id: "chimichangas",
    title: "Chimichangas",
    subtitle: "Massa artesanal frita e crocante",
    items: [
      {
        name: "Cupim",
        desc: "Massa frita crocante recheada com cupim marinado no tempero especial do chef.",
        price: "20,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Costela",
        desc: "Massa frita crocante recheada com costela bovina desfiada.",
        price: "22,90"
      },
      {
        name: "Camarão",
        desc: "Massa frita crocante recheada com camarão refogado com cebola roxa, molho de tomate pelato e catupiry original.",
        price: "24,90",
        tags: ["chef"]
      }
    ]
  },
  {
    id: "burritos",
    title: "Burritos",
    items: [
      {
        name: "Frango Grelhado",
        desc: "Frango grelhado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "44,90"
      },
      {
        name: "Frango Empanado",
        desc: "Frango empanado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "44,90"
      },
      {
        name: "Pernil Desfiado",
        desc: "Pernil desfiado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "44,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Peixe Empanado",
        desc: "Peixe branco empanado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "44,90"
      },
      {
        name: "Cupim Desfiado",
        desc: "Cupim desfiado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "46,90"
      },
      {
        name: "Atum Grelhado",
        desc: "Atum grelhado (130g) com gergelim, guacamole, pico de galo, sour cream, maionese da casa, alface e pasta de feijão.",
        price: "46,90",
        tags: ["chef"]
      },
      {
        name: "Costela Desfiada",
        desc: "Costela desfiada (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "54,90"
      },
      {
        name: "Filé Mignon",
        desc: "Filé Mignon (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "58,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Picanha",
        desc: "Picanha grelhada (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "58,90"
      },
      {
        name: "Camarão Salteado",
        desc: "Camarões salteados no azeite (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "58,90"
      },
      {
        name: "Camarão Empanado",
        desc: "Camarão empanado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "58,90",
        tags: ["mais-vendido"]
      }
    ]
  },
  {
    id: "enchiladas",
    title: "Enchiladas",
    items: [
      {
        name: "Frango",
        desc: "Tortilha de trigo recheada com frango em tiras no tempero Tex-Mex. Acompanha molho de tomate artesanal, molho branco e finalizada com queijo gratinado.",
        price: "49,90"
      },
      {
        name: "Pernil",
        desc: "Tortilha de trigo recheada com pernil desfiado. Acompanha molho de tomate artesanal e finalizada com queijo gratinado.",
        price: "49,90"
      },
      {
        name: "Carne",
        desc: "Tortilha de trigo recheada com carne moída. Acompanha molho de tomate artesanal e finalizada com queijo gratinado.",
        price: "54,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Cupim",
        desc: "Tortilha de trigo recheada com cupim desfiado. Acompanha molho de tomate artesanal e finalizada com queijo gratinado.",
        price: "54,90"
      },
      {
        name: "Camarão",
        desc: "Tortilha de trigo recheada com camarões grelhados. Acompanha molho de tomate artesanal, molho branco e finalizada com queijo gratinado.",
        price: "59,90",
        tags: ["chef"]
      }
    ]
  },
  {
    id: "fajitas",
    title: "Fajitas Completas",
    subtitle: "Acompanha tortilhas de trigo, chili beans, arroz de açafrão, guacamole, sour cream, molho da casa e mix de pimentões fritos",
    items: [
      {
        name: "Frango Completa",
        desc: "Sobrecoxa de frango desossada grelhada (300g).",
        price: "99,90"
      },
      {
        name: "Prime Rib Suíno Completa",
        desc: "Prime rib suíno (400g) com molho barbecue picante.",
        price: "109,90",
        tags: ["pimenta"]
      },
      {
        name: "Bife Ancho Completa",
        desc: "Corte noble bovino grelhado (300g).",
        price: "145,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Picanha Importada Completa",
        desc: "Corte nobre da picanha grelhada (300g).",
        price: "149,90",
        tags: ["chef", "mais-vendido"]
      }
    ]
  },
  {
    id: "vegetariano",
    title: "Vegetariano",
    items: [
      {
        name: "Taco Shitake",
        desc: "Pasta de feijão, shitake, guacamole, pico de galo, alface, sour cream e parmesão.",
        price: "19,90",
        tags: ["vegetariano", "chef"]
      },
      {
        name: "Chimichanga Shitake com Alho Poró",
        desc: "Massa artesanal frita e recheada com shitake e alho poró.",
        price: "26,90",
        tags: ["vegetariano"]
      },
      {
        name: "Burrito Berinjela com Abobrinha",
        desc: "Queijo muçarela, guacamole, pico de galo, berinjela e abobrinha.",
        price: "34,90",
        tags: ["vegetariano"]
      },
      {
        name: "Enchiladas de Berinjela",
        desc: "Tortilha de trigo recheada com abobrinha e berinjela. Acompanha molho de tomate artesanal e finalizada com queijo gratinado.",
        price: "42,90",
        tags: ["vegetariano"]
      }
    ]
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    items: [
      {
        name: "Romeu e Julieta",
        desc: "Massa frita crocante recheada com queijo coalho e goiabada.",
        price: "19,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Doce de Leite",
        desc: "Massa frita crocante recheada com doce de leite caseiro.",
        price: "24,90"
      },
      {
        name: "Banana com Nutella",
        desc: "Massa frita crocante recheada com banana e toque de canela e Nutella.",
        price: "27,90"
      },
      {
        name: "Morango com Nutella",
        desc: "Massa frita crocante recheada com morangos frescos e Nutella.",
        price: "29,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Churros do Chaves",
        desc: "04 unidades de churros bem crocantes com doce de leite.",
        price: "28,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Sobremesa do Zé",
        desc: "Paleta mexicana sabor pistache com sorvete de queijo, calda de chocolate e finalizada com castanha.",
        price: "34,90",
        tags: ["chef"]
      }
    ]
  },
  {
    id: "cocteles",
    title: "Coquetéis & Drinks",
    subtitle: "Clássicos Mexicanos, Autorais e Clássicos Brasileiros",
    items: [
      {
        name: "Cuervo Margarita",
        desc: "Tequila Jose Cuervo Especial, licor de laranja e limão taiti.",
        price: "29,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Cuervo Margarita Sabores",
        desc: "Tequila Jose Cuervo Especial, licor de laranja e cordial de Tangerina, Morango, Abacaxi, Cajá ou Caju.",
        price: "29,90"
      },
      {
        name: "Cuervo Paloma",
        desc: "Tequila Jose Cuervo Especial, xarope de Grapefruit, limão taiti, água com gás e laranja Bahia.",
        price: "31,90"
      },
      {
        name: "Sombrero",
        desc: "Tequila Jose Cuervo Especial, licor de laranja, suco de manga, limão siciliano, xarope de pimenta mexicana e espuma de beterraba com hibisco.",
        price: "32,90",
        tags: ["chef"]
      },
      {
        name: "Frida Kahlo",
        desc: "Tequila Jose Cuervo Especial, infusão de hibisco, Martini Rosato, xarope de rosas, limão taiti e água com gás.",
        price: "31,90",
        tags: ["chef"]
      },
      {
        name: "Tijuana",
        desc: "Tequila Jose Cuervo Especial, tamarindo, limão taiti, xarope de rapadura e sal temperado com páprica picante.",
        price: "29,90"
      },
      {
        name: "Zé Caliente",
        desc: "Tequila Jose Cuervo Especial, maracujá, xarope de gengibre, xarope de pimenta e espuma de gengibre.",
        price: "29,90",
        tags: ["pimenta"]
      },
      {
        name: "Moscow Mule",
        desc: "Vodka, xarope de gengibre, limão taiti, água com gás e espuma de gengibre.",
        price: "31,90",
        tags: ["mais-vendido"]
      },
      {
        name: "Fitzgerald",
        desc: "Gin, limão siciliano, xarope simples e Angostura.",
        price: "33,90"
      },
      { name: "Caipirinha Limão", desc: "Cachaça e limão.", price: "18,90" },
      {
        name: "Caipirinha do Zé",
        desc: "Cachaça, limão siciliano, xarope de rapadura e pimenta tabasco.",
        price: "19,90",
        tags: ["chef"]
      },
      { name: "Cozumel", desc: "Cerveja da casa, limão taiti e sal.", price: "19,90" },
      {
        name: "Michelada",
        desc: "Cerveja da casa, limão taiti, pimenta, tabasco e molho inglês.",
        price: "19,90",
        tags: ["pimenta"]
      }
    ]
  }
];
const happyHour = {
  title: "Tiempo Feliz",
  subtitle: "Domingo a quinta · 17h às 20h",
  note: "*Happy Hour não é válido aos feriados.",
  highlights: [
    { name: "Dupla de Flautas (Frango)", price: "14,99" },
    { name: "Taco (1 un.) — Pernil ou Carne do Sol", price: "14,99" },
    { name: "Tostadita (1 un.) — Tartar de Atum ou Pernil", price: "12,99" },
    { name: "Chimichanga (1 un.) — Cupim ou Pernil", price: "12,99" },
    { name: "Chimichanga Doce — Banana com Creme de Avelã", price: "12,99" },
    { name: "Burguer Guadalajara (Frango Empanado)", price: "29,90" },
    { name: "Nachos 5 Molhos (Acompanha Nachos)", price: "24,90" },
    { name: "Porção de Guacamole", price: "19,90" },
    { name: "Cervejas Long Neck (Spaten, Heineken, Stella...)", price: "14,99" },
    { name: "Moscow Mule ou Tihuana", price: "21,90" },
    { name: "Caipirinha, Cozumel ou Michelada", price: "12,99" }
  ]
};
const prato1 = "/assets/prato-1-Cgpe0JPp.jpg";
const prato3 = "/assets/prato-3-heVxK3bI.jpg";
const prato7 = "/assets/prato-7-COwHrZ0c.jpg";
const drink1 = "/assets/drink-1-H71Xlojl.jpg";
const prato5 = "/assets/prato-5-sOR05Co6.jpg";
const prato8 = "/assets/prato-8-Bq7NvIf8.jpg";
const featuredMap = {
  "tacos-tradicionais": { img: prato1, tag: "Nossa Especialidade" },
  fajitas: { img: prato3, tag: "Para compartilhar em grupo" },
  sobremesas: { img: prato7, tag: "O final mais doce" },
  cocteles: { img: drink1, tag: "Drinks Elaborados" },
  entradas: { img: prato5, tag: "Para abrir o apetite" },
  vegetariano: { img: prato8, tag: "Opções Verdes e Leves" }
};
function Menu() {
  const [active, setActive] = reactExports.useState("tacos-tradicionais");
  const current = menu.find((c) => c.id === active);
  const featured = featuredMap[active];
  const renderTags = (tags) => {
    if (!tags || tags.length === 0) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-2", children: tags.map((tag) => {
      if (tag === "pimenta") {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/30 border border-rose-900/40 px-2.5 py-1 rounded",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3 text-rose-500 animate-pulse fill-rose-500/20" }),
              " Picante"
            ]
          },
          tag
        );
      }
      if (tag === "mais-vendido") {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/30 border border-amber-900/40 px-2.5 py-1 rounded",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 text-amber-400 fill-amber-400" }),
              " Mais Pedido"
            ]
          },
          tag
        );
      }
      if (tag === "vegetariano") {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-2.5 py-1 rounded",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-3 w-3 text-emerald-400" }),
              " Veggie"
            ]
          },
          tag
        );
      }
      if (tag === "compartilhavel") {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/30 border border-sky-900/40 px-2.5 py-1 rounded",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3 text-sky-400" }),
              " Compartilhar"
            ]
          },
          tag
        );
      }
      if (tag === "chef") {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-violet-400 bg-violet-950/30 border border-violet-900/40 px-2.5 py-1 rounded",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-violet-400 fill-violet-400/20" }),
              " Especial do Chef"
            ]
          },
          tag
        );
      }
      return null;
    }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "cardapio",
      className: "relative bg-background py-24 md:py-32 border-b border-border/40",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-5 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-end gap-8 md:grid-cols-[1.2fr_1fr] mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-accent", children: "El menú" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl leading-[0.9] text-cream", children: [
              "Taco não é",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fiesta", children: "tudo igual." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base leading-relaxed", children: "Mais de 80 opções entre entradas irresistíveis, tacos artesanais, quesadillas recheadas, burritos generosos e sobremesas divinas — tudo preparado na casa todos os dias." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-[240px_1fr] min-w-0 w-full overflow-hidden md:overflow-visible", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "w-full min-w-0 md:sticky md:top-28 md:self-start z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex overflow-x-auto md:flex-col gap-2 pb-3 md:pb-0 scrollbar-none whitespace-nowrap md:whitespace-normal w-full", children: menu.map((c) => {
            const isActive = active === c.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "shrink-0 md:shrink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setActive(c.id),
                className: `group flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-xs uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${isActive ? "bg-accent text-accent-foreground shadow-md shadow-accent/15 scale-105" : "border border-border/50 hover:border-accent/40 bg-card/40 hover:bg-card text-muted-foreground hover:text-cream"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `hidden md:inline text-xs transition-transform group-hover:translate-x-1 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`,
                      children: "→"
                    }
                  )
                ]
              }
            ) }, c.id);
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 min-w-0 w-full", children: [
            featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-border/60 h-40 sm:h-48 shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: featured.img,
                  alt: current.title,
                  className: "h-full w-full object-cover transition-transform duration-700 hover:scale-103",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-6 right-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20", children: featured.tag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl sm:text-3xl md:text-4xl text-cream mt-1.5 leading-tight", children: current.title })
              ] })
            ] }),
            !featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/60 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl text-cream", children: current.title }) }),
            current.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg italic text-accent -mt-4", children: current.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: current.items.map((item) => {
              const isBestSeller = item.tags?.includes("mais-vendido");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `group rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between ${isBestSeller ? "bg-card/80 border-accent/30 hover:border-accent shadow-md shadow-accent/2" : "bg-card/45 border-border/70 hover:border-accent/40"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg tracking-wide text-cream group-hover:text-accent transition-colors flex-1 min-w-0 break-words leading-tight", children: item.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg text-accent shrink-0 ml-auto whitespace-nowrap", children: [
                          "R$ ",
                          item.price
                        ] })
                      ] }),
                      item.desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.desc })
                    ] }),
                    item.tags && renderTags(item.tags)
                  ]
                },
                item.name
              );
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-24 max-w-6xl overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card/70 to-card shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-0 md:grid-cols-[1fr_1.4fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-primary/20 p-6 sm:p-8 md:border-b-0 md:border-r md:p-12 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-1.5 rounded-full bg-accent/15 border border-accent/30 px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-accent", children: "¡Salud!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-5xl md:text-6xl leading-none text-fiesta tracking-wide", children: happyHour.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg italic text-cream leading-relaxed", children: happyHour.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] text-muted-foreground/80 uppercase tracking-widest font-semibold pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-accent animate-pulse" }),
              " ",
              happyHour.note
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 md:p-12 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-accent border-b border-border/40 pb-2", children: "Preços Promocionais do Happy Hour" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: happyHour.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex justify-between items-start gap-4 border-b border-border/40 pb-1.5 hover:border-accent/40 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-semibold hover:text-cream transition-colors break-words leading-snug flex-1 min-w-0", children: h.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-base text-accent shrink-0 ml-auto whitespace-nowrap pt-0.5", children: [
                    "R$ ",
                    h.price
                  ] })
                ]
              },
              h.name
            )) })
          ] })
        ] }) })
      ] })
    }
  );
}
const drink2 = "/assets/drink-2-CWtJ8NZj.jpg";
function Promotions() {
  const [tuesdayTimeLeft, setTuesdayTimeLeft] = reactExports.useState("");
  const [hhTimeLeft, setHhTimeLeft] = reactExports.useState("");
  reactExports.useEffect(() => {
    function getNextTuesday() {
      const now = /* @__PURE__ */ new Date();
      const result = /* @__PURE__ */ new Date();
      const dayOffset = (7 + 2 - now.getDay()) % 7;
      result.setDate(now.getDate() + (dayOffset === 0 && now.getHours() >= 23 ? 7 : dayOffset));
      result.setHours(17, 0, 0, 0);
      return result;
    }
    function getNextHappyHour() {
      const now = /* @__PURE__ */ new Date();
      const day = now.getDay();
      const hour = now.getHours();
      if (day >= 0 && day <= 4 && hour < 17) {
        const result2 = /* @__PURE__ */ new Date();
        result2.setHours(17, 0, 0, 0);
        return result2;
      }
      const result = /* @__PURE__ */ new Date();
      let daysToAdd = 1;
      let nextDay = (day + 1) % 7;
      while (nextDay > 4) {
        daysToAdd++;
        nextDay = (nextDay + 1) % 7;
      }
      result.setDate(now.getDate() + daysToAdd);
      result.setHours(17, 0, 0, 0);
      return result;
    }
    function formatTimeDifference(targetDate) {
      const now = /* @__PURE__ */ new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) return "Ativo Agora!";
      const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
      const hours2 = Math.floor(diff / (1e3 * 60 * 60) % 24);
      const minutes = Math.floor(diff / (1e3 * 60) % 60);
      const seconds = Math.floor(diff / 1e3 % 60);
      const dStr = days > 0 ? `${days}d ` : "";
      const hStr = String(hours2).padStart(2, "0");
      const mStr = String(minutes).padStart(2, "0");
      const sStr = String(seconds).padStart(2, "0");
      return `${dStr}${hStr}h ${mStr}m ${sStr}s`;
    }
    const interval = setInterval(() => {
      setTuesdayTimeLeft(formatTimeDifference(getNextTuesday()));
      setHhTimeLeft(formatTimeDifference(getNextHappyHour()));
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 md:py-32 bg-card/25 border-b border-border/40 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-5 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-accent", children: "Ofertas Especiales" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl leading-[0.9] text-cream", children: [
          "Promoções em",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fiesta", children: "destaque." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed", children: "Aproveite nossos dias temáticos com descontos imperdíveis nos melhores pratos e drinks de Fortaleza." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-3xl border border-border bg-card hover:border-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: drink1,
                alt: "Margarita em Dobro",
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] shadow-md flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-3.5 w-3.5" }),
              " Ganhe Outra"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex justify-between items-center bg-background/80 backdrop-blur border border-border/40 rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-accent animate-pulse shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold truncate", children: "Começa em:" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs sm:text-sm font-bold text-cream bg-card px-2 py-0.5 rounded border border-border/60 shrink-0", children: tuesdayTimeLeft || "Carregando..." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-bold", children: "Terça-Feira Margarita" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl text-cream tracking-wide", children: "Margarita em Dobro" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Compre qualquer Margarita da casa (Margarita Clássica Cuervo ou versões autorais de Tangerina, Morango, Abacaxi, Cajá e Caju) por R$ 38,90 e ganhe outra idêntica de graça! Válido a noite inteira." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 pt-4 flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-widest", children: "Valor do par" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-cream", children: "R$ 38,90" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#cardapio",
                  className: "rounded-full bg-primary/10 border border-primary/20 text-cream px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all cursor-pointer",
                  children: "Ver Drinks"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-3xl border border-border bg-card hover:border-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: drink2,
                alt: "Tiempo Feliz Happy Hour",
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 rounded-full bg-fiesta text-cream px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] shadow-md flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-cream" }),
              " Tiempo Feliz"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex justify-between items-center bg-background/80 backdrop-blur border border-border/40 rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-accent animate-pulse shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold truncate", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Próximo Happy Hour" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Próximo HH" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs sm:text-sm font-bold text-cream bg-card px-2 py-0.5 rounded border border-border/60 shrink-0", children: hhTimeLeft || "Carregando..." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-accent font-bold", children: "Domingo a Quinta · 17h às 20h" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl text-cream tracking-wide", children: "Happy Hour do Zé" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Descontos exclusivos nos pratos e bebidas mais queridos! Caipirinhas, Cozumel e Micheladas por R$ 12,99. Cervejas Long Neck selecionadas (Spaten, Heineken, Stella) por R$ 14,99, além de Tacos individuais por R$ 14,99." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 pt-4 flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-widest", children: "Bebidas a partir de" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-cream", children: "R$ 12,99" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#cardapio",
                  className: "rounded-full bg-primary/10 border border-primary/20 text-cream px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all cursor-pointer",
                  children: "Ver Promoções"
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const espaco5 = "/assets/espaco-5-CPi3Kfl5.jpg";
const drink5 = "/assets/drink-5-DCI1m8Xi.jpg";
const prato6 = "/assets/prato-6-DlcNOdky.jpg";
const events = [
  {
    day: "QUINTA",
    dayNum: 4,
    hour: 20,
    title: "Noche del Mariachi",
    tag: "Música ao vivo",
    desc: "Banda Mariachi ao vivo tocando o melhor das rancheras tradicionais e clássicos mexicanos. Rodada dupla de cerveja e margaritas selecionadas.",
    image: espaco5,
    themeClass: "from-amber-950/40 border-amber-500/20 text-amber-400 hover:border-amber-500/50",
    icon: Music
  },
  {
    day: "SEXTA",
    dayNum: 5,
    hour: 21,
    title: "Festa Loca · DJ Set",
    tag: "DJ Residente",
    desc: "DJ tocando o melhor do latin house, reggaeton, carimbó e brasilidades dançantes. Rodadas de shots de tequila cortesia da casa ao longo da noite.",
    image: drink5,
    themeClass: "from-purple-950/40 border-purple-500/20 text-purple-400 hover:border-purple-500/50",
    icon: Sparkles
  },
  {
    day: "SÁBADO",
    dayNum: 6,
    hour: 21,
    title: "Sabadão Tex-Mex",
    tag: "Noite Temática",
    desc: "Cardápio temático estendido, tacos especiais criados pelo chef para o dia e double shot de tequila na entrada para clientes fantasiados ou com adereços.",
    image: prato6,
    themeClass: "from-rose-950/40 border-rose-500/20 text-rose-400 hover:border-rose-500/50",
    icon: Flame
  }
];
function Events({ onOpenBooking }) {
  const [nextEventText, setNextEventText] = reactExports.useState("");
  const [timeLeft, setTimeLeft] = reactExports.useState("");
  reactExports.useEffect(() => {
    function getNextEvent() {
      const now = /* @__PURE__ */ new Date();
      const currentDay = now.getDay();
      const currentHour = now.getHours();
      let nextEv = events[0];
      const targetDate = /* @__PURE__ */ new Date();
      if (currentDay < 4 || currentDay === 4 && currentHour < 20) {
        nextEv = events[0];
        const offset = 4 - currentDay;
        targetDate.setDate(now.getDate() + offset);
        targetDate.setHours(20, 0, 0, 0);
      } else if (currentDay < 5 || currentDay === 5 && currentHour < 21) {
        nextEv = events[1];
        const offset = 5 - currentDay;
        targetDate.setDate(now.getDate() + offset);
        targetDate.setHours(21, 0, 0, 0);
      } else if (currentDay < 6 || currentDay === 6 && currentHour < 21) {
        nextEv = events[2];
        const offset = 6 - currentDay;
        targetDate.setDate(now.getDate() + offset);
        targetDate.setHours(21, 0, 0, 0);
      } else {
        nextEv = events[0];
        const offset = 7 - currentDay + 4;
        targetDate.setDate(now.getDate() + offset);
        targetDate.setHours(20, 0, 0, 0);
      }
      return { event: nextEv, targetDate };
    }
    const interval = setInterval(() => {
      const { event, targetDate } = getNextEvent();
      setNextEventText(event.title);
      const now = /* @__PURE__ */ new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("Acontecendo Agora!");
      } else {
        const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
        const hours2 = Math.floor(diff / (1e3 * 60 * 60) % 24);
        const minutes = Math.floor(diff / (1e3 * 60) % 60);
        const seconds = Math.floor(diff / 1e3 % 60);
        const dStr = days > 0 ? `${days}d ` : "";
        const hStr = String(hours2).padStart(2, "0");
        const mStr = String(minutes).padStart(2, "0");
        const sStr = String(seconds).padStart(2, "0");
        setTimeLeft(`${dStr}${hStr}h ${mStr}m ${sStr}s`);
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "eventos",
      className: "relative py-24 md:py-32 bg-background border-b border-border/40",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-5 md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-end gap-8 md:grid-cols-[1.3fr_1fr] mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-accent", children: "La fiesta no para" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl leading-[0.9] text-cream", children: [
              "Toda semana",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif italic text-accent", children: "tem motivo" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fiesta", children: "pra vir." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base leading-relaxed", children: "DJs renomados, mariachis ao vivo e noites temáticas exclusivas de quinta a sábado. Garanta sua mesa com antecedência pelo nosso sistema de reservas." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-between items-center bg-card border border-border rounded-2xl p-4 shadow-lg gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 animate-spin-slow" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-widest font-bold", children: "Próxima Atração" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-cream font-semibold truncate", children: nextEventText || "Carregando..." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-accent uppercase tracking-widest font-bold animate-pulse", children: "Inicia em" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs font-bold text-cream bg-background/50 border border-border/60 px-2 py-0.5 rounded mt-0.5 whitespace-nowrap", children: timeLeft || "Calculando..." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 md:grid-cols-3 pt-6", children: events.map((e, idx) => {
          const Icon = e.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: `group relative overflow-hidden rounded-3xl border bg-card/40 hover:bg-card/70 hover:shadow-xl hover:shadow-primary/2 transition-all duration-500 flex flex-col justify-between ${e.themeClass}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] sm:aspect-[4/5] overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: e.image,
                      alt: e.title,
                      className: "h-full w-full object-cover transition-transform duration-750 ease-out group-hover:scale-105",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cream", children: e.day }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4 h-10 w-10 rounded-xl bg-background/80 backdrop-blur-sm border border-border/40 text-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 bg-accent text-accent-foreground text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded", children: e.tag })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4 flex-1 flex flex-col justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl text-cream tracking-wide group-hover:text-accent transition-colors", children: e.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground", children: e.desc })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-4 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-accent" }),
                      " Início",
                      " ",
                      e.dayNum === 4 ? "20h" : "21h"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: onOpenBooking,
                        className: "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent hover:text-cream transition-colors cursor-pointer",
                        children: "Reservar Mesa →"
                      }
                    )
                  ] })
                ] })
              ]
            },
            e.title
          );
        }) })
      ] })
    }
  );
}
const drink3 = "/assets/drink-3-CrvmgYO1.jpg";
const drink4 = "/assets/drink-4-BkXkz7Bp.jpg";
const drink6 = "/assets/drink-6-CT_toDLF.jpg";
const drink7 = "/assets/drink-7-DqO5wHY2.jpg";
const espaco1 = "/assets/espaco-1-DEU3sy5l.jpg";
const espaco2 = "/assets/espaco-2-DElWfAvf.jpg";
const historyImage = "/assets/espaco-3-Bi7-OZ-T.jpg";
const espaco4 = "/assets/espaco-4-DkK7HhZY.jpg";
const prato2 = "/assets/prato-2-rw5XYfDG.jpg";
const photos = [
  { src: prato1, label: "Tacos Artesanais de Milho", category: "gastronomia" },
  { src: drink1, label: "Margarita Clássica Cuervo", category: "drinks" },
  { src: espaco1, label: "Nossa Fachada Temática", category: "ambiente" },
  { src: espaco5, label: "Apresentação de Mariachi ao Vivo", category: "eventos" },
  { src: prato2, label: "Quesadilla Especial de File", category: "gastronomia" },
  { src: drink2, label: "Shots de Tequila Prata", category: "drinks" },
  { src: espaco2, label: "Ambiente Interno Acolhedor", category: "ambiente" },
  { src: prato3, label: "Fajitas na Chapa Quente", category: "gastronomia" },
  { src: drink3, label: "Coquetel Frida Kahlo", category: "drinks" },
  { src: historyImage, label: "Decoração Rústica Mexicana", category: "ambiente" },
  { src: drink5, label: "Moscow Mule Refrescante", category: "drinks" },
  { src: prato4, label: "Tacos Especiais do Chef", category: "gastronomia" },
  { src: espaco4, label: "Mesas Amplas para Grupos", category: "ambiente" },
  { src: prato5, label: "Chimichanga Frita e Crocante", category: "gastronomia" },
  { src: drink4, label: "Margarita de Morango", category: "drinks" },
  { src: prato6, label: "Enchiladas Gratinadas", category: "gastronomia" },
  { src: drink6, label: "Coquetel Tijuana Autoral", category: "drinks" },
  { src: prato7, label: "Churros do Chaves com Doce de Leite", category: "gastronomia" },
  { src: drink7, label: "Frozen Azulito Tropical", category: "drinks" },
  { src: prato8, label: "Sobremesa Especial do Zé", category: "gastronomia" }
];
function Gallery() {
  const [filter, setFilter] = reactExports.useState(
    "todos"
  );
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const filteredPhotos = filter === "todos" ? photos : photos.filter((p) => p.category === filter);
  const handlePrevLightbox = reactExports.useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (prev) => prev === null || prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  }, [lightboxIndex, filteredPhotos.length]);
  const handleNextLightbox = reactExports.useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (prev) => prev === null || prev === filteredPhotos.length - 1 ? 0 : prev + 1
    );
  }, [lightboxIndex, filteredPhotos.length]);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNextLightbox, handlePrevLightbox]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "galeria",
      className: "relative bg-background py-24 md:py-32 border-b border-border/40",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-5 md:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-accent", children: "Momento Zé" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl leading-[0.9] text-cream", children: [
                "Galeria de",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fiesta", children: "experiências." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.instagram.com/zemexicano1/",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-2.5 self-end rounded-full border border-cream/40 bg-background/50 hover:bg-card px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-cream hover:border-accent hover:text-accent transition-all cursor-pointer",
                children: "@zemexicano1 ↗"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-10 border-b border-border/40 pb-6", children: ["todos", "ambiente", "gastronomia", "drinks", "eventos"].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setFilter(cat),
              className: `px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] border transition-all cursor-pointer ${filter === cat ? "bg-accent border-accent text-accent-foreground shadow-md shadow-accent/15 scale-105" : "border-border/60 hover:border-accent/40 bg-card/40 hover:bg-card text-muted-foreground hover:text-cream"}`,
              children: cat === "todos" ? "Todos" : cat
            },
            cat
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4", children: filteredPhotos.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: () => setLightboxIndex(idx),
              className: "break-inside-avoid relative overflow-hidden rounded-2xl border border-border/85 bg-card/20 group cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.src,
                    alt: p.label,
                    loading: "lazy",
                    className: "w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20", children: p.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg tracking-wide text-cream", children: p.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-3 w-3" }),
                    " Ampliar imagem"
                  ] })
                ] }) })
              ]
            },
            p.src
          )) })
        ] }),
        lightboxIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-in fade-in duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setLightboxIndex(null),
              className: "absolute top-6 right-6 h-12 w-12 rounded-full bg-background/60 hover:bg-card border border-border text-cream flex items-center justify-center transition-colors cursor-pointer z-55",
              "aria-label": "Fechar galeria",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handlePrevLightbox,
              className: "absolute left-6 h-14 w-14 rounded-full bg-background/60 hover:bg-card border border-border text-cream flex items-center justify-center transition-all hover:scale-105 cursor-pointer z-55",
              "aria-label": "Imagem anterior",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleNextLightbox,
              className: "absolute right-6 h-14 w-14 rounded-full bg-background/60 hover:bg-card border border-border text-cream flex items-center justify-center transition-all hover:scale-105 cursor-pointer z-55",
              "aria-label": "Próxima imagem",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[85vw] max-h-[80vh] flex flex-col items-center justify-center relative select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: filteredPhotos[lightboxIndex].src,
                alt: filteredPhotos[lightboxIndex].label,
                className: "max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-border/30 animate-in zoom-in-95 duration-200"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-accent", children: filteredPhotos[lightboxIndex].category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-cream tracking-wide", children: filteredPhotos[lightboxIndex].label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground/60", children: [
                "Imagem ",
                lightboxIndex + 1,
                " de ",
                filteredPhotos.length
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function History() {
  const [activeMilestone, setActiveMilestone] = reactExports.useState(0);
  const milestones = [
    {
      year: "2017",
      icon: Compass,
      title: "O Início da Viagem",
      desc: "O sonho de trazer a verdadeira essência das cantinas de bairro mexicanas para Fortaleza se materializa. Começamos pequenos, com receitas familiares, tortilhas feitas à mão e muito amor pela culinária asteca."
    },
    {
      year: "2020",
      icon: Award,
      title: "Fusão de Culturas (Tex-Mex & CE)",
      desc: "Período de aperfeiçoamento culinário. Nossos chefs misturam clássicos mexicanos com a rica gastronomia cearense. Nasce o icônico taco de carne de sol com molho de queijo coalho na manteiga da terra."
    },
    {
      year: "2024",
      icon: Star,
      title: "A Cantina no Cocó",
      desc: "Inauguramos nossa casa moderna e estilizada no coração do Cocó. Criamos um espaço amplo, com decorações instagramáveis exclusivas, bar premium focado em tequilas importadas e noites temáticas com shows semanais."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "sobre",
      className: "relative py-24 md:py-32 bg-background border-b border-border/40 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-fiesta/5 blur-[100px] pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-5 md:px-8 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: historyImage,
                  alt: "História do Zé Mexicano",
                  className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -right-2 sm:-right-4 h-24 w-24 sm:h-32 sm:w-32 rotate-6 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-glow)] flex transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl sm:text-4xl leading-none", children: "9+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] sm:text-[10px] uppercase tracking-widest font-semibold mt-1", children: "Anos de Festa" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-accent", children: "Nuestra Historia" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-6xl leading-[0.9] text-cream", children: [
                "Uma trajetória",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fiesta", children: "de puro sabor." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-sm md:text-base leading-relaxed", children: "O Zé Mexicano nasceu com a missão de proporcionar diversão, cores e sabores autênticos. Fundada por amigos apaixonados pela gastronomia mexicana e pela hospitalidade acolhedora do Ceará, nossa cantina é hoje ponto de encontro de gerações." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 relative border-l-2 border-border/80 pl-6 ml-3", children: milestones.map((m, idx) => {
              m.icon;
              const isActive = activeMilestone === idx;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => setActiveMilestone(idx),
                  className: "relative cursor-pointer group transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `absolute -left-[35px] top-1 h-5 w-5 rounded-full border-2 transition-all flex items-center justify-center ${isActive ? "bg-accent border-accent scale-110 shadow-md shadow-accent/40" : "bg-background border-border group-hover:border-accent"}`,
                        children: isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-accent-foreground" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `font-display text-xl tracking-wider transition-colors ${isActive ? "text-accent" : "text-muted-foreground group-hover:text-cream"}`,
                          children: [
                            m.year,
                            " · ",
                            m.title
                          ]
                        }
                      ),
                      isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground animate-in fade-in duration-300", children: m.desc })
                    ] })
                  ]
                },
                m.year
              );
            }) })
          ] })
        ] }) })
      ]
    }
  );
}
function Testimonials() {
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  const testimonials = [
    {
      name: "Mariana Vasconcelos",
      role: "Guia Local Google",
      rating: 5,
      text: "Sem dúvidas o melhor restaurante mexicano de Fortaleza! A carne de sol no taco com molho de queijo coalho é uma mistura genial que só o Zé sabe fazer. As margaritas são incríveis e a música de mariachi ao vivo na quinta-feira cria um clima único.",
      date: "Há 2 semanas"
    },
    {
      name: "Rodrigo Alencar",
      role: "Cliente Fiel",
      rating: 5,
      text: "Fui comemorar meu aniversário e a experiência foi nota 10. Ganhamos shots de tequila da casa e a equipe é extremamente animada e atenciosa. O Milho do Zé e as fajitas completas de picanha são obrigatórios!",
      date: "Há 1 mês"
    },
    {
      name: "Beatriz Mota",
      role: "Food Blogger",
      rating: 5,
      text: "Ambiente lindo e instagramável! O cardápio temático tem excelentes opções vegetarianas (o Taco de Shitake é sensacional). Os drinks autorais como o Frida Kahlo são deliciosos e muito bem apresentados. Recomendo reservar pelo WhatsApp!",
      date: "Há 3 semanas"
    },
    {
      name: "Carlos Eduardo",
      role: "Guia Local Google",
      rating: 5,
      text: "O Happy Hour de domingo a quinta vale muito a pena! Preços excelentes, tacos deliciosos e cerveja sempre trincando de gelada. A cantina tem uma energia contagiante. Voltarei com certeza muitas vezes.",
      date: "Há 2 meses"
    }
  ];
  const handlePrev = reactExports.useCallback(() => {
    setActiveIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  }, [testimonials.length]);
  const handleNext = reactExports.useCallback(() => {
    setActiveIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  }, [testimonials.length]);
  reactExports.useEffect(() => {
    const interval = setInterval(handleNext, 6e3);
    return () => clearInterval(interval);
  }, [handleNext]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 md:py-32 bg-background overflow-hidden border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-5 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1fr_2fr] items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-center lg:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center lg:justify-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-accent", children: "Feedback" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl leading-[0.9] text-cream", children: [
        "Quem visita,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fiesta", children: "recomenda." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto lg:mx-0", children: "Nossos clientes expressam a paixão pelo Zé Mexicano. Confira as notas oficiais do Google Places." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-col items-center lg:items-start p-6 bg-card border border-border rounded-2xl space-y-2 shadow-lg shadow-black/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl text-cream", children: "4.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-accent", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 fill-accent stroke-accent" }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "Baseado em mais de",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-cream font-semibold", children: "1.200 avaliações" }),
          " no Google."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute -top-10 -left-6 h-24 w-24 text-primary/5 -rotate-12 pointer-events-none select-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card/40 p-6 sm:p-8 md:p-12 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[180px] flex flex-col justify-between space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-accent", children: Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-accent stroke-accent" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg italic text-cream leading-relaxed font-serif", children: [
            '"',
            testimonials[activeIndex].text,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border/60 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg tracking-wide text-cream", children: testimonials[activeIndex].name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: testimonials[activeIndex].role })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground/60 font-medium", children: testimonials[activeIndex].date })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center lg:justify-end gap-3 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handlePrev,
            "aria-label": "Avaliação anterior",
            className: "h-11 w-11 rounded-full border border-border bg-background hover:border-accent hover:text-accent flex items-center justify-center transition-all cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleNext,
            "aria-label": "Próxima avaliação",
            className: "h-11 w-11 rounded-full border border-border bg-background hover:border-accent hover:text-accent flex items-center justify-center transition-all cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
          }
        )
      ] })
    ] })
  ] }) }) });
}
const hours = [
  { day: "Domingo a quinta", time: "17h — 00h" },
  { day: "Sexta e sábado", time: "17h — 01h" }
];
function Location() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "visite", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-5 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-2xl text-accent", children: "Vem pro Zé" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-5xl md:text-6xl", children: [
        "Visite ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fiesta", children: "a casa" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Estamos no coração do Cocó, em Fortaleza. Reservas e pedidos pelo WhatsApp." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Block, { label: "Endereço", children: [
          "Rua Manuel Queirós, 511",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Cocó · Fortaleza — CE · 60192-220"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Horário", children: hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex justify-between border-b border-border/60 py-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h.day }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-accent", children: h.time })
            ]
          },
          h.day
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Block, { label: "Contato", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+5585989261352", className: "block hover:text-accent", children: "(85) 98926-1352 · Reservas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+5585984651070", className: "block hover:text-accent", children: "(85) 98465-1070 · Informações" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:zemexicanocurriculos@gmail.com",
              className: "block text-muted-foreground hover:text-accent",
              children: "zemexicanocurriculos@gmail.com · Trabalhe conosco"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://api.whatsapp.com/send/?phone=5585989261352",
            target: "_blank",
            rel: "noreferrer",
            className: "rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-fiesta)] hover:scale-105",
            children: "WhatsApp"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.google.com/maps/dir//Rua+Manuel+Queir%C3%B3s,+511+-+Coc%C3%B3,+Fortaleza+-+CE,+60192-220",
            target: "_blank",
            rel: "noreferrer",
            className: "rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-accent hover:text-accent",
            children: "Como chegar ↗"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-[360px] overflow-hidden md:min-h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        title: "Mapa Zé Mexicano",
        src: "https://www.google.com/maps?q=Rua+Manuel+Queir%C3%B3s,+511+-+Coc%C3%B3,+Fortaleza+-+CE,+60192-220&output=embed",
        className: "absolute inset-0 h-full w-full grayscale-[40%]",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
      }
    ) })
  ] }) }) });
}
function Block({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[11px] uppercase tracking-[0.2em] text-accent", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children })
  ] });
}
function Footer({ onOpenBooking }) {
  const [email, setEmail] = reactExports.useState("");
  const [subscribed, setSubscribed] = reactExports.useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative bg-background pb-10 pt-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-5 md:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.svg", className: "h-20 w-auto", alt: "Zé Mexicano Logo" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground max-w-sm", children: "O melhor da gastronomia mexicana com aquele toque especial da culinária cearense. Música alta, tequila boa e sorrisos garantidos." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent font-bold", children: "Fique por dentro de eventos" }),
            subscribed ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-xl animate-in fade-in duration-300", children: "¡Gracias! Inscrição realizada com sucesso." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubscribe, className: "flex max-w-sm group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  required: true,
                  placeholder: "Seu e-mail",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className: "flex-1 bg-card/50 border border-border/80 border-r-0 rounded-l-xl px-4 py-2.5 text-xs text-cream focus:outline-none focus:border-accent/50 focus:bg-card/85 transition-all placeholder:text-muted-foreground/45"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "bg-primary text-primary-foreground border border-primary px-4 rounded-r-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center cursor-pointer hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] transition-all",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-widest text-accent font-bold", children: "Navegue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#sobre",
                className: "group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden", children: "›" }),
                  "Nossa História"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#cardapio",
                className: "group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden", children: "›" }),
                  "Cardápio Interativo"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#eventos",
                className: "group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden", children: "›" }),
                  "Agenda de Eventos"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#galeria",
                className: "group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden", children: "›" }),
                  "Galeria de Fotos"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: onOpenBooking,
                className: "group flex items-center gap-1 hover:text-accent transition-all hover:translate-x-1 cursor-pointer text-left uppercase text-[11px]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all text-accent text-sm leading-none shrink-0 w-0 group-hover:w-2 overflow-hidden", children: "›" }),
                  "Reservar Mesa"
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent font-bold", children: "Fale Conosco" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs text-muted-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-card/60 border border-border group-hover:border-accent/40 group-hover:text-accent flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://www.instagram.com/zemexicano1/",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "hover:text-cream transition-colors",
                  children: "@zemexicano1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-card/60 border border-border group-hover:border-accent/40 group-hover:text-accent flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://api.whatsapp.com/send/?phone=5585989261352",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "hover:text-cream transition-colors",
                  children: "(85) 98926-1352 · Reservas"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-card/60 border border-border group-hover:border-accent/40 group-hover:text-accent flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+5585984651070", className: "hover:text-cream transition-colors", children: "(85) 98465-1070 · Info" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-card/60 border border-border group-hover:border-accent/40 group-hover:text-accent flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:zemexicanocurriculos@gmail.com",
                  className: "hover:text-cream transition-colors truncate max-w-[180px] sm:max-w-none",
                  children: "zemexicanocurriculos@gmail.com"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent font-bold font-sans", children: "Endereço & Mapa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground leading-relaxed space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-cream", children: "Cocó, Fortaleza" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Rua Manuel Queirós, 511" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "CEP: 60192-220" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-24 w-full rounded-xl overflow-hidden border border-border/80 shadow-md group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              title: "Mini Mapa Rodapé",
              src: "https://www.google.com/maps?q=Rua+Manuel+Queir%C3%B3s,+511+-+Coc%C3%B3,+Fortaleza+-+CE,+60192-220&output=embed",
              className: "absolute inset-0 h-full w-full grayscale contrast-[1.15] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-8 border-t border-border/60 space-y-4 text-[10px] text-muted-foreground/85", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 Zé Mexicano Bar & Restaurante. Todos os direitos reservados." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center md:text-right font-medium max-w-xs leading-normal", children: "Beba com moderação. Proibida a venda de bebidas alcoólicas para menores de 18 anos." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/30 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold tracking-wide text-cream/80", children: [
            "Design & Desenvolvimento por ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Kayohan Costa" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.linkedin.com/in/kayohancostadev",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-accent font-semibold transition-colors flex items-center gap-1 border border-border/50 hover:border-accent/30 bg-card/45 px-3 py-1 rounded-full text-[9px]",
                children: "LinkedIn"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://github.com/KayohanCosta",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-accent font-semibold transition-colors flex items-center gap-1 border border-border/50 hover:border-accent/30 bg-card/45 px-3 py-1 rounded-full text-[9px]",
                children: "GitHub"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://kayohancostadev.vercel.app/",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-accent font-semibold transition-colors flex items-center gap-1 border border-border/50 hover:border-accent/30 bg-card/45 px-3 py-1 rounded-full text-[9px]",
                children: "Portfólio"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "https://api.whatsapp.com/send/?phone=5585989261352",
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Falar no WhatsApp",
      className: "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-7 w-7 fill-current", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.05 4.91A10 10 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.38A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.09zM12 20.13a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.12.82.83-3.04-.19-.31A8.13 8.13 0 1 1 20.13 12 8.14 8.14 0 0 1 12 20.13zm4.47-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06a6.66 6.66 0 0 1-1.96-1.21 7.32 7.32 0 0 1-1.36-1.69c-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.65-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" }) })
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
function BookingModal({ open, onOpenChange }) {
  const [step, setStep] = reactExports.useState(1);
  const [name, setName] = reactExports.useState("");
  const [date, setDate] = reactExports.useState("");
  const [time, setTime] = reactExports.useState("");
  const [people, setPeople] = reactExports.useState("4");
  const [success, setSuccess] = reactExports.useState(false);
  const timeOptions = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30"
  ];
  const peopleOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];
  const formatDateForWhatsApp = (rawDate) => {
    if (!rawDate) return "";
    const [year, month, day] = rawDate.split("-");
    return `${day}/${month}/${year}`;
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    if (!name || !date || !time) return;
    setSuccess(true);
    const formattedDate = formatDateForWhatsApp(date);
    const textMessage = `Olá! Gostaria de reservar uma mesa para ${people} ${parseInt(people) === 1 ? "pessoa" : "pessoas"} no dia ${formattedDate} às ${time} em nome de ${name}.`;
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5585989261352&text=${encodedText}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      onOpenChange(false);
      setTimeout(() => {
        setStep(1);
        setName("");
        setDate("");
        setTime("");
        setPeople("4");
        setSuccess(false);
      }, 500);
    }, 1200);
  };
  const isStepValid = () => {
    if (step === 1) return name.trim().length > 1;
    if (step === 2) return date !== "";
    if (step === 3) return time !== "";
    return true;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "w-[calc(100%-2rem)] sm:max-w-[480px] bg-card border border-border/80 p-0 overflow-hidden text-cream rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-fiesta/20 to-primary/20 p-6 pb-4 border-b border-border/40 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-accent animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-accent", children: "Experiência Premium" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-3xl text-cream tracking-wide", children: "Reservar sua Mesa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-muted-foreground mt-1 text-sm", children: "Vivencie a melhor culinária mexicana com alma cearense." })
    ] }),
    success ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 flex flex-col items-center justify-center text-center animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30 mb-4 animate-bounce", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-cream mb-2", children: "Reserva Preparada!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs mb-4", children: "Estamos te direcionando para o nosso WhatsApp para finalizar sua reserva instantaneamente." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-accent uppercase tracking-widest flex items-center gap-1.5 animate-pulse", children: [
        "Redirecionando ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleConfirm, className: "p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center gap-2", children: [1, 2, 3, 4].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => s < step && setStep(s),
          disabled: s > step,
          className: `h-1.5 flex-1 rounded-full transition-all duration-300 ${s <= step ? "bg-accent" : "bg-border/60"}`
        },
        s
      )) }),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in slide-in-from-right-4 duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Como devemos te chamar?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              required: true,
              placeholder: "Seu nome completo",
              value: name,
              onChange: (e) => setName(e.target.value),
              className: "w-full bg-background border border-border rounded-xl py-3.5 pl-12 pr-4 text-cream font-medium focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors placeholder:text-muted-foreground/50"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Por favor, insira o nome principal para identificação na recepção da cantina." })
      ] }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in slide-in-from-right-4 duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Para qual dia?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-accent pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              required: true,
              min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
              value: date,
              onChange: (e) => setDate(e.target.value),
              className: "w-full bg-background border border-border rounded-xl py-3.5 pl-12 pr-4 text-cream font-medium focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Reservas são válidas para qualquer dia da semana de funcionamento normal." })
      ] }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in slide-in-from-right-4 duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Escolha o melhor horário:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-2", children: timeOptions.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setTime(t),
            className: `py-2 px-1 text-sm font-semibold rounded-xl border transition-all ${time === t ? "bg-accent border-accent text-accent-foreground shadow-md shadow-accent/20 scale-105" : "border-border/60 hover:border-accent/60 bg-background/50 hover:bg-card text-muted-foreground hover:text-cream"}`,
            children: t
          },
          t
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Nossa cozinha funciona das 17:00h até a meia-noite (sexta e sábado até 01:00h)." })
      ] }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 animate-in fade-in slide-in-from-right-4 duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Quantas pessoas na mesa?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 sm:grid-cols-5 gap-2", children: peopleOptions.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPeople(p),
              className: `py-2 px-1 text-sm font-semibold rounded-xl border transition-all ${people === p ? "bg-accent border-accent text-accent-foreground shadow-md shadow-accent/20 scale-105" : "border-border/60 hover:border-accent/60 bg-background/50 hover:bg-card text-muted-foreground hover:text-cream"}`,
              children: p
            },
            p
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/80 bg-background/40 p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase font-bold tracking-widest text-accent border-b border-border/40 pb-2", children: "Resumo do Pedido de Reserva" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-accent" }),
              " Nome:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream font-medium text-right truncate", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-accent" }),
              " Data:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream font-medium text-right", children: formatDateForWhatsApp(date) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-accent" }),
              " Horário:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream font-medium text-right", children: time }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-accent" }),
              " Pessoas:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-cream font-medium text-right", children: [
              people,
              " ",
              parseInt(people) === 1 ? "pessoa" : "pessoas"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
        step > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setStep(step - 1),
            className: "flex-1 py-3 px-4 rounded-xl border border-border text-sm font-semibold hover:bg-card hover:text-cream transition-colors cursor-pointer",
            children: "Voltar"
          }
        ),
        step < 4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            disabled: !isStepValid(),
            onClick: () => setStep(step + 1),
            className: "flex-[2] bg-primary text-primary-foreground py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100",
            children: [
              "Avançar ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            disabled: !isStepValid(),
            className: "flex-[2] bg-primary text-primary-foreground py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[var(--shadow-fiesta)]",
            children: [
              "Confirmar no WhatsApp ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4 text-accent animate-pulse" })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function Index() {
  const [isBookingOpen, setIsBookingOpen] = reactExports.useState(false);
  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };
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
      addressCountry: "BR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -3.746098,
      longitude: -38.481354
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "17:00",
      closes: "00:00"
    }, {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:00",
      closes: "01:00"
    }],
    sameAs: ["https://www.instagram.com/zemexicano1/"]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative overflow-hidden bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(restaurantSchema)
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { onOpenBooking: handleOpenBooking }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { onOpenBooking: handleOpenBooking }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: [{
      label: "Tacos",
      accent: true
    }, {
      label: "Margaritas"
    }, {
      label: "Tequila",
      accent: true
    }, {
      label: "Fiesta"
    }, {
      label: "Mariachi",
      accent: true
    }, {
      label: "Burritos"
    }, {
      label: "Picante",
      accent: true
    }, {
      label: "Cocó · Fortaleza"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Promotions, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { reverse: true, fast: true, items: [{
      label: "¡Ándale!",
      accent: true
    }, {
      label: "Tiempo Feliz"
    }, {
      label: "DJ · Sextas",
      accent: true
    }, {
      label: "Mariachi · Quintas"
    }, {
      label: "Sabadão Tex-Mex",
      accent: true
    }, {
      label: "¡Vámonos!"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Events, { onOpenBooking: handleOpenBooking }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(History, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Location, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { onOpenBooking: handleOpenBooking }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFab, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookingModal, { open: isBookingOpen, onOpenChange: setIsBookingOpen })
  ] });
}
export {
  Index as component
};
