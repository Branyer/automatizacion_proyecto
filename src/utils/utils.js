export const filterByCurrentDay = (data) => {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  }

  const currentDateAux = new Date();
  const currentDate = currentDateAux.toISOString().slice(0, 10);

  const filteredData = data.filter((dato) => {
    const date = new Date(dato.x);
    const day = date.toISOString().slice(0, 10);
    return day === currentDate;
  });

  return filteredData;
};
