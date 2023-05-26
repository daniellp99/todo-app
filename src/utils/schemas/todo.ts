import { z } from "zod";

export const TodoRequestValidator = z.object({
  title: z.string(),
  complete: z.boolean().optional(),
});

export type TodoType = z.infer<typeof TodoRequestValidator>;
