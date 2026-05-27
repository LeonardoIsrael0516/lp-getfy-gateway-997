import { useMemo, useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const videoId = "7hQi-gTPknU";
  const [isPlaying, setIsPlaying] = useState(false);

  const posterUrl = useMemo(() => `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, [videoId]);
  const embedUrl = useMemo(
    () => `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
    [videoId],
  );

  return (
    <section className="py-24 bg-neutral-950">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-border/50 glow-box bg-black">
            <div className="relative w-full aspect-video">
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={embedUrl}
                  title="Apresentação do Checkout Main"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 h-full w-full text-left"
                  aria-label="Ver apresentação"
                >
                  <img
                    src={posterUrl}
                    alt="Prévia da apresentação"
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <span className="glow-box-strong inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-white border border-primary/30 bg-black/55 backdrop-blur-sm hover:border-primary/45 transition-colors">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/20">
                        <Play className="h-4 w-4 text-primary" />
                      </span>
                      Ver apresentação…
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
