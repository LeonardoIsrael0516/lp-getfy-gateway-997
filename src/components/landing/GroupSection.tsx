import { BarChart3, MessageCircle, Rocket, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingConfig } from "@/config/landing";

const pillars = [
  {
    icon: MessageCircle,
    label: "Troca de experiências",
  },
  {
    icon: Rocket,
    label: "Networking entre CEOs",
  },
  {
    icon: BarChart3,
    label: "Conteúdos e insights exclusivos",
  },
] as const;

const GroupSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${landingConfig.assets.heroBackground})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[2px]" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/75"
        aria-hidden
      />

      <div className="landing-container relative z-10 min-w-0">
        <div className="mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center px-1 text-center">
          <div className="mb-6 text-center" aria-label={landingConfig.productName}>
            <p className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              get<span className="text-[#4bd904]">fy</span>
            </p>
            <p className="mt-1 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:tracking-[0.35em] md:text-xs">
              <span className="h-px w-8 bg-[#4bd904]/70" aria-hidden />
              gateway
              <span className="h-px w-8 bg-[#4bd904]/70" aria-hidden />
            </p>
          </div>

          <h2 className="relative px-2 text-4xl font-extrabold tracking-tight text-slate-800 md:text-5xl lg:text-6xl">
            <span>TEM </span>
            <span className="relative inline-block pr-6 text-[#4bd904] md:pr-8">
              GRUPO
              <Sparkles
                className="absolute -right-1 -top-2 h-5 w-5 text-[#4bd904] md:-right-2 md:h-6 md:w-6"
                aria-hidden
              />
            </span>
          </h2>

          <div className="mt-10 w-full min-w-0 max-w-2xl rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_28px_80px_-24px_rgba(15,23,42,0.28)] sm:p-6 md:p-8">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#c2ee63]/25 ring-4 ring-[#c2ee63]/15">
                <Users className="h-8 w-8 text-[#4bd904]" strokeWidth={2.25} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-600 md:text-base">Participe do nosso grupo:</p>
                <p className="mt-1 text-xl font-bold leading-tight text-slate-900 md:text-2xl">
                  CEOs do <span className="text-[#4bd904]">{landingConfig.productName}</span>
                </p>
              </div>
            </div>

            <div className="my-6 h-px w-full bg-slate-200" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
              {pillars.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex flex-col items-center gap-3 px-2 text-center sm:px-3 ${
                    index > 0 ? "sm:border-l sm:border-slate-200" : ""
                  }`}
                >
                  <item.icon className="h-7 w-7 text-[#4bd904]" strokeWidth={2} aria-hidden />
                  <p className="text-sm font-semibold leading-snug text-slate-800">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-8 h-auto max-w-full rounded-full bg-slate-900 px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-white shadow-lg hover:bg-slate-800 sm:px-8 sm:text-sm"
          >
            <a href="#incluso-premium">
              Conecte-se. Compartilhe. <span className="text-[#c2ee63]">Cresça.</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GroupSection;
