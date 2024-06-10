import { AttendanceUpdateManyWithoutUsersInput } from "./AttendanceUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  guildId?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
