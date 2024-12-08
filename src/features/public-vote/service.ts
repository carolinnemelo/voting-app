import { Db } from "@/db";
import { publicVoteSchema } from "./zod-schema";
import { publicVotesTable } from "./schema";

export function createPublicVoteService(db: Db, getAllRepresentativesEmails: () => Promise<{ email: string; }[]>
) {
  return {
    async savePublicVote(formData: FormData) {
      const validatedFields = publicVoteSchema.safeParse({
        email: formData.get("representativeSelect"),
      });
      if (!validatedFields.success) {
        return;
      }
      
      const { email } = validatedFields.data;
      await db.insert(publicVotesTable).values({
        email,
      });
      
    },

    async getRepresentativesEmails() {
      return await getAllRepresentativesEmails();
    }
  };
}