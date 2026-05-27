import { useState } from "react";
import { MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl, landingConfig } from "@/config/landing";

const videoId = landingConfig.youtubeVideoId;
const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

const FeaturesShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,hsl(95_90%_42%/0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="landing-container relative min-w-0">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Funcionalidades</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            O que a plataforma entrega, em destaque
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-sm text-muted-foreground md:text-base">
            Um vislumbre da plataforma: gateway, checkout, infoprodutos e gestão em um só lugar.
          </p>
        </div>

        <div
          className={cn(
            "relative mx-auto w-full min-w-0 max-w-4xl overflow-hidden rounded-2xl p-1 sm:rounded-[1.75rem] md:rounded-[2rem]",
            "bg-gradient-to-br from-[#c2ee63]/40 via-[#4bd904]/25 to-[#c2ee63]/10",
            "shadow-[0_32px_100px_-28px_hsl(95_90%_42%/0.45)]",
          )}
        >
          <div
            className={cn(
              "overflow-hidden rounded-[1.35rem] md:rounded-[1.65rem]",
              "border border-white/10 bg-zinc-950 ring-1 ring-black/50",
            )}
          >
            <div className="relative aspect-video w-full">
              {isPlaying ? (
                <iframe
                  src={embedUrl}
                  title={`Apresentação ${landingConfig.productName}`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="group absolute inset-0 flex w-full items-center justify-center"
                  aria-label="Reproduzir vídeo de apresentação da plataforma"
                >
                  <img
                    src={thumbnailUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/25 to-zinc-950/40" />

                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#4bd904] text-zinc-950 shadow-[0_0_48px_hsl(95_90%_42%/0.55)] transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                    <Play className="ml-1 h-7 w-7 fill-current md:h-9 md:w-9" aria-hidden />
                  </span>

                  <span className="absolute bottom-3 left-3 right-3 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-center text-[10px] font-medium text-white backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-auto sm:text-xs md:bottom-6 md:left-6">
                    Assistir demonstração
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-lg flex-col items-center gap-4">
          {landingConfig.showDemoCta && (
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto px-8">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Solicitar demonstração
              </a>
            </Button>
          )}

          <p className="text-center text-xs text-muted-foreground">
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-primary hover:underline"
            >
              Abrir no YouTube
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcaseSection;
