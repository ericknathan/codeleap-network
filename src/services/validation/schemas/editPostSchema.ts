import z from "zod";

export const editPostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export type EditPostSchema = z.infer<typeof editPostSchema>;
