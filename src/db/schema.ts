import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("elections", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  electionName: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  endTime: timestamp(),
});

export const representativesTable = pgTable("representatives", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  representativeName: varchar().notNull(),
  email: varchar().notNull(),
  vote: integer().references(()=> choicesTable.id),
  createdAt: timestamp().defaultNow().notNull(),
});

export const publicVotesTable = pgTable("representatives", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  publicVoteName: varchar().notNull(),
  vote: integer().references(()=> representativesTable.id).notNull(),
  preference: integer().references(()=> choicesTable.id),
  election: integer().references(()=> representativesTable.id),
});