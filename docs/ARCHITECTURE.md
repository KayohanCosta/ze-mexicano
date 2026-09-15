# Architecture & Technical Decisions

## Visão geral

O Zé Mexicano foi estruturado como uma aplicação web institucional orientada à apresentação de marca, descoberta de conteúdo e conversão.

A aplicação utiliza React com TanStack Start, TanStack Router e Nitro, mantendo a interface organizada por componentes reutilizáveis, dados locais, hooks, utilitários e rotas.

A página principal funciona como uma composição de seções independentes, permitindo organizar a experiência sem concentrar toda a implementação em um único componente.

## Composição da aplicação

A rota principal utiliza componentes especializados para representar diferentes partes da experiência:

- `Navbar`
- `Hero`
- `Marquee`
- `WhyUs`
- `Menu`
- `Promotions`
- `Events`
- `Gallery`
- `History`
- `Testimonials`
- `Location`
- `Footer`
- `WhatsAppFab`
- `BookingModal`

Essa abordagem mantém a página principal como uma camada de composição, enquanto cada seção concentra sua própria apresentação e comportamento.

## Fluxo de reserva

Um dos principais fluxos funcionais da aplicação é o sistema de reserva.

O `BookingModal` organiza a interação do usuário em etapas para coletar as informações necessárias para uma solicitação de reserva.

O fluxo é integrado ao WhatsApp, permitindo transformar os dados preenchidos no formulário em uma comunicação pronta para o atendimento do restaurante.

A estratégia reduz o atrito entre intenção e contato comercial sem exigir uma infraestrutura própria de reservas no backend.

## Cardápio e dados locais

O conteúdo estruturado do cardápio é mantido na camada `src/data`.

Essa separação permite que componentes como `Menu` consumam os dados sem concentrar todo o conteúdo diretamente na apresentação da interface.

A mesma estratégia é utilizada para os dados de eventos.

## SEO e dados estruturados

A aplicação utiliza o recurso `head` do TanStack Router para definir metadados específicos da experiência.

A rota raiz e a página principal definem informações como:

- `title`;
- `description`;
- Open Graph;
- Twitter Card;
- favicon;
- fontes externas.

A página principal também injeta dados estruturados utilizando `Schema.org` com o tipo `BarOrRestaurant`.

O schema contém informações como nome do estabelecimento, endereço, telefone, localização geográfica, culinária, horário de funcionamento, cardápio, Instagram e URL oficial.

## SSR e runtime

O projeto utiliza **TanStack Start** sobre uma configuração com **Nitro**.

A presença de `src/server.ts`, `src/start.ts` e da configuração `NITRO_PRESET=vercel` em `vercel.json` indica uma arquitetura preparada para execução server-side e deploy na Vercel.

O roteamento utiliza TanStack Router, com uma árvore de rotas gerada em `src/routeTree.gen.ts`.

## Interface e sistema visual

O sistema visual é implementado com Tailwind CSS 4 e tokens definidos em `src/styles.css`.

A interface utiliza uma identidade visual inspirada no posicionamento do restaurante, combinando cores quentes, tipografia expressiva e componentes responsivos.

As fontes utilizadas incluem:

- Bebas Neue;
- Fraunces;
- Caveat;
- Inter.

Componentes de interface reutilizáveis são apoiados por Radix UI e shadcn/ui.

## Responsividade

A interface foi estruturada para diferentes tamanhos de tela, com componentes e estilos adaptados para dispositivos móveis e desktop.

Hooks customizados mantêm comportamentos específicos da interface fora dos componentes quando necessário.

## Estrutura de responsabilidades

```text
src/
├── assets/       → imagens e recursos visuais
├── components/   → componentes e seções da interface
├── data/         → dados estruturados do cardápio e eventos
├── hooks/        → hooks reutilizáveis
├── lib/          → utilitários e integrações auxiliares
├── routes/       → rotas e metadados
├── router.tsx    → configuração do router
├── server.ts     → configuração do servidor
├── start.ts      → configuração do TanStack Start
└── styles.css    → sistema visual global
```

Essa separação mantém a aplicação organizada por responsabilidade e facilita a evolução de cada parte sem transformar a página principal em um único bloco monolítico.

## Deploy

O projeto possui configuração específica para Vercel através do Nitro:

```json
{
  "build": {
    "env": {
      "NITRO_PRESET": "vercel"
    }
  }
}
```

A aplicação está publicada em `https://zemexicano.site`.

## Observação

Este documento descreve decisões e estruturas identificadas no código atual do repositório. Ele não deve assumir funcionalidades, testes ou infraestrutura que não estejam presentes ou verificáveis no projeto.
