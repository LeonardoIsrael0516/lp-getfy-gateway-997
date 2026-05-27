import provaSocial1 from "@/assets/provasocial/1.png";
import provaSocial2 from "@/assets/provasocial/2.png";
import provaSocial3 from "@/assets/provasocial/3.png";
import provaSocial4 from "@/assets/provasocial/4.png";

const testimonials = [
  { src: provaSocial1, alt: "Depoimento de operador de gateway 1" },
  { src: provaSocial2, alt: "Depoimento de operador de gateway 2" },
  { src: provaSocial3, alt: "Depoimento de operador de gateway 3" },
  { src: provaSocial4, alt: "Depoimento de operador de gateway 4" },
] as const;

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-secondary/35 py-20">
      <div className="px-4 md:px-8">
        <div className="mx-auto w-full max-w-[1400px] rounded-3xl border border-border bg-secondary/30 px-5 py-10 md:px-8 md:py-12">
          <div className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
            <div className="mb-3 text-xl leading-none text-amber-400 md:text-2xl">★★★★★</div>
            <h2 className="text-xl font-bold leading-tight text-foreground text-balance md:text-3xl">
              Quem já opera com infraestrutura própria
              <br className="hidden md:block" />
              sabe a diferença de ter gateway no seu controle.
            </h2>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-end md:justify-center md:gap-5">
              {testimonials.map((item) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  className="h-auto w-full max-w-[320px] rounded-2xl object-contain md:h-[520px] md:w-auto md:max-w-none"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
