import { Check, X } from "lucide-react";

const ForWhoSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Para quem é - e para quem não é
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">
                Para você se
              </h3>
              <ul className="space-y-4">
                {[
                  "Quer controle total do checkout",
                  "Quer escolher gateways e integrações",
                  "Quer parar de depender de planos limitados",
                  "Quer stack pronta para escalar globalmente",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-xl p-8">
              <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                Não é para você se
              </h3>
              <ul className="space-y-4">
                {[
                  "Quer mais do mesmo e aceita pagar pedágio",
                  "Não quer ter controle da operação",
                  "Prefere que alguém decida por você",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
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

export default ForWhoSection;
