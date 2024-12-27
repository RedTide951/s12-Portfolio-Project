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
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <div className="flex items-center gap-4 justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="card-title font-bold">{city}</h2>
              <img src={conditionIcon} className="max-h-8 max-w-full" alt="" />
            </div>
            <div className="text-sm text-gray-500">{date}</div>
          </div>

          <div className="font-medium text-5xl">{temperature}° </div>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default WeatherWidget;
