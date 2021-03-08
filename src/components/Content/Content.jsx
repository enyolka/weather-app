import React from "react";

const Content = ({ data }) => {
  return (
    <div className="content">
      {data !== null ? (
        <p>{console.log(data.weather[0].main)}</p>
      ) : (
        <p>Ładuję...</p>
      )}
    </div>
  );
};

export default Content;
