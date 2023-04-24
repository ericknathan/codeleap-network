import { RootState } from "@/redux/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signIn } from "@/redux/slices/authSlice";
import { SignInSchema, signInSchema } from "@/services/validation/schemas";

import { Button, TextField } from "@/components/Form";
import { Heading } from "@/components/Text";

import { Form, PageContainer } from "./styles";

export function SignIn() {
  const navigate = useNavigate();

  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: auth.username,
    },
  });

  const handleSignIn: SubmitHandler<SignInSchema> = ({ username }) => {
    dispatch(signIn(username));
    navigate("/");
  };

  return (
    <PageContainer>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Heading as="h1">Welcome to CodeLeap network!</Heading>
        <TextField.Fieldset>
          <TextField.Label htmlFor="username">Username</TextField.Label>
          <TextField.Input
            id="username"
            placeholder="John Doe"
            {...register("username")}
          />
        </TextField.Fieldset>
        <Button align="end" disabled={!isValid}>
          ENTER
        </Button>
      </Form>
    </PageContainer>
  );
}
