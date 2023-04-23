import { Button, TextField } from "@/components/Form";
import { Heading } from "@/components/Text";

import { Form, PageContainer } from "./styles";

export function SignIn() {
  return (
    <PageContainer>
      <Form action="">
        <Heading as="h1">Welcome to CodeLeap network!</Heading>
        <TextField.Fieldset>
          <TextField.Label htmlFor="username">Username</TextField.Label>
          <TextField.Input
            id="username"
            name="username"
            placeholder="John Doe"
          />
        </TextField.Fieldset>
        <Button align="end">ENTER</Button>
      </Form>
    </PageContainer>
  );
}
