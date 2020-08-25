import React from "react";
import { Doughnut } from "react-chartjs-2";
import { generateVisual } from "../../utils";
import { Typography } from "antd";

const { Paragraph } = Typography;

export default function Visualization({ shots }) {
  return shots.length > 0 ? (
    <div style={{ maxHeight: "100%" }}>
      <Doughnut
        data={generateVisual(shots)}
        options={{ maintainAspectRatio: false }}
        width={600}
        height={300}
      />
    </div>
  ) : (
    <Paragraph style={{ textAlign: "center", height: 300 }}>
      Cuando agregues tiros aquí se mostraran las visualizaciones
    </Paragraph>
  );
}
