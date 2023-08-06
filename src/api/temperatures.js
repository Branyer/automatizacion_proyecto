import axios from "axios";

export const url = "https://api.open-meteo.com/v1/";

const client = axios.create({
  baseURL: `${url}`,
  timeout: 100000,
  headers: {
    "content-type": "application/json",
  },
  withCredentials: false,
});

export const getDailyTemp = async () => {
  try {
    const response = await client.get(
      "forecast?latitude=7.77567&longitude=-72.22048&daily=temperature_2m_max&timezone=auto&past_days=7&forecast_days=1"
    );
    return {temperatures: response.data.daily.temperature_2m_max, time: response.data.daily.time};
  } catch (error) {}
};

export const getHourlyTemp = async () => {
    try {
      const response = await client.get(
        "forecast?latitude=7.77567&longitude=-72.22048&hourly=temperature_2m&timezone=auto&past_days=14&forecast_days=1"
      );
      return {temperatures: response.data.hourly.temperature_2m, time: response.data.hourly.time};
    } catch (error) {}
  };
