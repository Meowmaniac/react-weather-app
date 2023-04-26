import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import CurrentDate from "./CurrentDate";
import Forecast from "./Forecast";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let defaultWeather = {
    temperature: 13,
    feelslike: 13,
    description: "scattered clouds",
    humidity: 86,
    wind: 8,
    icon: "http://openweathermap.org/img/wn/03n@2x.png",
    visibility: 10,
    pressure: 1,
    name: "New York",
  };

  function fillWeatherData(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      feelslike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      visibility: response.data.visibility / 1000,
      pressure: Math.round(response.data.main.pressure / 1000),
      name: response.data.name,
      coordinates: response.data.coord,
    });
    console.log(weather);
  }

  function setDefaultCity() {
    let apiKey = "5b0fc91c6e7515d2df886d62bdfd2ab4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(setDefaultWeather);
  }
  function setDefaultWeather(response) {
    defaultWeather = {
      temperature: Math.round(response.data.main.temp),
      feelslike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      visibility: response.data.visibility / 1000,
      pressure: Math.round(response.data.main.pressure / 1000),
      name: response.data.name,
    };
    console.log(defaultWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "5b0fc91c6e7515d2df886d62bdfd2ab4";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(fillWeatherData);
    } else {
      alert("Enter city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  setDefaultCity();

  let form = (
    <form className="search-form" id="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-10">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            id="city-input"
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-light" />
        </div>
      </div>
    </form>
  );

  if (weather) {
    return (
      <div className="Search">
        <h1 className="city">{weather.name} Weather</h1>
        <CurrentDate />
        {form}
        <WeatherData weather={weather} />
        <Forecast />
      </div>
    );
  } else {
    return (
      <div className="Search">
        <h1 className="city">{defaultWeather.name} Weather</h1>
        <CurrentDate />
        {form}
        <WeatherData weather={defaultWeather} />
        <Forecast />
      </div>
    );
  }
}
