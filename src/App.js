import React from "react";
import "antd/dist/antd.css";
import AppRoutes from "./containers/AppRoutes";
import StudentsState from "./context/students/StudentsState";
import ShotsState from "./context/shots/ShotsState";

//TODO: ver fondo
function App() {
  return (
    <StudentsState>
      <ShotsState>
        <AppRoutes />
      </ShotsState>
    </StudentsState>
  );
}
export default App;
