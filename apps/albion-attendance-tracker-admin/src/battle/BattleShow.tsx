import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BATTLE_TITLE_FIELD } from "./BattleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BattleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BattleID" source="battleId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndTime" source="endTime" />
        <TextField label="Fame" source="fame" />
        <TextField label="ID" source="id" />
        <TextField label="StartTime" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Attendance"
          target="battleId"
          label="Attendances"
        >
          <Datagrid rowClick="show">
            <TextField label="AttendanceStatus" source="attendanceStatus" />
            <ReferenceField
              label="Battle"
              source="battle.id"
              reference="Battle"
            >
              <TextField source={BATTLE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
