import { z } from "zod";

export const GetLotteryQueryInputSchema = z.object({
  id: z.number().positive(),
});

export type GetLotteryQueryInput = z.infer<typeof GetLotteryQueryInputSchema>;
