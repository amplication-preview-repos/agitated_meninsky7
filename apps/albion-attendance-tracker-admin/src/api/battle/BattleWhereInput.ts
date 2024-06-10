import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BattleWhereInput = {
  attendances?: AttendanceListRelationFilter;
  battleId?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  fame?: IntNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
};
