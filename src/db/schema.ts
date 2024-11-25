import { integer, text, pgTable, varchar } from "drizzle-orm/pg-core";

export const contractors = pgTable("contractors", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email").notNull(),
});
