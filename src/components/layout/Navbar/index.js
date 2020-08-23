import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

export default function Navbar() {
  const location = useLocation();

  let selectedKey = "1";
  location.pathname === "/add-student" && (selectedKey = "2");

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedKey}>
      <Menu.Item key="1">
        <Link to="/">Inicio</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/add-student">Agregar Alumno</Link>
      </Menu.Item>
    </Menu>
  );
}
