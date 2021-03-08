import React, { useEffect, useState } from "react";

import Form from "./components/Form/Form";
import Content from "./components/Content/Content";
import request from "./helpers/request";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handleInputChange = (e) => setCity(e.target.value);

  const fetchData = async (e) => {
    e.preventDefault();
    const { data, status } = await request.get(
      `weather?q=${city}&appid=592c75d822336afdae80f54fdbbb4bcf`
    );
    if (status === 200) {
      setData(data);
    } else {
      console.log(status);
    }
  };

  return (
    <div className="App">
      <header>Aplikacja pogodowa</header>
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
