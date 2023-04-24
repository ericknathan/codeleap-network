import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { PostModel } from "@/@types/models";

import { Button, TextField } from "@/components/Form";
import { BaseModal, BaseModalAction, BaseModalCancel } from "..";

import { editPostRequest } from "@/services/http/requests/post";
import { EditPostSchema, editPostSchema } from "@/services/validation/schemas";
import { EditItemForm, ModalActions } from "./styles";

interface EditItemModalProps {
  children: ReactNode;
  post: PostModel;
}

export function EditItemModal({ children, post }: EditItemModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, title, content } = post;

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<EditPostSchema>({
    resolver: zodResolver(editPostSchema),
    defaultValues: {
      title,
      content,
    },
  });

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: editPostRequest,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["posts"] });
      setIsModalOpen(false);
    },
  });

  const handleEditItem: SubmitHandler<EditPostSchema> = (data) => {
    console.log(data);
    mutate({
      ...data,
      id,
    });
  };

  return (
    <BaseModal
      title="Edit item"
      trigger={children}
      isOpen={isModalOpen}
      onOpenChange={setIsModalOpen}
    >
      <EditItemForm>
        <TextField.Fieldset>
          <TextField.Label htmlFor="title">Title</TextField.Label>
          <TextField.Input
            id="title"
            placeholder="Hello world"
            autoFocus
            {...register("title")}
          />
        </TextField.Fieldset>
        <TextField.Fieldset>
          <TextField.Label htmlFor="content">Content</TextField.Label>
          <TextField.TextArea
            id="content"
            placeholder="Hello world"
            {...register("content")}
          />
        </TextField.Fieldset>
        <ModalActions>
          <BaseModalCancel asChild>
            <Button
              variant="outlined"
              color="black"
              type="button"
              onClick={() => reset({ title, content })}
            >
              Cancel
            </Button>
          </BaseModalCancel>
          <BaseModalAction asChild>
            <Button
              color="success"
              disabled={!isValid || isLoading}
              onClick={handleSubmit(handleEditItem)}
            >
              Save
            </Button>
          </BaseModalAction>
        </ModalActions>
      </EditItemForm>
    </BaseModal>
  );
}
