import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ModalContent, ModalOverlay } from "./styles";

interface ModalProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;

  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BaseModal({
  trigger,
  children,
  title,
  isOpen,
  onOpenChange,
}: ModalProps) {
  return (
    <AlertDialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>

      <AlertDialog.Portal>
        <ModalOverlay onClick={() => onOpenChange(false)} />
        <ModalContent>
          <AlertDialog.Title>{title}</AlertDialog.Title>
          {children}
        </ModalContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export const BaseModalCancel = AlertDialog.Cancel;
export const BaseModalAction = AlertDialog.Action;
