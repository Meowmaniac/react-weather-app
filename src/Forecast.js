import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function getForecast(coordinates) {
    let apiKey = "a4b05cc054c72269d58085d2ff57209d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    //let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastRequest);
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function handleForecastRequest(response) {
    // forecast array is a 40 elements of weather data for every 3 hours during 5 days
    // using 15:00 timestamp for day temperature and 0:00 for night
    let daysForecast = [];
    for (let index = 0; index < 40; index += 8) {
      daysForecast.push({
        day: formatDay(response.data.list[index].dt),
        nightTemperature: Math.round(response.data.list[index + 1].main.temp),
        dayTemperature: Math.round(response.data.list[index + 5].main.temp),
        icon: `http://openweathermap.org/img/wn/${response.data.list[index].weather[0].icon}@2x.png`,
      });
    }
    setForecast(daysForecast);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="row forecast-weather" id="forecast">
          {forecast.map(function (dayForecast, index) {
            if (index < 5) {
              return (
                <div key={index} className="col day-forecast">
                  <div className="forecast-date">{dayForecast.day}</div>
                  <img
                    className="day-forecast-img"
                    src={dayForecast.icon}
                    alt=""
                  />
                  <div className="forecast-temperatures">
                    <span className="forecast-day-temperature">
                      {dayForecast.dayTemperature}°
                    </span>
                    <span className="forecast-night-temperature">
                      {dayForecast.nightTemperature}°
                    </span>
                  </div>
                </div>
              );
            } else {
              return <div></div>;
            }
          })}
        </div>
      </div>
    );
  } else {
    getForecast(props.coordinates);

    return null;
  }
}
