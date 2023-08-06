import React, { useState, useEffect } from "react";
import { Card, Title as MantineTitle, Center, Flex, Text } from "@mantine/core";
import { Chart } from "./components/Chart";
import { chartStyles } from "../../styles/chartStyles";
import { useOnValue } from "../../hooks/useOnValue";

export const Analytics = () => {
  const { classes } = chartStyles();

  const temperatureData = useOnValue("temperatures", "date");
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataAux = temperatureData.map((item) => {
      return {
        x: new Date(item.date.seconds * 1000),
        y: item.temperature,
      };
    });
    setData(dataAux);
  }, [temperatureData]);

  console.log(data)
  const minTemp =
    data?.length > 0 ? Math.min(...data.map((item) => item.y)) : 0;
  const maxTemp =
    data?.length > 0 ? Math.max(...data.map((item) => item.y)) : 0;
  const prom = data?.length > 0 ? data.reduce((total, item) => total + item.y, 0)/data.length : 0;

  return (
    <div>
      {data?.length > 0 ? (
        <Card withBorder h={600} w={"98%"} radius="md" padding="xl">
          <MantineTitle className={classes.titleCard}>
            Última semana
          </MantineTitle>
          <Flex align={"center"} justify={"space-between"}>
            <Chart dataset={data} />
            <Center style={{ width: "20%" }}>
              <div>
                <Text>Minima: {minTemp}°C</Text>
                <Text>Maxima: {maxTemp}°C</Text>
                <Text>Promedio: {prom?.toFixed(2)}°C</Text>
              </div>
            </Center>
          </Flex>
        </Card>
      ) : (
        <Card withBorder h={600} w={"98%"} radius="md" padding="xl">
          <Center h={500}>No data</Center>
        </Card>
      )}
    </div>
  );
};
