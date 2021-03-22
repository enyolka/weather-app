import React from "react";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";

const WeatherItem = ({ current }) => {
  const sunrise = new Date(current.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(current.sys.sunset * 1000).toLocaleTimeString();
  const temperature = Number((current.main.temp - 273).toFixed(0));

  return (
    <div className="content__div weather">
      <div>
        <span className="weather__time weather__time--sr">
          <FiSun /> {sunrise}
        </span>
        <span className="weather__time weather__time--ss">
          <RiMoonClearLine />
          {sunset}
        </span>
      </div>

      <ul className="weather__items">
        <li className="weather__item weather__item--temperature">{`${temperature} \xB0C`}</li>
        <li className="weather__item weather__item--description">
          {current.weather[0].description}
        </li>
        <li className="weather__item">{`Pressure ${current.main.pressure} hPa`}</li>
        <li className="weather__item">{`Humidity ${current.main.humidity} %`}</li>
        <li className="weather__item">{`Wind ${current.wind.speed} meter/sec`}</li>
        <li className="weather__item">{`Cloudiness ${current.clouds.all}%`}</li>
      </ul>
    </div>
  );
};

export default WeatherItem;
