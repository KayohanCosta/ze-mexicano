# 🌮 Zé Mexicano — Cantina & Bar

[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/) [![TypeScript 5.8](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/) [![TanStack Start](https://img.shields.io/badge/TanStack_Start-1.167.50-FF4154)](https://tanstack.com/start) [![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![License MIT](https://img.shields.io/badge/License-MIT-green?logo=opensourceinitiative&logoColor=white)](LICENSE)

> Uma experiência digital para apresentar a marca, o cardápio e a atmosfera do Zé Mexicano — Cantina & Bar, em Fortaleza.

## Visão geral

**Zé Mexicano** é um site institucional desenvolvido para um restaurante mexicano localizado no Cocó, em Fortaleza — CE.

A aplicação combina apresentação de marca, cardápio digital, promoções, eventos, galeria, localização e um fluxo de reserva integrado ao WhatsApp.

O projeto utiliza React, TanStack Start e SSR com Nitro, com uma estrutura baseada em componentes reutilizáveis e roteamento tipado.

## O problema

Um restaurante precisa comunicar muito mais do que seu cardápio.

A experiência digital precisa transmitir a identidade do estabelecimento, apresentar pratos e eventos de forma clara e transformar o interesse do visitante em uma ação concreta — como consultar o cardápio ou solicitar uma reserva.

O projeto concentra essas necessidades em uma única experiência responsiva e orientada à conversão.

## Solução

A aplicação reúne:

- apresentação da marca e posicionamento;
- cardápio digital organizado por categorias;
- promoções e contadores de eventos;
- programação de eventos;
- galeria de imagens;
- história e diferenciais do restaurante;
- localização e informações de contato;
- SEO e metadados específicos da página;
- dados estruturados `Schema.org`;
- fluxo de reserva em etapas;
- integração da reserva com WhatsApp.

O fluxo de reserva coleta os dados necessários do visitante e prepara a comunicação para atendimento pelo WhatsApp.

Para as decisões técnicas e detalhes de implementação, veja [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Stack e por quê

- **React 19** — construção da interface baseada em componentes reutilizáveis.
- **TanStack Start** — estrutura da aplicação com suporte a SSR e integração com o ecossistema TanStack.
- **TanStack Router** — roteamento tipado e baseado em arquivos.
- **TanStack Query** — gerenciamento de estado relacionado a dados e requisições.
- **TypeScript 5.8** — tipagem estática e maior segurança durante o desenvolvimento.
- **Vite 7** — desenvolvimento e build da aplicação.
- **Tailwind CSS 4** — implementação do sistema visual e estilos responsivos.
- **Radix UI + shadcn/ui** — componentes de interface acessíveis e reutilizáveis.
- **Embla Carousel** — suporte aos elementos de navegação em carrossel.
- **React Hook Form + Zod** — estruturação e validação de formulários.
- **Nitro + Vercel** — runtime e configuração de deploy da aplicação.

## Arquitetura e estrutura

A aplicação organiza a interface por componentes, dados locais, hooks, utilitários e rotas do TanStack Router.

```text
src/
├── assets/
├── components/
│   ├── ui/
│   ├── BookingModal.tsx
│   ├── Events.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── Menu.tsx
│   ├── Navbar.tsx
│   ├── Promotions.tsx
│   └── ...
├── data/
├── hooks/
├── lib/
├── routes/
│   ├── __root.tsx
│   └── index.tsx
├── router.tsx
├── routeTree.gen.ts
├── server.ts
├── start.ts
└── styles.css
```

- `components` concentra as seções e componentes reutilizáveis da experiência.
- `components/ui` concentra componentes de interface baseados em Radix/shadcn.
- `data` mantém os dados estruturados do cardápio e eventos.
- `routes` contém as rotas do TanStack Router.
- `lib` reúne utilitários e integrações auxiliares.
- `server.ts` e `start.ts` fazem parte da configuração da aplicação com TanStack Start/Nitro.
- `styles.css` concentra o sistema visual e estilos globais.

## Qualidade e engenharia

O projeto possui tooling dedicado para desenvolvimento, lint e formatação:

- **TypeScript 5.8**;
- **ESLint 9**;
- **Prettier**;
- configuração de TypeScript para a aplicação;
- scripts separados para desenvolvimento, build, lint e formatação.

Scripts disponíveis:

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Deploy

A aplicação está publicada em:

**https://zemexicano.site**

O projeto também possui configuração de produção com **Nitro + Vercel**, definida em `vercel.json`.

## Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/KayohanCosta/ze-mexicano.git
cd ze-mexicano
```

### 2. Instale as dependências

Com Bun:

```bash
bun install
```

ou com npm:

```bash
npm install
```

### 3. Inicie o ambiente de desenvolvimento

```bash
bun dev
```

ou:

```bash
npm run dev
```

### 4. Gere o build de produção

```bash
bun run build
```

ou:

```bash
npm run build
```

### 5. Visualize o build localmente

```bash
bun run preview
```

ou:

```bash
npm run preview
```

## Resultado

O Zé Mexicano transforma a presença digital do restaurante em uma experiência integrada de **marca, conteúdo e conversão**.

Do ponto de vista de engenharia, o projeto combina React e TypeScript, arquitetura baseada em componentes, roteamento tipado, SSR com TanStack Start/Nitro, cardápio estruturado, fluxo de reserva via WhatsApp, SEO, dados estruturados e configuração de deploy na Vercel.

O resultado é uma aplicação institucional completa, desenvolvida para apresentar a identidade do restaurante e conduzir o visitante até ações comerciais relevantes.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
