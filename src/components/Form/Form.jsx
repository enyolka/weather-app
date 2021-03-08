import React from "react";

const Form = ({ city, handleInputChange, fetchData }) => {
  return (
    <form className="form" onSubmit={fetchData}>
      <label className="form__label">
        Podaj miasto:
        <input
          className="form__input"
          type="text"
          calue={city}
          placeholder="Wpisz"
          onChange={handleInputChange}
        />
      </label>
      <button className="form__btn btn" type="submit">
        Szukaj
      </button>
    </form>
  );
};

export default Form;
