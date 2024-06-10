import { BattleWhereUniqueInput } from "./BattleWhereUniqueInput";
import { BattleUpdateInput } from "./BattleUpdateInput";

export type UpdateBattleArgs = {
  where: BattleWhereUniqueInput;
  data: BattleUpdateInput;
};
