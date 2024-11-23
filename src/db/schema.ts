import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("elections", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  electionName: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  endTime: timestamp(),
});

export const choicesTable = pgTable("choices", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  choiceName: varchar("choiceName").notNull(),
  electionId: integer("foreign_electionId").references(()=> electionsTable.id),
});
export const representativesTable = pgTable("representatives", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  representativeName: varchar().notNull(),
  email: varchar().notNull(),
  vote: integer().references(()=> choicesTable.id),
  createdAt: timestamp().defaultNow().notNull(),
});

export const publicVotesTable = pgTable("publicVotes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  voterName: varchar().notNull(),
  representativeId: integer("representativeId").references(()=> representativesTable.id),
  preferenceId: integer("preferenceId").references(()=> choicesTable.id),
});

