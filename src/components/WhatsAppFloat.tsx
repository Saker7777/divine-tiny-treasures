import { MessageCircle } from "lucide-react";

const PHONE = "5511932643167";
const MESSAGE = "Olá, quero saber mais sobre as bíblias infantis";

export function WhatsAppFloat() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-product transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.25} />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  );
}
