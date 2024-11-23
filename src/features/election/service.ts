import { db } from "@/db/db";
import {  issuesTable, representativesTable } from "@/db/schema";
import { InsertElection } from "@/db/types";
import { eq } from "drizzle-orm";

export function createService() {
  return {
    async getAllElectionsAndChoices() {
      return await db
        .select({
          electionId: issuesTable.id,
          electionName: issuesTable.issueName,
          choices: issuesTable.choiceName,
        })
        .from(issuesTable)
        .leftJoin(issuesTable, eq(issuesTable.electionId, issuesTable.id))
        .orderBy(issuesTable.id);
    },

    async createElection({ issueName, choice1, choice2 }: InsertElection) {
      const row = await db
        .insert(issuesTable)
        .values({
          issueName,
        })
        .returning({ id: issuesTable.id });
      await db.insert(issuesTable).values([
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
