import { CHECKOUT_URL } from "@/lib/constants";

type Props = {
  image: string;
  name: string;
  originalPrice: string;
  price: string;
  features: string[];
  badge?: string;
};

export function ProductCard({ image, name, originalPrice, price, features, badge }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition-all hover:shadow-product">
      <div className="absolute left-4 top-4 z-10 rounded-full bg-gradient-cta px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
        🔥 Oferta
      </div>
      {badge && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-gold px-3 py-1.5 text-xs font-bold text-primary shadow-gold">
          {badge}
        </div>
      )}

      <div className="relative bg-gradient-hero p-8 sm:p-10">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_50%_40%,oklch(1_0_0/0.8),transparent_60%)]" />
        <img
          src={image}
          alt={name}
          width={1024}
          height={1024}
          loading="lazy"
          className="relative mx-auto aspect-square w-full max-w-xs animate-float object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-5 p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-primary sm:text-3xl">{name}</h3>

        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground sm:text-base">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-end gap-3 border-t border-border pt-5">
          <span className="text-base text-muted-foreground line-through">{originalPrice}</span>
          <span className="text-4xl font-extrabold text-primary sm:text-5xl">{price}</span>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-medium text-primary/80">
          <span className="rounded-full bg-secondary px-3 py-1">🚚 Frete grátis</span>
          <span className="rounded-full bg-secondary px-3 py-1">🎁 Embalagem presente</span>
        </div>

        <a
          href={CHECKOUT_URL}
          className="block w-full rounded-2xl bg-gradient-cta py-4 text-center text-base font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:brightness-110 sm:text-lg animate-pulse-cta"
        >
          🛒 Comprar Agora
        </a>
        <p className="text-center text-xs text-muted-foreground">
          ⏰ Promoção por tempo limitado
        </p>
      </div>
    </article>
  );
}
