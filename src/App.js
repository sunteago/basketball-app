import React from "react";
import "antd/dist/antd.css";
import AppRoutes from "./containers/AppRoutes";
import StudentsState from "./context/students/StudentsState";

//TODO: ver fondo
function App() {
  return (
    <StudentsState>
      <AppRoutes />
    </StudentsState>
  );
}
export default App;
