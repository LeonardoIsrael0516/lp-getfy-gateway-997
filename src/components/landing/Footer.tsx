import BrandLogo from "@/components/landing/BrandLogo";
import { landingConfig } from "@/config/landing";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="landing-container flex min-w-0 flex-col items-center justify-between gap-4 sm:flex-row">
        <BrandLogo size="sm" className="opacity-80" />
        <p className="text-xs text-muted-foreground text-center sm:text-right">
          {landingConfig.productName}. Todos os direitos reservados. {year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
