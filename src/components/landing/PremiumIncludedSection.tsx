import {
  GraduationCap,
  Handshake,
  Headphones,
  TrendingUp,
  UserPlus,
  Users,
  Wrench,
} from "lucide-react";
import { landingConfig } from "@/config/landing";

const benefits = [
  {
    icon: Wrench,
    title: "Instalação profissional",
    desc: "Nossa equipe configura e entrega a plataforma pronta para operar, sem gambiarra, sem curva desnecessária.",
  },
  {
    icon: Headphones,
    title: "Suporte por 3 meses",
    desc: "Acompanhamento dedicado na fase crítica: dúvidas, ajustes e evolução da sua operação com quem entende de gateway.",
  },
  {
    icon: Users,
    title: "Grupo de donos de gateways",
    desc: "Networking exclusivo com quem já movimenta volume, troca experiências e antecipa tendências do mercado.",
  },
  {
    icon: TrendingUp,
    title: "Escala de alto volume",
    desc: "Estrutura pensada para operações que buscam movimentar milhões por semana, com processamento e saques automáticos.",
  },
  {
    icon: GraduationCap,
    title: "Futuros treinamentos",
    desc: "Acesso contínuo a novos conteúdos e atualizações conforme a plataforma e o mercado evoluem.",
  },
  {
    icon: UserPlus,
    title: "Afiliados e co-produtores",
    desc: "Split nativo, comissões e parcerias integradas: tudo dentro da mesma infraestrutura de pagamentos.",
  },
] as const;

const PremiumIncludedSection = () => {
  return (
    <section id="incluso-premium" className="py-24 bg-neutral-950">
      <div className="landing-container min-w-0">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c2ee63] mb-4">Oferta premium</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance leading-tight">
            Tudo que você precisa para lançar um gateway de verdade, incluso no {landingConfig.productName}
          </h2>
          <p className="mt-4 text-slate-400 text-balance md:text-lg">
            Não é um script para instalar sozinho. É infraestrutura + implementação + suporte para você operar com
            padrão profissional desde o dia um.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#4bd904]/30 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#c2ee63]/20 to-[#4bd904]/15">
                <item.icon className="h-5 w-5 text-[#c2ee63]" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4bd904]/30 bg-[#4bd904]/10 px-5 py-2.5 text-sm font-semibold text-[#c2ee63]">
            <Handshake className="h-4 w-4" aria-hidden />
            Investimento único de R$ {landingConfig.priceFormatted}, com acesso completo à plataforma
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumIncludedSection;
