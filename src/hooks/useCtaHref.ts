import { useLocation } from "react-router-dom";
import { landingConfig } from "@/config/landing";
import { appendTrackingParams } from "@/lib/appendTrackingParams";

export function useCtaHref() {
  const location = useLocation();
  return appendTrackingParams(landingConfig.checkoutUrl, location.search);
}
