import { landingConfig } from "@/config/landing";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-6 w-auto max-w-[110px] object-contain object-left",
  md: "h-8 w-auto max-w-[140px] object-contain object-left",
  lg: "h-10 w-auto max-w-[180px] object-contain object-left",
} as const;

type BrandLogoProps = {
  className?: string;
  variant?: "default" | "onDark";
  size?: keyof typeof sizeClasses;
};

const BrandLogo = ({ className, variant = "default", size = "md" }: BrandLogoProps) => {
  const src =
    variant === "onDark" && landingConfig.assets.logoLight
      ? landingConfig.assets.logoLight
      : landingConfig.assets.logo;

  if (src) {
    return (
      <img
        src={src}
        alt={landingConfig.productName}
        className={cn(sizeClasses[size], className)}
      />
    );
  }

  return (
    <span
      className={cn(
        "font-bold tracking-tight",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        variant === "onDark" ? "text-white" : "text-foreground",
        className,
      )}
    >
      {landingConfig.productName}
    </span>
  );
};

export default BrandLogo;
