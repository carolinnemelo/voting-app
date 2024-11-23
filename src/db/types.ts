import { issuesTable, publicVotesTable } from "./schema";

export type SelectIssue = typeof issuesTable.$inferSelect;

export type InsertIssue = {
  issueName: string;
  choice1: string;
  choice2: string;
};

export type InsertPublicVote = typeof publicVotesTable.$inferInsert;

export type ChoicesTableRows =  {
  id: number;
  choiceName: string;
  issueId: number | null;
}[]