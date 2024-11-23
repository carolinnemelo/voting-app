import { db } from "@/db/db"
import { electionsTable, representativesTable } from "@/db/schema"


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
      async getAllRepresentatives() {
      return await db.select().from(representativesTable);
    },
    async addRepresentative(name: string, email: string) {
      await db.insert(representativesTable).values({
        representativeName: name,
        email,
      });
    },
  };
}

