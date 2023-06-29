import { builder } from "./builder";

import "../packages/lottery/adopters/graphql-adopters";

export const schema = builder.toSchema();
