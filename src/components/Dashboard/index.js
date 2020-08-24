import React, { useContext } from "react";
import { Table, Grid, Typography } from "antd";
import classes from "./index.module.css";
import ShotsContext from "../../context/shots/ShotsContext";
import { getPositionFromId } from "../../utils";

const { Title } = Typography;

const shotsColumns = (onDelete) => [
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
    key: "key",
    render: (shot) => (
      <span onClick={onDelete(shot)} className={classes.DeleteIcon}>
        &times;
      </span>
    ),
  },
];

export default function Dashboard() {
  const screens = Grid.useBreakpoint();

  const { shots, setShots } = useContext(ShotsContext);

  const onDeleteHandler = (shot) => () => {
    setShots(shots.filter((shotItem) => shotItem.key !== shot.key));
  };

  const sortedShots = shots && shots.sort((a, b) => b.date - a.date);

  return (
    <>
      <Title>Últimos tiros</Title>
      <Table
        className={classes.Table}
        tableLayout="auto"
        columns={shotsColumns(onDeleteHandler)}
        dataSource={sortedShots}
        size={screens.md ? "large" : "small"}
        locale={{
          emptyText: "No has agregado a ningun tiro aún",
        }}
      />
    </>
  );
}
