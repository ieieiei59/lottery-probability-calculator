import { GetLotteriesDto } from "./dto";

export interface GetLotteriesQueryServiceInterface {
  query(ids: []): Promise<GetLotteriesDto>;
}
