// dont use this

import React, { useEffect, useState } from "react";
import weatherAPI from "../api/weatherAPI";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await weatherAPI();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  const {
    city,
    country,
    temperature,
    conditionText,
    conditionIcon,
    wind,
    humidity,
    date,
  } = weatherData;

  console.log(city, date);

  return (
    <div className="flex items-center gap-4 justify-between">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="card-title font-bold">{city}</h2>
          <div className="font-medium text-xl">{temperature}° </div>
          <img src={conditionIcon} className="max-h-8 max-w-full" alt="" />
        </div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
    </div>
  );
};

export default WeatherWidget;
