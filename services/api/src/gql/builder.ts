import SchemaBuilder from "@pothos/core";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import { DateResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
  };
}>({
  plugins: [SimpleObjectsPlugin],
});

builder.addScalarType("Date", DateResolver, {});

builder.queryType({});
// builder.mutationType({});
// builder.subscriptionType({});
