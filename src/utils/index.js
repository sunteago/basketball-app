export const formatTime = (date) => {
  date = new Date(date).toLocaleString("es-AR").slice(0, -3);
  const year = date.indexOf("/20");
  return `${date.slice(year + 5)}hs - ${date.slice(0, year)}`;
};

export const shotPositions = [
  {
    position: "center",
    positionName: "Centro",
    key: Math.random(),
  },
  {
    position: "leftTip",
    positionName: "Punta izquierda",
    key: Math.random(),
  },
  {
    position: "rightTip",
    positionName: "Punta derecha",
    key: Math.random(),
  },
  {
    position: "leftSide",
    positionName: "Lado izquierdo",
    key: Math.random(),
  },
  {
    position: "rightSide",
    positionName: "Lado derecho",
    key: Math.random(),
  },
];

export const getPositionFromId = (posId) => {
  return (
    posId && shotPositions.find((pos) => pos.position === posId).positionName
  );
};

const visualizationColors = [
  "#8885c4",
  "#ff7c11",
  "#001529",
  "#7fb285",
  "#000066",
  "#d3d0cb",
  "#06bee1",
  "#941b0c",
  "#685044",
  "#0cce6b",
  "#625834",
  "#BF1363",
];

const getVisualData = (shots) => {
  const shotsData = {};
  shots.forEach((shot) => {
    const { student } = shot;
    if (!shotsData[student]) {
      shotsData[student] = shot.scored ? 1 : 0;
    } else {
      if (shotsData[student] && shot.scored) {
        shotsData[student]++;
      }
    }
  });
  return shotsData;
};

export const generateVisual = (shots) => {
  const visualData = getVisualData(shots);
  const students = Object.keys(visualData);
  const colors = visualizationColors.slice(0, students.length);
  return {
    labels: students,
    datasets: [
      {
        data: Object.values(visualData),
        backgroundColor: colors.map((color) => color + "D9"),
        hoverBackgroundColor: colors,
      },
    ],
  };
};

export const addStudentRules = (field) => [
  {
    transform: (val = "") => val.trim(),
    message: `El ${field} es inválido o demasiado corto!`,
    required: true,
    min: 5,
    max: 15,
    whitespace: true,
  },
];

export const addShotRules = (field) => [
  {
    message: `Seleccione ${field}`,
    required: true,
  },
];
