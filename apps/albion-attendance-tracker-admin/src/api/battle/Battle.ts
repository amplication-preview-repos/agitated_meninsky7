import { Attendance } from "../attendance/Attendance";

export type Battle = {
  attendances?: Array<Attendance>;
  battleId: string | null;
  createdAt: Date;
  endTime: Date | null;
  fame: number | null;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
};
