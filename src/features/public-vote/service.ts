import { Db } from "@/db";
import { publicVoteSchema } from "./zod-schema";

export function createPublicVoteService(db: Db) {
  return {
    async savePublicVote(formData: FormData) {
      const validatedFields = publicVoteSchema.safeParse({
        email: formData.get("issueName"),
        choice1: formData.get("choice1"),
      });

      if (!validatedFields.success) {
        return;
      }

      
    }
  };
}