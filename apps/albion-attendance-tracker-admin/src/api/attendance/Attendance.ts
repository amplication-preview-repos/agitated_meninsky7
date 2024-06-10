import { Battle } from "../battle/Battle";
import { User } from "../user/User";

export type Attendance = {
  attendanceStatus?: "Option1" | null;
  battle?: Battle | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
