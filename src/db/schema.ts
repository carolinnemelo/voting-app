import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("elections", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  election_name: varchar().notNull(),
  timestamp_created: integer().notNull(),
  timestamp_ended: integer().notNull(),
});