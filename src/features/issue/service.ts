import { db } from "@/db/db";
import {
  choicesTable,
  issuesTable,
  representativesTable,
  InsertIssue,
} from "@/db";
import { eq } from "drizzle-orm";

export function createService() {
  return {
    async getAllIssuesAndChoices() {
      return await db
        .select({
          issueId: issuesTable.id,
          issueName: issuesTable.issueName,
          choices: choicesTable.issueId,
        })
        .from(issuesTable)
        .leftJoin(choicesTable, eq(choicesTable.issueId, issuesTable.id))
        .orderBy(issuesTable.id);
    },

    async createIssue({ issueName, choice1, choice2 }: InsertIssue) {
      const row = await db
        .insert(issuesTable)
        .values({
          issueName,
        })
        .returning({ id: issuesTable.id });
      await db.insert(choicesTable).values([
        {
          choiceName: choice1,
          issueId: row[0].id,
        },
        {
          choiceName: choice2,
          issueId: row[0].id,
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
