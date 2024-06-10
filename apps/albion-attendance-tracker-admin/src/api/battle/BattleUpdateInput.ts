import { AttendanceUpdateManyWithoutBattlesInput } from "./AttendanceUpdateManyWithoutBattlesInput";

export type BattleUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutBattlesInput;
  battleId?: string | null;
  endTime?: Date | null;
  fame?: number | null;
  startTime?: Date | null;
};
