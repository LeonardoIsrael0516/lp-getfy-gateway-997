import { CreditCard, LayoutGrid, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const showcases = [
  {
    icon: CreditCard,
    title: "Checkout",
    description: "PIX, cartão, boleto, tudo personalizado",
  },
  {
    icon: Smartphone,
    title: "App PWA",
    description: "Notificações de venda em tempo real",
  },
  {
    icon: LayoutGrid,
    title: "Área de Membros personalizável",
    description:
      "Experiência estilo streaming, com gamificação, comunidade, login personalizado e PWA",
    wide: true,
  },
] as const;

type ScreenshotsShowcaseProps = {
  className?: string;
  compact?: boolean;
};

export function ScreenshotsShowcase({ className, compact }: ScreenshotsShowcaseProps) {
  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5",
          compact ? "" : "mt-2",
        )}
      >
        {showcases.map((item) => (
          <article
            key={item.title}
            className={cn(
              "glass-card flex items-start gap-4 rounded-xl p-5 transition-colors hover:border-primary/15",
              item.wide && "md:col-span-2",
            )}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
