import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  attendances?: AttendanceListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  guildId?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
