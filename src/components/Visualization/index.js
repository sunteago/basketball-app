import React from "react";
import { Doughnut } from "react-chartjs-2";
import classes from "./index.module.css";
import { generateVisual } from "../../utils";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Visualization({ shots }) {
  return shots.length > 0 ? (
    <>
      <Title className={classes.Title}>Alumnos con mas tiros</Title>
      <div className={classes.DoughContainer}>
        <Doughnut
          data={generateVisual(shots)}
          options={{ maintainAspectRatio: false }}
          width={600}
          height={300}
        />
      </div>
    </>
  ) : (
    <Paragraph className={classes.NoShotsMessage}>
      Cuando agregues tiros aquí se mostraran las visualizaciones
    </Paragraph>
  );
}
