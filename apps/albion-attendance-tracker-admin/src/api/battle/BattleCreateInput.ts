import { AttendanceCreateNestedManyWithoutBattlesInput } from "./AttendanceCreateNestedManyWithoutBattlesInput";

export type BattleCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutBattlesInput;
  battleId?: string | null;
  endTime?: Date | null;
  fame?: number | null;
  startTime?: Date | null;
};
