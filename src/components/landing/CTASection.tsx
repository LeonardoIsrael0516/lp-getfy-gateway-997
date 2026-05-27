import { ArrowRight, BadgeCheck, Headphones, LockKeyhole, ShieldCheck, Wrench } from "lucide-react";
import plataformaImage from "@/assets/plataforma.png";
import BrandLogo from "@/components/landing/BrandLogo";
import PurchaseCtaButton from "@/components/landing/PurchaseCtaButton";
import { landingConfig } from "@/config/landing";

type CTASectionProps = {
  showIntro?: boolean;
};

const CTASection = ({ showIntro = true }: CTASectionProps) => {
  return (
    <section className="overflow-x-hidden py-20 bg-slate-100" id="comprar-getfy-gateway">
      <div className="landing-container min-w-0">
        {showIntro && (
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Infraestrutura de pagamentos no nível que sua operação exige
            </h2>
            <p className="mt-4 text-lg md:text-xl font-semibold text-foreground text-balance">
              Gateway completo, instalação profissional e suporte, sem depender de plataforma de terceiros.
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-600 text-balance">
              Acesso ao {landingConfig.productName} com implementação feita por nossa equipe e 3 meses de suporte
              dedicado.
            </p>
          </div>
        )}

        <div className="mx-auto w-full min-w-0 max-w-5xl rounded-2xl border border-slate-200 bg-[#f8f8f8] p-5 md:p-8">
          <div className="grid min-w-0 grid-cols-1 items-center gap-6 lg:grid-cols-2">
            <div className="order-2 min-w-0 lg:order-1">
              <div className="mx-auto w-full min-w-0 max-w-md overflow-hidden">
                <img
                  src={plataformaImage}
                  alt={`Plataforma ${landingConfig.productName}`}
                  className="mx-auto h-auto w-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="order-1 min-w-0 text-center lg:order-2">
              <div className="mb-5 flex justify-center">
                <BrandLogo size="md" className="mx-auto object-center" />
              </div>

              {landingConfig.compareAtPrice && (
                <p className="text-2xl text-slate-700 mb-1">
                  de <span className="line-through">{landingConfig.compareAtPrice}</span> por:
                </p>
              )}
              <p className="text-5xl md:text-6xl font-extrabold tracking-tight gradient-text mb-2">
                R$ {landingConfig.priceFormatted}
              </p>
              <p className="text-sm font-semibold text-slate-700 mb-4">{landingConfig.priceLabel}</p>

              <ul className="mb-6 space-y-2 text-left text-sm text-slate-600 max-w-[280px] mx-auto">
                <li className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 shrink-0 text-primary" />
                  Instalação profissional inclusa
                </li>
                <li className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 shrink-0 text-primary" />
                  Suporte por 3 meses
                </li>
              </ul>

              <PurchaseCtaButton
                size="lg"
                variant="hero"
                className="w-full max-w-[320px] whitespace-normal text-balance px-6"
              >
                Quero comprar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </PurchaseCtaButton>

              <div className="my-5 h-px w-full bg-slate-300" />

              <div className="flex max-w-full flex-wrap items-center justify-center gap-2 text-[11px] text-slate-600">
                <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-slate-300 bg-white px-2.5 py-1 sm:px-3">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  Compra segura
                </span>
                <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-slate-300 bg-white px-2.5 py-1 sm:px-3">
                  <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-primary" />
                  Satisfação garantida
                </span>
                <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-slate-300 bg-white px-2.5 py-1 sm:px-3">
                  <LockKeyhole className="h-3.5 w-3.5 shrink-0 text-violet-600" />
                  Privacidade protegida
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
