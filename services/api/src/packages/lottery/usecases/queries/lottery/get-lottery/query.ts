import { GetLotteryQueryServiceInterface } from "@lpc/packages/lotterylottery/domains/queries/lottery/get-lottery/query-service.interface";
import { GetLotteryQueryInput } from "./input";
import { GetLotteryQueryResult, convertDtoToQueryResult } from "./result";
import { inject, injectable } from "tsyringe";
import { DI_TOKENS } from "@lpc/di";

class ResourceNotFoundError extends Error {
  public readonly parent: Error | null;

  constructor(e: Error | null = null) {
    super("resource not found");
    this.parent = e;
  }
}

@injectable()
export class GetLotteryQuery {
  constructor(
    @inject(DI_TOKENS.packages.lottery.GET_LOTTERY_QUERY_SERVICE)
    private readonly queryService: GetLotteryQueryServiceInterface
  ) {}
  async execute(input: GetLotteryQueryInput): Promise<GetLotteryQueryResult> {
    try {
      const dto = await this.queryService.query(input.id);

      return convertDtoToQueryResult.parse(dto);
    } catch (e) {
      console.log(e);
      if (e instanceof Error) {
        throw new ResourceNotFoundError(e);
      }
      throw new ResourceNotFoundError();
    }
  }
}
