import { db, InsertPublicVote, publicVotesTable } from "@/db";

export function createService() {
  return {
    async getAll() {
      return await db.select().from(publicVotesTable);
    },

    async createPublicVoteAndVote({
      voterName,
      representativeId,
    }: InsertPublicVote) {
      await db.insert(publicVotesTable).values({
        voterName,
        representativeId,
      });
    },
  };
}
