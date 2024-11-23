import { db } from "@/db/db";
import { issuesTable, IssuesTable, representativesTable } from "@/db/schema";
import { InsertElection } from "@/db/types";
import { eq } from "drizzle-orm";

export function createService() {
  return {
    async getAllElectionsAndChoices() {
      return await db
        .select({
          electionId: IssuesTable.id,
          electionName: IssuesTable.issueName,
          choices: issuesTable.choiceName,
        })
        .from(IssuesTable)
        .leftJoin(issuesTable, eq(issuesTable.electionId, IssuesTable.id))
        .orderBy(IssuesTable.id);
    },

    async createElection({ electionName, choice1, choice2 }: InsertElection) {
      const row = await db
        .insert(IssuesTable)
        .values({
          electionName: electionName,
        })
        .returning({ id: IssuesTable.id });
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
