import { ShieldCheck, Lock, Award, CreditCard } from "lucide-react";

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-card py-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Compra Segura · Certificações
        </p>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {/* Reclame Aqui */}
          <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#00a335] text-white">
              <Award className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium text-muted-foreground">Reclame Aqui</div>
              <div className="text-xs font-bold text-primary">RA1000</div>
            </div>
          </div>

          {/* Pix */}
          <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#32BCAD] text-white font-black text-xs">
              Pix
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium text-muted-foreground">Pagamento</div>
              <div className="text-xs font-bold text-primary">Aprovação imediata</div>
            </div>
          </div>

          {/* SSL */}
          <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Lock className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium text-muted-foreground">Site Seguro</div>
              <div className="text-xs font-bold text-primary">SSL 256-bit</div>
            </div>
          </div>

          {/* Google Safe */}
          <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#4285F4] text-white">
              <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium text-muted-foreground">Google</div>
              <div className="text-xs font-bold text-primary">Safe Browsing</div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <CreditCard className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium text-muted-foreground">Cartões</div>
              <div className="text-xs font-bold text-primary">Visa · Master · Elo</div>
            </div>
          </div>

          {/* Compra protegida */}
          <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
              <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium text-muted-foreground">Garantia</div>
              <div className="text-xs font-bold text-primary">7 dias compra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
