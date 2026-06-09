export type Dish = { name: string; desc?: string; price: string };
export type Category = { id: string; title: string; subtitle?: string; items: Dish[] };

export const menu: Category[] = [
  {
    id: "entradas",
    title: "Entradas",
    items: [
      { name: "Abacaxi Embriagado", desc: "Abacaxi embebedado na tequila prata e limão, finalizado com pimenta calabresa.", price: "33,90" },
      { name: "O Milho do Zé", desc: "Milho doce assado na manteiga de ervas e sour cream, finalizado com parmesão.", price: "44,90" },
      { name: "Nachos 5 Molhos", desc: "Nachos, guacamole, salsa, sour cream, molho artesanal picante e maionese da casa.", price: "31,90" },
      { name: "Nachos 3 Molhos", desc: "Nachos, guacamole, sour cream e maionese da casa.", price: "22,90" },
      { name: "Porção de Guacamole com Nachos", desc: "Guacamole fresquinho e nachos crocantes.", price: "27,90" },
    ],
  },
  {
    id: "especialidades",
    title: "Especialidades da Casa",
    items: [
      { name: "Chilli Beans", desc: "Feijão, molho de tomate caseiro e carne moída, queijo gratinado. Acompanha nachos.", price: "35,90" },
      { name: "Frango do Zé", desc: "Frango empanado crocante envolvido em molho levemente apimentado. Acompanha nachos.", price: "34,90" },
      { name: "Camarão do Zé", desc: "Camarão empanado crocante no molho levemente apimentado. Acompanha nachos.", price: "47,90" },
      { name: "Aguachile de Peixe Branco", desc: "Peixe branco curtido no limão, servido com nachos crocantes.", price: "45,90" },
      { name: "Aguachile de Camarão", desc: "Camarão fresco curtido no limão, servido com nachos crocantes.", price: "47,90" },
    ],
  },
  {
    id: "tacos-tradicionais",
    title: "Tacos Tradicionais",
    subtitle: "Feitos na massa de milho crocante",
    items: [
      { name: "Frango", desc: "Frango grelhado no tempero Tex-Mex, feijão, pico de galo, milho, guacamole, sour cream e muçarela.", price: "17,90" },
      { name: "Pernil", desc: "Pernil desfiado no tempero do chef, feijão, pico de galo, guacamole, sour cream, muçarela e BBQ.", price: "19,90" },
      { name: "Cupim", desc: "Cupim desfiado no tempero do chef, feijão, pico de galo, guacamole, sour cream e muçarela.", price: "19,90" },
      { name: "Carne de Sol", desc: "Carne de sol na manteiga da terra, cebola roxa, pico de galo, molho de queijo coalho.", price: "21,90" },
      { name: "Costela", desc: "Costela desfiada, feijão, pico de galo, guacamole, sour cream e muçarela.", price: "23,90" },
    ],
  },
  {
    id: "tacos-especiais",
    title: "Tacos Especiais",
    subtitle: "Feitos na massa de trigo",
    items: [
      { name: "Filé Mignon", desc: "Filé mignon grelhado, pico de galo, molho especial e muçarela gratinada.", price: "27,90" },
      { name: "Ancho", desc: "Ancho grelhado, pico de galo, molho especial e muçarela gratinada.", price: "26,90" },
      { name: "Picanha", desc: "Picanha grelhada, pico de galo, molho especial e muçarela gratinada.", price: "27,90" },
      { name: "Sobrepaleta Suína", desc: "Sobrepaleta suína, coleslaw, molho da casa e abacaxi grelhado com BBQ picante.", price: "21,90" },
    ],
  },
  {
    id: "tacos-mar",
    title: "Tacos do Mar",
    subtitle: "Massa artesanal de trigo à base de salsa",
    items: [
      { name: "Atum", desc: "Atum selado com gergelim e maionese de wasabi.", price: "24,90" },
      { name: "Filé de Peixe Crocante", desc: "Peixe branco crocante, coleslaw, sour cream e molho de salsa da casa.", price: "23,90" },
      { name: "Camarão Grelhado", desc: "Camarões grelhados, coleslaw, sour cream e molho de salsa da casa.", price: "26,90" },
      { name: "Polvo Grelhado", desc: "Polvo grelhado, coleslaw, sour cream e molho de salsa da casa.", price: "32,90" },
      { name: "Lagosta Grelhada", desc: "Lagosta grelhada, coleslaw, sour cream e molho de salsa da casa.", price: "34,90" },
      { name: "Frutos do Mar", desc: "Lagosta, camarão e polvo refogados com cebola roxa, tomate, coentro e molho verde.", price: "33,90" },
    ],
  },
  {
    id: "flautas",
    title: "Flautas Mexicanas",
    subtitle: "Servidas com sour cream e molho da casa",
    items: [
      { name: "Frango Defumado", desc: "Com toque de coentro e queijo muçarela.", price: "26,90" },
      { name: "Pernil Defumado", desc: "Com toque de coentro e queijo muçarela.", price: "28,90" },
      { name: "Cupim Defumado", desc: "Com toque de coentro e queijo muçarela.", price: "28,90" },
      { name: "Costela Defumada", desc: "Com toque de coentro e queijo muçarela.", price: "31,90" },
      { name: "Camarão", desc: "Camarão refogado com cebola roxa, coentro, molho de tomate pelato e catupiry.", price: "35,90" },
    ],
  },
  {
    id: "burritos",
    title: "Burritos",
    items: [
      { name: "Frango Grelhado", desc: "Frango (130g), muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.", price: "44,90" },
      { name: "Pernil Desfiado", desc: "Pernil (130g), muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.", price: "44,90" },
      { name: "Filé Mignon", desc: "Filé (130g), muçarela, guacamole, pico de galo, sour cream, alface e pasta de feijão.", price: "58,90" },
      { name: "Picanha", desc: "Picanha grelhada (130g), muçarela, guacamole, pico de galo, sour cream e feijão.", price: "58,90" },
      { name: "Camarão Empanado", desc: "Camarão empanado (130g), muçarela, guacamole, pico de galo, sour cream e feijão.", price: "58,90" },
      { name: "Camarão Salteado", desc: "Camarões salteados no azeite (130g), muçarela, guacamole, pico de galo e feijão.", price: "58,90" },
    ],
  },
  {
    id: "enchiladas",
    title: "Enchiladas",
    items: [
      { name: "Frango", desc: "Tortilha artesanal recheada com frango, molho de tomate e queijo gratinado.", price: "49,90" },
      { name: "Carne", desc: "Tortilha artesanal recheada com carne moída, molho de tomate e queijo gratinado.", price: "54,90" },
      { name: "Cupim", desc: "Tortilha artesanal recheada com cupim desfiado, molho de tomate e queijo gratinado.", price: "54,90" },
    ],
  },
  {
    id: "fajitas",
    title: "Fajitas Completas",
    subtitle: "Acompanha tortilhas, chili beans, arroz de açafrão, guacamole, sour cream e mix de pimentões",
    items: [
      { name: "Frango", desc: "Sobrecoxa de frango desossada (300g).", price: "99,90" },
      { name: "Prime Rib Suíno", desc: "Prime rib suíno (400g) com molho barbecue picante.", price: "109,90" },
      { name: "Bife Ancho", desc: "Corte nobre bovino (300g).", price: "145,90" },
      { name: "Picanha Importada", desc: "Corte nobre da picanha (300g).", price: "149,90" },
    ],
  },
  {
    id: "vegetariano",
    title: "Vegetariano",
    items: [
      { name: "Taco Shitake", desc: "Pasta de feijão, shitake, guacamole, pico de galo, alface, sour cream e parmesão.", price: "19,90" },
      { name: "Chimichanga Shitake com Alho-Poró", desc: "Massa artesanal frita recheada com shitake e alho-poró.", price: "26,90" },
      { name: "Burrito Berinjela com Abobrinha", desc: "Muçarela, guacamole, pico de galo, berinjela e abobrinha.", price: "34,90" },
      { name: "Enchiladas de Berinjela", desc: "Tortilha de trigo recheada com abobrinha e berinjela, molho de tomate e queijo gratinado.", price: "42,90" },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    items: [
      { name: "Romeu e Julieta", desc: "Massa artesanal frita recheada com queijo coalho e goiabada.", price: "19,90" },
      { name: "Doce de Leite", desc: "Massa artesanal frita recheada com doce de leite.", price: "24,90" },
      { name: "Banana com Nutella", desc: "Massa artesanal frita recheada com banana e toque de canela.", price: "27,90" },
      { name: "Churros do Chaves", desc: "4 unidades de churros bem crocantes com doce de leite.", price: "28,90" },
      { name: "Morango com Nutella", desc: "Massa artesanal frita recheada com morangos frescos e Nutella.", price: "29,90" },
      { name: "Sobremesa do Zé", desc: "Paleta sabor pistache, sorvete de queijo, calda de chocolate e castanha.", price: "34,90" },
    ],
  },
  {
    id: "cocteles",
    title: "Cócteles & Drinks",
    items: [
      { name: "Caipirinha", desc: "Cachaça e limão.", price: "12,99" },
      { name: "Cozumel", desc: "Cerveja da casa, limão tahiti e sal.", price: "12,99" },
      { name: "Michelada", desc: "Cerveja da casa, limão, pimenta, tabasco e molho inglês.", price: "12,99" },
      { name: "Suco do Chaves", desc: "Morango, maçã verde, limão siciliano, tangerina ou pink lemonade.", price: "14,99" },
      { name: "Moscow Mule", desc: "Vodka, gengibre, limão tahiti e água com gás.", price: "21,90" },
      { name: "Tihuana", desc: "Tequila José Cuervo, tamarindo, limão, rapadura e sal com páprica.", price: "21,90" },
    ],
  },
];

export const happyHour = {
  title: "Tiempo Feliz",
  subtitle: "Domingo a quinta · 17h às 20h",
  note: "Não válido em feriados.",
  highlights: [
    { name: "Taco (1 un.) — Frango, Pernil ou Carne de Sol", price: "14,99" },
    { name: "Tostadita — Pernil ou Tartar de Atum", price: "12,99" },
    { name: "Chimichanga de Cupim (1 un.)", price: "12,99" },
    { name: "Dupla de Flautas — Frango", price: "17,99" },
    { name: "Burguer Guadalajara", price: "29,90" },
    { name: "Caipirinha, Cozumel ou Michelada", price: "12,99" },
    { name: "Cerveja Long Neck (Heineken, Spaten, Stella…)", price: "14,99" },
  ],
};
