import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const issuesTable = pgTable("issues", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  issueName: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  endTime: timestamp(),
});

export const choicesTable = pgTable("choices", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  choiceName: varchar("choiceName").notNull(),
  issueId: integer("issueId").references(() => issuesTable.id),
});

export const representativesTable = pgTable("representatives", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  representativeName: varchar().notNull(),
  email: varchar().notNull(),
  vote: integer().references(()=> choicesTable.id),
  createdAt: timestamp().defaultNow().notNull(),
});

