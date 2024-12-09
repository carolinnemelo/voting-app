import { integer, pgTable, timestamp, varchar} from "drizzle-orm/pg-core";

export const representativesTable = pgTable("representatives", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  representativeName: varchar().notNull(),
  email: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});

export const publicVotesTable = pgTable("publicVotes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});

export type PublicVoteSelect = typeof publicVotesTable.$inferSelect;