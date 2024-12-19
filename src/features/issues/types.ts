import { issuesTable } from "./schema";

export type SelectIssue = typeof issuesTable.$inferSelect;

export type InsertIssue = {
  issueName: string;
  choice1: string;
  choice2: string;
};

export type ChoicesTableRows = {
  id: number;
  choiceName: string;
  issueId: number | null;
}[];

export type Choice = {
  choiceId: number | null;
  choiceName: string | null;
};

export type Issue = {
  issueId: number;
  issueName: string;
  choices: Choice[];
};
