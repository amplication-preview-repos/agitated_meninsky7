import { BattleWhereInput } from "./BattleWhereInput";
import { BattleOrderByInput } from "./BattleOrderByInput";

export type BattleFindManyArgs = {
  where?: BattleWhereInput;
  orderBy?: Array<BattleOrderByInput>;
  skip?: number;
  take?: number;
};
