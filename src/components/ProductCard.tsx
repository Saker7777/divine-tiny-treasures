import { Check, ShoppingCart, Truck, Gift, Clock } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

type Props = {
  image: string;
  name: string;
  originalPrice: string;
  price: string;
  features: string[];
  badge?: string;
  discount?: string;
  checkoutUrl?: string;
};

export function ProductCard({ image, name, originalPrice, price, features, badge, discount, checkoutUrl }: Props) {
  const href = checkoutUrl ?? CHECKOUT_URL;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-product">
      {discount && (
        <div className="absolute left-4 top-4 z-10 rounded-md bg-destructive px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-destructive-foreground">
          {discount} OFF
        </div>
      )}
      {badge && (
        <div className="absolute right-4 top-4 z-10 rounded-md bg-gradient-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
          {badge}
        </div>
      )}

      <div className="relative bg-gradient-hero p-6 sm:p-8">
        <img
          src={image}
          alt={name}
          width={1024}
          height={1024}
          loading="lazy"
          className="relative mx-auto aspect-square w-full max-w-[260px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <h3 className="text-xl font-bold text-primary sm:text-2xl">{name}</h3>

        <ul className="space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={2.5} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4 border-t border-border pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            <span className="text-3xl font-extrabold text-primary sm:text-4xl">{price}</span>
            <span className="text-xs font-medium text-muted-foreground">à vista</span>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-primary/80">
            <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1">
              <Truck className="h-3 w-3" /> Frete grátis
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1">
              <Gift className="h-3 w-3" /> Embalagem presente
            </span>
          </div>

          <a
            href={href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-cta py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:brightness-110"
          >
            <ShoppingCart className="h-4 w-4" strokeWidth={2.5} />
            Comprar Agora
          </a>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <Clock className="h-3 w-3" /> Promoção por tempo limitado
          </p>
        </div>
      </div>
    </article>
  );
}
