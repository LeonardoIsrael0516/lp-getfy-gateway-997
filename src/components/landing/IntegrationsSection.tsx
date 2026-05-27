const integrations = [
  { name: "UTMify", desc: "Trackeamento", src: "/integrations/utmify.jpg" },
  { name: "Spedy", desc: "Notas fiscais", src: "/integrations/spedy.png" },
  { name: "Webhook", desc: "Conecte com qualquer serviço", src: "/integrations/webhook.png" },
  { name: "Meta", desc: "Rastreamento e otimização", src: "/integrations/meta.avif" },
  { name: "Google", desc: "Tags e conversões", src: "/integrations/google.avif" },
  { name: "YouTube", desc: "Hospedagem de vídeo", src: "/integrations/youtube.png" },
  { name: "Vimeo", desc: "Hospedagem de vídeo", src: "/integrations/vimeo.png" },
  { name: "SMTP", desc: "Disparo de e-mails transacionais", src: "/integrations/SMTP.png" },
  { name: "Twilio SendGrid", desc: "Entrega de e-mails em escala", src: "/integrations/twillio-sendgrid.jpg" },
  { name: "n8n", desc: "Automações e fluxos", src: "/integrations/n8n.png" },
  { name: "Hostinger", desc: "E-mail transacional", src: "/integrations/hostinger.webp" },
  { name: "Evolution API", desc: "WhatsApp e mensagens", src: "/integrations/evolutionapi.jpg" },
  { name: "Cademi", desc: "Área de membros externa", src: "/integrations/cademi.png" },
  { name: "Scripts", desc: "Custom JS/Tags", src: "/integrations/script.avif" },
] as const;

const IntegrationsSection = () => {
  return (
    <section className="overflow-x-hidden py-24">
      <div className="landing-container min-w-0">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Integrações
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Seu gateway conectado ao
              <br className="hidden md:block" />
              <span className="text-text-secondary">ecossistema inteiro de vendas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((int) => (
              <div
                key={int.src}
                className="glass-card rounded-lg p-5 border border-transparent hover:border-primary/15 transition-all flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-background/40 border border-border/40 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={int.src}
                    alt={int.name}
                    className="h-full w-full object-contain rounded-md"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground mb-1 truncate">{int.name}</h3>
                  <p className="text-xs text-muted-foreground">{int.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
