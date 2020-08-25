import React, { useContext } from "react";
import { Table, Grid, Typography, Divider } from "antd";
import classes from "./index.module.css";
import ShotsContext from "../../context/shots/ShotsContext";
import { getPositionFromId } from "../../utils";
import Visualization from "../Visualization";

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
    title: "Posición",
    key: "position",
    dataIndex: "position",
    render: getPositionFromId,
  },
  {
    title: "Encestó?",
    dataIndex: "scored",
    key: "scored",
    render: (scored) =>
      scored ? (
        <span style={{ color: "green" }}>SI</span>
      ) : (
        <span style={{ color: "red" }}>NO</span>
      ),
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

  const sortedShots = shots && [...shots].sort((a, b) => b.date - a.date);

  return (
    <>
      <Title style={{ marginBottom: "2rem", overflowWrap: "normal" }}>
        Últimos tiros
      </Title>
      <Table
        className={classes.Table}
        tableLayout="auto"
        columns={shotsColumns(onDeleteHandler)}
        dataSource={sortedShots}
        size={screens.md ? "large" : "small"}
        locale={{
          emptyText: "No has agregado a ningun tiro aún",
        }}
        pagination={{ pageSize: 5 }}
      />
      <Divider dashed style={{ borderColor: "#001529" }} />
      <Visualization shots={shots} />
    </>
  );
}
