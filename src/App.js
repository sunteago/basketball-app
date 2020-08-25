import React from "react";
import "antd/dist/antd.css";

import AppRoutes from "./containers/AppRoutes";
import StudentsState from "./context/students/studentsState";
import UIState from "./context/UI/UIState";

//TODO: ver fondo
function App() {
  return (
    <StudentsState>
      <UIState>
        <AppRoutes />
      </UIState>
    </StudentsState>
  );
}
export default App;
