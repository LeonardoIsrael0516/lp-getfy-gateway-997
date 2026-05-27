import { Check, X, Minus } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4 text-center">
            Comparativo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
            Você não troca de plataforma.
            <br />
            Você <span className="gradient-text">deixa de ser refém</span>.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Plataforma tradicional */}
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
                <h3 className="text-lg font-semibold text-muted-foreground">Plataforma tradicional</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Taxa por venda: ~4.9% + R$ 2,49",
                  "Taxa de antecipação / saque / split",
                  "Upgrade para desbloquear recursos",
                  "Dependência total da plataforma",
                  "Integrações limitadas ao plano",
                  "Intermediário entre você e o dinheiro",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Checkout Main */}
            <div className="relative rounded-xl p-8 border border-primary/20 bg-primary/[0.03]">
              <div className="absolute -top-3 right-6">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Recomendado
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold text-foreground">Checkout Main</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Taxa do gateway que você escolher",
                  "PIX com 0%",
                  "Controle total da operação",
                  "Integrações ilimitadas",
                  "Recebimento direto no seu gateway",
                  "Código fonte aberto (opensource)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
