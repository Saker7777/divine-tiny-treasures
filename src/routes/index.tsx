import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-ebenezer.png";
import bibliaIlustrada from "@/assets/biblia-ilustrada.jpg";
import bibliaLetrasGrandes from "@/assets/biblia-letras-grandes.jpg";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CHECKOUT_URL } from "@/lib/constants";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ebenézer — Bíblias Infantis | Frete Grátis para todo Brasil" },
      {
        name: "description",
        content:
          "Bíblias infantis ilustradas com frete grátis e papel de presente. Presentes que aproximam crianças de Deus. Promoção por tempo limitado.",
      },
      { property: "og:title", content: "Ebenézer — Bíblias Infantis" },
      {
        property: "og:description",
        content: "Presentes que aproximam crianças de Deus. Frete grátis para todo Brasil.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* TOP BAR */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 py-2.5 text-center text-xs font-medium sm:flex-row sm:gap-6 sm:text-sm">
          <span>🚚 FRETE GRÁTIS PARA TODO BRASIL</span>
          <span className="hidden sm:inline opacity-50">•</span>
          <span>🎁 PAPEL DE PRESENTE GRÁTIS</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-6 text-center">
          <img
            src={logo}
            alt="Ebenézer"
            width={240}
            height={80}
            className="h-16 w-auto sm:h-20"
          />
          <p className="font-display text-base italic text-muted-foreground sm:text-lg">
            Presentes que aproximam crianças de Deus
          </p>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:py-20">
          <span className="inline-block rounded-full bg-gradient-gold px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary shadow-gold sm:text-sm">
            ✨ Edição Especial
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight text-primary sm:text-6xl">
            A primeira <span className="text-gradient-gold">Bíblia</span> do seu filho
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Histórias bíblicas ilustradas que ensinam valores cristãos de forma simples,
            envolvente e divertida. O presente perfeito para a fé crescer em família.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-primary">
            <span className="rounded-full border border-accent/30 bg-card px-4 py-2 shadow-sm">🔥 Promoção</span>
            <span className="rounded-full border border-accent/30 bg-card px-4 py-2 shadow-sm">🚚 Frete Grátis</span>
            <span className="rounded-full border border-accent/30 bg-card px-4 py-2 shadow-sm">🎁 Embalagem Presente</span>
          </div>

          <a
            href="#produtos"
            className="mt-10 inline-block rounded-2xl bg-gradient-cta px-10 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:brightness-110 sm:text-lg"
          >
            Ver Bíblias em Promoção ↓
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="produtos" className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Nossos Produtos
            </span>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-5xl">
              Escolha a Bíblia ideal
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Edições especiais com preço promocional. Estoque limitado.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <ProductCard
              image={bibliaIlustrada}
              name="Bíblia Infantil Ilustrada"
              originalPrice="R$ 45,90"
              price="R$ 25,90"
              badge="-44%"
              features={[
                "Linguagem simples para crianças",
                "Ilustrações coloridas em todas as páginas",
                "Ensina valores cristãos com leveza",
                "Ideal para presentear",
              ]}
            />
            <ProductCard
              image={bibliaLetrasGrandes}
              name="Bíblia Infantil Letras Grandes"
              originalPrice="R$ 49,90"
              price="R$ 27,90"
              badge="Mais Vendida"
              features={[
                "Letras grandes — ideal para alfabetização",
                "112 páginas de histórias bíblicas",
                "Capa dura almofadada",
                "Histórias envolventes e ilustradas",
              ]}
            />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-primary sm:text-3xl">
            Por que comprar na Ebenézer?
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: "🛡️", title: "Compra Segura", desc: "Pagamento 100% protegido" },
              { icon: "🚚", title: "Entrega Rápida", desc: "Para todo o Brasil" },
              { icon: "💬", title: "Suporte Pós-venda", desc: "Atendimento humanizado" },
              { icon: "✨", title: "Qualidade Garantida", desc: "Acabamento premium" },
              { icon: "🎁", title: "Embalagem Presente", desc: "Pronto para presentear" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl bg-card p-5 text-center shadow-soft"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-3 text-sm font-bold text-primary sm:text-base">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_20%,oklch(0.82_0.13_85),transparent_50%),radial-gradient(circle_at_70%_80%,oklch(0.6_0.118_230),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <span className="text-5xl">📖</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            Garanta agora o presente ideal para seu filho{" "}
            <span className="text-gradient-gold">aprender sobre Deus</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Estoque promocional limitado. Aproveite enquanto há disponibilidade.
          </p>
          <a
            href={CHECKOUT_URL}
            className="mt-8 inline-block rounded-2xl bg-gradient-cta px-12 py-5 text-base font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:brightness-110 sm:text-xl animate-pulse-cta"
          >
            🛒 Comprar Agora
          </a>
          <p className="mt-4 text-xs text-primary-foreground/70">
            🔒 Compra 100% Segura · 🚚 Frete Grátis · 🎁 Embalagem Presente
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <img src={logo} alt="Ebenézer" width={160} height={50} className="mx-auto h-12 w-auto opacity-80" />
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ebenézer · Presentes que aproximam crianças de Deus
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Atendimento: WhatsApp +55 11 93264-3167
          </p>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
