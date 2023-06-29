import { builder } from "@lpc/gql/builder";
import { Node } from "@lpc/gql/common/node.interface";
import { Period } from "@lpc/gql/common/period.object-type";

export const Lottery = builder.simpleObject("Lottery", {
  interfaces: [Node],
  fields: (t) => ({
    title: t.string({ nullable: false }),
    period: t.field({
      type: Period,
    }),
  }),
});
