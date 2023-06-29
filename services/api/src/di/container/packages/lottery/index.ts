import { GetLotteryQueryService } from "@lpc/packages/lotterylottery/infrastructures/queries/lottery/get-lottery/query-service";
import { DI_TOKENS } from "@lpc/di/tokens";
import { container } from "tsyringe";

export async function initPackageDiContainerForLottery() {
  // QueryService
  container.register(
    DI_TOKENS.packages.lottery.GET_LOTTERY_QUERY_SERVICE,
    GetLotteryQueryService
  );
}
