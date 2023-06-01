import { z } from "zod";

export const TodoRequestValidator = z.object({
  title: z.string({ required_error: "Field title is required" }),
  complete: z.boolean().optional(),
});

export type TodoType = z.infer<typeof TodoRequestValidator>;
