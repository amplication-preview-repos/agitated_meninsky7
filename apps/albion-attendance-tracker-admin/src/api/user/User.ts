import { Attendance } from "../attendance/Attendance";
import { JsonValue } from "type-fest";

export type User = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  guildId: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
