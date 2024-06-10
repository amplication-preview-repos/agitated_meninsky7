import { BattleWhereUniqueInput } from "../battle/BattleWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendanceWhereInput = {
  attendanceStatus?: "Option1";
  battle?: BattleWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
