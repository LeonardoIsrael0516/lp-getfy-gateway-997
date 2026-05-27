import { FileCheck, Rocket, Settings, Users } from "lucide-react";
import { landingConfig } from "@/config/landing";

const steps = [
  {
    icon: FileCheck,
    title: "Passo 01",
    line1: "Contratação e alinhamento da operação",
    line2: "Definimos gateways, taxas e fluxo de saques",
  },
  {
    icon: Users,
    title: "Passo 02",
    line1: "Instalação profissional pela nossa equipe",
    line2: "Ambiente configurado e validado por especialistas",
  },
  {
    icon: Settings,
    title: "Passo 03",
    line1: "Configuração de checkout, infoprodutos e splits",
    line2: "Afiliados, co-produtores e integrações ativas",
  },
  {
    icon: Rocket,
    title: "Passo 04",
    line1: "Go-live com suporte por 3 meses",
    line2: "Sua operação rodando com acompanhamento dedicado",
  },
] as const;

const ModulesSection = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="landing-container min-w-0">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight text-balance">
              Como funciona a implementação do {landingConfig.productName}
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/80 text-balance">
              Você não instala sozinho. Nossa equipe entrega a plataforma{" "}
              <span className="font-semibold text-white">configurada</span>, com{" "}
              <span className="font-semibold text-white">treinamento</span> e{" "}
              <span className="font-semibold text-white">suporte contínuo</span> na fase de lançamento.
            </p>
            <p className="mt-6 inline-flex items-center rounded-full border border-[#4bd904]/30 bg-[#4bd904]/15 px-4 py-2 text-sm font-semibold text-[#c2ee63]">
              Implementação profissional, do contrato ao go-live
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl border border-white/15 bg-white px-5 py-6 text-center shadow-[0_18px_45px_-28px_rgba(0,0,0,0.45)]"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm font-medium text-foreground leading-snug">{step.line1}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-snug">{step.line2}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
