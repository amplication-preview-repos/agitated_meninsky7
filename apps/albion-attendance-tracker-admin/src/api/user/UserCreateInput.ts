import { AttendanceCreateNestedManyWithoutUsersInput } from "./AttendanceCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  guildId?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
