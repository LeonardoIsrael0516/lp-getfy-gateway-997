import image1m from "@/assets/1m.png";
import { Check } from "lucide-react";
import { landingConfig } from "@/config/landing";

const items = [
  "Donos de gateway que querem processar pagamentos e cobrar taxas com margem própria",
  "Infoprodutores que buscam checkout, área de membros e afiliados na mesma stack",
  "Operações que precisam de saques automáticos e previsibilidade de caixa",
  "Quem quer escalar com co-produtores e splits sem depender de planilhas",
  "Empreendedores que buscam grupo e networking com quem já movimenta alto volume",
] as const;

const ForWhoCheckoutSection = () => {
  return (
    <section className="landing-section overflow-x-clip py-24">
      <div className="landing-container">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="order-2 min-w-0 lg:order-1">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Para quem é o {landingConfig.productName}
            </h2>

            <ul className="mt-8 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground md:text-base">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <div className="mx-auto w-full min-w-0 max-w-md overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_60px_-35px_rgba(15,23,42,0.45)]">
              <img
                src={image1m}
                alt={`Visual da plataforma ${landingConfig.productName}`}
                className="mx-auto block h-auto w-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoCheckoutSection;
