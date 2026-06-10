# 🌮 Zé Mexicano — Cantina & Bar

Site institucional moderno, dinâmico e de alta performance desenvolvido para o restaurante **Zé Mexicano**, localizado no bairro Cocó em Fortaleza - CE. A plataforma combina a experiência da autêntica gastronomia mexicana e Tex-Mex com uma interface premium e reserva de mesas em tempo real via WhatsApp.

---

## 🚀 Demonstração & Link Principal
- **Website Oficial:** [https://zemexicano.vercel.app](https://zemexicano.vercel.app)
- **Localização:** Rua Manuel Queirós, 511, Cocó, Fortaleza - CE.
- **WhatsApp para Contato:** +55 (85) 98926-1352

---

## ✨ Recursos Principais (Features)

*   **📅 Sistema de Reserva em 4 Etapas (`BookingModal`):**
    *   Um fluxo de reserva interativo e amigável: **Nome ➔ Data ➔ Horário ➔ Tamanho da Mesa**.
    *   Resumo automático dos dados de reserva.
    *   Integração direta com o **WhatsApp Business** do restaurante, gerando uma mensagem personalizada formatada pronta para envio.
*   **🍽️ Cardápio Digital Interativo (`Menu`):**
    *   Exibição organizada por categorias dinâmicas (Entradas, Especialidades, Flautas, Tacos, Quesadillas, Burgers, Chimichangas, Burritos, Enchiladas, Fajitas, Pratos Vegetarianos, Sobremesas e Bebidas).
    *   Sinalização visual de pratos com tags especiais: *Mais Pedidos*, *Especial do Chef*, *Picantes (pimenta)*, *Compartilháveis* e *Vegetarianos (Veggie)*.
    *   Banner rotativo contextualizado de acordo com a categoria de cardápio selecionada.
*   **⏰ Contador Regressivo de Promoções (`Promotions`):**
    *   Contagem regressiva em tempo real para a **Terça-Feira da Margarita em Dobro** e para o próximo **Tiempo Feliz (Happy Hour)**.
    *   Atualização de estado de forma assíncrona, exibindo mensagens dinâmicas como "Ativo Agora!".
*   **🎉 Agenda de Eventos Temáticos (`Events`):**
    *   Apresentação da programação semanal (Mariachi às quintas-feiras, DJ Set com Latin House às sextas e Sabadão Tex-Mex).
    *   Chamadas para ação (CTA) integradas diretamente com o modal de reservas.
*   **🔍 SEO Otimizado & Dados Estruturados (JSON-LD):**
    *   Estruturação de metadados robusta via cabeçalhos nativos do router.
    *   Injeção do script JSON-LD `LocalBusiness` / `BarOrRestaurant` da Schema.org no layout raiz, garantindo excelente indexação no Google Maps e nos motores de busca locais.
*   **🎨 Design Responsivo & Premium:**
    *   Estilo visual com tema escuro imersivo inspirado nas noites mexicanas (*Festa Mexicana Premium - Noite Quente*).
    *   Suporte a visualizações responsivas em celulares, tablets e monitores de notebook com restrições de altura, adaptando paddings e tamanhos de fonte dinamicamente.

---

## 🛠️ Tecnologias Utilizadas (Tech Stack)

A arquitetura do projeto foi estruturada com ferramentas modernas do ecossistema JavaScript/React para garantir velocidade e facilidade de manutenção:

*   **React 19 & TypeScript:** Aproveitando as últimas melhorias de renderização e segurança de tipos no lado do cliente.
*   **TanStack Start:** Framework completo (baseado em Vite) com suporte a SSR (Server-Side Rendering) e roteamento de arquivos nativo.
*   **TanStack Router:** Roteamento baseado em arquivos rápido, tipado e com suporte completo a gerenciamento de estados de navegação.
*   **TanStack Query:** Gerenciamento eficiente de dados e estados de requisições.
*   **Tailwind CSS v4:** Motor de estilos mais rápido do mercado, configurado com o novo formato `@theme inline` e paletas de cores refinadas em espaço de cor `oklch` (cores vibrantes e gradientes suaves).
*   **Radix UI & Shadcn:** Componentes de interface acessíveis e altamente customizáveis (ex: Accordion, Dialog, Carousel, Drawer, etc.).
*   **Embla Carousel:** Navegação suave por sliders e carrosséis.
*   **Nitro & Vercel:** Servidor de produção configurado por meio do Nitro Engine para deploy escalável e otimizado na Vercel.

---

## 📁 Estrutura de Pastas Principal

```text
├── .vercel/                 # Configurações locais de build da Vercel
├── public/                  # Arquivos estáticos (sitemap.xml, robots.txt, logo, favicon)
├── src/
│   ├── assets/              # Imagens dos pratos, espaço físico e drinks organizados
│   ├── components/          # Componentes reutilizáveis da interface
│   │   ├── ui/              # Componentes de base acessíveis da Radix/Shadcn
│   │   ├── BookingModal.tsx # Modal interativo de reserva via WhatsApp
│   │   ├── Menu.tsx         # Cardápio interativo e dinâmico
│   │   ├── Promotions.tsx   # Banner de promoções com contagem regressiva
│   │   ├── Navbar.tsx       # Barra de navegação responsiva superior
│   │   └── ...              # Outras seções da Landing Page (Hero, WhyUs, Events, etc.)
│   ├── data/                # Bases de dados locais tipadas (cardápio e eventos)
│   │   ├── menu.ts          # Dados estruturados de todos os pratos e do happy hour
│   │   └── events.ts        # Dados estruturados da programação da semana
│   ├── hooks/               # Hooks customizados do React (detecção de mobile, etc.)
│   ├── lib/                 # Utilitários de API, configurações do servidor e tratamento de erros
│   ├── routes/              # Rotas da aplicação (TanStack Router)
│   │   ├── __root.tsx       # Layout raiz, SEO meta tags, fontes e estrutura HTML
│   │   └── index.tsx        # Página inicial (com injeção de JSON-LD)
│   ├── styles.css           # Estilização global com Tailwind CSS v4 e tokens de cor
│   ├── server.ts            # Entrypoint do servidor SSR Nitro
│   └── start.ts             # Configuração e middlewares do TanStack Start
├── components.json          # Configuração dos componentes da UI
├── package.json             # Scripts de execução e lista de dependências
├── tsconfig.json            # Configuração do TypeScript
└── vite.config.ts           # Configuração do compilador Vite integrado com Lovable e Nitro
```

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter instalado o [Node.js](https://nodejs.org) ou o [Bun](https://bun.sh/) em sua máquina.

### 1. Clonar e Instalar as Dependências
Abra o terminal na pasta do projeto e instale as dependências:

```bash
# Usando npm
npm install

# Ou usando Bun (recomendado pelo arquivo de trava bun.lock)
bun install
```

### 2. Executar o Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento local:

```bash
# Usando npm
npm run dev

# Ou usando Bun
bun dev
```
O console exibirá o endereço local (geralmente `http://localhost:3000`). Acesse-o no seu navegador.

### 3. Compilar para Produção (Build)
Para compilar o site otimizado para o ambiente de produção:

```bash
# Usando npm
npm run build

# Ou usando Bun
bun run build
```

### 4. Visualizar o Build Localmente (Preview)
Para testar a versão de produção gerada na sua máquina local:

```bash
# Usando npm
npm run preview

# Ou usando Bun
bun run preview
```

---

## 🎨 Design System e Customização

Os tokens visuais do projeto são gerenciados no arquivo [src/styles.css](file:///c:/Users/Kayan/OneDrive/%C3%81rea%20de%20Trabalho/ZEMEXICANO/src/styles.css).
Você pode personalizar cores e fontes alterando as variáveis no bloco `:root`:

*   `--primary` (Vermelho Chili): `oklch(0.6 0.23 27)`
*   `--accent` (Dourado Calêndula): `oklch(0.84 0.16 80)`
*   `--lime` (Verde Limão Mexicano): `oklch(0.7 0.2 145)`
*   `--background` (Preto Quente): `oklch(0.13 0.02 30)`

As fontes utilizadas são carregadas diretamente do Google Fonts:
*   **Bebas Neue** (Títulos impactantes da marca)
*   **Fraunces** (Títulos secundários elegantes e itálicos)
*   **Caveat** (Estilo manuscrito para assinaturas ou pequenos realces)
*   **Inter** (Texto de leitura e descrição)
