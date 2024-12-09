import { z } from "zod";

export const publicVoteSchema = z.object({
  email: z.string().email(),
});