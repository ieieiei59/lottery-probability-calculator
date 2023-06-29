import type { Connection } from "@planetscale/database";
// import { connect } from "@planetscale/database";
let connection: Connection;

export async function getPlanetScaleConnection(): Promise<Connection> {
  if (!!connection) {
    return connection;
  }
  const { connect } = await eval('import("@planetscale/database")');
  connection = connect({
    host: process.env["PLANET_SCALE_HOST"],
    username: process.env["PLANET_SCALE_USERNAME"],
    password: process.env["PLANET_SCALE_PASSWORD"],
  });

  return connection;
}
