import React from "react";
import { Table, Grid } from "antd";
import classes from "./index.module.css";

const columns = [
  {
    title: "Tirador",
    dataIndex: "student",
    key: "student",
    render: (text) => text,
  },
  {
    title: "Distancia",
    dataIndex: "distance",
    key: "distance",
    render: (dis) => `${dis} mts`,
  },
  {
    title: "Encestó?",
    dataIndex: "scored",
    key: "scored",
    render: (scored) => `${scored ? "SI" : "NO"}`,
  },
  {
    title: "Posición",
    key: "position",
    dataIndex: "position",
  },
  {
    title: "Borrar",
    key: "action",
    render: () => <span className={classes.DeleteIcon}>&times;</span>,
  },
];

const data = [
  {
    key: "1",
    student: "John Brown",
    distance: 2,
    scored: false,
    position: "developer",
  },
  {
    key: "2",
    student: "Jim Green",
    distance: 4,
    scored: true,
    position: "loser",
  },
  {
    key: "3",
    student: "Joe Black",
    distance: 7,
    scored: true,
    position: "cool",
  },
];

export default function Dashboard() {
  const screens = Grid.useBreakpoint();
  return (
    <Table
      className={classes.Table}
      tableLayout="auto"
      columns={columns}
      dataSource={data}
      size={screens.md ? "large" : "small"}
    />
  );
}
