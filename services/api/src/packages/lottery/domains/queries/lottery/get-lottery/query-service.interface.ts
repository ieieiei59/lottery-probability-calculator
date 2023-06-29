import { GetLotteryDto } from "./dto";

export interface GetLotteryQueryServiceInterface {
  query(id: number): Promise<GetLotteryDto>;
}
