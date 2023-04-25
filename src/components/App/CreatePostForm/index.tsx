import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { Button, TextField } from "@/components/Form";
import { Heading } from "@/components/Text";

import { RootState } from "@/redux/store";
import { createPostRequest } from "@/services/http/requests/post";
import {
  CreatePostSchema,
  createPostSchema,
} from "@/services/validation/schemas";

import { FormContainer } from "./styles";

export function CreatePostForm() {
  const auth = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset
  } = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
  });

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createPostRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSubmitForm: SubmitHandler<CreatePostSchema> = (data) => {
    const { title, content } = data;

    mutate({
      username: auth.username,
      title,
      content,
    });

    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <Heading as="h2">What’s on your mind?</Heading>
      <TextField.Fieldset>
        <TextField.Label htmlFor="title">Title</TextField.Label>
        <TextField.Input
          id="title"
          type="text"
          placeholder="Hello world"
          {...register("title")}
        />
      </TextField.Fieldset>
      <TextField.Fieldset>
        <TextField.Label htmlFor="content">Content</TextField.Label>
        <TextField.TextArea
          id="content"
          placeholder="Content here"
          {...register("content")}
        />
      </TextField.Fieldset>
      <Button align="end" disabled={!isValid || isLoading}>
        Create
      </Button>
    </FormContainer>
  );
}
