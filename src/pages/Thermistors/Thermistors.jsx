import React, { useEffect, useState } from "react";
import { Center, Card } from "@mantine/core";
import CardTemp from "./components/CardTemp";
import { useOnValue } from "../../hooks/useOnValue";
import { filterByCurrentDay } from "../../utils/utils";

export const Thermistors = () => {
  const temperatureData = useOnValue("temperatures", "date");
  const [data, setData] = useState({ dataset: [], name: "" });

  useEffect(() => {
    const auxData = filterByCurrentDay(
      temperatureData.map((item) => {
        return {
          x: new Date(item.date.seconds * 1000),
          y: item.temperature,
        };
      })
    );

    setData({
      name: "Temperatura a lo largo del dia",
      dataset: auxData,
    });
  }, [temperatureData]);

  return (
    <div>
      {data.dataset?.length > 0 ? (
        <CardTemp dataset={data.dataset} name={data.name}></CardTemp>
      ) : (
        <Card withBorder h={600} w={"98%"} radius="md" padding="xl">
          <Center h={500}>No Data</Center>
        </Card>
      )}
    </div>
  );
};
