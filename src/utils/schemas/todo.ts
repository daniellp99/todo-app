import { z } from "zod";

export const TodoRequestValidator = z.object({
  id: z.string(),
  title: z.string({ required_error: "Field title is required" }),
  complete: z.boolean().optional(),
});

export type TodoType = z.infer<typeof TodoRequestValidator>;
