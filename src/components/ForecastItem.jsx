import React from "react";

const ForecastItem = ({ data }) => {
  return <li className="forecast__item">{data.dt_txt}</li>;
};

export default ForecastItem;
