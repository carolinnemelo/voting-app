import { electionsTable } from "./schema";

export type SelectElection = typeof electionsTable.$inferSelect;
export type InsertElection = typeof electionsTable.$inferInsert;