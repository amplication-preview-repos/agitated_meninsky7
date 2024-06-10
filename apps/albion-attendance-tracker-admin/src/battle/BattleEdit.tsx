import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";

export const BattleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <TextInput label="BattleID" source="battleId" />
        <DateTimeInput label="EndTime" source="endTime" />
        <NumberInput step={1} label="Fame" source="fame" />
        <DateTimeInput label="StartTime" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
