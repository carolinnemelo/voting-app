import { db } from "@/db/db"
import { electionsTable } from "@/db/schema"


export function createService() {
  return {
    async getAll() {
      return await db.select().from(electionsTable);
    },
    async createElection(election: Election) {
      console.log(election.electionName);
      await db.insert(electionsTable).values({
        election_name: election.electionName,
      });
    },
  };
}

type Election = {
  electionName: string;
  endsAt?: number;
};
