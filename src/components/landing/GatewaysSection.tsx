import { Barcode, CreditCard } from "lucide-react";

const paymentMethods = [
  { name: "PIX", src: "/gateways/pix.svg", type: "image" as const },
  { name: "Apple Pay", src: "/gateways/apple-pay.png", type: "image" as const },
  { name: "Google Pay", src: "/gateways/gpay.png", type: "image" as const },
  { name: "Cartão de crédito", type: "icon" as const, icon: CreditCard },
  { name: "Boleto", type: "icon" as const, icon: Barcode },
] as const;

const GatewaysSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="landing-container min-w-0">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Pagamentos</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Integre com todos os métodos de pagamento
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-text-secondary">
            PIX, cartão, boleto e carteiras digitais no mesmo checkout, pronto para vender no Brasil e aceitar pagamentos
            globais.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-4">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="glass-card flex min-w-0 flex-col items-center justify-center gap-3 rounded-xl border border-transparent px-4 py-4 transition-colors hover:border-primary/15 sm:min-w-[140px] sm:flex-1 sm:max-w-[180px] sm:px-6 sm:py-5"
            >
              {method.type === "image" ? (
                <img
                  src={method.src}
                  alt={method.name}
                  className="h-8 w-auto max-w-[100px] object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <method.icon className="h-6 w-6 text-primary" aria-hidden />
                </span>
              )}
              <span className="text-center text-sm font-semibold text-foreground">{method.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GatewaysSection;
