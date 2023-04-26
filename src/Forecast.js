import React from "react";

export default function Forecast(props) {
  /*
  function getForecast(coordinates) {
    let apiKey = "5b0fc91c6e7515d2df886d62bdfd2ab4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {});
  }
  */
  let defaultForecast = [
    {
      day: "Mon",
      icon: "https://openweathermap.org/img/wn/04d@2x.png",
      dayTemp: "14",
      nightTemp: "13",
    },
    {
      day: "Tue",
      icon: "http://openweathermap.org/img/wn/10d@2x.png",
      dayTemp: "14",
      nightTemp: "13",
    },
    {
      day: "Wed",
      icon: "http://openweathermap.org/img/wn/04d@2x.png",
      dayTemp: "14",
      nightTemp: "11",
    },
    {
      day: "Thu",
      icon: "http://openweathermap.org/img/wn/10d@2x.png",
      dayTemp: "11",
      nightTemp: "14",
    },
    {
      day: "Fri",
      icon: "http://openweathermap.org/img/wn/10d@2x.png",
      dayTemp: "17",
      nightTemp: "15",
    },
    {
      day: "Sat",
      icon: "http://openweathermap.org/img/wn/10d@2x.png",
      dayTemp: "16",
      nightTemp: "12",
    },
  ];

  return (
    <div>
      <div className="row forecast-weather" id="forecast">
        {defaultForecast.map(function (dayForecast, index) {
          if (index < 6) {
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
                    {dayForecast.dayTemp}°
                  </span>
                  <span className="forecast-night-temperature">
                    {dayForecast.nightTemp}°
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
}
