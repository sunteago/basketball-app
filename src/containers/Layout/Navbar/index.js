import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

export default function Navbar() {
  const location = useLocation();

  let selectedKey = "1";
  location.pathname === "/add-student" && (selectedKey = "2");
  location.pathname === "/about" && (selectedKey = "3");

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={selectedKey}>
      <Menu.Item key="1">
        <Link to="/">Inicio</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/add-student">Nuevo Alumno</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/about">Acerca</Link>
      </Menu.Item>
    </Menu>
  );
}
