import React from "react";
import { Menu } from "antd";

export default function Navbar() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">Inicio</Menu.Item>
      <Menu.Item key="2">Agregar Alumno</Menu.Item>
    </Menu>
  );
}
