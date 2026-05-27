import { Code2, Layers, TrendingUp } from "lucide-react";
import { landingConfig } from "@/config/landing";

const apiBenefits = [
  {
    icon: Code2,
    text: "Ofereça API de pagamentos (incluindo PIX) para plataformas externas integrarem no seu gateway",
  },
  {
    icon: TrendingUp,
    text: "Fature mais cobrando taxa sobre cada transação que passar pela sua API",
  },
  {
    icon: Layers,
    text: "Parceiros integram uma vez; você controla gateways, taxas, regras e saques por trás",
  },
] as const;

const ApiSection = () => {
  return (
    <section className="overflow-x-hidden py-24">
      <div className="landing-container min-w-0">
        <div className="mx-auto max-w-5xl min-w-0">
          <div className="grid min-w-0 items-center gap-12 md:grid-cols-2">
            <div className="min-w-0">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">API de pagamentos</p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Sua plataforma também é uma
                <span className="text-text-secondary"> API de pagamentos para o mercado</span>
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary md:text-base">
                Além de processar as vendas da sua operação, o {landingConfig.productName} permite{" "}
                <span className="font-medium text-foreground">fornecer API PIX e outros métodos</span> para sistemas
                externos: e-commerce, SaaS, infoprodutores e qualquer plataforma que precise receber pagamentos.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-text-secondary md:text-base">
                Você vira o provedor: define regras, aplica suas taxas e transforma volume de terceiros em{" "}
                <span className="font-medium text-foreground">receita recorrente sobre transação</span>, sem montar
                integração do zero para cada parceiro.
              </p>

              <ul className="space-y-4">
                {apiBenefits.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" aria-hidden />
                    </span>
                    <p className="text-sm leading-relaxed text-foreground">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card min-w-0 max-w-full overflow-hidden rounded-xl p-4 font-mono text-xs sm:p-6 sm:text-sm">
              <p className="mb-3 text-xs font-sans font-semibold uppercase tracking-wider text-primary">
                Exemplo: API PIX para plataforma externa
              </p>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary/40" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
              </div>
              <pre className="max-w-full overflow-x-auto text-muted-foreground">
                <code>{`POST /api/v1/pix/charge
Authorization: Bearer sk_live_***
{
  "amount": 19700,
  "external_platform": "parceiro_xyz",
  "webhook_url": "https://parceiro.com/hook"
}

// Response
{
  "status": "pending",
  "pix_qrcode": "...",
  "api_fee": "your_margin",
  "transaction_id": "txn_8f2a"
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
