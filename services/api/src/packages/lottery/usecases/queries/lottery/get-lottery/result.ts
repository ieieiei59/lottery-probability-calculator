import { z } from "zod";
import { LotterySchema } from "../shared-schema/lottery.schema";
import { GetLotteryDtoSchema } from "@lpc/packages/lotterylottery/domains/queries/lottery/get-lottery/dto";

export const GetLotteryQueryResultSchema = z.object({
  lottery: LotterySchema.required(),
});

export type GetLotteryQueryResult = z.infer<typeof GetLotteryQueryResultSchema>;

export const convertDtoToQueryResult =
  GetLotteryDtoSchema.transform<GetLotteryQueryResult>((dto) => {
    const rawData: GetLotteryQueryResult = {
      lottery: {
        id: dto.lottery.id,
        title: dto.lottery.title,
        period: {
          from: dto.lottery.beginDate,
          to: dto.lottery.endDate,
        },
      },
    };
    return GetLotteryQueryResultSchema.parse(rawData);
  });
