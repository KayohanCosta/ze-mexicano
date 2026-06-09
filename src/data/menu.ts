export type Dish = {
  name: string;
  desc?: string;
  price: string;
  tags?: ("pimenta" | "mais-vendido" | "vegetariano" | "compartilhavel" | "chef")[];
};
export type Category = { id: string; title: string; subtitle?: string; items: Dish[] };

export const menu: Category[] = [
  {
    id: "entradas",
    title: "Entradas",
    items: [
      {
        name: "O Milho do Zé",
        desc: "Milho doce assado envolvido na manteiga de ervas e sour cream. Finalizado com queijo parmesão.",
        price: "44,90",
        tags: ["chef", "mais-vendido"],
      },
      {
        name: "Porção de Guacamole com Nachos",
        desc: "Nachos crocantes acompanhados de guacamole fresca.",
        price: "27,90",
        tags: ["vegetariano", "compartilhavel"],
      },
      {
        name: "Nachos 5 Molhos",
        desc: "Nachos acompanhados de guacamole, molho de salsa, sour cream, molho artesanal picante e maionese da casa.",
        price: "31,90",
        tags: ["compartilhavel", "pimenta"],
      },
      {
        name: "Nachos 3 Molhos",
        desc: "Nachos acompanhados de guacamole, sour cream e maionese da casa.",
        price: "22,90",
        tags: ["compartilhavel"],
      },
      {
        name: "Abacaxi Embriagado",
        desc: "Abacaxi embebedado na tequila prata e limão. Finalizado com pimenta calabresa e limão.",
        price: "33,90",
        tags: ["chef", "pimenta"],
      },
    ],
  },
  {
    id: "especialidades",
    title: "Especialidades",
    items: [
      {
        name: "Chilli Beans",
        desc: "Feijão, suculento molho de tomate caseiro e carne moída. Finalizado com queijo gratinado. Acompanha Nachos.",
        price: "35,90",
        tags: ["pimenta", "mais-vendido"],
      },
      {
        name: "Frango do Zé",
        desc: "Frango empanado crocante envolvido no molho levemente apimentado. Acompanha Nachos.",
        price: "34,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Camarão do Zé",
        desc: "Camarão empanado crocante envolvido no molho levemente apimentado. Acompanha Nachos.",
        price: "47,90",
        tags: ["chef", "mais-vendido"],
      },
      {
        name: "Aguachile de Peixe Branco",
        desc: "Peixe branco marinado no limão com temperos especiais. Servido com nachos crocantes.",
        price: "45,90",
        tags: ["chef"],
      },
      {
        name: "Aguachile de Camarão",
        desc: "Camarão marinado no limão com temperos especiais. Servido com nachos crocantes.",
        price: "47,90",
        tags: ["chef"],
      },
    ],
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
        tags: ["mais-vendido"],
      },
      { name: "Pernil Defumado", desc: "Com toque de coentro e queijo muçarela.", price: "28,90" },
      { name: "Cupim Defumado", desc: "Com toque de coentro e queijo muçarela.", price: "28,90" },
      { name: "Costela Defumada", desc: "Com toque de coentro e queijo muçarela.", price: "31,90" },
      {
        name: "Camarão",
        desc: "Camarão refogado com cebola roxa, coentro, levemente defumado, molho de tomate pelato e catupiry original.",
        price: "35,90",
        tags: ["chef"],
      },
    ],
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
        tags: ["mais-vendido"],
      },
      {
        name: "Pernil",
        desc: "Pernil desfiado e marinado no tempero especial do chef. Servido com pasta de feijão, pico de galo, guacamole, sour cream, molho barbecue e acompanha molho barbecue picante. Finalizado com queijo muçarela.",
        price: "19,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Cupim",
        desc: "Cupim desfiado e marinado no tempero especial do chef. Servido com pasta de feijão, pico de galo, guacamole, sour cream e finalizado com queijo muçarela.",
        price: "19,90",
      },
      {
        name: "Carne de Sol",
        desc: "Carne de sol desfiada, refogada na manteiga da terra, cebola roxa e pico de galo. Finalizado com molho de queijo coalho e cheiro verde.",
        price: "21,90",
        tags: ["chef", "mais-vendido"],
      },
      {
        name: "Costela",
        desc: "Costela desfiada. Servida com pasta de feijão, pico de galo, guacamole e sour cream. Finalizada com queijo muçarela.",
        price: "23,90",
        tags: ["mais-vendido"],
      },
    ],
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
        tags: ["mais-vendido"],
      },
      {
        name: "Ancho",
        desc: "Ancho grelhado, pico de galo e molho da casa especial. Finalizado com queijo muçarela gratinada.",
        price: "26,90",
      },
      {
        name: "Picanha",
        desc: "Picanha grelhada, pico de galo e molho da casa especial. Finalizado com queijo muçarela gratinada.",
        price: "27,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Sobrepaleta Suína",
        desc: "Sobrepaleta suína com coleslaw, molho da casa especial, abacaxi grelhado. Acompanha molho barbecue picante.",
        price: "21,90",
        tags: ["pimenta"],
      },
    ],
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
        tags: ["chef"],
      },
      {
        name: "Filé de Peixe Crocante",
        desc: "Peixe branco crocante, salada coleslaw, sour cream e molho de salsa da casa.",
        price: "23,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Camarão Grelhado",
        desc: "Camarões grelhados, salada coleslaw, sour cream e molho de salsa da casa.",
        price: "26,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Polvo Grelhado",
        desc: "Polvo grelhado, salada coleslaw, sour cream e molho de salsa da casa.",
        price: "32,90",
        tags: ["chef"],
      },
      {
        name: "Lagosta Grelhada",
        desc: "Lagosta grelhada, salada coleslaw, sour cream e molho de salsa da casa.",
        price: "34,90",
        tags: ["chef"],
      },
      {
        name: "Frutos do Mar",
        desc: "Lagosta, camarão, polvo, refogados com cebola roxa, tomate, coentro, finalizado com sour cream e molho verde da casa.",
        price: "33,90",
        tags: ["compartilhavel"],
      },
    ],
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
        tags: ["mais-vendido"],
      },
      {
        name: "Pernil",
        desc: "Queijo muçarela, pico de galo, sour cream e pernil desfiado.",
        price: "51,90",
      },
      {
        name: "Cupim",
        desc: "Queijo muçarela, pico de galo, sour cream e cupim marinado.",
        price: "51,90",
      },
      {
        name: "Costela Bovina",
        desc: "Queijo muçarela, pico de galo, sour cream e costela desfiada.",
        price: "59,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Filé Mignon",
        desc: "Queijo muçarela, pico de galo, sour cream e filé mignon.",
        price: "61,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Ancho",
        desc: "Queijo muçarela, pico de galo, sour cream e bife ancho.",
        price: "61,90",
      },
      {
        name: "Picanha",
        desc: "Queijo muçarela, pico de galo, sour cream e picanha grelhada.",
        price: "61,90",
      },
      {
        name: "Camarão Grelhado",
        desc: "Queijo muçarela, pico de galo, sour cream e camarões grelhados.",
        price: "61,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Camarão Empanado",
        desc: "Queijo muçarela, pico de galo, sour cream e camarões crocantes.",
        price: "61,90",
      },
    ],
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
        tags: ["mais-vendido"],
      },
      {
        name: "Monterrey",
        desc: "Blend da casa (120g) ao ponto, queijo cheddar, geleia de cebola caramelizada com bacon e maionese da casa.",
        price: "39,90",
        tags: ["chef", "mais-vendido"],
      },
      {
        name: "Cancún",
        desc: "Blend da casa (120g) ao ponto, queijo cheddar, alface, molho da casa à base de picles. Finalizado com farofa de bacon.",
        price: "39,90",
      },
    ],
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
        tags: ["mais-vendido"],
      },
      {
        name: "Costela",
        desc: "Massa frita crocante recheada com costela bovina desfiada.",
        price: "22,90",
      },
      {
        name: "Camarão",
        desc: "Massa frita crocante recheada com camarão refogado com cebola roxa, molho de tomate pelato e catupiry original.",
        price: "24,90",
        tags: ["chef"],
      },
    ],
  },
  {
    id: "burritos",
    title: "Burritos",
    items: [
      {
        name: "Frango Grelhado",
        desc: "Frango grelhado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "44,90",
      },
      {
        name: "Frango Empanado",
        desc: "Frango empanado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "44,90",
      },
      {
        name: "Pernil Desfiado",
        desc: "Pernil desfiado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "44,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Peixe Empanado",
        desc: "Peixe branco empanado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "44,90",
      },
      {
        name: "Cupim Desfiado",
        desc: "Cupim desfiado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "46,90",
      },
      {
        name: "Atum Grelhado",
        desc: "Atum grelhado (130g) com gergelim, guacamole, pico de galo, sour cream, maionese da casa, alface e pasta de feijão.",
        price: "46,90",
        tags: ["chef"],
      },
      {
        name: "Costela Desfiada",
        desc: "Costela desfiada (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "54,90",
      },
      {
        name: "Filé Mignon",
        desc: "Filé Mignon (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "58,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Picanha",
        desc: "Picanha grelhada (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "58,90",
      },
      {
        name: "Camarão Salteado",
        desc: "Camarões salteados no azeite (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "58,90",
      },
      {
        name: "Camarão Empanado",
        desc: "Camarão empanado (130g), queijo muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.",
        price: "58,90",
        tags: ["mais-vendido"],
      },
    ],
  },
  {
    id: "enchiladas",
    title: "Enchiladas",
    items: [
      {
        name: "Frango",
        desc: "Tortilha de trigo recheada com frango em tiras no tempero Tex-Mex. Acompanha molho de tomate artesanal, molho branco e finalizada com queijo gratinado.",
        price: "49,90",
      },
      {
        name: "Pernil",
        desc: "Tortilha de trigo recheada com pernil desfiado. Acompanha molho de tomate artesanal e finalizada com queijo gratinado.",
        price: "49,90",
      },
      {
        name: "Carne",
        desc: "Tortilha de trigo recheada com carne moída. Acompanha molho de tomate artesanal e finalizada com queijo gratinado.",
        price: "54,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Cupim",
        desc: "Tortilha de trigo recheada com cupim desfiado. Acompanha molho de tomate artesanal e finalizada com queijo gratinado.",
        price: "54,90",
      },
      {
        name: "Camarão",
        desc: "Tortilha de trigo recheada com camarões grelhados. Acompanha molho de tomate artesanal, molho branco e finalizada com queijo gratinado.",
        price: "59,90",
        tags: ["chef"],
      },
    ],
  },
  {
    id: "fajitas",
    title: "Fajitas Completas",
    subtitle:
      "Acompanha tortilhas de trigo, chili beans, arroz de açafrão, guacamole, sour cream, molho da casa e mix de pimentões fritos",
    items: [
      {
        name: "Frango Completa",
        desc: "Sobrecoxa de frango desossada grelhada (300g).",
        price: "99,90",
      },
      {
        name: "Prime Rib Suíno Completa",
        desc: "Prime rib suíno (400g) com molho barbecue picante.",
        price: "109,90",
        tags: ["pimenta"],
      },
      {
        name: "Bife Ancho Completa",
        desc: "Corte noble bovino grelhado (300g).",
        price: "145,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Picanha Importada Completa",
        desc: "Corte nobre da picanha grelhada (300g).",
        price: "149,90",
        tags: ["chef", "mais-vendido"],
      },
    ],
  },
  {
    id: "vegetariano",
    title: "Vegetariano",
    items: [
      {
        name: "Taco Shitake",
        desc: "Pasta de feijão, shitake, guacamole, pico de galo, alface, sour cream e parmesão.",
        price: "19,90",
        tags: ["vegetariano", "chef"],
      },
      {
        name: "Chimichanga Shitake com Alho Poró",
        desc: "Massa artesanal frita e recheada com shitake e alho poró.",
        price: "26,90",
        tags: ["vegetariano"],
      },
      {
        name: "Burrito Berinjela com Abobrinha",
        desc: "Queijo muçarela, guacamole, pico de galo, berinjela e abobrinha.",
        price: "34,90",
        tags: ["vegetariano"],
      },
      {
        name: "Enchiladas de Berinjela",
        desc: "Tortilha de trigo recheada com abobrinha e berinjela. Acompanha molho de tomate artesanal e finalizada com queijo gratinado.",
        price: "42,90",
        tags: ["vegetariano"],
      },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    items: [
      {
        name: "Romeu e Julieta",
        desc: "Massa frita crocante recheada com queijo coalho e goiabada.",
        price: "19,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Doce de Leite",
        desc: "Massa frita crocante recheada com doce de leite caseiro.",
        price: "24,90",
      },
      {
        name: "Banana com Nutella",
        desc: "Massa frita crocante recheada com banana e toque de canela e Nutella.",
        price: "27,90",
      },
      {
        name: "Morango com Nutella",
        desc: "Massa frita crocante recheada com morangos frescos e Nutella.",
        price: "29,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Churros do Chaves",
        desc: "04 unidades de churros bem crocantes com doce de leite.",
        price: "28,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Sobremesa do Zé",
        desc: "Paleta mexicana sabor pistache com sorvete de queijo, calda de chocolate e finalizada com castanha.",
        price: "34,90",
        tags: ["chef"],
      },
    ],
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
        tags: ["mais-vendido"],
      },
      {
        name: "Cuervo Margarita Sabores",
        desc: "Tequila Jose Cuervo Especial, licor de laranja e cordial de Tangerina, Morango, Abacaxi, Cajá ou Caju.",
        price: "29,90",
      },
      {
        name: "Cuervo Paloma",
        desc: "Tequila Jose Cuervo Especial, xarope de Grapefruit, limão taiti, água com gás e laranja Bahia.",
        price: "31,90",
      },
      {
        name: "Sombrero",
        desc: "Tequila Jose Cuervo Especial, licor de laranja, suco de manga, limão siciliano, xarope de pimenta mexicana e espuma de beterraba com hibisco.",
        price: "32,90",
        tags: ["chef"],
      },
      {
        name: "Frida Kahlo",
        desc: "Tequila Jose Cuervo Especial, infusão de hibisco, Martini Rosato, xarope de rosas, limão taiti e água com gás.",
        price: "31,90",
        tags: ["chef"],
      },
      {
        name: "Tijuana",
        desc: "Tequila Jose Cuervo Especial, tamarindo, limão taiti, xarope de rapadura e sal temperado com páprica picante.",
        price: "29,90",
      },
      {
        name: "Zé Caliente",
        desc: "Tequila Jose Cuervo Especial, maracujá, xarope de gengibre, xarope de pimenta e espuma de gengibre.",
        price: "29,90",
        tags: ["pimenta"],
      },
      {
        name: "Moscow Mule",
        desc: "Vodka, xarope de gengibre, limão taiti, água com gás e espuma de gengibre.",
        price: "31,90",
        tags: ["mais-vendido"],
      },
      {
        name: "Fitzgerald",
        desc: "Gin, limão siciliano, xarope simples e Angostura.",
        price: "33,90",
      },
      { name: "Caipirinha Limão", desc: "Cachaça e limão.", price: "18,90" },
      {
        name: "Caipirinha do Zé",
        desc: "Cachaça, limão siciliano, xarope de rapadura e pimenta tabasco.",
        price: "19,90",
        tags: ["chef"],
      },
      { name: "Cozumel", desc: "Cerveja da casa, limão taiti e sal.", price: "19,90" },
      {
        name: "Michelada",
        desc: "Cerveja da casa, limão taiti, pimenta, tabasco e molho inglês.",
        price: "19,90",
        tags: ["pimenta"],
      },
    ],
  },
];

export const happyHour = {
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
    { name: "Caipirinha, Cozumel ou Michelada", price: "12,99" },
  ],
};
