import PurchaseCtaButton from "@/components/landing/PurchaseCtaButton";
import BrandLogo from "@/components/landing/BrandLogo";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="landing-container flex min-w-0 items-center justify-between gap-2 h-14 md:h-16">
        <BrandLogo variant="onDark" size="sm" className="shrink md:h-8 md:max-w-[140px]" />
        <PurchaseCtaButton variant="hero" size="sm" className="shrink-0 whitespace-normal px-3 text-xs sm:px-4 sm:text-sm">
          Adquirir agora
        </PurchaseCtaButton>
      </div>
    </nav>
  );
};

export default Navbar;
