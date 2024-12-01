import { db } from "@/db/db";
import {
  choicesTable,
  issuesTable,
  representativesTable,
  InsertIssue,
  Issue,
  RepresentativeInsert,
} from "@/db";
import { eq } from "drizzle-orm";
import { z } from "zod";

const issueSchema = z.object({
  issueName: z.string().min(1, "Name can not be empty"),
  choice1: z.string().min(1, "Can not be empty"),
  choice2: z.string().min(1, "Can not be empty"),
});

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

      const issueWithChoicesArr = rawData.reduce<Issue[]>(
        (acc, currentIssue) => {
          let existingIssue = acc.find(
            (issue) => issue.issueId === currentIssue.issueId
          );
          if (!existingIssue) {
            existingIssue = {
              issueId: currentIssue.issueId,
              issueName: currentIssue.issueName,
              choices: [],
            };

            acc.push(existingIssue);
          }
          if (currentIssue.choiceId !== null) {
            existingIssue.choices.push({
              choiceId: currentIssue.choiceId,
              choiceName: currentIssue.choiceName,
            });
          }
          return acc;
        },
        []
      );
      return issueWithChoicesArr;
    },
    // async createIssue({ issueName, choice1, choice2 }: InsertIssue) {

    async createIssue(formData: FormData) {
      const validatedFields = issueSchema.safeParse({
        issueName: formData.get("issueName"),
        choice1: formData.get("choice1"),
        choice2: formData.get("choice2"),
      });
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        };
      }
      const { issueName, choice1, choice2 } = validatedFields.data
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

    async addRepresentative({
      representativeName,
      email,
    }: RepresentativeInsert) {
      await db.insert(representativesTable).values({
        representativeName: representativeName,
        email,
      });
    },
  };
}
