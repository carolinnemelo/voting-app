import { db } from "@/db/db";
import {
  choicesTable,
  electionsTable,
  representativesTable,
} from "@/db/schema";
import { InsertElection } from "@/db/types";
import { eq } from "drizzle-orm";

export function createService() {
  return {
    async getAllElectionsAndChoices() {
      return await db
        .select({
          electionId: electionsTable.id,
          electionName: electionsTable.electionName,
          choices: choicesTable.choiceName,
        })
        .from(electionsTable)
        .leftJoin(choicesTable, eq(choicesTable.electionId, electionsTable.id))
        .orderBy(electionsTable.id);
    },

    async createElection({ electionName, choice1, choice2 }: InsertElection) {
      const row = await db
        .insert(electionsTable)
        .values({
          electionName: electionName,
        })
        .returning({ id: electionsTable.id });
      await db.insert(choicesTable).values([
        {
          choiceName: choice1,
          electionId: row[0].id,
        },
        {
          choiceName: choice2,
          electionId: row[0].id,
        },
      ]);
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
