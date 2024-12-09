import { Db } from "@/db";
import { publicVoteSchema, representativeSchema } from "./zod-schema";
import { publicVotesTable, representativesTable } from "./schema";
import { countPublicVotes } from "./logic";
import { el } from "@faker-js/faker";

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
      const publicVotes = await db.select().from(publicVotesTable);
      const votesPerRepresentative = countPublicVotes(publicVotes);
      const representatives = await this.getAllRepresentatives();
      const representativesNameAndVoteCount = representatives.map(
        (representative) => {
          const vote = votesPerRepresentative.find((vote) => vote.email === representative.email);
          return {
            representativeName: representative.representativeName,
            votesCount: vote ? vote.count : 0,
          };
        }
      );
      return representativesNameAndVoteCount;
    },
    async getAllRepresentatives() {
      return await db.select().from(representativesTable);
    },

    async getAllRepresentativesEmails() {
      return await db
        .select({ email: representativesTable.email })
        .from(representativesTable);
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
