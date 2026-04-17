import { createFileRoute } from "@tanstack/react-router";
import {
  Truck,
  Gift,
  Flame,
  Sparkles,
  ShoppingCart,
  ShieldCheck,
  Zap,
  Headphones,
  BadgeCheck,
  PackageCheck,
  BookOpen,
} from "lucide-react";
import logo from "@/assets/logo-ebenezer.png";
import bibliaIlustrada from "@/assets/biblia-ilustrada.jpg";
import bibliaLetrasGrandes from "@/assets/biblia-letras-grandes.jpg";
import bibliaKingJames from "@/assets/biblia-king-james.jpg";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { TrustBadges } from "@/components/TrustBadges";
import { CHECKOUT_URL, CHECKOUT_KING_JAMES_URL } from "@/lib/constants";

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

const trustItems = [
  { icon: ShieldCheck, title: "Compra Segura", desc: "Pagamento 100% protegido" },
  { icon: Zap, title: "Entrega Rápida", desc: "Para todo o Brasil" },
  { icon: Headphones, title: "Suporte Humanizado", desc: "Atendimento dedicado" },
  { icon: BadgeCheck, title: "Qualidade Garantida", desc: "Acabamento premium" },
  { icon: PackageCheck, title: "Embalagem Presente", desc: "Pronto para presentear" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* TOP BAR */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2 text-center text-[11px] font-medium sm:text-xs">
          <span className="inline-flex items-center gap-1.5">
            <Truck className="h-3.5 w-3.5" /> FRETE GRÁTIS PARA TODO BRASIL
          </span>
          <span className="hidden sm:inline opacity-40">•</span>
          <span className="inline-flex items-center gap-1.5">
            <Gift className="h-3.5 w-3.5" /> PAPEL DE PRESENTE GRÁTIS
          </span>
        </div>
      </div>

      {/* HEADER */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-5 text-center">
          <img
            src={logo}
            alt="Ebenézer"
            width={200}
            height={64}
            className="h-12 w-auto sm:h-14"
          />
          <p className="font-display text-sm italic text-muted-foreground sm:text-base">
            Presentes que aproximam crianças de Deus
          </p>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:py-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Edição Especial
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-[1.1] text-primary sm:text-5xl">
            A primeira <span className="text-gradient-gold">Bíblia</span> do seu filho
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Histórias bíblicas ilustradas que ensinam valores cristãos de forma simples,
            envolvente e divertida.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-primary">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5">
              <Flame className="h-3.5 w-3.5 text-destructive" /> Promoção
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5">
              <Truck className="h-3.5 w-3.5 text-primary" /> Frete Grátis
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5">
              <Gift className="h-3.5 w-3.5 text-accent" /> Embalagem Presente
            </span>
          </div>

          <a
            href="#produtos"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-cta px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:brightness-110"
          >
            <ShoppingCart className="h-4 w-4" strokeWidth={2.5} />
            Ver Bíblias em Promoção
          </a>
        </div>
      </section>

      {/* TRUST BADGES (certifications) */}
      <TrustBadges />

      {/* PRODUCTS */}
      <section id="produtos" className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              <BookOpen className="h-3.5 w-3.5" /> Nossos Produtos
            </span>
            <h2 className="mt-2 text-2xl font-bold text-primary sm:text-4xl">
              Escolha a Bíblia ideal
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Edições especiais com preço promocional. Estoque limitado.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              image={bibliaIlustrada}
              name="Bíblia Infantil Ilustrada"
              originalPrice="R$ 45,90"
              price="R$ 25,90"
              discount="-44%"
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
              discount="-44%"
              badge="Mais Vendida"
              features={[
                "Letras grandes — ideal para alfabetização",
                "112 páginas de histórias bíblicas",
                "Capa dura almofadada",
                "Histórias envolventes e ilustradas",
              ]}
            />
            <ProductCard
              image={bibliaKingJames}
              name="Bíblia King James Clássica"
              originalPrice="R$ 69,90"
              price="R$ 49,90"
              discount="-29%"
              checkoutUrl={CHECKOUT_KING_JAMES_URL}
              features={[
                "Tradução King James fiel ao original",
                "Capa dura em couro sintético premium",
                "Texto clássico e atemporal",
                "Ideal para estudo e devocional",
              ]}
            />
          </div>
        </div>
      </section>

      {/* TRUST FEATURES */}
      <section className="bg-cream py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-xl font-bold text-primary sm:text-2xl">
            Por que comprar na Ebenézer?
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-primary">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary py-14 text-primary-foreground sm:py-20">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_20%,oklch(0.82_0.13_85),transparent_50%),radial-gradient(circle_at_70%_80%,oklch(0.6_0.118_230),transparent_50%)]" />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary">
            <BookOpen className="h-6 w-6" strokeWidth={2.25} />
          </div>
          <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-4xl">
            Garanta o presente ideal para seu filho{" "}
            <span className="text-gradient-gold">aprender sobre Deus</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-primary-foreground/80 sm:text-base">
            Estoque promocional limitado. Aproveite enquanto há disponibilidade.
          </p>
          <a
            href={CHECKOUT_URL}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-cta px-10 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:brightness-110 sm:text-base"
          >
            <ShoppingCart className="h-4 w-4" strokeWidth={2.5} />
            Comprar Agora
          </a>
          <p className="mt-4 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-primary-foreground/70">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> 100% Seguro</span>
            <span className="inline-flex items-center gap-1"><Truck className="h-3 w-3" /> Frete Grátis</span>
            <span className="inline-flex items-center gap-1"><Gift className="h-3 w-3" /> Embalagem Presente</span>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <img src={logo} alt="Ebenézer" width={140} height={44} className="mx-auto h-10 w-auto opacity-80" />
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
