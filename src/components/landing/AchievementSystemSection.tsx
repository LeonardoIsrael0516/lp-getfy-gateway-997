import { Trophy } from "lucide-react";
import sistemaconquista from "@/assets/carrossel/sistemaconquista.png";
import { landingConfig } from "@/config/landing";

const AchievementSystemSection = () => {
  return (
    <section className="landing-section py-24">
      <div className="landing-container">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <div className="grid min-w-0 grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
            <div className="min-w-0">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Operação em escala</p>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Engajamento e visibilidade para{" "}
                <span className="text-text-secondary">times que movimentam volume</span>
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                Além de processar pagamentos, o {landingConfig.productName} oferece conquistas e marcos que acompanham
                a operação, útil para motivar equipe, sellers e parceiros em operações de alto giro.
              </p>
              <p className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Trophy className="h-4 w-4 text-primary" aria-hidden />
                </span>
                <span>
                  Metas, reconhecimento e progresso visível integrados à mesma experiência do seu gateway e checkout.
                </span>
              </p>
            </div>

            <div className="min-w-0">
              <div className="glass-card w-full min-w-0 overflow-hidden rounded-2xl border-primary/10 p-2 shadow-sm md:p-3">
                <img
                  src={sistemaconquista}
                  alt="Interface de conquistas e metas na plataforma"
                  className="block h-auto w-full max-w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSystemSection;
