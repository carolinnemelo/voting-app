import { z } from "zod";


export const representativeSchema = z.object({
  representativeName: z.string().min(1),
  email: z.string().email(),
});

export const publicVoteSchema = z.object({
  email: z.string().email(),
});