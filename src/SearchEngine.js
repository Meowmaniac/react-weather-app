import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import CurrentDate from "./CurrentDate";
import Forecast from "./Forecast";

export default function SearchEngine(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function fillWeatherData(response) {
    setWeather({
      ready: true,
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
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    if (city.length > 0) {
      let apiKey = "4d7804c077f821fdb9d7810d49de2ace";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(fillWeatherData);
    } else {
      alert("Enter city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

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

  if (weather.ready) {
    return (
      <div className="Search">
        <h1 className="city">{weather.name} Weather</h1>
        <CurrentDate />
        {form}
        <WeatherData weather={weather} />
        <Forecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return <div className="Search">Loading...</div>;
  }
}
