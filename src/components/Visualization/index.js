import React from "react";
import { Doughnut } from "react-chartjs-2";
import { generateVisual } from "../../utils";

export default function Visualization({ shots }) {
  return (
    shots.length > 0 && (
      <Doughnut data={generateVisual(shots)} width={100} height={50} />
    )
  );
}
