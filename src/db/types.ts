import { electionsTable } from "./schema";

export type SelectElection = typeof electionsTable.$inferSelect;


export type InsertElection = {
  electionName: string,
  choice1: string,
  choice2: string,
}