import {
  CreditCard,
  Globe,
  Users,
  Code,
  Percent,
  Smartphone,
  UserPlus,
  Shield,
  BarChart3,
  Zap,
  Layers,
  Banknote,
} from "lucide-react";

const features = [
  { icon: CreditCard, title: "Gateway completo", desc: "Processe pagamentos e defina taxas sobre transações de infoprodutores" },
  { icon: Percent, title: "Taxas e margem", desc: "Configure regras de cobrança e maximize o lucro por transação" },
  { icon: Banknote, title: "Saques automáticos", desc: "Fluxo de caixa previsível sem depender de saques manuais" },
  { icon: Layers, title: "Infoprodutos", desc: "Checkout, entregáveis e área de membros integrados" },
  { icon: UserPlus, title: "Afiliados", desc: "Comissões, links e rastreamento nativos na plataforma" },
  { icon: Users, title: "Co-produtores", desc: "Splits e parcerias sem planilhas ou integrações paralelas" },
  { icon: Globe, title: "Multi-moeda e idioma", desc: "Venda no Brasil e internacionalmente com conversão automática" },
  { icon: BarChart3, title: "Pixels e tráfego", desc: "Meta, TikTok e Google para rastreamento e otimização" },
  { icon: Code, title: "API de pagamentos", desc: "Integre apps externos ao seu gateway com uma única API" },
  { icon: Zap, title: "Webhooks", desc: "Conecte automações, CRMs e qualquer serviço externo" },
  { icon: Smartphone, title: "App PWA", desc: "Notificações de vendas aprovadas e PIX em tempo real" },
  { icon: Shield, title: "Gestão de equipe", desc: "Perfis, permissões e controle operacional por área" },
];

const FeaturesGrid = () => {
  return (
    <section className="py-24">
      <div className="landing-container min-w-0">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">Funcionalidades</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Tudo que uma operação de gateway precisa.
              <br className="hidden md:block" />
              <span className="text-text-secondary">Em uma única plataforma.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card rounded-lg p-6 group hover:border-primary/15 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
