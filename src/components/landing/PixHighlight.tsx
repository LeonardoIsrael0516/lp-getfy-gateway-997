const PixHighlight = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/[0.02]" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">Destaque</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
            <span className="gradient-text">0%</span> no PIX
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mt-4">
            No seu gateway, a margem fica com você: processe PIX com estrutura própria, sem camadas extras de
            intermediário comendo o lucro de cada transação dos seus infoprodutores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PixHighlight;
