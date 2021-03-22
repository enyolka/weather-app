import React from "react";

const ForecastItem = ({ data }) => {
  const temperature = Number((data.main.temp - 273).toFixed(0));

  const icon = (
    <img
      className="icon"
      src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
      alt={data.weather[0].main}
    />
  );

  return (
    <li className="forecast__item">
      <span>{data.dt_txt.split(" ")[0]}</span>
      <div>{icon}</div>
      <div className="forecast__temperature">{`${temperature} \xB0C`}</div>
      <div className="forecast__description">{data.weather[0].description}</div>
    </li>
  );
};

export default ForecastItem;
