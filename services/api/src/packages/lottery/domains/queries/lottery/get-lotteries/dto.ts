import { LotteryDto } from "../dto/lottery.dto";

export type GetLotteriesDto = Readonly<{
  lotteries: LotteryDto[];
}>;
