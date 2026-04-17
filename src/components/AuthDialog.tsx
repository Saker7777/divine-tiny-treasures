import { useState, FormEvent } from "react";
import { X, Loader2, Mail, Lock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

type Props = {
  mode: "signin" | "signup";
  onClose: () => void;
  onSwitch: (mode: "signin" | "signup") => void;
  onSuccess: () => void;
};

export function AuthDialog({ mode, onClose, onSwitch, onSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const isSignup = mode === "signup";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || password.length < 6) {
      toast.error("Informe email válido e senha de pelo menos 6 caracteres.");
      return;
    }
    setLoading(true);
    const { error } = isSignup
      ? await signUp(email.trim(), password)
      : await signIn(email.trim(), password);
    setLoading(false);

    if (error) {
      toast.error(
        error.includes("already registered")
          ? "Este email já está cadastrado."
          : error.includes("Invalid login")
          ? "Email ou senha incorretos."
          : error
      );
      return;
    }

    if (isSignup) {
      toast.success("Conta criada! Verifique seu email para confirmar.");
    } else {
      toast.success("Login realizado com sucesso!");
    }
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-2xl bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <h3 className="text-xl font-bold text-primary">
          {isSignup ? "Criar conta" : "Entrar"}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {isSignup
            ? "Crie sua conta para acompanhar pedidos e novidades"
            : "Acesse sua conta para acompanhar seus pedidos"}
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div>
            <label className="text-xs font-semibold text-foreground">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                maxLength={255}
                className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground">Senha</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                minLength={6}
                maxLength={72}
                className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">
              Mínimo 6 caracteres
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-cta py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:brightness-110 disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {isSignup ? "Criar conta" : "Entrar"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          {isSignup ? "Já tem conta?" : "Não tem conta ainda?"}{" "}
          <button
            type="button"
            onClick={() => onSwitch(isSignup ? "signin" : "signup")}
            className="font-bold text-primary hover:underline"
          >
            {isSignup ? "Entrar" : "Criar conta"}
          </button>
        </p>
      </div>
    </div>
  );
}
