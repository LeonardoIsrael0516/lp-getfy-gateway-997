import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { landingConfig } from "@/config/landing";

const faqs = [
  {
    q: "A instalação é feita por vocês mesmo?",
    a: "Sim. A implementação profissional é feita pela nossa equipe: configuramos ambiente, gateways, taxas, checkout e fluxos essenciais para você ir ao ar com segurança.",
  },
  {
    q: "Como funciona o suporte de 3 meses?",
    a: "Você tem acompanhamento dedicado na fase de lançamento e escala: dúvidas técnicas, ajustes de operação e orientação para extrair o máximo da plataforma.",
  },
  {
    q: "Posso cobrar taxas sobre transações de infoprodutores?",
    a: "Sim. O Getfy Gateway foi pensado para operações que processam pagamentos e definem margem/taxa sobre o volume dos sellers da sua base.",
  },
  {
    q: "Os saques são automáticos?",
    a: "A plataforma suporta fluxos de saque automático configuráveis, para dar previsibilidade ao caixa da operação e dos seus clientes.",
  },
  {
    q: "Tem afiliados e co-produtores?",
    a: "Sim. Split, comissões e parcerias estão integrados, sem depender de ferramentas paralelas ou planilhas.",
  },
  {
    q: "O que é o grupo de donos de gateways?",
    a: "Comunidade exclusiva para networking, troca de experiências e acesso a quem já opera com volume, incluso na oferta.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="landing-container min-w-0">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">Dúvidas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Perguntas sobre o {landingConfig.productName}</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-lg px-6 border-none">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
