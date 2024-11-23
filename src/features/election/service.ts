import { db } from "@/db/db"
import { electionsTable } from "@/db/schema"


export function createService() {
  return {
    async getAll() {
      return await db.select().from(electionsTable);
    },
    async createElection(electionName: string) {
      await db.insert(electionsTable).values({
        electionName: electionName,
      });
    },
  };
}

