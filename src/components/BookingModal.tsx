import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Flame,
  Calendar as CalendarIcon,
  Clock,
  Users,
  User,
  ArrowRight,
  Check,
} from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("4");
  const [success, setSuccess] = useState(false);

  // Suggested times
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
    "22:30",
  ];

  // Suggested party sizes
  const peopleOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  // Format date helper: YYYY-MM-DD -> DD/MM/YYYY
  const formatDateForWhatsApp = (rawDate: string) => {
    if (!rawDate) return "";
    const [year, month, day] = rawDate.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !date || !time) return;

    setSuccess(true);
    const formattedDate = formatDateForWhatsApp(date);
    const textMessage = `Olá! Gostaria de reservar uma mesa para ${people} ${
      parseInt(people) === 1 ? "pessoa" : "pessoas"
    } no dia ${formattedDate} às ${time} em nome de ${name}.`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5585989261352&text=${encodedText}`;

    // Redirect after a short delay to show success animation
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      onOpenChange(false);
      // Reset state
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-[480px] bg-card border border-border/80 p-0 overflow-hidden text-cream rounded-2xl">
        <div className="bg-gradient-to-r from-fiesta/20 to-primary/20 p-6 pb-4 border-b border-border/40 relative">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Experiência Premium
            </span>
          </div>
          <DialogTitle className="font-display text-3xl text-cream tracking-wide">
            Reservar sua Mesa
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-1 text-sm">
            Vivencie a melhor culinária mexicana com alma cearense.
          </DialogDescription>
        </div>

        {success ? (
          <div className="p-10 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
            <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30 mb-4 animate-bounce">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl text-cream mb-2">Reserva Preparada!</h3>
            <p className="text-sm text-muted-foreground max-w-xs mb-4">
              Estamos te direcionando para o nosso WhatsApp para finalizar sua reserva
              instantaneamente.
            </p>
            <span className="text-xs text-accent uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
              Redirecionando <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          </div>
        ) : (
          <form onSubmit={handleConfirm} className="p-6 space-y-6">
            {/* Progress indicators */}
            <div className="flex justify-between items-center gap-2">
              {[1, 2, 3, 4].map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => s < step && setStep(s)}
                  disabled={s > step}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    s <= step ? "bg-accent" : "bg-border/60"
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Name */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <label className="block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Como devemos te chamar?
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl py-3.5 pl-12 pr-4 text-cream font-medium focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Por favor, insira o nome principal para identificação na recepção da cantina.
                </p>
              </div>
            )}

            {/* Step 2: Date */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <label className="block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Para qual dia?
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-accent pointer-events-none" />
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl py-3.5 pl-12 pr-4 text-cream font-medium focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors [color-scheme:dark]"
                  />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Reservas são válidas para qualquer dia da semana de funcionamento normal.
                </p>
              </div>
            )}

            {/* Step 3: Time */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <label className="block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Escolha o melhor horário:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeOptions.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-2 px-1 text-sm font-semibold rounded-xl border transition-all ${
                        time === t
                          ? "bg-accent border-accent text-accent-foreground shadow-md shadow-accent/20 scale-105"
                          : "border-border/60 hover:border-accent/60 bg-background/50 hover:bg-card text-muted-foreground hover:text-cream"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Nossa cozinha funciona das 17:00h até a meia-noite (sexta e sábado até 01:00h).
                </p>
              </div>
            )}

            {/* Step 4: Party Size & Summary */}
            {step === 4 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Quantas pessoas na mesa?
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {peopleOptions.map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setPeople(p)}
                        className={`py-2 px-1 text-sm font-semibold rounded-xl border transition-all ${
                          people === p
                            ? "bg-accent border-accent text-accent-foreground shadow-md shadow-accent/20 scale-105"
                            : "border-border/60 hover:border-accent/60 bg-background/50 hover:bg-card text-muted-foreground hover:text-cream"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary Box */}
                <div className="rounded-xl border border-border/80 bg-background/40 p-4 space-y-3">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-accent border-b border-border/40 pb-2">
                    Resumo do Pedido de Reserva
                  </p>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="text-muted-foreground flex items-center gap-2">
                      <User className="h-4 w-4 text-accent" /> Nome:
                    </div>
                    <div className="text-cream font-medium text-right truncate">{name}</div>

                    <div className="text-muted-foreground flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-accent" /> Data:
                    </div>
                    <div className="text-cream font-medium text-right">
                      {formatDateForWhatsApp(date)}
                    </div>

                    <div className="text-muted-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" /> Horário:
                    </div>
                    <div className="text-cream font-medium text-right">{time}</div>

                    <div className="text-muted-foreground flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" /> Pessoas:
                    </div>
                    <div className="text-cream font-medium text-right">
                      {people} {parseInt(people) === 1 ? "pessoa" : "pessoas"}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-2">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 px-4 rounded-xl border border-border text-sm font-semibold hover:bg-card hover:text-cream transition-colors cursor-pointer"
                >
                  Voltar
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  disabled={!isStepValid()}
                  onClick={() => setStep(step + 1)}
                  className="flex-[2] bg-primary text-primary-foreground py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100"
                >
                  Avançar <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isStepValid()}
                  className="flex-[2] bg-primary text-primary-foreground py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[var(--shadow-fiesta)]"
                >
                  Confirmar no WhatsApp <Flame className="h-4 w-4 text-accent animate-pulse" />
                </button>
              )}
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
