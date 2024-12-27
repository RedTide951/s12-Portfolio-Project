import axios from "axios";
import React from "react";

export async function weatherAPI() {
  const IP_API_URL = "http://ip-api.com/json/";

  function getLocalDate(language = "en-US") {
    const currentDate = new Date();

    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat(language, options).format(
      currentDate
    );

    return formattedDate;
  }

  let city;
  let country;
  let temperature;
  let conditionText;
  let conditionIcon;
  let wind;
  let humidity;
  let date = getLocalDate();

  try {
    const response = await axios.get(IP_API_URL);
    city = response.data.city;
  } catch (error) {
    console.error("Error fetching the location data", error);
  }

  const WEATHER_API_URL = `http://api.weatherapi.com/v1/current.json?key=b7ede0e00ce14bcb8b2202948242712&q=${city}&aqi=no`;

  try {
    const response = await axios.get(WEATHER_API_URL);
    country = response.data.location.country;
    temperature = response.data.current.temp_c;
    conditionText = response.data.current.condition.text;
    conditionIcon = response.data.current.condition.icon;
    wind = response.data.current.wind_kph;
    humidity = response.data.current.humidity;
  } catch (error) {
    console.error("Error fetching the weather data", error);
  }

  return {
    city,
    country,
    temperature,
    conditionText,
    conditionIcon,
    wind,
    humidity,
    date,
  };
}

export default weatherAPI;
