import { landingConfig } from "@/config/landing";
import { cn } from "@/lib/utils";

type OfferScarcityNoteProps = {
  className?: string;
  variant?: "light" | "dark";
};

const OfferScarcityNote = ({ className, variant = "light" }: OfferScarcityNoteProps) => {
  if (!landingConfig.scarcityLabel) return null;

  return (
    <p
      className={cn(
        "inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        variant === "dark"
          ? "border-[#c2ee63]/25 bg-[#c2ee63]/10 text-[#c2ee63]"
          : "border-amber-200 bg-amber-50 text-amber-900",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-40" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
      </span>
      {landingConfig.scarcityLabel}
    </p>
  );
};

export default OfferScarcityNote;
