import React, { useState } from "react";

import Form from "./components/Form";
import Content from "./components/Content";
import request from "./helpers/request";

function App() {
  const [city, setCity] = useState("");
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleInputChange = (e) => setCity(e.target.value);

  const fetchData = async (e) => {
    e.preventDefault();
    const current = await request.get(
      `weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (current.status === 200) {
      setCurrentData(current.data);
    } else {
      console.log(current.status);
    }

    const forecast = await request.get(
      `forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (forecast.status === 200) {
      setForecastData(forecast.data);
    } else {
      console.log(forecast.status);
    }
  };

  const weatherMain = currentData
    ? 700 < currentData.weather[0].id && currentData.weather[0].id < 800
      ? "bg--fog"
      : "bg--" + currentData.weather[0].main.toLowerCase()
    : "";
  const icon = currentData ? (
    <img
      className="icon"
      src={`http://openweathermap.org/img/w/${currentData.weather[0].icon}.png`}
      alt={currentData.weather[0].main}
    />
  ) : null;

  return (
    <div className={"wrapper bg " + weatherMain}>
      <header className={"header"}>
        <h1 className="header__title">Aplikacja pogodowa</h1>
        {icon}
      </header>
      <Form
        city={city}
        handleInputChange={handleInputChange}
        fetchData={fetchData}
      />
      <Content current={currentData} forecast={forecastData} />
    </div>
  );
}

export default App;
