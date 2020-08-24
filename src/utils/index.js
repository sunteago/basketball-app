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
