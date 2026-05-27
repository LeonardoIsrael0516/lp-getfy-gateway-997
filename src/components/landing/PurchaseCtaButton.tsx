import type { ComponentProps, ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, landingConfig } from "@/config/landing";

type PurchaseCtaButtonProps = ComponentProps<typeof Button> & {
  children: ReactNode;
};

const PurchaseCtaButton = ({ children, ...buttonProps }: PurchaseCtaButtonProps) => {
  const handleConfirm = () => {
    window.open(getWhatsAppUrl(landingConfig.whatsappPurchaseMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button {...buttonProps}>{children}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Você realmente está interessado em comprar?</AlertDialogTitle>
          <AlertDialogDescription>
            Ao confirmar, você será direcionado ao WhatsApp para falar com nossa equipe e dar sequência à aquisição do{" "}
            {landingConfig.productName} por R$ {landingConfig.priceFormatted}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2 sm:gap-0">
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sim, quero comprar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PurchaseCtaButton;
