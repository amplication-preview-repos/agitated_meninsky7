import { SortOrder } from "../../util/SortOrder";

export type BattleOrderByInput = {
  battleId?: SortOrder;
  createdAt?: SortOrder;
  endTime?: SortOrder;
  fame?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
