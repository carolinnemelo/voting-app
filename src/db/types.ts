import { IssuesTable, publicVotesTable } from "./schema";

export type SelectElection = typeof IssuesTable.$inferSelect;

export type InsertElection = {
  issueName: string;
  choice1: string;
  choice2: string;
};

export type InsertPublicVote = typeof publicVotesTable.$inferInsert;
