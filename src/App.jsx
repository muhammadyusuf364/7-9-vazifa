import React from "react";
import { useState } from "react";
import Bilimlar from "./components/Bilimlar";
import Education from "./components/Education";
import Lession from "./components/Lession";
import Personal from "./components/Personal";
import getText, { words } from "./getText";

function App() {
  const [lang, setLang] = useState(window.localStorage.getItem("lang") || "uz");
  const handleLang = (e) => {
    window.localStorage.setItem("lang", e.target.value);
    setLang(e.target.value);
  };
  const [formValues, setFormValues] = useState({
    fio: "",
  });
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div>
        <div className="top-header">
          <h3 className="title">{getText(words.anketa__title)}</h3>
          <select onChange={handleLang}>
            <option value="uz">UZB</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Personal
          formValues={formValues}
          handleChange={handleChange}
        ></Personal>
        <Education></Education>
        <Lession></Lession>
        <Bilimlar></Bilimlar>
        <div style={{textAlign :"center",marginTop:"20px"}}>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
