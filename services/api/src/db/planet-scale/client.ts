import { drizzle } from "drizzle-orm/planetscale-serverless";
import { getPlanetScaleConnection } from "./connection";

export async function getPlanetScaleClient() {
  return drizzle(await getPlanetScaleConnection());
}
