import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../components";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import { FiSearch } from "react-icons/fi";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("Kolkata");

  const MY_API_KEY = import.meta.env.VITE_API_KEY;


  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city) {
        try {
          const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_API_KEY}&units=metric`
          );
          const forecastResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${MY_API_KEY}&units=metric`
          );
          setWeatherData(weatherResponse.data);
          setForecastData(forecastResponse.data);
          console.log("Weather data received:", weatherResponse.data);
          console.log("Forecast data received:", forecastResponse.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };
    fetchWeatherData();
  }, [city]);

  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString("en-US", options);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setCity(e.target.value);
    }
  };

  const handleSearchClick = () => {
    const inputElement = document.getElementById("city-search");
    if (inputElement) {
      setCity(inputElement.value);
    }
  };

  const currentWeather = weatherData
    ? [
        {
          icon: "💧",
          label: "Humidity",
          value: `${weatherData.main.humidity}%`,
        },
        {
          icon: "🌡️",
          label: "Feels Like",
          value: `${weatherData.main.feels_like}°C`,
        },
        {
          icon: "☀️",
          label: "UV Index",
          value: weatherData.main.uvi ? weatherData.main.uvi : "N/A",
        },
        {
          icon: "👁️",
          label: "Visibility",
          value: `${weatherData.visibility / 1000} km`,
        },
        {
          icon: "🌬️",
          label: "Wind Speed",
          value: `${weatherData.wind.speed} km/h`,
        },
      ]
    : [];

  const uniqueDays = new Set();

  return (
    <div className="m-2 md:m-10 md:p-10 p-2 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Weather" />
      <div className="flex justify-end">
        <AutoCompleteComponent
          id="city-search"
          placeholder="Search for a city..."
          change={handleCityChange}
          allowCustom={true}
          onKeyUp={handleSearchSubmit}
          width={"200px"}
          color="primary"
          className="text-lg text-gray-600 dark:text-gray-400 border-none pr-4"
        />
        <FiSearch
          className="text-xl text-gray-400 mt-1 z-0 mr-4 cursor-pointer"
          onClick={handleSearchClick}
        />
      </div>
      <div>
        {weatherData ? (
          <div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-white flex flex-col md:flex-row">
                <h2 className="text-4xl font-semibold text-gray-400">
                  <i className="fas fa-temperature-full"></i>
                  {weatherData.main.temp}°C
                </h2>
                <div className="ml-2 text-xl text-gray-600">
                  <ul className="list-none">
                    <li>Description: {weatherData.weather[0].description}</li>
                    <p className="text-lg">
                      Pressure: {weatherData.main.pressure}hPa
                    </p>
                    <li>Sunrise: {formatTime(weatherData.sys.sunrise)}</li>
                    <li className="text-lg">
                      Sunset: {formatTime(weatherData.sys.sunset)}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-gray-500 text-center md:text-left">
                <h2 className="capitalize text-3xl text-semibold text-gray-600">
                  {city}
                </h2>
                <p className="text-lg">Date: {formatDate(weatherData.dt)}</p>
                <p className="text-lg">Time: {formatTime(weatherData.dt)}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 mb-4 w-full items-center justify-center">
              {currentWeather.map((detail, index) => (
                <div
                  key={index}
                  className="weather-card p-6 border rounded-lg shadow-md flex flex-col items-center space-x-4 hover:drop-shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="icon text-4xl mb-2">{detail.icon}</div>
                  <div className="text-value text-xl">{detail.value}</div>
                  <div className="text-label font-bold">{detail.label}</div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-600">
                Few More Day Forecast
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-2 mt-4 w-full">
                {forecastData &&
                  forecastData.list
                    .filter((forecast) => {
                      const day = formatDay(forecast.dt);
                      if (uniqueDays.has(day)) return false; // Skip duplicate day
                      uniqueDays.add(day); // Track unique day
                      return true;
                    })
                    .slice(0, 7) // Limit to 7 unique days
                    .map((forecast, index) => (
                      <div
                        key={index}
                        className="weather-card p-6 border rounded-lg cursor-pointer shadow-md flex flex-col items-center space-x-4 hover:drop-shadow-xl transform transition-transform duration-300 hover:scale-105"
                      >
                        <div className="text-section text-center">
                          <div className="text-label font-bold">
                            {formatDay(forecast.dt)}
                          </div>
                          <div className="text-value text-xl">
                            {forecast.main.temp}°C
                          </div>
                          <div className="icon text-4xl">
                            <img
                              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                              alt="Weather Icon"
                              className="inline-block w-28 h-20"
                            />
                          </div>
                          <div className="text-label font-bold">
                            {forecast.weather[0].description}
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No weather data available.</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
