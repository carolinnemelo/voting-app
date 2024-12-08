import { Db } from "@/db";
import {
  Issue,
} from ".";
import { eq } from "drizzle-orm";
import { issueSchema, representativeSchema } from "./zod-schema";
import { choicesTable, issuesTable, representativesTable } from "./schema";


export function createIssueService(db: Db) {
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

    async validateFields(formData: FormData) {
      const validatedFields = issueSchema.safeParse({
        issueName: formData.get("issueName"),
        choice1: formData.get("choice1"),
        choice2: formData.get("choice2"),
      });
      if (!validatedFields.success) {
        return;
      }
      return validatedFields.data;
    },

    async createIssue(formData: FormData) {
      const validatedFields = await this.validateFields(formData);
      if (!validatedFields) {
        return;
      }
      const { issueName, choice1, choice2 } = validatedFields;
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
    
    async getAllRepresentativesEmails() {
      return await db.select({email: representativesTable.email}).from(representativesTable);
    },

    async addRepresentative(formData: FormData) {
      const validatedFields = representativeSchema.safeParse({
        representativeName: formData.get("representativeName"),
        email: formData.get("email"),
      });
    
      if (!validatedFields.success) {
        console.error(validatedFields.error.flatten().fieldErrors);
        return;
      }
      const { representativeName, email } = validatedFields.data;
      await db.insert(representativesTable).values({
        representativeName: representativeName,
        email,
      });
    },
  };
}
