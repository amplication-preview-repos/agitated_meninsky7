import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { BattleList } from "./battle/BattleList";
import { BattleCreate } from "./battle/BattleCreate";
import { BattleEdit } from "./battle/BattleEdit";
import { BattleShow } from "./battle/BattleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AlbionAttendanceTracker"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="Battle"
          list={BattleList}
          edit={BattleEdit}
          create={BattleCreate}
          show={BattleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
