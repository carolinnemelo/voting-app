import { db } from "@/db/db"
import {
  choicesTable,
  electionsTable,
  representativesTable,
} from "@/db/schema";

export function createService() {
  return {
    async getAll() {
      return await db.select().from(electionsTable);
    },
    async createElection({ electionName, choice1, choice2 }) {
      const row = await db.insert(electionsTable).values({
        electionName: electionName,
      }).returning({id:electionsTable.id});
      await db.insert(choicesTable).values([{
        choiceName: choice1,
        electionId: row[0].id
      }, {
        choiceName: choice2,
        electionId: row[0].id
      }]);
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

