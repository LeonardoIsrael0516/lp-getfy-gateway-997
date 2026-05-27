import { Building2, HandCoins, Shuffle, Wallet } from "lucide-react";

const pains = [
  {
    icon: Building2,
    title: "Você usa a estrutura dos outros",
    text: "Checkout, área de membros e pagamentos ficam em ferramentas separadas, e nenhuma delas é sua de verdade.",
  },
  {
    icon: HandCoins,
    title: "A margem não fica com você",
    text: "Você movimenta volume, mas não define taxa sobre cada transação nem constrói receita recorrente como operador de gateway.",
  },
  {
    icon: Shuffle,
    title: "Escala vira operação manual",
    text: "Afiliados, co-produtores e splits em planilha, WhatsApp e integrações improvisadas: erro e retrabalho à vista.",
  },
  {
    icon: Wallet,
    title: "Caixa sem previsibilidade",
    text: "Saques lentos, regras que mudam e dinheiro que demora para cair travam o crescimento quando o volume aumenta.",
  },
] as const;

const ProblemSection = () => {
  return (
    <section className="relative overflow-x-hidden py-24">
      <div className="landing-container min-w-0">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
            O mercado de infoprodutos não para de crescer.
            <span className="text-text-secondary"> Quem fica para trás é quem não tem gateway próprio.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
            Montar uma operação séria de pagamentos exige mais do que um checkout bonito. Exige processar transações,
            cobrar taxas, pagar parceiros e sacar com controle: tudo na mesma plataforma, com a sua marca e as suas
            regras.
          </p>

          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Sem isso, você continua dependendo de terceiros: paga para operar, não participa da margem de cada venda e
            perde velocidade cada vez que tenta escalar sellers, afiliados ou co-produtores.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pains.map((item) => (
              <article
                key={item.title}
                className="glass-card group rounded-xl p-5 transition-colors hover:border-primary/20"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <item.icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-primary/15 bg-primary/[0.04] px-6 py-5">
            <p className="text-center text-sm leading-relaxed text-foreground md:text-base">
              <span className="font-semibold">Resumindo:</span> enquanto você aluga infraestrutura, outro define taxas,
              prazos e limites. Quem tem gateway próprio processa, lucra e escala no mesmo lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
