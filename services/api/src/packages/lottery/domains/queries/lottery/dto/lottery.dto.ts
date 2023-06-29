import { DeepReadonly } from "utility-types";
import { z } from "zod";

export const LotteryDtoSchema = z.object({
  id: z.number(),
  title: z.string(),
  beginDate: z.date().nullable(),
  endDate: z.date().nullable(),
});

export type LotteryDto = DeepReadonly<z.infer<typeof LotteryDtoSchema>>;
