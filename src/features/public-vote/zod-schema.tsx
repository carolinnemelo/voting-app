import { z } from "zod";

export const publicVoteSchema = z.object({
  representativeName: z.string().min(1),
  email: z.string().email(),
});