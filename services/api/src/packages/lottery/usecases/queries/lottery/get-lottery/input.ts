import { z } from "zod";

export const GetLotteryQueryInputSchema = z.object({
  id: z.number().int().positive(),
});

export type GetLotteryQueryInput = z.infer<typeof GetLotteryQueryInputSchema>;
