import { Db } from "@/db";
import { publicVoteSchema } from "./zod-schema";
import { publicVotesTable } from "./schema";
import { IssueService } from "../issue";

export function createPublicVoteService(db: Db, issueService: IssueService) {
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
      
    }
  };
}