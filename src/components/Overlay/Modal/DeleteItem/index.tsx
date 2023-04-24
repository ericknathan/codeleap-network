import { ReactNode, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/Form";
import { BaseModal, BaseModalAction, BaseModalCancel } from "..";

import { deletePostRequest } from "@/services/http/requests/post";
import { ModalActions } from "./styles";

interface DeleteItemModalProps {
  children: ReactNode;
  id: number;
}

export function DeleteItemModal({ children, id }: DeleteItemModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: deletePostRequest,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["posts"] });
      setIsModalOpen(false);
    },
  });

  const handleDeleteItem = () => {
    mutate({ id });
  };

  return (
    <BaseModal
      title="Are you sure you want to delete this item?"
      trigger={children}
      isOpen={isModalOpen}
      onOpenChange={setIsModalOpen}
    >
      <ModalActions>
        <BaseModalCancel asChild>
          <Button
            variant="outlined"
            color="black"
            type="button"
            disabled={isLoading}
          >
            Cancel
          </Button>
        </BaseModalCancel>
        <BaseModalAction asChild>
          <Button
            color="danger"
            onClick={handleDeleteItem}
            disabled={isLoading}
          >
            Delete
          </Button>
        </BaseModalAction>
      </ModalActions>
    </BaseModal>
  );
}
