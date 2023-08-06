export const formatDataset = (x = [], y = []) => {
  return x.map((x, index) => {
    return {
      x: x,
      y: y[index],
    };
  });
};

export const formatData = (temp = [], time = []) => {
  return temp.map((temp, index) => {
    return {
      temperature: temp,
      date: time[index],
    };
  });
};