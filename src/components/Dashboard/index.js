import React, { useContext } from "react";
import { Table, Grid } from "antd";
import classes from "./index.module.css";
import ShotsContext from "../../context/shots/ShotsContext";
import { getPositionFromId } from "../../utils";

const shotsColumns = [
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
    render: getPositionFromId,
  },
  {
    title: "Borrar",
    key: "action",
    render: () => <span className={classes.DeleteIcon}>&times;</span>,
  },
];

export default function Dashboard() {
  const screens = Grid.useBreakpoint();

  const { shots } = useContext(ShotsContext);

  return (
    <Table
      className={classes.Table}
      tableLayout="auto"
      columns={shotsColumns}
      dataSource={shots}
      size={screens.md ? "large" : "small"}
    />
  );
}
