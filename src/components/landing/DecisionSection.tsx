import { landingConfig } from "@/config/landing";

const optionOneItems = [
  "Continuar pagando taxas altas em plataformas de terceiros",
  "Esperar saques manuais ou lentos quando o volume cresce",
  "Não ter afiliados e co-produtores nativos na stack",
  "Perder margem e controle sobre cada transação processada",
] as const;

const optionTwoItems = [
  "Ter gateway, checkout e infoprodutos na sua operação",
  "Processar pagamentos e definir taxas com margem própria",
  "Saques automáticos e previsibilidade de caixa",
  "Instalação profissional, suporte 3 meses e grupo exclusivo",
] as const;

const DecisionSection = () => {
  return (
    <section className="py-24">
      <div className="landing-container min-w-0">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Agora, você tem duas opções:</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 md:p-7">
              <p className="text-lg md:text-xl font-bold text-rose-700">Opção 1</p>
              <h3 className="mt-2 text-xl md:text-2xl font-bold text-foreground">Continuar dependendo de terceiros</h3>

              <ul className="mt-6 space-y-3">
                {optionOneItems.map((item) => (
                  <li key={item} className="text-sm md:text-base text-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-7">
              <p className="text-lg md:text-xl font-bold text-emerald-700">Opção 2</p>
              <h3 className="mt-2 text-xl md:text-2xl font-bold text-foreground">
                Operar com o {landingConfig.productName}
              </h3>

              <ul className="mt-6 space-y-3">
                {optionTwoItems.map((item) => (
                  <li key={item} className="text-sm md:text-base text-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionSection;
