import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("elections", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  electionName: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  endsAt: timestamp(),
});

export const representativesTable = pgTable("representatives", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  election_name: varchar().notNull(),
  created_at: timestamp().defaultNow().notNull(),
  endsAt: timestamp(),
});