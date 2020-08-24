export const formatTime = (date) => {
  date = new Date(date).toLocaleString("es-AR").slice(0, -3);
  const year = date.indexOf("/20");
  return `${date.slice(year + 5)}hs - ${date.slice(0, year)}`;
};
