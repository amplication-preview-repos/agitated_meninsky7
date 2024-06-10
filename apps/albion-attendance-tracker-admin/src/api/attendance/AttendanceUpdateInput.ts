import { BattleWhereUniqueInput } from "../battle/BattleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendanceUpdateInput = {
  attendanceStatus?: "Option1" | null;
  battle?: BattleWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
