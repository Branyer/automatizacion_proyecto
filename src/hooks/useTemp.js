import { useEffect, useState } from "react";

export const useTemp = (getTemp) => {
  const [temp, setTemp] = useState();
  const [time, setTime] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await getTemp();
      setTemp(data.temperatures);
      const timeAux = data.time.map(t => new Date(t))
      setTime(timeAux);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {temp, time, loading};
};
