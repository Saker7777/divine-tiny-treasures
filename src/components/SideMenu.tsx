import { useState } from "react";
import {
  MoreVertical,
  X,
  LogIn,
  UserPlus,
  Star,
  MessageCircle,
  LogOut,
  User as UserIcon,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { AuthDialog } from "@/components/AuthDialog";
import { toast } from "sonner";

const FAKE_FEEDBACKS = [
  {
    name: "Mariana Souza",
    location: "São Paulo, SP",
    rating: 5,
    text: "Meu filho amou a Bíblia ilustrada! Chegou rapidinho e muito bem embalada.",
  },
  {
    name: "Carlos Henrique",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Excelente qualidade. As letras grandes ajudaram minha filha a ler sozinha.",
  },
  {
    name: "Patrícia Lima",
    location: "Curitiba, PR",
    rating: 5,
    text: "Comprei como presente de batismo e foi um sucesso. Recomendo demais!",
  },
  {
    name: "Rafael Santos",
    location: "Rio de Janeiro, RJ",
    rating: 4,
    text: "Linda edição, capa muito bonita. As ilustrações encantam as crianças.",
  },
  {
    name: "Juliana Almeida",
    location: "Fortaleza, CE",
    rating: 5,
    text: "Atendimento impecável e produto entregue antes do prazo. Voltarei a comprar!",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5511932643167?text=" +
  encodeURIComponent("Olá, quero saber mais sobre as bíblias infantis");

export function SideMenu() {
  const [open, setOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup" | null>(null);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Você saiu da conta");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-primary-foreground/90 transition-colors hover:bg-white/10 hover:text-primary-foreground"
      >
        <MoreVertical className="h-5 w-5" strokeWidth={2.25} />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[90] bg-black/50 animate-in fade-in duration-200"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed left-0 top-0 z-[91] flex h-full w-[85%] max-w-sm flex-col bg-background shadow-2xl animate-in slide-in-from-left duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-4 text-primary-foreground">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <UserIcon className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">
                    {user ? "Sua conta" : "Bem-vindo"}
                  </p>
                  <p className="text-[11px] opacity-80">
                    {user ? user.email : "Faça login ou crie sua conta"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Auth */}
              {!user && (
                <div className="border-b border-border p-3">
                  <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Conta
                  </p>
                  <button
                    onClick={() => setAuthMode("signin")}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <LogIn className="h-4 w-4 text-primary" />
                    Entrar
                  </button>
                  <button
                    onClick={() => setAuthMode("signup")}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <UserPlus className="h-4 w-4 text-accent" />
                    Criar conta
                  </button>
                </div>
              )}

              {/* Feedbacks */}
              <div className="border-b border-border p-3">
                <p className="flex items-center gap-1.5 px-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  Avaliações de clientes
                </p>
                <div className="space-y-2">
                  {FAKE_FEEDBACKS.map((fb) => (
                    <div
                      key={fb.name}
                      className="rounded-lg border border-border bg-card p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-foreground">{fb.name}</p>
                          <p className="text-[10px] text-muted-foreground">
                            {fb.location}
                          </p>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < fb.rating
                                  ? "fill-accent text-accent"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        "{fb.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suporte */}
              <div className="border-b border-border p-3">
                <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Suporte
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center gap-3 rounded-lg bg-[#25D366]/10 px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-[#25D366]/20"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <div className="leading-tight">
                    <div>WhatsApp</div>
                    <div className="text-[10px] text-muted-foreground">
                      +55 11 93264-3167
                    </div>
                  </div>
                </a>
              </div>

              {/* Logout */}
              {user && (
                <div className="p-3">
                  <button
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
                  >
                    <LogOut className="h-4 w-4" />
                    Sair da conta
                  </button>
                </div>
              )}
            </div>

            <div className="border-t border-border bg-card px-4 py-3 text-center">
              <p className="text-[10px] text-muted-foreground">
                © {new Date().getFullYear()} Ebenézer
              </p>
            </div>
          </aside>
        </>
      )}

      {authMode && (
        <AuthDialog
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onSwitch={(m) => setAuthMode(m)}
          onSuccess={() => {
            setAuthMode(null);
            setOpen(false);
          }}
        />
      )}
    </>
  );
}
