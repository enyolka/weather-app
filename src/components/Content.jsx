import React from "react";

import ForecastItem from "./ForecastItem";
import WeatherItem from "./WeatherItem";

const Content = ({ current, forecast }) => {
  const today = new Date();

  const icon = current ? (
    <img
      className="icon"
      src={`http://openweathermap.org/img/w/${current.weather[0].icon}.png`}
      alt={current.weather[0].main}
    />
  ) : null;

  const forecastList = forecast
    ? forecast.list
        .filter(
          (item) =>
            (new Date(Date.parse(item.dt_txt)).getDate() > today.getDate()) |
              (new Date(Date.parse(item.dt_txt)).getDate() <= today.getDate() &&
                new Date(Date.parse(item.dt_txt)).getMonth() >
                  today.getMonth()) &&
            item.dt_txt.split(" ")[1].split(":")[0] === "12"
        )
        .map((item) => <ForecastItem key={item.dt_txt} data={item} />)
        .slice(0, 4)
    : null;

  return (
    <section className="content">
      {console.log(forecast)}
      {current !== null ? (
        <div className="content__div">
          <div>{icon}</div>
          <h3 className="content__city">
            {`${current.name} (${current.sys.country})`}
          </h3>
          <WeatherItem current={current} />
        </div>
      ) : null}

      <div className="content__div">
        {forecast !== null ? (
          <ul className="forecast">{forecastList}</ul>
        ) : null}
      </div>
    </section>
  );
};

export default Content;
