import React from "react";

export default function WeatherData(props) {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="current-weather">
            <span className="current-temperature" id="temp">
              {props.weather.temperature}
            </span>
            <div className="unitwrap">
              <p className="to-celcium">℃</p>
              <p className="feels-like">
                <span className="label">Feels like</span>
                <span className="value" id="feels-like">
                  {props.weather.feelslike}
                </span>
              </p>
            </div>
            <div className="current-icon">
              <img src={props.weather.icon} alt="" id="icon" />
            </div>
          </div>
        </div>
        <div className="col-6 metrics">
          <div className="row justify-content-center">
            <div className="col detailed-metrics">
              <div className="col detailed-metrics">
                <p>Wind</p>
                <p className="value">
                  <span id="wind-speed">{props.weather.wind}</span>
                  <small className="metric">km/h</small>
                </p>
              </div>
            </div>
            <div className="col detailed-metrics">
              <p>Humidity</p>
              <p className="value">
                <span id="humidity">{props.weather.humidity}</span>
                <small className="metric">%</small>
              </p>
            </div>
            <div className="col detailed-metrics">
              <p>Visibility</p>
              <p className="value">
                <span id="visibility">{props.weather.visibility}</span>
                <small className="metric">km</small>
              </p>
            </div>
            <div className="col detailed-metrics">
              <p>Pressure</p>
              <p className="value">
                <span id="pressure">{props.weather.pressure}</span>
                <small className="metric">kPa</small>
              </p>
            </div>
          </div>
        </div>
        <p id="description">{props.weather.description}</p>
      </div>
    </div>
  );
}
