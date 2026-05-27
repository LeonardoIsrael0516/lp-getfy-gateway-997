import { ArrowRight, Headphones, Rocket, TrendingUp, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import PurchaseCtaButton from "@/components/landing/PurchaseCtaButton";
import { landingConfig } from "@/config/landing";

const highlights = [
  { icon: Wrench, text: "Instalação profissional pela nossa equipe" },
  { icon: Headphones, text: "Suporte dedicado por 3 meses" },
  { icon: Users, text: "Grupo exclusivo com donos de gateways" },
  { icon: Rocket, text: "Estrutura para operações de alto volume" },
] as const;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat lg:bg-[center_40%]"
        style={{ backgroundImage: `url(${landingConfig.assets.heroBackground})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/50 to-slate-950/10 lg:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_50%,hsl(95_90%_42%/0.1),transparent_50%)]"
        aria-hidden
      />

      <div className="landing-container relative z-10 min-w-0 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="min-w-0 max-w-xl text-left">
            <p className="fade-in-up mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#c2ee63] sm:tracking-[0.2em] md:text-sm">
              Plataforma completa de pagamentos
            </p>

            <h1 className="fade-in-up fade-in-up-delay-1 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Seu <span className="gradient-text">gateway</span>, checkout e infoprodutos, com processamento, taxas e{" "}
              <span className="gradient-text">saques automáticos</span> sob seu controle.
            </h1>

            <p className="fade-in-up fade-in-up-delay-2 mt-5 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
              Infraestrutura profissional para cobrar taxas sobre transações de infoprodutores, escalar afiliados e
              co-produtores, e operar com previsibilidade de caixa.
            </p>

            <div className="fade-in-up fade-in-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PurchaseCtaButton variant="hero" size="lg" className="w-full whitespace-normal sm:w-auto">
                Quero o Getfy Gateway
                <ArrowRight className="ml-2 h-5 w-5" />
              </PurchaseCtaButton>
              <Button
                asChild
                variant="hero-outline"
                size="lg"
                className="w-full border-white/25 text-white hover:bg-white/10 hover:border-[#c2ee63]/50 sm:w-auto"
              >
                <a href="#incluso-premium">Ver o que está incluso</a>
              </Button>
            </div>

            <ul className="fade-in-up fade-in-up-delay-4 mt-10 grid gap-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-center gap-2.5 text-left">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4bd904]/15">
                    <item.icon className="h-3.5 w-3.5 text-[#c2ee63]" aria-hidden />
                  </span>
                  <span className="text-xs font-medium leading-snug text-slate-300 sm:text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in-up fade-in-up-delay-3 hidden lg:block">
            <div className="ml-auto max-w-sm space-y-4">
              <div className="rounded-2xl border border-white/15 bg-slate-950/85 p-6 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.65)] backdrop-blur-xl ring-1 ring-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c2ee63]">Investimento</p>
                <p className="mt-2 text-4xl font-extrabold tracking-tight text-white">
                  R$ {landingConfig.priceFormatted}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{landingConfig.priceLabel}</p>
                <div className="mt-4 h-px bg-white/15" />
                <ul className="mt-4 space-y-2.5 text-sm font-medium text-slate-100">
                  <li className="flex items-center gap-2.5">
                    <Wrench className="h-4 w-4 shrink-0 text-[#c2ee63]" />
                    Instalação profissional inclusa
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Headphones className="h-4 w-4 shrink-0 text-[#c2ee63]" />
                    3 meses de suporte dedicado
                  </li>
                  <li className="flex items-center gap-2.5">
                    <TrendingUp className="h-4 w-4 shrink-0 text-[#c2ee63]" />
                    Estrutura para alto volume
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-[#4bd904]/35 bg-slate-950/80 px-5 py-4 shadow-lg backdrop-blur-md">
                <p className="text-sm font-medium leading-relaxed text-slate-100">
                  <span className="text-[#c2ee63]">Alto volume:</span> operações que buscam movimentar milhões por
                  semana começam com infraestrutura própria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
