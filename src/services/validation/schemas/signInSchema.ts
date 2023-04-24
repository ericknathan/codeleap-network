import z from "zod";

export const signInSchema = z.object({
  username: z.string().min(3),
});

export type SignInSchema = z.infer<typeof signInSchema>;
