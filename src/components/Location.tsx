const hours = [
  { day: "Domingo a quinta", time: "17h — 00h" },
  { day: "Sexta e sábado", time: "17h — 01h" },
];

export function Location() {
  return (
    <section id="visite" className="relative py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid gap-10 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
          <div className="p-8 md:p-12">
            <span className="font-script text-2xl text-accent">Vem pro Zé</span>
            <h2 className="mt-2 font-display text-5xl md:text-6xl">
              Visite <span className="text-fiesta">a casa</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Estamos no coração do Cocó, em Fortaleza. Reservas e pedidos pelo WhatsApp.
            </p>

            <div className="mt-8 space-y-6">
              <Block label="Endereço">
                Rua Manuel Queirós, 511<br />
                Cocó · Fortaleza — CE · 60192-220
              </Block>

              <Block label="Horário">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-border/60 py-1.5">
                    <span>{h.day}</span>
                    <span className="font-medium text-accent">{h.time}</span>
                  </div>
                ))}
              </Block>

              <Block label="Contato">
                <a href="tel:+5585989261352" className="block hover:text-accent">(85) 98926-1352 · Reservas</a>
                <a href="tel:+5585984651070" className="block hover:text-accent">(85) 98465-1070 · Informações</a>
                <a href="mailto:zemexicanocurriculos@gmail.com" className="block text-muted-foreground hover:text-accent">
                  zemexicanocurriculos@gmail.com · Trabalhe conosco
                </a>
              </Block>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=5585989261352"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-fiesta)] hover:scale-105"
              >
                WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/dir//Rua+Manuel+Queir%C3%B3s,+511+-+Coc%C3%B3,+Fortaleza+-+CE,+60192-220"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-accent hover:text-accent"
              >
                Como chegar ↗
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-full">
            <iframe
              title="Mapa Zé Mexicano"
              src="https://www.google.com/maps?q=Rua+Manuel+Queir%C3%B3s,+511+-+Coc%C3%B3,+Fortaleza+-+CE,+60192-220&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[40%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-accent">{label}</p>
      <div className="text-foreground">{children}</div>
    </div>
  );
}
