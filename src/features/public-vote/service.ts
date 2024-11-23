import { db, InsertPublicVote, publicVotesTable } from "@/db";

export function createService() {
  return {
    async getAll() {
      return await db.select().from(publicVotesTable);
    },

    async createPublicVoteAndVote({ publicVoteName, myRepresentativeId}: InsertPublicVote) {
      await db.insert(publicVotesTable).values({
        publicVoteName: publicVoteName,
        myRepresentative: myRepresentativeId,
      });
    },
  };
}
