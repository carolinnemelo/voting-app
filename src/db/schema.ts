import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("elections", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  election_name: varchar().notNull(),
  created_at: timestamp().defaultNow().notNull(),
  ends_at: timestamp().notNull(),
});
