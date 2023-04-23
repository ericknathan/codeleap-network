import { ReactNode, useState } from "react";

import { PostModel } from "@/@types/models";

import { Button, TextField } from "@/components/Form";
import { BaseModal, BaseModalAction, BaseModalCancel } from "..";

import { EditItemForm, ModalActions } from "./styles";

interface EditItemModalProps {
  children: ReactNode;
  post: PostModel;
}

export function EditItemModal({ children, post }: EditItemModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, content } = post;

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
            name="title"
            placeholder="Hello world"
            defaultValue={title}
            autoFocus
          />
        </TextField.Fieldset>
        <TextField.Fieldset>
          <TextField.Label htmlFor="content">Content</TextField.Label>
          <TextField.TextArea
            id="content"
            name="content"
            placeholder="Hello world"
            defaultValue={content}
          />
        </TextField.Fieldset>
        <ModalActions>
          <BaseModalCancel asChild>
            <Button variant="outlined" color="black" type="button">
              Cancel
            </Button>
          </BaseModalCancel>
          <BaseModalAction asChild>
            <Button color="success">Save</Button>
          </BaseModalAction>
        </ModalActions>
      </EditItemForm>
    </BaseModal>
  );
}
