import React from "react";

const Form = ({ city, handleInputChange, fetchData }) => {
  return (
    <section className="form">
      <form className="form__box" onSubmit={fetchData}>
        <input
          className="form__input"
          type="text"
          calue={city}
          placeholder="Enter city..."
          onChange={handleInputChange}
        />
        <button className="form__btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default Form;
