import { useEffect, useState } from "react";
import { Flame, X, Truck, Gift, ShoppingCart } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const STORAGE_KEY = "ebenezer_promo_deadline";
const PROMO_HOURS = 3;
const REOPEN_AFTER_MS = 1000 * 60 * 8; // reabre a cada 8 minutos
const DISMISS_KEY = "ebenezer_promo_dismissed_at";

function getOrCreateDeadline(): number {
  if (typeof window === "undefined") return Date.now() + PROMO_HOURS * 3600 * 1000;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const deadline = parseInt(stored, 10);
    if (!Number.isNaN(deadline) && deadline > Date.now()) return deadline;
  }
  const next = Date.now() + PROMO_HOURS * 3600 * 1000;
  localStorage.setItem(STORAGE_KEY, String(next));
  return next;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [deadline, setDeadline] = useState<number>(0);
  const [now, setNow] = useState<number>(Date.now());

  // Open on mount + every REOPEN_AFTER_MS
  useEffect(() => {
    setDeadline(getOrCreateDeadline());

    const shouldOpen = () => {
      const dismissed = localStorage.getItem(DISMISS_KEY);
      if (!dismissed) return true;
      return Date.now() - parseInt(dismissed, 10) > REOPEN_AFTER_MS;
    };

    // Initial open after small delay
    const initial = setTimeout(() => {
      if (shouldOpen()) setOpen(true);
    }, 1500);

    const interval = setInterval(() => {
      if (shouldOpen()) setOpen(true);
    }, REOPEN_AFTER_MS);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  // Tick every second when open
  useEffect(() => {
    if (!open) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [open]);

  // Reset deadline if expired
  useEffect(() => {
    if (deadline && now > deadline) {
      const next = Date.now() + PROMO_HOURS * 3600 * 1000;
      localStorage.setItem(STORAGE_KEY, String(next));
      setDeadline(next);
    }
  }, [now, deadline]);

  const close = () => {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setOpen(false);
  };

  if (!open) return null;

  const remaining = Math.max(0, deadline - now);
  const hours = Math.floor(remaining / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-card shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={close}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-cta px-6 py-5 text-center text-white">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <Flame className="h-6 w-6" strokeWidth={2.5} />
          </div>
          <h3 className="mt-3 text-xl font-bold leading-tight">Promoção Relâmpago!</h3>
          <p className="mt-1 text-xs font-medium text-white/90">
            Desconto exclusivo por tempo limitado
          </p>
        </div>

        <div className="px-6 pb-6 pt-5">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Termina em
          </p>
          <div className="mt-2 flex items-center justify-center gap-1.5">
            {[
              { v: hours, l: "horas" },
              { v: minutes, l: "min" },
              { v: seconds, l: "seg" },
            ].map((item, i) => (
              <div key={item.l} className="flex items-center gap-1.5">
                <div className="flex w-14 flex-col items-center rounded-lg bg-primary px-2 py-2 text-primary-foreground">
                  <span className="text-2xl font-extrabold tabular-nums leading-none">
                    {pad(item.v)}
                  </span>
                  <span className="mt-0.5 text-[9px] font-medium uppercase tracking-wider opacity-80">
                    {item.l}
                  </span>
                </div>
                {i < 2 && <span className="text-xl font-bold text-primary">:</span>}
              </div>
            ))}
          </div>

          <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <Truck className="h-3.5 w-3.5 text-primary" />
              Frete grátis para todo Brasil
            </li>
            <li className="flex items-center gap-2">
              <Gift className="h-3.5 w-3.5 text-accent" />
              Embalagem para presente inclusa
            </li>
            <li className="flex items-center gap-2">
              <Flame className="h-3.5 w-3.5 text-destructive" />
              Estoque promocional limitado
            </li>
          </ul>

          <a
            href={CHECKOUT_URL}
            onClick={close}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-cta px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:brightness-110"
          >
            <ShoppingCart className="h-4 w-4" strokeWidth={2.5} />
            Aproveitar Agora
          </a>
          <button
            onClick={close}
            className="mt-2 w-full text-center text-[11px] text-muted-foreground hover:text-foreground"
          >
            Não, prefiro perder o desconto
          </button>
        </div>
      </div>
    </div>
  );
}
