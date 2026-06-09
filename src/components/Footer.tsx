export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pb-10 pt-16">
      <div className="divider-papel absolute left-0 right-0 top-0 -translate-y-1/2" />
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl text-fiesta">ZÉ MEXICANO</p>
            <p className="mt-2 font-script text-xl text-accent">Bar &amp; Restaurante</p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              O melhor da culinária mexicana com aquele toque brasileiro.
              Fortaleza — Ceará.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-accent">Navegue</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-accent">Sobre</a></li>
              <li><a href="#cardapio" className="hover:text-accent">Cardápio</a></li>
              <li><a href="#eventos" className="hover:text-accent">Eventos</a></li>
              <li><a href="#galeria" className="hover:text-accent">Galeria</a></li>
              <li><a href="#visite" className="hover:text-accent">Visite</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-accent">Siga &amp; fale</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://www.instagram.com/zemexicano1/" target="_blank" rel="noreferrer" className="hover:text-accent">Instagram @zemexicano1</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5585989261352" target="_blank" rel="noreferrer" className="hover:text-accent">WhatsApp (85) 98926-1352</a></li>
              <li><a href="mailto:zemexicanocurriculos@gmail.com" className="hover:text-accent">Trabalhe conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Zé Mexicano Bar &amp; Restaurante.</p>
          <p>Beba com moderação. Proibida a venda de bebidas alcoólicas para menores de 18 anos.</p>
        </div>
      </div>
    </footer>
  );
}
