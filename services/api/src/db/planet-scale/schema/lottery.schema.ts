import { date, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const lotterySchema = mysqlTable("lotteries", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 512 }).notNull(),
  beginAt: date("begin_at"),
  endAt: date("end_at"),
});
