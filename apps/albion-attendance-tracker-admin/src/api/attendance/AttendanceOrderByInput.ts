import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  attendanceStatus?: SortOrder;
  battleId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
