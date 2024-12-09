import { Db } from "@/db";
import { publicVoteSchema, representativeSchema } from "./zod-schema";
import { publicVotesTable, representativesTable } from "./schema";
import { countPublicVotes } from "./logic";

export function createPublicVoteService(db: Db) {
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
    async getPublicVotes() {
     return await db.select().from(publicVotesTable);
      // const votesPerRepresentative = countPublicVotes(publicVotes);
      // const representatives = await this.getAllRepresentatives();
      // const representativesNameAndVoteCount = representatives.map((representative) => {
        

        
      // })

    },
    async getAllRepresentatives() {
      return await db.select().from(representativesTable);
    },
    
    async getAllRepresentativesEmails() {
      return await db.select({email: representativesTable.email}).from(representativesTable);
    },

    async addRepresentative(formData: FormData) {
      const validatedFields = representativeSchema.safeParse({
        representativeName: formData.get("representativeName"),
        email: formData.get("email"),
      });
    
      if (!validatedFields.success) {
        console.error(validatedFields.error.flatten().fieldErrors);
        return;
      }
      const { representativeName, email } = validatedFields.data;
      await db.insert(representativesTable).values({
        representativeName: representativeName,
        email,
      });
    },
  };
}