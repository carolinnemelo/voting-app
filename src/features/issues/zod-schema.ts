import { z } from "zod";

export const issueSchema = z.object({
  issueName: z.string().min(1),
  choice1: z.string().min(1),
  choice2: z.string().min(1),
});
