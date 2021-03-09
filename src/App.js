import React, { useState } from "react";

import Form from "./components/Form";
import Content from "./components/Content";
import request from "./helpers/request";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handleInputChange = (e) => setCity(e.target.value);

  const fetchData = async (e) => {
    e.preventDefault();
    const { data, status } = await request.get(
      `weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (status === 200) {
      setData(data);
    } else {
      console.log(status);
    }
  };

  const weatherMain = data
    ? 700 < data.weather[0].id && data.weather[0].id < 800
      ? "header__fog"
      : "header__" + data.weather[0].main.toLowerCase()
    : "";
  const icon = data ? (
    <img
      className="header__icon"
      src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
      alt={data.weather[0].main}
    />
  ) : null;

  return (
    <div className="wrapper">
      <header className={"header " + weatherMain}>
        <h1 className="header__title">Aplikacja pogodowa</h1>
        {icon}
      </header>
      <Form
        city={city}
        handleInputChange={handleInputChange}
        fetchData={fetchData}
      />
      <Content data={data} />
    </div>
  );
}

export default App;
