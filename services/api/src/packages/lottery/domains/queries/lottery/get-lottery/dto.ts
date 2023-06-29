import { z } from "zod";
import { LotteryDtoSchema } from "../dto/lottery.dto";

export const GetLotteryDtoSchema = z.object({
  lottery: LotteryDtoSchema,
});

export type GetLotteryDto = Readonly<z.infer<typeof GetLotteryDtoSchema>>;
