import { db, publicVotesTable } from "@/db";

export function createService() {
  return {
    async getAll() {
      return await db.select().from(publicVotesTable);
    },
    async createPublicVoteAndVote({
      publicVoteName,
      representativeId,
    }: InsertPublicVote) {},
  };
}
