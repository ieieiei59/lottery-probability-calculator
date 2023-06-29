import { builder } from "@lpc/gql/builder";

export const Node = builder.simpleInterface("Node", {
  fields: (t) => ({
    id: t.id({ nullable: false }),
  }),
});
