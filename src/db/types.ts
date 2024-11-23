import { electionsTable, publicVotesTable } from "./schema";

export type SelectElection = typeof electionsTable.$inferSelect;


export type InsertElection = {
  electionName: string,
  choice1: string,
  choice2: string,
}

export type InsertPublicVote = typeof publicVotesTable.$inferInsert;