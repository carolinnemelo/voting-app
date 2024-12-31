import { Db } from "@/db";
import { publicVotesTable, representativesTable } from "./schema";
import {
  countPublicVotes,
  validatePublicVoteFields,
  validateRepresentativeFields,
} from "./logic";

export function createRepresentativeService(db: Db) {
  return {
    async savePublicVote(formData: FormData) {
      const validatedFields = validatePublicVoteFields(formData);
      if (!validatedFields) {
        console.error("Invalid fields");
        return;
      }

      await db.insert(publicVotesTable).values({
        email: validatedFields.email,
      });
    },

    async getVotesByRepresentative() {
      const publicVotes = await db.select().from(publicVotesTable);
      const votesByRepresentativeEmail = countPublicVotes(publicVotes);
      const representatives = await this.getAllRepresentatives();
      const votesByRepresentative = representatives.map((representative) => {
        const vote = votesByRepresentativeEmail.find(
          (vote) => vote.email === representative.email
        );
        return {
          representativeName: representative.representativeName,
          votesCount: vote ? vote.count : 0,
        };
      });
      return votesByRepresentative;
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
      const validatedFields = validateRepresentativeFields(formData);
      if (!validatedFields) {
        console.error("Invalid fields");
        return;
      }

      await db.insert(representativesTable).values({
        representativeName: validatedFields.representativeName,
        email: validatedFields.email,
      });
    },
  };
}
