import "reflect-metadata";

import { createYoga } from "graphql-yoga";
import { createServer } from "http";
// import { builder } from "@lpc/gql/builder";
import { schema } from "@lpc/gql/schema";
import { initDiContainer } from "./di";

async function main() {
  // const schema = builder.toSchema();
  await initDiContainer();
  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();
