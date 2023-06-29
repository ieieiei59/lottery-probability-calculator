import type { Config } from "drizzle-kit";

const db = {
  username: process.env["PLANET_SCALE_USERNAME"] ?? "user",
  password: process.env["PLANET_SCALE_PASSWORD"] ?? "password",
  host: process.env["PLANET_SCALE_HOST"] ?? "host",
  name: process.env["PLANET_SCALE_DB_NAME"] ?? "name",
} as const;
const connectionString = `mysql://${db.username}:${db.password}@${db.host}/${db.name}?ssl={"rejectUnauthorized":true}`;

export default {
  schema: "./src/db/planet-scale/schema/*.schema.ts",
  out: "./drizzle/planet-scale",
  driver: "mysql2",
  dbCredentials: {
    connectionString,
  },
} satisfies Config;
