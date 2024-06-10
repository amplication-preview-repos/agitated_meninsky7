import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BattleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Battles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="BattleID" source="battleId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndTime" source="endTime" />
        <TextField label="Fame" source="fame" />
        <TextField label="ID" source="id" />
        <TextField label="StartTime" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
