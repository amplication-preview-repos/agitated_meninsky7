import { Battle as TBattle } from "../api/battle/Battle";

export const BATTLE_TITLE_FIELD = "battleId";

export const BattleTitle = (record: TBattle): string => {
  return record.battleId?.toString() || String(record.id);
};
