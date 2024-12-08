import { integer, pgTable, timestamp, varchar} from "drizzle-orm/pg-core";


export const publicVotesTable = pgTable("publicVotes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});

