import heroBackground from "@/assets/hero.png";
import logoDark from "@/assets/logo-dark.png";
import logoWhite from "@/assets/logo-white.png";

/**
 * Configuração central da landing Getfy Gateway.
 * Atualize checkoutUrl quando o link de compra estiver disponível.
 */
export const landingConfig = {
  productName: "Getfy Gateway",
  tagline: "Gateway, checkout e infoprodutos sob seu controle",
  metaDescription:
    "Plataforma completa de gateway e infoprodutos: processamento de pagamentos, taxas, saques automáticos, afiliados e co-produtores. Instalação profissional inclusa.",

  /** TODO: substituir pelo link real do checkout Getfy */
  checkoutUrl: "#comprar-getfy-gateway",

  price: 997,
  priceFormatted: "997,00",
  priceLabel: "Pagamento único",
  compareAtPrice: "3.000,00",
  scarcityLabel: "Poucas vagas neste lote",
  scarcityHint: "Implementação profissional com vagas limitadas por mês.",

  /** null = sem pixel; string = ID do Meta Pixel */
  metaPixelId: "924183217200637" as string | null,

  /** Vídeo de apresentação (YouTube) */
  youtubeVideoId: "IKdOMhEr8VQ",
  /** CTA WhatsApp "Solicitar demonstração" na seção de vídeo */
  showDemoCta: false,

  whatsappNumber: "5591985134037",
  whatsappDemoMessage: "Olá! Gostaria de solicitar uma demonstração do Getfy Gateway.",
  whatsappPurchaseMessage:
    "Olá! Tenho interesse em adquirir o Getfy Gateway e gostaria de mais informações para finalizar a compra.",

  assets: {
    heroBackground,
    logo: logoDark,
    logoLight: logoWhite,
  },
} as const;

export type LandingConfig = typeof landingConfig;

export function getWhatsAppUrl(message = landingConfig.whatsappDemoMessage) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${landingConfig.whatsappNumber}?${params.toString()}`;
}
