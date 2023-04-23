import { Button, TextField } from "@/components/Form";
import { Heading } from "@/components/Text";
import { FormContainer } from "./styles";

export function CreatePostForm() {
  return (
    <FormContainer>
      <Heading as="h2">What’s on your mind?</Heading>
      <TextField.Fieldset>
        <TextField.Label htmlFor="title">Title</TextField.Label>
        <TextField.Input
          id="title"
          name="title"
          type="text"
          placeholder="Hello world"
        />
      </TextField.Fieldset>
      <TextField.Fieldset>
        <TextField.Label htmlFor="content">Content</TextField.Label>
        <TextField.TextArea
          id="content"
          name="content"
          placeholder="Content here"
        />
      </TextField.Fieldset>
      <Button align="end">Create</Button>
    </FormContainer>
  );
}
