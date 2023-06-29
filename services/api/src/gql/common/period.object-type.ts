import { builder } from "@lpc/gql/builder";

export const Period = builder.simpleObject("Period", {
  fields: (t) => ({
    from: t.field({ type: "Date", nullable: true }),
    to: t.field({ type: "Date", nullable: true }),
  }),
});
