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


