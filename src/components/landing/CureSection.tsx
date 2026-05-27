import { Check } from "lucide-react";
import { ScreenshotsShowcase } from "@/components/landing/ScreenshotsSection";
import { landingConfig } from "@/config/landing";

const benefits = [
  "Gateway e checkout na sua operação",
  "Taxas sobre transações de infoprodutores",
  "Saques automáticos configuráveis",
  "Afiliados e co-produtores nativos",
] as const;

const CureSection = () => {
  return (
    <section className="landing-section py-24">
      <div className="mb-12">
        <div className="landing-container">
          <div className="rounded-2xl border border-primary/25 bg-neutral-950 px-5 py-4 shadow-[0_20px_60px_-35px_rgba(75,217,4,0.45)]">
            <p className="text-center text-base font-bold text-white md:text-2xl">
              É por isso que o {landingConfig.productName} existe.
            </p>
          </div>
        </div>
      </div>

      <div className="landing-container">
        <div className="mx-auto w-full min-w-0 max-w-5xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-foreground text-balance md:text-4xl">
            Pare de depender de plataforma alheia
            <br className="hidden md:block" />
            e opere com infraestrutura de pagamentos que é sua.
          </h2>

          <p className="mt-8 text-lg font-semibold text-text-secondary md:text-xl">Com o Getfy Gateway, você:</p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-left text-sm font-semibold leading-snug text-foreground md:text-base"
              >
                <Check className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <ScreenshotsShowcase />
        </div>
      </div>
    </section>
  );
};

export default CureSection;
