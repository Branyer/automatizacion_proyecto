import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import zoomPlugin from "chartjs-plugin-zoom";
import { chartStyles } from "../../../styles/chartStyles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export const Chart = ({dataset}) => {
  const { classes } = chartStyles();

  const data = {
    datasets: [
      {
        label: "Temperatura",
        data: dataset,
        borderColor: "#DB4339",
        backgroundColor: "#DB4339",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      zoom: {
        limits: {
          y: { min: -100 },
          x: { min: 0 },
        },
        zoom: {
          wheel: {
            enabled: true, // SET SCROOL ZOOM TO TRUE
          },
        },
        pan: {
          enabled: true,
          mode: "xy",
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        stacked: true,
      },
      y: {
        beginAtZero: true,
        suggestedMin: 0,

        stacked: true,
      },
    },
    zoom: {
      wheel: {
        enabled: true,
      },
    },
  };

  return (
    <div className={classes.chartContent}>
      <Line data={data} options={options}></Line>
    </div>
  );
};
