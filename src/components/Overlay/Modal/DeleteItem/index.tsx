import { ReactNode, useState } from "react";

import { Button } from "@/components/Form";
import { BaseModal, BaseModalAction, BaseModalCancel } from "..";

import { ModalActions } from "./styles";

interface DeleteItemModalProps {
  children: ReactNode;
  id: number;
}

export function DeleteItemModal({ children, id }: DeleteItemModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <BaseModal
      title="Are you sure you want to delete this item?"
      trigger={children}
      isOpen={isModalOpen}
      onOpenChange={setIsModalOpen}
    >
      <ModalActions>
        <BaseModalCancel asChild>
          <Button variant="outlined" color="black" type="button">
            Cancel
          </Button>
        </BaseModalCancel>
        <BaseModalAction asChild>
          <Button color="danger">Delete</Button>
        </BaseModalAction>
      </ModalActions>
    </BaseModal>
  );
}
