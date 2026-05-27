import {
  CheckCircle2,
  Database,
  RefreshCw,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { landingConfig } from "@/config/landing";

const stackItems = [
  {
    icon: Server,
    title: "Laravel + Vue",
    desc: "Backend em Laravel com frontend Vue: stack madura para APIs, painéis e fluxos financeiros com manutenção previsível.",
    tags: ["Laravel", "Vue"],
  },
  {
    icon: Database,
    title: "PostgreSQL",
    desc: "Banco relacional de alta concorrência para picos de transação, relatórios e consistência em operações de volume.",
    tags: ["PostgreSQL"],
  },
  {
    icon: Zap,
    title: "Redis",
    desc: "Cache, filas e processamento assíncrono para webhooks, notificações e rotinas críticas sem travar o checkout.",
    tags: ["Redis"],
  },
  {
    icon: RefreshCw,
    title: "Reconciliação PIX automática",
    desc: "Conferência automática entre cobranças, confirmações e saldo, reduzindo divergência manual e retrabalho operacional.",
    tags: ["PIX"],
  },
] as const;

const securityPoints = [
  "Plataforma submetida a testes de penetração (pentest) por especialistas",
  "Validação de fluxos sensíveis antes de ir para produção",
  "Autenticação, permissões e segregação de dados com boas práticas",
  "Criptografia e proteção de credenciais em pontos críticos",
  "Monitoramento e endurecimento contínuo da infraestrutura",
] as const;

const StackSecuritySection = () => {
  return (
    <section id="stack-seguranca" className="relative overflow-hidden bg-neutral-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(95_90%_42%/0.08),transparent_60%)]" />

      <div className="landing-container relative min-w-0">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#c2ee63]">Stack e segurança</p>
          <h2 className="text-balance text-3xl font-bold leading-tight text-white md:text-4xl">
            Infraestrutura de pagamentos com base sólida e segurança validada
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-sm text-slate-400 md:text-base">
            O {landingConfig.productName} não é um template genérico: é uma stack pensada para gateway, com camadas
            testadas para operar dinheiro com confiança.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl min-w-0 gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="order-2 grid min-w-0 gap-4 sm:grid-cols-2 lg:order-1 lg:col-span-3">
            {stackItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#4bd904]/25 hover:bg-white/[0.05]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#c2ee63]/20 to-[#4bd904]/15">
                  <item.icon className="h-5 w-5 text-[#c2ee63]" aria-hidden />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">{item.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="order-1 min-w-0 lg:order-2 lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-2xl border border-[#4bd904]/25 bg-gradient-to-br from-[#4bd904]/10 via-white/[0.04] to-transparent p-6 md:p-8">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#4bd904]/15 blur-3xl" />

              <div className="relative">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4bd904]/40 bg-[#4bd904]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#c2ee63]">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                  Testado e aprovado
                </div>

                <h3 className="mb-3 text-2xl font-bold leading-tight text-white md:text-[1.65rem]">
                  Segurança em primeiro lugar
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300 md:text-base">
                  A plataforma passou por{" "}
                  <span className="font-medium text-white">testes de penetração (pentest)</span> e revisões de
                  segurança. Não vendemos promessa vazia: a base foi validada para suportar gateway, checkout e API em
                  ambiente real.
                </p>

                <ul className="space-y-3">
                  {securityPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4bd904]" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-500">
                  Operações financeiras exigem disciplina técnica. Você recebe uma stack já endurecida para começar com
                  padrão profissional, não um MVP frágil montado às pressas.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default StackSecuritySection;
