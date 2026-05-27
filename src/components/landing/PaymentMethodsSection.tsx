import { CreditCard, Globe, Languages, Coins, Wallet, Barcode } from "lucide-react";

const methods = [
  {
    name: "PIX",
    desc: "Pagamento instantâneo no Brasil, direto na conta.",
    icon: "pix" as const,
  },
  {
    name: "Crédito globalmente",
    desc: "Cartão de crédito aceito globalmente, em qualquer país.",
    icon: CreditCard,
  },
  {
    name: "Débito globalmente",
    desc: "Débito internacional para clientes do mundo todo.",
    icon: Wallet,
  },
  {
    name: "Boleto",
    desc: "Boleto bancário para quem prefere pagar no Brasil.",
    icon: Barcode,
  },
] as const;

const globalFeatures = [
  {
    icon: Globe,
    title: "190+ países",
    desc: "Opere vendas internacionais sem refazer sua estrutura.",
  },
  {
    icon: Coins,
    title: "Multi-moedas",
    desc: "O checkout exibe e cobra na moeda certa para cada cliente.",
  },
  {
    icon: Languages,
    title: "Idioma automático",
    desc: "Detecção automática de idioma e moeda no checkout.",
  },
] as const;

const PaymentMethodsSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(95_90%_42%/0.08),transparent_60%)]" />

      <div className="landing-container relative min-w-0">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Métodos de pagamento</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Aceite pagamentos do Brasil
            <br className="hidden md:block" />
            <span className="text-text-secondary"> e do mundo inteiro</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-text-secondary md:text-base">
            PIX, boleto, crédito e débito no mesmo checkout, com conversão automática de moeda e idioma para
            vender em mais de 190 países.
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => (
            <article
              key={method.name}
              className="glass-card group rounded-xl p-6 transition-all duration-300 hover:border-primary/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                {method.icon === "pix" ? (
                  <img src="/gateways/pix.svg" alt="" className="h-7 w-auto object-contain" aria-hidden />
                ) : (
                  <method.icon className="h-6 w-6 text-primary" aria-hidden />
                )}
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{method.name}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{method.desc}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-background to-background p-6 md:p-8">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-primary">
            Processamento global integrado
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {globalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/80 px-5 py-4 backdrop-blur-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;
