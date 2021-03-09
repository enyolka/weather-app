import React from "react";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";

const Content = ({ data }) => {
  // const main = `Pogoda: ${data.weather.main} ${data.wather.description} `;
  // const temperature = `Temperatura ${data.main.temp - 373}`;

  return (
    <section className="content">
      {data !== null ? (
        <div>
          <h3 className="content__city">
            {`${data.name} (${data.sys.country})`}
          </h3>
          <span className="content__time content__time--sr">
            <FiSun /> {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
          </span>
          <span className="content__time content__time--ss">
            <RiMoonClearLine />
            {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
          </span>
          <ul className="content__items">
            <li className="content__item">{data.weather[0].description}</li>
            <li className="content__item">{`Temperature ${Number(
              (data.main.temp - 273).toFixed(1)
            )} \xB0C`}</li>
            <li className="content__item">{`Pressure ${data.main.pressure} hPa`}</li>
            <li className="content__item">{`Humidity ${data.main.humidity} %`}</li>
            <li className="content__item">{`Wind ${data.wind.speed} meter/sec`}</li>
            <li className="content__item">{`Cloudiness ${data.clouds.all}%`}</li>
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default Content;
