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
    async getAll() {
      return await db.select().from(issuesTable);
    },

    async getAllChoices() {
      return await db.select().from(choicesTable);
    },

    async getChoicesByIssueId(id: number) {
      return await db
        .select()
        .from(choicesTable)
        .where(eq(choicesTable.issueId, id));
    },

    async getAllIssuesAndChoices() {
      const rawData = await db
        .select({
          issueId: issuesTable.id,
          issueName: issuesTable.issueName,
          choiceId: choicesTable.id,
          choiceName: choicesTable.choiceName,
        })
        .from(issuesTable)
        .leftJoin(choicesTable, eq(choicesTable.issueId, issuesTable.id))
        .orderBy(issuesTable.id);

      const issueWithChoicesArr = rawData.reduce((acc, currentIssue) => {
        console.log(acc); //[]
        let existingIssue = acc.find(
          (issue: Issue) => issue.issueId === currentIssue.issueId
        );
        if (!existingIssue) {
          existingIssue = {
            issueId: currentIssue.issueId,
            issueName: currentIssue.issueName,
            choices: [],
          };

          acc.push(existingIssue)
        }
        if(currentIssue.choiceId !== null){
          existingIssue.choices.push({
            choiceId: currentIssue.choiceId,
            choiceName: currentIssue.choiceName
          })
        }

      }, []);
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

type Choice = {
  choiceId: number | null;
  choiceName: string | null;
};

type Issue = {
  issueId: number;
  issueName: string;
  choices: Choice[];
};